import Breadcrumb from "../../components/Breadcrumb";

export default {
  title: "Component/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
};
export const Default = (args) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1">Level 1</Breadcrumb.Item>
      <Breadcrumb.Item>Level 2</Breadcrumb.Item>
    </Breadcrumb>
  );
};
