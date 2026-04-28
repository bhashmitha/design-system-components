import React from 'react';
import { tokens } from '../tokens';

const Button = ({
  variant = 'primary',
  label,
  disabled = false,
  ...props
}) => {

  const variantStyles = {
    primary: {
      backgroundColor: tokens.colorPrimary,
      color: tokens.colorBackground,
      border: 'none',
    },
    secondary: {
      backgroundColor: tokens.colorBackground,
      color: tokens.colorPrimary,
      border: `1px solid ${tokens.colorPrimary}`,
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const buttonStyle = {
    ...currentVariant,
    padding: tokens.paddingButton,
    borderRadius: tokens.borderRadius,
    fontSize: tokens.fontSizeBase,
    fontWeight: tokens.fontWeight,
    opacity: disabled ? tokens.opacity : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;