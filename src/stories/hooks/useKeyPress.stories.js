import useKeyPress from "../../hooks/useKeyPress";

export default {
  title: "Hook/useKeyPress",
  component: useKeyPress,
  argTypes: {},
};
export const Default = (args) => {
  const pressed = useKeyPress("?");
  return <>{pressed ? "Peek-A-Boo!" : "Press ? key"}</>;
};
