import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-cocoon-charcoal mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full px-4 py-3
          rounded-field
          border border-cocoon-sand
          bg-white
          text-cocoon-charcoal
          placeholder:text-cocoon-fog
          shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]
          focus:outline-none focus:ring-2 focus:ring-cocoon-sage focus:border-transparent
          transition-all duration-200
          disabled:bg-cocoon-porcelain disabled:cursor-not-allowed
          ${error ? 'border-red-400 focus:ring-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
