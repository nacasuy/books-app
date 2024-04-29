import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Tooltip,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={2}
    >
      <BottomNavigation
        showLabels
        sx={{ background: "#00022e", height: "50px", color: "#fc86aa" }}
      >
        <BottomNavigationAction
          label="Author"
          icon={
            <Tooltip title="Natalia Castiglioni">
              <PersonIcon />
            </Tooltip>
          }
          sx={{ background: "#00022e", color: "#fc86aa" }}
        />
        <BottomNavigationAction
          label="Credits"
          icon={
            <Tooltip title="Check readme file">
              <LoyaltyIcon />
            </Tooltip>
          }
          sx={{ background: "#00022e", color: "#fc86aa" }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
