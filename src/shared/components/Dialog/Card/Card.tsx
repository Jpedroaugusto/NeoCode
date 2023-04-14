import { Border } from "../Border/Border";
import "./Card.scss";

import CardProps from "../../../types/CardProps";

export function Card({ icon, title, p }: CardProps) {
  return (
    <div className="card">
      <span className="icon">
        <img alt="card" src={`images/svg/${icon}Icon.svg`} />
      </span>
      <h1>{title}</h1>
      <Border width={50} color={"#977CED"} />
      <p>{p}</p>
    </div>
  );
}
