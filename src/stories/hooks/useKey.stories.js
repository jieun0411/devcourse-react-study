import useKey from "../../hooks/useKey";

export default {
  title: "Hook/useKey",
  component: useKey,
  argTypes: {},
};
export const Default = (args) => {
  useKey("keydown", "f", () => {
    alert("f key down");
  });

  useKey("keyup", "q", () => {
    alert("q key up");
  });
  return <useKey {...args}></useKey>;
};
