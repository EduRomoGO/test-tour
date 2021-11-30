import { LOCALES } from "./locales";

type Messages = {
  [key in LOCALES]: {
    startsIn: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export const messages: Messages = {
  [LOCALES.ENGLISH]: {
    startsIn: "starts in",
    days: "{num, plural, one {day} other {days}}",
    hours: "{num, plural, one {hour} other {hours}}",
    minutes: "{num, plural, one {minute} other {minutes}}",
    seconds: "{num, plural, one {second} other {seconds}}",
  },
  [LOCALES.SPANISH]: {
    startsIn: "comienza en",
    days: "{num, plural, one {día} other {días}}",
    hours: "{num, plural, one {hora} other {horas}}",
    minutes: "{num, plural, one {minuto} other {minutos}}",
    seconds: "{num, plural, one {segundo} other {segundos}}",
  },
};
