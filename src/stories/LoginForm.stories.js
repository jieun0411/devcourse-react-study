import LoginForm from "../components/LoginForm";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  }, // action 기록
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
