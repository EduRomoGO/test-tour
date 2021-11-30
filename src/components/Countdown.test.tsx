import { render } from "@testing-library/react";
import Countdown from "./Countdown";

import { IntlProvider } from "react-intl";
import { LOCALES } from "i18n/locales";
import { messages } from "i18n/messages";
import { ReactElement, ComponentType } from "react";

const locale = LOCALES.ENGLISH;

const Wrapper = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
};

test("renders countdown correctly", () => {
  const { container } = render(
    <Countdown countdown={24 * 3600 + 3 * 3600 + 2 * 60 + 34} />,
    { wrapper: Wrapper as ComponentType }
  );

  const days = container.querySelector("#days");
  const hours = container.querySelector("#hours");
  const minutes = container.querySelector("#minutes");
  const seconds = container.querySelector("#seconds");

  expect(days).toBeInTheDocument();
  expect(days).toHaveTextContent("1");

  expect(hours).toBeInTheDocument();
  expect(hours).toHaveTextContent("3");

  expect(minutes).toBeInTheDocument();
  expect(minutes).toHaveTextContent("2");

  expect(seconds).toBeInTheDocument();
  expect(seconds).toHaveTextContent("34");
});

test("renders countdown correctly with countdown 0", () => {
  const { container } = render(<Countdown countdown={0} />, {
    wrapper: Wrapper as ComponentType,
  });

  const days = container.querySelector("#days");
  const hours = container.querySelector("#hours");
  const minutes = container.querySelector("#minutes");
  const seconds = container.querySelector("#seconds");

  expect(days).toBeInTheDocument();
  expect(days).toHaveTextContent("0");

  expect(hours).toBeInTheDocument();
  expect(hours).toHaveTextContent("0");

  expect(minutes).toBeInTheDocument();
  expect(minutes).toHaveTextContent("0");

  expect(seconds).toBeInTheDocument();
  expect(seconds).toHaveTextContent("0");
});

test("renders countdown correctly with a negative countdown", () => {
  const { container } = render(<Countdown countdown={0} />, {
    wrapper: Wrapper as ComponentType,
  });

  const days = container.querySelector("#days");
  const hours = container.querySelector("#hours");
  const minutes = container.querySelector("#minutes");
  const seconds = container.querySelector("#seconds");

  expect(days).toBeInTheDocument();
  expect(days).toHaveTextContent("0");

  expect(hours).toBeInTheDocument();
  expect(hours).toHaveTextContent("0");

  expect(minutes).toBeInTheDocument();
  expect(minutes).toHaveTextContent("0");

  expect(seconds).toBeInTheDocument();
  expect(seconds).toHaveTextContent("0");
});
