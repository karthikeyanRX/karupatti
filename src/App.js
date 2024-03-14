import { Box } from "@mui/material";
import "./App.css";

import Appbar from "./features/AppBar";

import MainPage from "./MainPage";

// import Appbar from "./features/AppBar";

function App() {
  return (
    <Box
      sx={{
        padding: " 0px 220px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",
        cursor: "pointer",
      }}
    >
      <MainPage />
    </Box>
  );
}

export default App;
