import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainBlog } from "../components/Main/MainBlog";

export function Blog() {
  return (
    <div id="page-home">
      <Header pag="blog" />
      <MainBlog />
      <Footer />
    </div>
  );
}
