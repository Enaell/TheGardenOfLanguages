import { useState } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Button, Column, Row } from "@core/components";

type RegisterFormProps = {
  isModal?: boolean;
};

export const AuthForm = ({ isModal = false }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const { t } = useTranslation();

  async function onAuth() {
    const pError = !password;
    const eError = !(email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));

    setPasswordError(pError);
    setEmailError(eError);
  }

  return (
    <Column vertical={'space-between'} horizontal={'center'} style={{ minWidth: '75%', paddingBottom: '10px' }}>
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
      <Row>
        {isModal && <Button onClick={() => { }} color="primary">
          Cancel
        </Button>}
        <Button className='whiteButton' variant='outlined' type='submit' onClick={() => onAuth()}> {t('connection.login')}</Button>
      </Row>
    </Column>);
};