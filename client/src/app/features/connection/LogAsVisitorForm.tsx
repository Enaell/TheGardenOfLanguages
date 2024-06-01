import { useState } from 'react';
import { languages, inputLanguage, fullNameLanguages } from '@/app/utils/languages';
import { Button, Row } from '@core/components';
import { Language } from '@core/types/generics';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

type LogAsVisitorFormProps = {
  isModal?: boolean;
};

export const LogAsVisitorForm = ({ isModal = false }: LogAsVisitorFormProps) => {
  const [language, setLanguage] = useState<Language>('Fr');
  const [languageError, setLanguageError] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState<Language>('Cn');
  const [targetLanguageError, setTargetLanguageError] = useState(false);

  const { t } = useTranslation();

  function onConnectAsVisitor() {
    const lError = !language;
    const tlError = !targetLanguage;

    setLanguageError(!lError);
    setTargetLanguageError(!tlError);

    if (!lError && !tlError) {
      console.log('connect as visitor');
    }
  }

  return (
    <>
      <Row style={{ width: '100%' }} horizontal={'space-between'}>
        <FormControl error={languageError} style={{ width: '45%' }}>
          <InputLabel>{t('landingPage.language')}</InputLabel>
          <Select
            style={{ width: '100%', minWidth: '120px' }}
            labelId="selectLanguage"
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value as Language);
            }}
          >
            {languages.filter(key => inputLanguage[key])
              .map(key => <MenuItem key={key} value={key}>{fullNameLanguages[key]}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl error={targetLanguageError} style={{ width: '45%' }}>
          <InputLabel>{t('landingPage.targetLanguage')}</InputLabel>
          <Select
            style={{ width: '100%', minWidth: '120px' }}
            labelId="selectTargetLanguage"
            value={targetLanguage}
            onChange={(event) => setTargetLanguage(event.target.value as Language)}
          >
            {languages.map((key) => <MenuItem key={key} value={key}>{t(`language.${key}`)}</MenuItem>)}
          </Select>
        </FormControl>
      </Row>
      <Row style={{ padding: '20px 0' }}>
        {isModal && <Button onClick={() => { }} color="primary">
          Cancel
        </Button>}
        <Button className='whiteButton' variant='outlined' type='submit' onClick={onConnectAsVisitor}> {t('connection.visitor')}</Button>
        {!isModal && <Button className='darkButton' onClick={() => { }}>{t('connection.moreDetails')}</Button>}
      </Row>
    </>
  );
};