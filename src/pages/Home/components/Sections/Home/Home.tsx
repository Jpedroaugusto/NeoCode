import "./home.scss";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <section id="home">
      <h1>{t('Welcome')}</h1>
    </section>
  );
}