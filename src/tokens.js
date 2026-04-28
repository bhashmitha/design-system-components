import { blue, green, yellow, red } from '@radix-ui/colors';

export const tokens = {
  // Colors
  colorPrimary: '#0066CC',
  colorBackground: '#FFFFFF',
  colorText: '#333333',
  colorPlaceholder: '#666666',
  colorBorder: '#E0E0E0',
  colorSuccess: '#008000',
  colorError: '#CC0000',
  // Badge colors
  colorBadgePrimaryBackground: blue.blue3,
  colorBadgeSuccessBackground: green.green3,
  colorBadgeWarningBackground: yellow.yellow3,
  colorBadgeErrorBackground: red.red3,

  colorBadgePrimaryText: blue.blue11,
  colorBadgeSuccessText: green.green11,
  colorBadgeWarningText: yellow.yellow11,
  colorBadgeErrorText: red.red11,

  // Badge specific
  borderRadiusBadge: '999px',

  // Alert/Badge backgrounds
  colorBackgroundInfo: blue.blue2,
  colorBackgroundSuccess: green.green2,
  colorBackgroundWarning: yellow.yellow2,
  colorBackgroundError: red.red2,

  // Icon colors
  colorInfoIcon: blue.blue9,
  colorSuccessIcon: green.green9,
  colorWarningIcon: yellow.yellow9,
  colorErrorIcon: red.red9,

  // Spacing
  spacingSm: '8px',
  spacingMd: '16px',
  spacingLg: '24px',

  // Font sizes
  fontSizeBase: '14px',
  fontSizeTitle: '18px',
  fontWeight: 600,

  // Border radius
  borderRadius: '6px',
  borderRadiusAlert: '8px',

  // Opacity
  opacity: 0.5,

  // Padding
  paddingButton: '12px 24px',
  paddingInput: '12px 16px',
  paddingAlert: '16px',

  // Box shadow
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};
