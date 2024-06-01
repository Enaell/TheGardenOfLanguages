import { useState } from 'react';
import { languages, inputLanguage, fullNameLanguages } from '@/app/utils/languages';
import { Column, Row } from '@/core/components';
import { Language } from '@/core/types/generics';
import { LoadingButton } from '@mui/lab';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type RegisterFormProps = {
  isModal?: boolean;
};

export const RegisterForm = ({ isModal = false }: RegisterFormProps) => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState<Language>('Fr');
  const [languageError, setLanguageError] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState<Language>('Cn');
  const [targetLanguageError, setTargetLanguageError] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  async function onRegister() {
    const usError = !username;
    const pError = !password;
    const eError = !(email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
    const lError = !language;
    const tlError = !targetLanguage;

    setUsernameError(usError);
    setPasswordError(pError);
    setEmailError(eError);
    setTargetLanguageError(tlError);
    setLanguageError(lError);

    if (!(usError || pError || eError || tlError || lError)) {
      try {
        console.log('on register');
      } catch (e) {
        console.log('ERROR ON REGISTER');
        console.log(e);
      }
    }
  }


  return (
    <Column vertical={'space-between'} horizontal={'center'} style={{ minWidth: '75%', paddingBottom: '10px' }}>
      <TextField
        error={usernameError}
        helperText={usernameError ? t('connection.usernameError') : null}
        required
        margin="dense"
        id="name"
        label={t('connection.username')}
        type="text"
        onChange={e => setUsername(e.target.value)}
        fullWidth
      />
      <TextField
        error={emailError}
        helperText={emailError ? t('connection.emailError') : null}
        required
        margin="dense"
        id="email"
        label={t('connection.email')}
        type="email"
        onChange={e => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        error={passwordError}
        helperText={passwordError ? t('connection.passwordError') : null}
        required
        margin="dense"
        id="password"
        label={t('connection.password')}
        type="password"
        onChange={e => setPassword(e.target.value)}
        fullWidth
      />
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
              .map((key) => <MenuItem key={key} value={key}>{fullNameLanguages[key]}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl error={targetLanguageError} style={{ width: '45%' }}>
          <InputLabel>{t('landingPage.targetLanguage')}</InputLabel>
          <Select
            style={{ width: '100%', minWidth: '120px' }}
            labelId="selectTargetLanguage"
            value={targetLanguage}
            onChange={(event) => {
              setTargetLanguage(event.target.value as Language);
            }}
          >
            {languages.map((key) => <MenuItem key={key} value={key}>{t(`language.${key}`)}</MenuItem>)}
          </Select>
        </FormControl>
      </Row>
      <Row style={{ padding: '20px 0' }}>
        {isModal && <Button onClick={() => { }} color="primary">
          Cancel
        </Button>}
        <LoadingButton className='whiteButton' variant='outlined' type='submit' onClick={() => onRegister()}> {t('connection.signin')}</LoadingButton>
      </Row>
    </Column>);
};