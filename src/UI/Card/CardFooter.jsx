import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardFooter = ({ children, text }) => {
  return (
    <Card sx={{ position: 'absolute', left: 0, bottom: 0, right: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardFooter;
