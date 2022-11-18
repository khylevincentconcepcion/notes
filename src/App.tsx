import { FC } from "react";
import { Typography, Box } from "@mui/material";
import bg from "./assets/bg.jpg";
import InputField from "./components/InputField";
import TodosTabs from "./components/TodosTabs";

const App: FC = () => {
  return (
    <Box
      className="text-center min-h-screen"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        backgroundSize: "cover",
        maxWidth: "120rem",
        margin: "0 auto",
      }}
    >
      <Typography variant="h1" color="textPrimary">
        Notes
      </Typography>
      <InputField />
      <TodosTabs />
    </Box>
  );
};

export default App;
