import { MemberCard } from './MemberCard';

import totoroPict from './assets/totoro.jpg';
import firefoxPict from './assets/firefox.jpeg';
import { useTranslation } from 'react-i18next';
import { Row } from '@core/components';

const lptm = 'landingPage.teamMember';

export const TeamPanel = () => {
  const { t } = useTranslation();

  return (
    <Row flexWrap='wrap' horizontal='space-around' width='100%' style={{ maxWidth: '1200px', paddingTop: '60px' }} >
      <MemberCard image={totoroPict} name={t(`${lptm}.aurelien.name`)} description={t(`${lptm}.aurelien.description`)} />
      <MemberCard image={firefoxPict} name={t(`${lptm}.julian.name`)} description={t(`${lptm}.julian.description`)} />
    </Row>
  );
}; 