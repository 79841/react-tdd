import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren } from "react";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
