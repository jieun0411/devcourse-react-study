import Checkbox from "./components/Checkbox";
import useToggle from "./hooks/useToggle";
import Box from "./components/Box";
import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [on, toggle] = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress("a");

  console.log(on);
  return (
    <div>
      {/* <button onClick={toggle}>{on ? "True" : "False"}</button> */}
      <Checkbox checked={on} onChange={toggle} />

      {isHover ? "hover" : "mouseout"}
      <Box ref={ref} />

      {keyPressed && "Pressed"}
    </div>
  );
}

export default App;
