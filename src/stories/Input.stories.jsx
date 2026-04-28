import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: 'Name',
    placeholder: 'Enter text',
    disabled: false,
    variant: 'default',
  },
};

export const Error = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    errorMessage: 'Enter valid text',
    disabled: false,
    variant: 'error',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
    variant: 'default',
  },
};