import { Description } from "../../Dialog/Description";

import { useTranslation } from "react-i18next";

export function SectionServicos() {
  const { t } = useTranslation();

  return (
    <section id="services">
      <Description
        bg="#E5E7EA"
        colorh1="#120736"
        colorh2="#977CED"
        colorText="#24292E"
        title={t("ServicesSectionTitle")}
        subtitle={t("ServicesSectionSubtitle")}
        p={t("ServicesSectionParagraph")}
      />
    </section>
  );
}
