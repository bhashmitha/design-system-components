import React from 'react';
import { tokens } from '../tokens';

const Card = ({
  title,
  description,
  variant = 'default',
  ...props
}) => {

  const variantStyles = {
    default: {
      borderColor: tokens.colorPrimary,
      titleColor: tokens.colorPrimary,
    },
    success: {
      borderColor: tokens.colorSuccess,
      titleColor: tokens.colorSuccess,
    },
    error: {
      borderColor: tokens.colorError,
      titleColor: tokens.colorError,
    },
  };

  const currentVariant = variantStyles[variant];

  const cardStyle = {
    backgroundColor: tokens.colorBackground,
    border: `2px solid ${currentVariant.borderColor}`,
    borderRadius: tokens.borderRadius,
    padding: tokens.spacingMd,
    boxShadow: tokens.boxShadow,
    maxWidth: '400px',
  };

  const titleStyle = {
    fontSize: tokens.fontSizeTitle,
    color: currentVariant.titleColor,
    marginBottom: tokens.spacingSm,
    fontWeight: tokens.fontWeight,
  };

  const descriptionStyle = {
    fontSize: tokens.fontSizeBase,
    color: tokens.colorPlaceholder,
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle} {...props}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Card;