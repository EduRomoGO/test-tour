import React, { useEffect } from "react";
import Countdown from "components/Countdown";
import { IntlProvider } from "react-intl";
import { useLocaleContext } from "components/LocaleProvider";
import SwitchLocale from "components/SwitchLocale";

function CountdownWrapper() {
  const [countdown, setCountdown] = React.useState<number>(100);

  const getCountDownInSeconds = () => {
    const FAKE_BLACK_FRIDAY = new Date("2021-11-31");

    const secondsDiff =
      (FAKE_BLACK_FRIDAY.getTime() - new Date().getTime()) / 1000;

    if (secondsDiff > 0) {
      return Math.floor(secondsDiff);
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountDownInSeconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{countdown > 0 && <Countdown countdown={countdown} />}</div>;
}

function App() {
  const { locale, defaultLocale, messages } = useLocaleContext();

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <SwitchLocale />
      <CountdownWrapper />
    </IntlProvider>
  );
}

export default App;
