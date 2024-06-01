import { useState } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Language } from '@core/types/generics';
import { Row } from '@core/components/flexbox/Row';
import { TabPanel } from './TabPanel';
import { languages } from '@app/utils/languages';


function a11yProps(language: Language) {
  return {
    id: `scrollable-auto-tab-${language}`,
    'aria-controls': `scrollable-auto-tabpanel-${language}`,
  };
}

export const StatisticsPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <div sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        filter: 'blur(20px)',
        backgroundSize: '100% 100%'
      }} style={{backgroundImage: `url(${getPicture(languages[value])})`}} /> */}
      <Row sx={{
        flexGrow: 1,
        width: '100%',
        maxWidth: '1200px',
        marginTop: '60px',
        zIndex: 2
      }}>
        <AppBar sx={{
          position: "absolute",
          backgroundColor: '#FFFFFF9E',
          zIndex: 3,
          width: '100px',
          height: '480px'
        }} position="static" color="default">
          <Tabs
            orientation='vertical'
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {languages.map(language => <Tab sx={{
              width: '100px',
              paddingRight: '66px',
              fontWeight: 'bolder'
            }} key={language} label={language} {...a11yProps(language)} />)}
          </Tabs>
        </AppBar>
        <div style={{ background: 'transparent', width: '1200px', height: '500px' }}>
          {languages.map((language, index) => (
            <TabPanel key={language} language={language} value={value} index={index} />
          ))}
        </div>
      </Row>
    </>
  );
};
