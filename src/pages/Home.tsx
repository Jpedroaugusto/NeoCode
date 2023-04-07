import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainHome } from "../components/Main/MainHome";

export function Home() {
  return (
    <div id="page-home">
      <Header pag="home" />
      <MainHome />
      <Footer />
    </div>
  );
}
