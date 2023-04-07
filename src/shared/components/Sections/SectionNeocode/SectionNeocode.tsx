import { Card } from "../../Dialog/Card";
import { Description } from "../../Dialog/Description";
import "./neocode.scss";

import { useTranslation } from "react-i18next";

export function SectionNeocode() {
  const { t } = useTranslation();

  return (
    <section id="neocode">
      <Description
        bg="#E5E7EA"
        colorh1="#120736"
        colorh2="#977CED"
        colorText="#24292E"
        title={t("NeocodeSectionTitle")}
        subtitle={t("NeocodeSectionSubtitle")}
        p={t("NeocodeSectionParagraph")}
      />

      <div className="sobre">
        <Card
          icon="Mission"
          title={t("CardPurposeTitle")}
          p={t("CardPurposeParagraph")}
        />

        <Card
          icon="Vision"
          title={t("CardVisionTitle")}
          p={t("CardVisionParagraph")}
        />

        <Card
          icon="Values"
          title={t("CardValuesTitle")}
          p={t("CardValuesParagraph")}
        />
      </div>
    </section>
  );
}
