import { Footer } from "../shared/components/Footer/Footer";
import { Header } from "../shared/components/Header/Header";
import { MainHome } from "../shared/components/Main/MainHome";

export function Home() {
  return (
    <div id="page-home">
      <Header pag="home" />
      <MainHome />
      <Footer />
    </div>
  );
}
