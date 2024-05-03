import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Portfolio() {
  return (
    <Element name="portfolio" className="items-center flex flex-col bg-opacity-100 p-1 font-['apple-s-ystem'] mt-10 md:mx-20">
      <h1 className="text-center text-xl font-bold leading-4 mx-8">Explore nosso portfólio de projetos de desenvolvimento web</h1>
      <div className="p-10 leading-7 opacity-100">
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
        <a href="https://aa"></a>
      </div> 
    </Element>
  )
}

export default Portfolio;
