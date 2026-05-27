export type AppLocale = 'en' | 'fr-FR' | 'es-ES' | 'ar-SA';

export type LocaleOption = {
  code: AppLocale;
  label: string;
  currency: string;
  currencySymbol: string;
};
