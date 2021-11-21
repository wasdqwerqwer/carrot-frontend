import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [latesName, setLatesName] = useState("");
  const updateLatesNmae = (name: string) => {
    setLatesName(name);
  };
  return (
    <>
      <Button name="hello" callback={updateLatesNmae} />
      <Button name="world" callback={updateLatesNmae} />
      <Button name="world" callback={updateLatesNmae} />
      <article>{latesName} is clicked</article>
    </>
  );
};

//import { KeyboardEvent } from "react";
/*
const App = () => {
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <input type="text" onKeyDown={preventKeyDown} />
    </>
  );
};
*/

export default App;
