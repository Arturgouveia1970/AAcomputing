import { Element } from 'react-scroll';

function Services() {
  return (
    <Element name="services" id="servicos">
      <div className="w-full text-center text-lg font-semibold flex flex-col p-1 bg-black text-white font-['Nunito']">
        <div className="mt-1flex flex-col items-center text-xl font-semibold">
          <h1>Explore nossos serviços de desenvolvimento de software</h1>
        </div>
        <div className="flex items-center p-20 justify-center gap-20">
          <ul className="list-disc list-outside text-white">
            <li className="p-2">Desenvolvimento de sites</li>
            <li className="p-2">Desenvolvimento de aplicativos móveis</li>
            <li className="p-2">Soluções de comércio eletrônico</li>
            <li className="p-2">Desenvolvimento de software personalizado</li>
            <li className="p-2">Hospedagem e Manutenção na Web</li>
          </ul>
          <ul className="list-disc list-outside text-white">
            <li className="p-2">Integração de API</li>
            <li className="p-2">Design de UI/UX</li>
            <li className="p-2">Sistemas de gerenciamento de conteúdo</li>
            <li className="p-2">Serviços de marketing digital</li>
            <li className="p-2">Consultoria e Suporte de TI</li>
          </ul>
        </div>      
      </div>
      <div>
      <img src="/src/assets/desktop.jpeg" alt="desktop-image" />
      </div>
    </Element>
  )
}

export default Services;
