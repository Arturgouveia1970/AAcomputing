import { Element } from 'react-scroll';

function About() {
  return (
    <Element name="about" className="w-full flex flex-col p-1 font-['Nunito'] scroll-smooth bg-opacity-60">
      <h1 className="w-full text-center text-lg font-semibold">Sobre AAcomputing</h1>
      <div className="p-5 bg-white shadow-lg opacity-70">
        <p>
          Na <b>AAcomputing</b>, somos apaixonados por criar, desenvolver e manter sites e 
          aplicativos que ajudam as empresas a prosperar no mundo digital.        
        </p>
        <br />
        <p>
          A nossa equipa de profissionais experientes na Maianga, em Luanda, dedica-se
          a fornecer serviços e soluções de primeira qualidade, adaptadas às necessidades 
          específicas dos nossos clientes.
        </p>
        <br />
        <p>
          Com foco na inovação e na satisfação do cliente, a <b>AAcomputing</b> está comprometida
          em ajudar as empresas a terem sucesso online. Contate-nos hoje para ver como 
          podemos ajudá-lo a atingir seus objetivos de desenvolvimento web.
        </p>
      </div>
    </Element>
  )
}

export default About;
