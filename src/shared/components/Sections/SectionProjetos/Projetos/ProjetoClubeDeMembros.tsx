import { Border } from "../../../Dialog/Border";
import { useTranslation } from "react-i18next";
import tools from "./tools/Tools";
import "./project.scss";
import { useState } from "react";

interface ReadMoreButtonProps {
  onToggle: (newState: boolean) => void;
  readMore: boolean;
  buttonText: string;
}

function ReadMoreButton({ onToggle, readMore, buttonText }: ReadMoreButtonProps) {
  const handleClick = () => {
    onToggle(!readMore);
  };

  return (
    <button className="btn" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export function ProjetoClubeDeMembros() {
  const { t } = useTranslation();
  const { Sass, JavaScript, Figma, SQLs, ReactJs, Csharp } = tools;
  const [readMore, setReadMore] = useState(false);

  const handleToggleReadMore = (newState: boolean) => {
    setReadMore(newState);
  };

  return (
    <div className="project">
      <img src="imagem" alt="imagem" />
      <div className="project__description">
        <h1>Projeto clube de membros</h1>
        <h2>sistema web</h2>
        <Border width={100} color={"#977CED"} />
        <div className={`text ${readMore ? 'active' : ''}`}>
          <p>
            O projeto Gestão de Artes Marciais é um sistema web desenvolvido
            utilizando as tecnologias e frameworks mais modernos do mercado. Ele
            foi idealizado por um cliente da NeoCode Solutions e utiliza
            metodologias ágeis como Kanban e Scrum para gerenciamento do
            projeto.
          </p>
          <p>
            O banco de dados utilizado é o SQL Server, e o back-end foi
            desenvolvido em C# utilizando o framework .NET. Para o front-end,
            foram utilizados JS, ReactJS e Typescript, além de técnicas de UX e
            UI design utilizando a ferramenta Figma.
          </p>
          <p>
            Para gerenciamento do time de desenvolvimento, foram utilizadas
            ferramentas como Discord, Trello e Excel, visando uma melhor
            organização e produtividade do projeto.
          </p>
          <p>
            Por fim, o projeto foi integrado ao Azure DevOps, permitindo uma
            fácil implementação e integração com outros serviços da plataforma
            Azure, possibilitando uma melhor gestão DevOps Cloud.
          </p>
        </div>
        <ReadMoreButton
          onToggle={handleToggleReadMore}
          readMore={readMore}
          buttonText={readMore ? t("ButtonReadLess") : t("ButtonReadMore")}
        />
        <div className="tools">
          <h3>{t("ProjectTools")}:</h3>
          <div className="tools__icons">
            <img className="tools__icons--icon" src={JavaScript} />
            <img className="tools__icons--icon" src={ReactJs} />
            <img className="tools__icons--icon" src={Csharp} />
            <img className="tools__icons--icon" src={SQLs} />
            <img className="tools__icons--icon" src={Sass} />
            <img className="tools__icons--icon" src={Figma} />
          </div>
        </div>
      </div>
    </div>
  );
}
