import Button from "../components/Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onChange: { action: "onClick" },
  },
};

export const Default = (args) => {
  return <Button {...args}>Button</Button>;
};
