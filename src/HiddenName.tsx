import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const startName = newName.substring(0, 1);
      const endName = newName.substring(newName.length - 1, newName.length);
      const hiddenPart = "*".repeat(newName.length - 2);
      newName = startName + hiddenPart + endName;
    }
    setName(newName);
  };
};

export default HiddenName;
