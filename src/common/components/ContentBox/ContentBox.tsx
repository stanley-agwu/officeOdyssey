import { Box } from '@mui/material';

const ContentBox = ({ text }: { text: string }) => (
  <Box
    component="section"
    display="flex"
    justifyContent="center"
    alignItems="center"
    margin="10rem auto"
    width="100%"
  >
    <h2>{text}</h2>
  </Box>
);

export default ContentBox;
