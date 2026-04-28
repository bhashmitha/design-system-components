import Alert from './Alert';
import { FiInfo, FiCheck, FiAlertTriangle, FiXCircle } from 'react-icons/fi';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
};

export const Info = {
  args: {
    title: 'Info',
    message: 'This is an informational message.',
    variant: 'info',
    dismissible: true,
    icon: <FiInfo />,
  },
};

export const Success = {
  args: {
    title: 'Success',
    message: 'Your details were saved successfully.',
    variant: 'success',
    dismissible: true,
    icon: <FiCheck />,
  },
};

export const Warning = {
  args: {
    title: 'Warning',
    message: 'Characters should not exceed 50.',
    variant: 'warning',
    dismissible: true,
    icon: <FiAlertTriangle />,
  },
};

export const Error = {
  args: {
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    variant: 'error',
    dismissible: true,
    icon: <FiXCircle />,
  },
};