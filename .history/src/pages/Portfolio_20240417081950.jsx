import { Element } from "react-scroll";

function Portfolio() {
  return (
    <Element name="port" className="flex flex-col bg-opacity-100 p-20 pb-2 mb-10 font-['Nunito']">
      <h1 className="text-center text-xl font-bold leading-4 mb-4">Explore nosso portfólio de projetos de desenvolvimento web</h1>
      <div className="p-10 pb-0 leading-7 bg-white shadow-lg">
        <p>
          Na AAcomputing, temos orgulho de nossa capacidade de criar 
          sites e aplicativos inovadores e fáceis de usar para empresas
          de todos os tamanhos.
        </p>
        <br />
        <p>
          Nosso portfólio apresenta uma ampla gama de projetos, desde 
          sites de comércio eletrônico até aplicativos web personalizados, 
          que destacam nossa experiência em desenvolvimento de software.
        </p>
        <br />
        <p>
          Explore nosso portfólio e veja como podemos ajudar a elevar 
          sua presença online hoje.
        </p>
      </div> 
    </Element>
  )
}

export default Portfolio;
