import { FC, useContext, useEffect, useRef, useState } from "react";
import { IDelete, IEdit, isDone, Props } from "./index.types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  InputBase,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledBox } from "./index.style";
import { Store } from "../../app/store";
import { Types } from "../../app/reducer.types";

const Todo: FC<Props> = ({ todo }) => {
  const { state, dispatch } = useContext(Store);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const isDoneHandler: isDone = (id) => {
    dispatch({
      type: Types.DONE,
      payload: id,
    });
  };

  const deleteHandler: IDelete = (id) => {
    dispatch({
      type: Types.REMOVE,
      payload: id,
    });
  };

  const editHandler: IEdit = (e, id) => {
    e.preventDefault();
    dispatch({
      type: Types.EDIT,
      payload: {
        id: id,
        editTodo: editTodo,
      },
    });
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
      })}
    >
      <Grid container spacing={2} className="items-center">
        <Grid item xs={8}>
          <CardContent>
            {edit ? (
              <StyledBox
                component="form"
                className="grid"
                onSubmit={(e) => {
                  editHandler(e, todo.id);
                }}
              >
                <InputBase
                  placeholder="Edit Task"
                  inputProps={{ "aria-label": "edit task" }}
                  value={editTodo}
                  inputRef={inputRef}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
              </StyledBox>
            ) : (
              <>
                {todo.isDone === false ? (
                  <Typography
                    color="text.secondary"
                    className="break-words text-start"
                    sx={{
                      color: "black",
                    }}
                  >
                    {todo.todo}
                  </Typography>
                ) : (
                  <Typography
                    color="text.secondary"
                    className="break-words line-through text-start"
                    sx={{
                      color: "black",
                    }}
                  >
                    {todo.todo}
                  </Typography>
                )}
              </>
            )}
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardActions className="justify-end">
            <IconButton
              size="small"
              sx={{
                color: "black",
              }}
              onClick={() => (!edit && !todo.isDone ? setEdit(!edit) : null)}
              title={todo.isDone === false ? "edit" : ""}
              disabled={todo.isDone === true}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: "black",
              }}
              onClick={() => deleteHandler(todo.id)}
              title="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: "black",
              }}
              onClick={() => isDoneHandler(todo.id)}
              title={todo.isDone === false ? "done" : "uncheck"}
            >
              {todo.isDone === false ? <CheckIcon /> : <ClearIcon />}
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Todo;
