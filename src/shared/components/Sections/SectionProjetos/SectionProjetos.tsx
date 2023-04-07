import { Description } from "../../Dialog/Description";
import { Projects } from "./Projects";

import "./projects.scss";
import { useTranslation } from "react-i18next";

export function SectionProjetos() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <Description
        bg="#fff"
        colorText="#24292E"
        colorh1="#120736"
        colorh2="#977CED"
        title={t("ProjectsSectionTitle")}
        subtitle={t("ProjectsSectionSubtitle")}
        p=""
      />
      <Projects />
    </section>
  );
}
