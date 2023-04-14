import { Border } from "../Border/Border";
import "./Description.scss";

import DescriptionProps from "../../../types/DescriptionProps";

export function Description({
  bg,
  colorText,
  colorh1,
  colorh2,
  subtitle,
  title,
  p,
}: DescriptionProps) {
  return (
    <div style={{ backgroundColor: bg }} className="description">
      <h2 style={{ color: colorh2 }}>{subtitle}</h2>
      <h1 style={{ color: colorh1 }}>{title}</h1>
      <Border width={100} color={"#977CED"} />
      <p style={{ color: colorText }}>{p}</p>
    </div>
  );
}
