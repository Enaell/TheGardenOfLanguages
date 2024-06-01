import { MemberCard } from './MemberCard';

import totoroPict from './ressources/totoro.jpg';
import kikiPict from './ressources/kiki.png';
import { useTranslation } from 'react-i18next';
import { Row } from '@core/components';

const lptm = 'landingPage.teamMember';

export const TeamPanel = () => {
  const { t } = useTranslation();

  return (
    <Row flexWrap='wrap' horizontal='space-around' width='100%' style={{ maxWidth: '1200px', paddingTop: '60px' }} >
      <MemberCard image={totoroPict} name={t(`${lptm}.aurelien.name`)} description={t(`${lptm}.aurelien.description`)} />
      <MemberCard image={kikiPict} name={t(`${lptm}.lulu.name`)} description={t(`${lptm}.lulu.description`)} />
    </Row>
  );
}; 