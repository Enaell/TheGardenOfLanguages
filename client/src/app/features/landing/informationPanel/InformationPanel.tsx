import { Row } from '@core/components/flexbox';
import { FeatureCard } from './FeatureCard';

const featNames = ['exercice', 'deck', 'news', 'culture', 'discuss', 'share'];

export const InformationPanel = () => {
  return (
    <Row flexWrap='wrap' horizontal='space-around' style={{ maxWidth: '1200px', paddingTop: '40px' }}>
      {featNames.map(fn => { return (<FeatureCard key={fn} name={fn} />); })}
    </Row>
  );
};