import { useState } from 'react';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ForumIcon from '@mui/icons-material/Forum';
import ShareIcon from '@mui/icons-material/Share';
import { Card, CardContent, Typography } from '@mui/material';
import { classes } from './styles';
import { useTranslation } from 'react-i18next';
import { theme } from '@app/theme/theme';
import { Column } from '@core/components/flexbox';

const styles = classes(theme);
const featCard = 'landingPage.featureCards';


const FeatureCardIcon = ({ featureName, onHover }: { featureName: string, onHover: boolean; }) => {
  switch (featureName) {
    case 'exercice':
      return <CardTravelIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
    case 'deck':
      return <LayersOutlinedIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
    case 'news':
      return <LibraryBooksIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
    case 'culture':
      return <MenuBookIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
    case 'discuss':
      return <ForumIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
    default: // case 'share':
      return <ShareIcon color={onHover ? 'secondary' : 'primary'} style={{ fontSize: '3.1875rem' }} />;
  }
};


export const FeatureCard = ({ name }: { name: string; }) => {
  const { t } = useTranslation();

  const [onHover, setOnHover] = useState(false);

  return (
    <Card
      onMouseOver={() => { setOnHover(true); }}
      onMouseLeave={() => { setOnHover(false); }}
      style={{ ...styles.fc, ...(onHover ? styles.fcHover : {}) }}
      variant='elevation'
    >
      <Column width='100%' horizontal='center'>
        <CardContent style={{ width: '280px' }}>
          <Column horizontal='center'>
            <FeatureCardIcon featureName={name} onHover={onHover} />
            <Typography
              variant='h6'
              color={onHover ? 'secondary' : 'textPrimary'}
              align='center'
              style={{ marginTop: '15px' }}
            >
              {t(`${featCard}.${name}.title`)}
            </Typography>
          </Column>
          <Column horizontal='center' style={{ paddingTop: '20px' }}>
            <Typography color={onHover ? 'secondary' : 'inherit'} variant='body2' align='justify' >{t(`${featCard}.${name}.text`)}</Typography>
          </Column>
        </CardContent>
      </Column>
    </Card>
  );
};