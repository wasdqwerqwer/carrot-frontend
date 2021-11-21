import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);

  const updateNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setnumber1(newNumber);
  };
  const updateNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setnumber2(newNumber);
  };
  const calculated = number1 + number2;
  return (
    <section>
      <article>계산결과: {calculated}</article>
      <section>
        <input type="text" onChange={updateNumber1} />
        +
        <input type="text" onChange={updateNumber2} />
      </section>
    </section>
  );
};
export default Adder;
