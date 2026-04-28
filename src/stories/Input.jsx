import React, { useState } from 'react';
import { tokens } from '../tokens';

const Input = ({
  variant = 'default',
  placeholder,
  errorMessage,
  label,
  disabled = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const activeVariant = focused && variant === 'default' ? 'focused' : variant;

  const variantStyles = {
    default: {
      backgroundColor: tokens.colorBackground,
      color: tokens.colorText,
      border: `1px solid ${tokens.colorBorder}`,
    },
    focused: {
      backgroundColor: tokens.colorBackground,
      color: tokens.colorText,
      border: `1px solid ${tokens.colorPrimary}`,
    },
    error: {
      backgroundColor: tokens.colorBackground,
      color: tokens.colorText,
      border: `1px solid ${tokens.colorError}`,
    },
  };

  const currentVariant = variantStyles[activeVariant] || variantStyles.default;

  const labelStyle = {
    fontSize: tokens.fontSizeBase,
    fontWeight: tokens.fontWeight,
    color: tokens.colorText,
    display: 'block',
    marginBottom: tokens.spacingSm,
  };

  const inputStyle = {
    ...currentVariant,
    padding: tokens.paddingInput,
    borderRadius: tokens.borderRadius,
    fontSize: tokens.fontSizeBase,
    opacity: disabled ? tokens.opacity : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const errorStyle = {
    color: tokens.colorError,
    fontSize: tokens.fontSizeBase,
    marginTop: tokens.spacingSm,
  };

  return (
    <div style={{ marginBottom: tokens.spacingMd }}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        placeholder={placeholder}
        disabled={disabled}
        style={inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {variant === 'error' && errorMessage && (
        <div style={errorStyle}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;