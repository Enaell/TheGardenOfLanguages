import { Column } from "@core/components/flexbox";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const IntroductionColumn = () => {
  const { t } = useTranslation();

  return (
    <Column width='100%'>
      <Typography variant="body2" color={'initial'}>{t('landingPage.welcomeText1')}</Typography>
      <Typography style={{ paddingTop: '10px' }} variant="body2" color={'initial'}>{t('landingPage.welcomeText2')}</Typography>
    </Column>
  );
};
