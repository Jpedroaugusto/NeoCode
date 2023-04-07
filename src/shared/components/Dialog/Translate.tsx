import "./translate.scss";
import { useTranslation } from "react-i18next";

export function Translate() {
  const { i18n } = useTranslation();
  return (
    <div className="translate">
      <button onClick={() => {
        i18n.changeLanguage("en")
      }}>Clique para mudar para inglês</button>
    </div>
  );
}
