import { welcomeSection, backgroundImg, connectionDiv } from './styles';

import { IntroductionColumn } from './IntroductionColumn';
import { Column } from '@core/components/flexbox/Column';
import { Row } from '@core/components/flexbox/Row';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import { LoginTabs } from '@app/features/connection/LoginTabs';

type WelcomeSectionType = {
  position?: 'absolute' | 'relative';
};

export const WelcomeSection = ({
  position = 'relative'
}: WelcomeSectionType) => {
  return (
    <Column horizontal='start' vertical={'center'} className='welcomeSection' style={{ ...welcomeSection, position: position }}>
      <div style={backgroundImg} />
      <Column horizontal='end' width='45%'>
        <Column horizontal={'start'} style={connectionDiv}>
          <Typography color="primary" variant='h3' noWrap>
            {t('application-name')}
          </Typography>
          <form style={{ width: '100%', height: '100%', paddingTop: '20px' }}>
            <Row width='100%' height='100%' vertical={'center'}>
              <Column height='100%' width='100%' vertical={'space-around'}>
                <IntroductionColumn />
                <LoginTabs
                  visitorOption
                  orientation='vertical'
                  style={{ marginLeft: '-20px' }}
                />
              </Column>
            </Row>
          </form>
        </Column>
      </Column>
    </Column>
  );
};
