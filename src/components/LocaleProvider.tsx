import React, { ReactElement, useContext } from "react";
import { LOCALES } from "i18n/locales";
import { messages } from "i18n/messages";

const LocaleContext = React.createContext({
  locale: LOCALES.ENGLISH,
  defaultLocale: LOCALES.ENGLISH,
  messages: messages[LOCALES.ENGLISH],
  updateLocale: (locale: LOCALES) => {},
});
LocaleContext.displayName = "LocaleContext";

const useLocaleContext = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error(
      `localecontext must be rendered within a LocaleContextProvider`
    );
  }

  return context;
};

const LocaleContextProvider = ({ children }: { children: ReactElement }) => {
  const [locale, setLocale] = React.useState<LOCALES>(LOCALES.ENGLISH);

  const value = {
    locale,
    defaultLocale: LOCALES.ENGLISH,
    messages: messages[locale],
    updateLocale: (locale: LOCALES) => {
      setLocale(locale);
    },
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export { LocaleContextProvider, useLocaleContext };
