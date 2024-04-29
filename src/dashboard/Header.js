import { useContext } from "react";

import { Box, CardHeader } from "@mui/material";

import { DashboardContext } from "../App";

const Header = () => {
  const books = useContext(DashboardContext);
  return (
    <Box
      display="flex"
      width="100%"
      sx={{ background: "#00022e", height: "50px", color: "#fc86aa" }}
    >
      <CardHeader
        width="90%"
        p={2}
        title={`Amazon Top ${books.length} Bestselling Books 2009 - 2019`}
      />
    </Box>
  );
};

export default Header;
