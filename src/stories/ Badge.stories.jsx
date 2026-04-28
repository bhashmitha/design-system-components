import Badge from "./Badge";

export default {
  title: "components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showDot: {
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    label: "Primary",
    variant: "primary",
    size: "sm",
    showDot: true
  },
};

export const Success = {
  args: {
    label: "Success",
    variant: "success",
    size: "md",
    showDot: true
  },
};

export const Error = {
  args: {
    label: "Error",
    variant: "error",
    size: "lg",
    showDot: true
  },
};

export const Warning = {
  args: {
    label: "Warning",
    variant: "warning",
    size: "md",
    showDot: true
  },
};

export const WithoutDot = {
  args: {
    label: 'No Dot',
    variant: 'primary',
    size: 'md',
    showDot: false,
  },
};
