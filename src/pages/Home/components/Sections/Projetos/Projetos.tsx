import "./projects.scss";
import "./ProjetosNeocode/tools/tools.scss";

import { Description } from "../../../../../shared/components/Dialog/Description/Description";
import { ProjetoArtesMaciais } from "./ProjetosNeocode/ProjetoArtesMarciais";
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

      <div className="projects">
        <ProjetoArtesMaciais />
        <ProjetoArtesMaciais />
      </div>
    </section>
  );
}
