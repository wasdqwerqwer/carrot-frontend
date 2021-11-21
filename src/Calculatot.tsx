import { useState } from "react";
import Pad from "./Pad";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const inputKey = (key: string) => {
    if (key === "=") {
      setExpression(eval(expression));
    } else {
      setExpression(expression + key);
    }
  };
  return (
    <>
      <section>
        <Pad keyName="7" callback={inputKey} />
        <Pad keyName="8" callback={inputKey} />
        <Pad keyName="9" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="4" callback={inputKey} />
        <Pad keyName="5" callback={inputKey} />
        <Pad keyName="6" callback={inputKey} />
      </section>
    </>
  );
};

export default Calculator;
