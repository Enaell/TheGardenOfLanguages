import { StatBalls } from './StatBalls';
import { CountryPict } from './CountryPict';
import { Row } from '@core/components/flexbox';
import { Language } from '@core/types/generics';

type TabPanelProps = {
  language: Language;
  index: any;
  value: any;
};

export const TabPanel = ({ language, value, index }: TabPanelProps) => {

  return (
    <div
      style={{ position: 'absolute' }}
      role="tabpanel"
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      <Row width='100%'>
        <CountryPict language={language} isVisible={value === index} />
        <StatBalls language={language} isVisible={value === index} />
      </Row>
    </div>
  );
};
