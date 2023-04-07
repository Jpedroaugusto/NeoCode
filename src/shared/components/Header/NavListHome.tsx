import Link from "./Link";
import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

export default function NavListHome() {
  function getDistanceFromTheTop(element: HTMLAnchorElement) {
    const id = element.getAttribute("href");
    const target = document.querySelector<HTMLElement>(id!);
    if (target) {
      return target.offsetTop;
    }
    return 0;
  }
  
  let click = 0;
  
  function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    click++;
    const distanceFromTheTop =
    getDistanceFromTheTop(event.currentTarget as HTMLAnchorElement) - 70;
    if (click == 1) {
      smoothScrollTo(0, distanceFromTheTop, 1400);
    }
  }
  
  function smoothScrollTo(endX: number, endY: number, duration: number = 400) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
    
    const easeInOutQuart = (
      time: number,
      from: number,
      distance: number,
      duration: number
      ) => {
        if ((time /= duration / 2) < 1) {
        return (distance / 2) * time * time * time * time + from;
      } else {
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
      }
    };
    
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
        setTimeout(() => {
          click = 0;
        }, 100);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

  const { t } = useTranslation();
  
  return (
    <nav>
      <ul className="nav-list">
        <Link handleClick={scrollToSection} link="#neocode" legend={t("LinkHeaderNeocode")} />
        <Link handleClick={scrollToSection} link="#team" legend={t("LinkHeaderTeam")} />
        <Link
          handleClick={scrollToSection}
          link="#services"
          legend={t("LinkHeaderServices")}
        />
        <a onClick={scrollToSection} href="#home">
          <img alt="logo" src="images/png/LogoNavBar.png" />
        </a>
        <Link
          handleClick={scrollToSection}
          link="#projects"
          legend={t("LinkHeaderProjects")}
        />
        <Link handleClick={scrollToSection} link="#contact" legend={t("LinkHeaderContact")} />
        <Link handleClick="" link="/blog" legend={t("LinkHeaderBlog")} />
      </ul>
    </nav>
  );
}
