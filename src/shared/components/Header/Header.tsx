import MobileMenu from "../Dialog/MobileMenu";
import "./header.scss";
import NavListHome from "./NavListHome";
import NavListBlog from "./NavListBlog";

export function Header({ pag }) {
  window.addEventListener("scroll", () => {
    const header : HTMLHeadElement | null = document.querySelector("header");
    if(header) header.classList.toggle("sticky", window.scrollY > 0);
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
    case "blog":
      return (
        <header>
          <NavListBlog />
          <MobileMenu />
        </header>
      );
  }
}
