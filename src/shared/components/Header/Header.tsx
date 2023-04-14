import MobileMenu from "../Dialog/MobileMenu/MobileMenu";
import "./header.scss";
import NavListHome from "./NavListHome";

type HeaderProps = {
  pag: string;
};

export function Header({ pag }: HeaderProps) {
  window.addEventListener("scroll", () => {
    const header: HTMLHeadElement | null = document.querySelector("header");
    if (header) header.classList.toggle("sticky", window.scrollY > 0);
  });

  pag = pag.toLowerCase();

  switch (pag) {
    case "home":
      return (
        <header>
          <NavListHome />
          <MobileMenu />
        </header>
      );
    default:
      return <header></header>;
  }
}
