import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default App;
