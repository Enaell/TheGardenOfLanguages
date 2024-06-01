import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField } from '@mui/material';
import { Column, Row } from '@core/components';

export const ContactPanel = () => {

  const { t } = useTranslation();

  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    comments: ''
  });

  const [error, setError] = useState({
    name: true,
    email: true,
    subject: true,
    comments: true
  });

  function updateFields(fieldName: string, fieldValue: string) {
    setFields({ ...fields, [fieldName]: fieldValue });
    if (fieldName === 'email')
      setError({ ...error, [fieldName]: (!fieldValue || !fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) });
    else setError({ ...error, [fieldName]: !fieldValue });
  }

  return (
    <Column vertical={'space-between'} horizontal={'center'} style={{ width: '100%', maxWidth: '800px', padding: '40px', backgroundColor: 'white', borderRadius: '30px', marginTop: '40px' }}>
      <Row width='100%' horizontal='space-between'>
        <TextField
          required
          error={error.name}
          margin="dense"
          id="name"
          label={t('connection.username')}
          type="text"
          onChange={(event) => { updateFields('name', event.target.value); }}
          style={{ width: '40%' }}
        />
        <TextField
          required
          error={error.email}
          margin="dense"
          id="email"
          label={t('connection.email')}
          type="email"
          onChange={(event) => { updateFields('email', event.target.value); }}
          style={{ width: '40%' }}
        />
      </Row>
      <TextField
        required
        error={error.subject}
        margin="dense"
        id="subject"
        label={t('connection.subject')}
        type="text"
        onChange={(event) => { updateFields('subject', event.target.value); }}
        fullWidth
      />
      <TextField
        required
        error={error.comments}
        margin="dense"
        id="comments"
        label={'Comments'}
        type="text"
        onChange={(event) => { updateFields('comments', event.target.value); }}
        multiline
        rows={6}
        maxRows={10}
        fullWidth
      />
      <Button
        className='whiteButton'
        variant='outlined'
        type='submit'
        onClick={() => { }}
        // onClick={sendContactMessage}
        style={{ marginTop: '30px' }}>
        {t('connection.send')}
      </Button>
    </Column>
  );
};