import { AppBar, Toolbar, Typography } from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export type TitleContextType = [string, Dispatch<string | null>];

function App() {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet context={[title, setTitle]} />
    </div>
  );
}

export default App;
