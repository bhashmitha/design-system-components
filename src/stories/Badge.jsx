import React from "react";
import { tokens } from "../tokens";

const Badge = ({
  label,
  variant = "primary",
  size = "md",
  showDot = false,
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: tokens.colorBadgePrimaryBackground,
      color: tokens.colorBadgePrimaryText,
    },
    success: {
      backgroundColor: tokens.colorBadgeSuccessBackground,
      color: tokens.colorBadgeSuccessText,
    },
    warning: {
      backgroundColor: tokens.colorBadgeWarningBackground,
      color: tokens.colorBadgeWarningText,
    },
    error: {
      backgroundColor: tokens.colorBadgeErrorBackground,
      color: tokens.colorBadgeErrorText,
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: "10px",
      padding: "2px 8px",
    },
    md: {
      fontSize: "12px",
      padding: "4px 12px",
    },
    lg: {
      fontSize: "14px",
      padding: "6px 16px",
    },
  };

  const badgeStyle = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    borderRadius: tokens.borderRadiusBadge,
    fontWeight: tokens.fontWeight,
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.spacingSm,
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: variantStyles[variant]?.color,
  };

  return (
    <div style={badgeStyle}>
      {showDot && <span style={dotStyle} />}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
