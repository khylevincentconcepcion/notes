import { styled, Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  "& input": {
    height: "3.75rem",
    width: "100%",
    padding: "0 1.875rem",
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: "3rem",
    transition: "all 200ms ease-in-out",
    "&:focus": {
      boxShadow: "0 0 0.625rem 62.5rem rgba(0, 0, 0, 0.5)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "25rem",
    },
  },
  "& button": {
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all 200ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:active": {
      top: "50%",
      transform: "translateY(-50%) scale(.8)",
    },
    "&:hover svg": {
      color: "white",
    },
    "& svg": {
      color: theme.palette.primary.main,
      transition: "all 250ms ease-in-out",
    },
  },
}));
