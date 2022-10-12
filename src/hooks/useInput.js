import { useState } from "react";

export function useInput() {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  return { onChange, value };
}
