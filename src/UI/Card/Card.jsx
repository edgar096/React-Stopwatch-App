import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Card = ({ children }) => {
  return (
    <Stack
      position="fixed"
      bottom={0}
      direction="row"
      spacing={2}
      alignItems="center"
      justify="flex-end"
    >
      {children}
    </Stack>
  );
};

export default Card;
