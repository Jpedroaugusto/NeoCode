import { SectionNeocode } from "../Sections/Neocode/SectionNeocode";
import { SectionTime } from "../Sections/Time/SectionTime";
import { SectionServicos } from "../Sections/Serviços/Servicos";
import { SectionContato } from "../../../../shared/components/Sections/Contato/SectionContato";
import { SectionProjetos } from "../Sections/Projetos/Projetos";
import { Home } from "../Sections/Home/Home";

export function Main() {
  return (
    <main>
      <Home/>
      <SectionNeocode/>
      <SectionTime/>
      <SectionServicos/>
      <SectionProjetos/>
      <SectionContato/>
    </main>
  );
}
