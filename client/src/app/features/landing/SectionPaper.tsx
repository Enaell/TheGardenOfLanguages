import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { InformationPanel } from './informationPanel/InformationPanel';
import { TeamPanel } from './teamPanel/TeamPanel';
import { ContactPanel } from './contactPanel/ContactPanel';
import { StatisticsPanel } from './statistiquePanel/StatisticsPanel';
import { Column } from '@core/components';

function sectionColor(sectionName: string) {
  switch (sectionName) {
    case 'contact':
      return {
        background: 'backgroundPrimary' as 'backgroundPrimary' | 'backgroundSecondary',
        color: 'textSecondary' as 'textSecondary' | 'textPrimary'
      };
    default:
      return {
        background: 'backgroundSecondary' as 'backgroundPrimary' | 'backgroundSecondary',
        color: 'textPrimary' as 'textSecondary' | 'textPrimary'
      };
  }
}

const styles = {
  backgroundPrimary: {
    backgroundColor: '#41a61d',
    padding: '50px 0 50px 0',
    margin: '30px 0 0 0'
  },
  backgroundSecondary: {
    backgroundColor: 'inherit',
    padding: '50px 0 50px 0'
  },
  textSecondary: {
    zIndex: 2,
    color: '#41a61d',
    textTransform: 'capitalize',
    margin: '20px 0 20px 0',
    '&:after': {
      display: 'block',
      content: '""',
      borderBottom: `solid 3px ${'#41a61d'}`,
    },
  },
  textPrimary: {
    zIndex: 2,
    color: '#41a61d',
    textTransform: 'capitalize',
    margin: '20px 0 20px 0',
    '&:after': {
      display: 'block',
      content: '""',
      borderBottom: `solid 3px ${'#41a61d'}`,
    },
  }
};

const Section = ({ sectionName }: { sectionName: string; }) => {
  switch (sectionName) {
    case 'information':
      return <InformationPanel />;
    case 'stat':
      return <StatisticsPanel />;
    case 'team':
      return <TeamPanel />;
    case 'contact':
      return <ContactPanel />;
    default:
      return <div />;
  }
};

export const SectionPaper = ({ sectionName }: {
  sectionName: string,
}) => {
  const { t } = useTranslation();

  const bgColor = sectionColor(sectionName).background;
  const textColor = sectionColor(sectionName).color;

  return (
    <Column sx={styles[bgColor]} width='100%' horizontal='center' >
      <Typography sx={styles[textColor]} variant="h3"  >
        {t(`landingPage.sections.${sectionName}`)}
      </Typography>
      <Section sectionName={sectionName} />
    </Column>
  );
};