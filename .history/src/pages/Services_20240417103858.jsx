import { Element } from 'react-scroll';

function Services() {
  return (
    <Element name="services" id="servicos">
      <div className="w-full text-lg font-semibold p-1 bg-black text-white font-['Nunito']">
        <div className="mt-10 mb-6 text-xl font-semibold text-center">
          <h1>Explore nossos serviços de desenvolvimento de software</h1>
        </div>
        <div className="pb-4 text-sm">
          <ul className="list-disc list-inside text-white">
            <li className="p-2 ml-4 white">Desenvolvimento de sites</li>
            <li className="p-2 ml-4 break-words">Desenvolvimento de aplicativos móveis</li>
            <li className="p-2 ml-4 break-words">Soluções de comércio eletrônico</li>
            <li className="p-2 ml-4 break-words">Desenvolvimento de software personalizado</li>
            <li className="p-2 ml-4 break-words">Hospedagem e Manutenção na Web</li>
          </ul>
          <ul className="list-disc list-inside text-white">
            <li className="p-2 ml-4">Integração de API</li>
            <li className="p-2 ml-4">Design de UI/UX</li>
            <li className="p-2 ml-4">Sistemas de gerenciamento de conteúdo</li>
            <li className="p-2 ml-4">Serviços de marketing digital</li>
            <li className="p-2 ml-4">Consultoria e Suporte de TI</li>
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