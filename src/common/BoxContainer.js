import { Box, Typography } from "@mui/material";

const BoxContainer = ({ children, title }) => (
  <Box
    width={700}
    height={700}
    component="section"
    sx={{ alignItems: "center" }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

export default BoxContainer;
