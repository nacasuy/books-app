import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import Authors from "./graphs/Authors";
import Genre from "./graphs/Genre";
import Reviews from "./graphs/Reviews";
import Titles from "./graphs/Titles";
import BoxContainer from "../common/BoxContainer";

const DashboardWithTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Authors" value="1" />
          <Tab label="Genre" value="2" />
          <Tab label="Titles" value="3" />
          <Tab label="Reviews" value="4" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <BoxContainer title="Top 20 Authors">
          <Authors />
        </BoxContainer>
      </TabPanel>
      <TabPanel value="2">
        <BoxContainer title="Genres">
          <Genre />
        </BoxContainer>
      </TabPanel>
      <TabPanel value="3">
        <BoxContainer title="Top Titles (more than 2 editions)">
          <Titles />
        </BoxContainer>
      </TabPanel>
      <TabPanel value="4">
        <BoxContainer title="Top 20 Books with More Reviews">
          <Reviews />
        </BoxContainer>
      </TabPanel>
    </TabContext>
  );
};

export default DashboardWithTabs;
