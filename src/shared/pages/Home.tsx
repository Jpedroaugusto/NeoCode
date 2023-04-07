import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainHome } from "../components/Main/MainHome";
import { Translate } from "../components/Dialog/Translate";

export function Home() {
  return (
    <div id="page-home">
      <Header pag="home" />
      <MainHome />
      <Footer />
      <Translate />
    </div>
  );
}
