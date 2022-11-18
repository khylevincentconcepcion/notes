import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  "& input": {
    backgroundColor: "white",
    color: "black",
    outline: "none",
  },
}));
