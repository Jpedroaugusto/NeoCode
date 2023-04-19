import * as Yup from "yup";
import "./contato.scss";
import Swal from "sweetalert2";
import { Description } from "../../Dialog/Description/Description";
import { useTranslation } from "react-i18next";

export function SectionContato() {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    name: Yup.string().required("nome é obrigatório"),
    email: Yup.string().email("email inválido").required("email é obrigatório"),
    number: Yup.string().required("número é obrigatório"),
    message: Yup.string().required("mensagem é obrigatória"),
  });

  const Alert = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const values = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        number: formData.get("number") as string,
        message: formData.get("message") as string,
      };

      await schema.validate(values);

      Swal.fire({
        title: "<strong>Sua mensagem foi enviada com sucesso!</strong>",
        icon: "success",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Erro!",
        text: "O campo " + error.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section id="contact">
      <Description
        bg="#24292E"
        colorh1="#D4C9F8"
        colorh2="#977CED"
        colorText="#E5E7EA"
        title={t("ContactSectionTitle")}
        subtitle={t("ContactSectionSubtitle")}
        p={t("ContactSectionParagraph")}
      />
      <div className="box">
        <form onSubmit={Alert}>
          <input
            id="name-field"
            type="text"
            name="name"
            placeholder={t("InputName") as string}
          />
          <input
            id="email-field"
            type="text"
            name="email"
            placeholder={t("InputEmail") as string}
          />
          <input
            id="number-field"
            type="text"
            name="number"
            placeholder={t("InputNumber") as string}
          />
          <textarea
            id="message-field"
            name="message"
            placeholder={t("InputMessage") as string}
          />

          <div className="dashboard">
            <button type="submit">{t("InputButton")}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
