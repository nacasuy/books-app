import { useContext } from "react";

import { Badge, IconButton, Tooltip } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import CategoryIcon from "@mui/icons-material/Category";
import Box from "@mui/material/Box";

import { groupBy, prop, toPairs, clone } from "ramda";

import { DashboardContext } from "../App";

const Insights = () => {
  const books = useContext(DashboardContext);
  const clonedBooks = clone(books);

  const authors = toPairs(groupBy(prop("Author"), clonedBooks)).length;
  const genre = toPairs(groupBy(prop("Genre"), clonedBooks)).length;
  const titles = toPairs(groupBy(prop("Name"), clonedBooks)).length;
  const reviews = toPairs(groupBy(prop("Reviews"), clonedBooks)).length;

  return (
    <Box sx={{ justifyContent: "center" }} padding={2} gap={2}>
      <Box>
        <IconButton aria-label="Authors">
          <Badge badgeContent={authors} color="secondary" max={authors + 10}>
            <Tooltip title="Authors">
              <PersonIcon />
            </Tooltip>
          </Badge>
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="Genre">
          <Badge badgeContent={genre} color="secondary" max={genre + 10}>
            <Tooltip title="Genre">
              <CategoryIcon />
            </Tooltip>
          </Badge>
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="Titles">
          <Badge badgeContent={titles} color="primary" max={titles + 10}>
            <Tooltip title="Titles">
              <LibraryBooksIcon />
            </Tooltip>
          </Badge>
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="Reviews">
          <Badge badgeContent={reviews} color="secondary" max={reviews + 10}>
            <Tooltip title="Reviews">
              <TitleIcon />
            </Tooltip>
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Insights;
