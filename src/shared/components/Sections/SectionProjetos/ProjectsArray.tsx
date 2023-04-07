import tools from "./Tools";

const projects = [
  {
    name: "PROJETO CLUBE DE MEMBROS",
    theme: "Sistema web",
    p: [
      'O projeto "Clube de Benefícios Web" é uma plataforma online que oferece benefícios exclusivos para os usuários cadastrados. A plataforma é um projeto completo de ponta a ponta, idealizado por um cliente da NeoCode Solutions, que envolveu o uso de várias tecnologias e frameworks.',
      "A plataforma utiliza metodologias ágeis, como Kanban e Scrum, para a gestão do projeto. A equipe responsável pela criação da plataforma se comunica através do Discord e utiliza o Trello e o Excel para gerenciar o andamento do projeto.",
      "No lado do servidor, a plataforma utiliza C# e dotnet para o desenvolvimento do back-end e JS, ReactJS e Typescript para o desenvolvimento do front-end. Para armazenar dados, o projeto utiliza o SQL Server como banco de dados. A plataforma foi desenvolvida com o Figma para garantir uma experiência de usuário de alta qualidade.",
      "Finalmente, o projeto foi implantado na nuvem Azure para garantir um desempenho escalável e confiável. O resultado é uma plataforma robusta, fácil de usar e atraente para os usuários, oferecendo benefícios exclusivos e relevantes para seus membros.",
    ],

    src: "images/svg/MockupPlaceholderIcon.svg",
    tools: [
      tools.JavaScript,
      tools.Csharp,
      tools.ReactJs,
      tools.Sass,
      tools.Figma,
      tools.SQLs,
    ],
  },
  {
    name: "PROJETO ARTES MARCIAIS",
    theme: "Sistema web",
    p: [
      "O projeto Gestão de Artes Marciais é um sistema web desenvolvido utilizando as tecnologias e frameworks mais modernos do mercado. Ele foi idealizado por um cliente da NeoCode Solutions e utiliza metodologias ágeis como Kanban e Scrum para gerenciamento do projeto.",
      "O banco de dados utilizado é o SQL Server, e o back-end foi desenvolvido em C# utilizando o framework .NET. Para o front-end, foram utilizados JS, ReactJS e Typescript, além de técnicas de UX e UI design utilizando a ferramenta Figma.",
      "Para gerenciamento do time de desenvolvimento, foram utilizadas ferramentas como Discord, Trello e Excel, visando uma melhor organização e produtividade do projeto.",
      "Por fim, o projeto foi integrado ao Azure DevOps, permitindo uma fácil implementação e integração com outros serviços da plataforma Azure, possibilitando uma melhor gestão DevOps Cloud.",
    ],

    src: "images/svg/MockupPlaceholderIcon.svg",
    tools: [
      tools.JavaScript,
      tools.Csharp,
      tools.ReactJs,
      tools.Sass,
      tools.Figma,
      tools.SQLs,
    ],
  },
];

export default projects;
