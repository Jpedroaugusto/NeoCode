import { SectionContato } from "../Sections/Contato/SectionContato";
import { SectionHome } from "../Sections/Home/SectionHome";
// import { SectionPosts } from "../Sections/SectionPosts/SectionPosts";

export function MainBlog() {
  return (
    <main>
      <SectionHome background="blog" title="Olá" />
      <SectionContato />
    </main>
  );
}
