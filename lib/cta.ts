/**
 * CTA Manager - De-duplication and priority system for CTAs
 */

export interface CTARegistration {
  id: string;
  placementId: string;
  priority: number;
  element: HTMLElement | null;
  setVisible: (visible: boolean) => void;
}

// Priority levels (higher = more important)
export const CTA_PRIORITIES: Record<string, number> = {
  'sticky-global': 100,
  'home-hero': 90,
  'owners-hero': 90,
  'home-owner-banner': 85,
  'section-cta': 70,
  'owner-banner': 60,
  'home-owners-section': 65,
  'footer': 50,
};

class CTAManager {
  private registrations = new Map<string, CTARegistration>();
  private observer: IntersectionObserver | null = null;
  private visibleCTAs = new Set<string>();

  constructor() {
    if (typeof window !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('data-cta-id');
            if (!id) return;

            if (entry.isIntersecting) {
              this.visibleCTAs.add(id);
            } else {
              this.visibleCTAs.delete(id);
            }
          });

          this.updateVisibility();
        },
        {
          threshold: 0.1,
          rootMargin: '0px',
        }
      );
    }
  }

  register(registration: CTARegistration) {
    this.registrations.set(registration.id, registration);

    if (this.observer && registration.element) {
      this.observer.observe(registration.element);
    }

    this.updateVisibility();
  }

  unregister(id: string) {
    const registration = this.registrations.get(id);
    if (registration && this.observer && registration.element) {
      this.observer.unobserve(registration.element);
    }
    this.registrations.delete(id);
    this.visibleCTAs.delete(id);
    this.updateVisibility();
  }

  private updateVisibility() {
    // Find the highest priority visible CTA
    let highestPriority = -1;
    let highestPriorityId: string | null = null;

    this.visibleCTAs.forEach((id) => {
      const registration = this.registrations.get(id);
      if (registration && registration.priority > highestPriority) {
        highestPriority = registration.priority;
        highestPriorityId = id;
      }
    });

    // Update visibility for all registered CTAs
    this.registrations.forEach((registration, id) => {
      const isVisible = this.visibleCTAs.has(id);
      const shouldShow = isVisible && id === highestPriorityId;
      registration.setVisible(shouldShow);
    });
  }

  trackClick(placementId: string, variant: string, copy: string, path: string) {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cta:revenue-click', {
          detail: { placementId, variant, copy, path },
        })
      );
    }
  }
}

export const ctaManager = new CTAManager();

export function getPriority(placementId: string): number {
  return CTA_PRIORITIES[placementId] || 50;
}
