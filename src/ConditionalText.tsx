import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [text, setName] = useState<string>("");
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={updateText} />
      <article>{text.length > 5 && text}</article>
    </>
  );
};

export default ConditionalText;
