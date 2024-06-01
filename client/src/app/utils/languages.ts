import localeFr from '@locale/fr.json';
import localeEn from '@locale/en.json';
import localeCn from '@locale/cn.json';
import { Language } from '@core/types/generics';

export const languages: Language[] = ['Fr', 'En', 'Cn'];

export const fullNameLanguages: { [key in Language]: string } = {
  Fr: "Francais",
  Cn: "中文",
  En: "English",
};

export const inputLanguage: { [key in Language]: boolean } = {
  Fr: true,
  Cn: true,
  En: true,
};

export const fileLanguage: { [key in Language]: any } = {
  Fr: localeFr,
  Cn: localeCn,
  En: localeEn,
};