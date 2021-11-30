import { ChangeEvent } from "react";
import { LOCALES } from "i18n/locales";
import { useLocaleContext } from "./LocaleProvider";

export default function SwitchLocale() {
  const { updateLocale } = useLocaleContext();

  const handleOptionChange = (event: ChangeEvent) => {
    updateLocale((event?.target as HTMLOptionElement).value as LOCALES);
  };

  return (
    <div>
      <select onChange={handleOptionChange} name="locale" id="locale">
        <option value={LOCALES.ENGLISH}>English</option>
        <option value={LOCALES.SPANISH}>Spanish</option>
      </select>
    </div>
  );
}
