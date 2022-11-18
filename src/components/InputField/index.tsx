import { FC, FormEvent, useContext, useRef, useState } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { StyledBox } from "./index.styles";
import { ISubmitHandler } from "./index.types";
import { Store } from "../../app/store";
import { Types } from "../../app/reducer.types";

const InputField: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { state, dispatch } = useContext(Store);
  const { todos } = state;

  const submitHandler: ISubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      dispatch({
        type: Types.ADD,
        payload: todo,
      });
    }
    setTodo("");
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Box className="flex items-center justify-center">
      <StyledBox
        component="form"
        className="relative"
        onSubmit={(e) => {
          submitHandler(e);
          inputRef.current?.blur();
        }}
      >
        <InputBase
          placeholder="Enter a Task..."
          inputProps={{ "aria-label": "enter a task" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          inputRef={inputRef}
        />
        <IconButton
          type="submit"
          aria-label="submit"
          title="submit"
          className="absolute right-0 p-3"
        >
          <CheckIcon className="text-4xl" />
        </IconButton>
      </StyledBox>
    </Box>
  );
};

export default InputField;
