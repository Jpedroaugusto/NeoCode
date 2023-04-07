import projects from "./ProjectsArray";
import ButtonState from "../../../types/ButtonState";

import { useState } from "react";
import { Border } from "../../Dialog/Border";
import React from "react";

import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  const [buttonState, setButtonState] = useState<ButtonState>(
    projects.reduce((obj, _, index) => ({ ...obj, [index]: true }), {})
  );

  const openText = (i: number) => {
    const handle: boolean = buttonState[i];
    setButtonState({ ...buttonState, [i]: !handle });
    let txt = document.querySelectorAll(".text");
    let btn = document.querySelectorAll(".btn-project");

    txt[i].classList.toggle("active");
    btn[i].innerHTML = buttonState[i] ? t("ButtonReadLess") : t("ButtonReadMore");
  };

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={`project${index}`} className="project">
          <img src={project.src} />
          <div className="description-project">
            <h1>{project.name}</h1>
            <h2>{project.theme}</h2>
            <div>
              <Border width={100} color={"#977CED"} />
            </div>
            <div className="text">
              {project.p.map((p, i) => (
                <React.Fragment key={`paragraph-${i}`}>
                  <p>{p}</p>
                  <br />
                </React.Fragment>
              ))}
            </div>
            <button onClick={() => openText(index)} className="btn-project">
              {t("ButtonReadMore")}
            </button>
            <div className="tools">
              <h3>{t("ProjectTools")}:</h3>
              <div className="tools__icons">
                {project.tools.map((tool, index) => (
                  <img
                    className="tools__icons--icon"
                    key={`image${index}`}
                    src={tool}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
