import { SectionContato } from "../Sections/SectionContato/SectionContato";
import { SectionHome } from "../Sections/SectionHome/SectionHome";
// import { SectionPosts } from "../Sections/SectionPosts/SectionPosts";

export function MainBlog() {
  return (
    <main>
      <SectionHome background="blog" title="Olá"/>
      <SectionContato />
    </main>
  );
}
