import DataArrayIcon from "@mui/icons-material/DataArray";
import { Box, TextField } from "@mui/material";

const NoData = ({ message = "No Data Found" }) => (
  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
    <DataArrayIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
    <TextField id="input-with-sx" label={message} variant="standard" />
  </Box>
);

export default NoData;
