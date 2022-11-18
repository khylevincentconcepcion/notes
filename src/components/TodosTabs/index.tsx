import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab } from "@mui/material";
import { useState, FC, SyntheticEvent, useContext } from "react";
import { Store } from "../../app/store";
import Todo from "../Todo";

const TodosTabs: FC = () => {
  const { state, dispatch } = useContext(Store);
  const { todos } = state;
  const [value, setValue] = useState<string>("incomplete");
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList
        centered
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Incomplete" value="incomplete" sx={{ color: "white" }} />
        <Tab label="Completed" value="completed" sx={{ color: "white" }} />
      </TabList>
      <TabPanel value="incomplete">
        <Grid container spacing={2}>
          {todos && todos.length > 0
            ? todos
                .sort((a, b) => b.id - a.id)
                .map((todo) =>
                  todo.isDone === false ? (
                    <Grid item xs={12} sm={6} key={todo.id}>
                      <Todo todo={todo} key={todo.id} />
                    </Grid>
                  ) : null
                )
            : null}
        </Grid>
      </TabPanel>
      <TabPanel value="completed">
        <Grid container spacing={2}>
          {todos && todos.length > 0
            ? todos
                .sort((a, b) => b.id - a.id)
                .map((todo) =>
                  todo.isDone === true ? (
                    <Grid item xs={12} sm={6} key={todo.id}>
                      <Todo todo={todo} key={todo.id} />
                    </Grid>
                  ) : null
                )
            : null}
        </Grid>
      </TabPanel>
    </TabContext>
  );
};

export default TodosTabs;
