import Stack from '@mui/material/Stack';

const Card = ({ children }) => {
  return (
    <Stack direction="row" spacing={2}>
      {children}
    </Stack>
  );
};

export default Card;
