import { Description } from "../../Dialog/Description/Description";
import "./team.scss";

import { useTranslation } from "react-i18next";

export function SectionTime() {
  const { t } = useTranslation();
  return (
    <section id="team">
      <Description
        bg="#24292E"
        colorh1="#D4C9F8"
        colorh2="#977CED"
        colorText="#E5E7EA"
        title={t("TeamSectionTitle")}
        subtitle={t("TeamSectionSubtitle")}
        p={t("TeamSectionParagraph")}
      />
    </section>
  );
}
