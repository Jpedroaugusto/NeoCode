import { SectionNeocode } from "../Sections/Neocode/SectionNeocode";
import { SectionTime } from "../Sections/Time/SectionTime";
import { SectionServicos } from "../Sections/Serviços/SectionServicos";
import { SectionContato } from "../Sections/Contato/SectionContato";
import { SectionProjetos } from "../Sections/SectionProjetos/SectionProjetos";
import { SectionHome } from "../Sections/Home/SectionHome";

import { useTranslation } from "react-i18next";

export function MainHome() {
  const { t } = useTranslation();

  return (
    <main>
      <SectionHome background="home" title={t("Welcome")} />
      <SectionNeocode />
      <SectionTime />
      <SectionServicos />
      <SectionProjetos />
      <SectionContato />
    </main>
  );
}
