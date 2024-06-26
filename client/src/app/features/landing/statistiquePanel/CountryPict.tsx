import frPict from '@app/assets/landing/fr.jpg';
import enPict from '@app/assets/landing/en.jpg';
import cnPict from '@app/assets/landing/cn.jpg';
import { Language } from '@core/types/generics';
import { Box, CardMedia } from '@mui/material';


function getPicture(language: Language) {
  switch (language) {
    case 'Fr':
      return frPict;
    case 'Cn':
      return cnPict;
    case 'En':
      return enPict;
    default:
      return frPict;
  }
};

export const CountryPict = ({ language, isVisible }: { language: Language, isVisible: boolean; }) => {

  return (
    <Box sx={{ backgroundColor: 'transparent' }}>
      <CardMedia
        sx={isVisible ? {
          width: '600px',
          height: '480px',
          transition: 'opacity 1000ms ease-in-out',
          opacity: 1
        } : {
          height: '480px',
          width: '600px',
          transition: 'opacity 1000ms ease-in-out',
          opacity: 0
        }} image={getPicture(language)} />
    </Box>
  );
};
