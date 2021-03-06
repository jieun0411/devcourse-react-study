import Spinner from "../../components/Spinner";

export default {
  title: "Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValues: 24,
      control: "number",
    },
    color: { control: "color" },
    loading: { control: "boolean" },
  },
};

export const Default = (args) => {
  return <Spinner {...args} />;
};
