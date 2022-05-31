import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";
import ErrorText from "./ErrorText";
import CardForm from "./CardForm";
import Title from "./Title";

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit, // onSubmit: onSubmit
    validate: ({ name, password }) => {
      const newErrors = {};
      if (!name) newErrors.password = "이름을 입력해주세요.";
      if (!password) newErrors.password = "비밀번호를 입력해주세요.";
      return newErrors;
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // submit 동작 방지
  //   onSubmit && onSubmit();
  // };

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        style={{ marginTop: 16 }}
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      {/* isLoading 중에는 버튼 클릭 못하도록 */}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
