import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
    },
  },
};

export const Default = {
  args: {
    title: 'Default Card',
    description: 'This is a default card using primary color tokens.',
    variant: 'default',
  },
};

export const Success = {
  args: {
    title: 'Success Card',
    description: 'This is a success card using success color tokens.',
    variant: 'success',
  },
};

export const Error = {
  args: {
    title: 'Error Card',
    description: 'This is an error card using error color tokens.',
    variant: 'error',
  },
};