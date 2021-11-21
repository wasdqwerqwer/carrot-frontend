import { ChangeEvent, useState } from "react";

const WelcomName = () => {
  const [name, setName] = useState<string>();
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={updateName} />
      <article>반갑습니다 {name}님</article>
    </>
  );
};

export default WelcomName;
