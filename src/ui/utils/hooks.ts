import { ChangeEvent } from "react";

export const useHandleChange = (handler: (value: string) => void) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handler(event.target.value);
  };

  return handleChange;
};
