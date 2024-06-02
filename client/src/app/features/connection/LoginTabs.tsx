import React, { useState } from 'react';
import { LogAsVisitorForm } from './LogAsVisitorForm';
import { RegisterForm } from './RegisterForm';
import { AuthForm } from './AuthForm';
import { Column, Row } from '@/core/components';
import { Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ModalTab } from '@/core/types/user';

const TabsWrapper = ({ orientation, style, children }: {
  orientation?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <>
    {orientation === 'horizontal'
      ? <Column vertical={'space-between'} style={style}> {children} </Column>
      : <Row horizontal='space-between' style={{ paddingTop: '15px', ...style }}> {children} </Row>
    }
  </>);

const connectionTypes: ModalTab[] = ["visitor", "register", "auth"];

export const LoginTabs = ({
  orientation = 'horizontal',
  visitorOption = false,
  style,
}: {
  orientation?: 'vertical' | 'horizontal';
  visitorOption?: boolean;
  style?: React.CSSProperties,
}) => {
  const { t } = useTranslation();

  const [tab, setTab] = useState<ModalTab>('visitor');

  return (
    <TabsWrapper style={style} orientation={orientation}>
      <Tabs
        orientation={orientation}
        value={visitorOption ? connectionTypes.indexOf(tab) : connectionTypes.indexOf(tab) - 1}
        onChange={(_event, newTab: number) => {
          setTab(connectionTypes[newTab + (visitorOption ? 0 : 1)]);
        }}
        indicatorColor='primary'
        textColor='primary'
        centered
        style={orientation === 'vertical' ? { padding: '15px 0' } : {}}
      >
        {visitorOption && <Tab label={t('connection.discover')} />}
        <Tab label={t('connection.signin')} />
        <Tab label={t('connection.login')} />
      </Tabs>
      <Column vertical='space-around' style={{ width: orientation === 'vertical' ? 'calc(100% - 160px)' : 'inherit', padding: '0 20px' }}>
        {tab === 'visitor' && <LogAsVisitorForm />}
        {tab === 'register' && <RegisterForm />}
        {tab === 'auth' && <AuthForm />}
      </Column>
    </TabsWrapper>
  );
};
