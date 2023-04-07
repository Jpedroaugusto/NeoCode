import { SectionNeocode } from "../Sections/SectionNeocode/SectionNeocode";
import { SectionTime } from "../Sections/SectionTime/SectionTime";
import { SectionServicos } from "../Sections/SectionServiços/SectionServicos";
import { SectionContato } from "../Sections/SectionContato/SectionContato";
import { SectionProjetos } from "../Sections/SectionProjetos/SectionProjetos";
import { SectionHome } from "../Sections/SectionHome/SectionHome";


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
