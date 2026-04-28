import React, { useState } from 'react';
import { tokens } from '../tokens';

const Alert = ({
  title,
  message,
  variant = 'info',
  dismissible = false,
  icon,
  onDismiss,
}) => {
  const [showAlert, setShowAlert] = useState(true);

  const variantStyles = {
    info: {
      color: tokens.colorText,
      background: tokens.colorBackgroundInfo,
      iconColor: tokens.colorInfoIcon,
    },
    success: {
      color: tokens.colorText,
      background: tokens.colorBackgroundSuccess,
      iconColor: tokens.colorSuccessIcon,
    },
    warning: {
      color: tokens.colorText,
      background: tokens.colorBackgroundWarning,
      iconColor: tokens.colorWarningIcon,
    },
    error: {
      color: tokens.colorText,
      background: tokens.colorBackgroundError,
      iconColor: tokens.colorErrorIcon,
    },
  };

  const { iconColor, ...divStyles } = variantStyles[variant];

  const handleClick = () => {
    setShowAlert(false);
    onDismiss?.();
  };

  const alertStyle = {
    ...divStyles,
    padding: tokens.paddingAlert,
    borderRadius: tokens.borderRadiusAlert,
    marginBottom: tokens.spacingMd,
  };

  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: tokens.fontWeight,
    marginBottom: tokens.spacingSm,
  };

  const messageStyle = {
    fontSize: tokens.fontSizeBase,
    color: tokens.colorText,
    margin: 0,
  };

  return showAlert && (
    <div style={alertStyle}>
      <div style={titleStyle}>
        <span>
          <span style={{ color: iconColor, marginRight: tokens.spacingSm }}>
            {icon}
          </span>
          {title}
        </span>
        {dismissible && (
          <span
            style={{ cursor: 'pointer', fontWeight: tokens.fontWeight }}
            onClick={handleClick}
          >
            ✕
          </span>
        )}
      </div>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default Alert;