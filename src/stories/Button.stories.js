import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};