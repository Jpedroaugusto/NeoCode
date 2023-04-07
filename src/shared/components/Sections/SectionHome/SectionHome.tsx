import "./home.scss";
import HomeProps from "../../../types/HomeProps";

export function SectionHome({ background, title }: HomeProps) {
  return (
    <section
      style={{ backgroundImage: `url(images/png/${background}.png)` }}
      id="home"
    >
      <div className="introduction">
        <h1>{title}</h1>
      </div>
    </section>
  );
}