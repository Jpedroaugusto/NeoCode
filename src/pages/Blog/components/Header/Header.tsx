import MobileMenu from "../../../../shared/components/Dialog/MobileMenu/MobileMenu";
import { NavList } from "./NavList";
import "./header.scss";

export function Header() {
  window.addEventListener("scroll", () => {
    const header: HTMLHeadElement | null = document.querySelector("header");
    if (header) header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <header>
      <NavList />
      <MobileMenu />
    </header>
  );
}