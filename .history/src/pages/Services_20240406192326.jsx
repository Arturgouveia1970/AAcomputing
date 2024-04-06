

function Services() {
  return (
    <div className="flex flex-col p-20 bg-black text-white font-['Nunito']">
      <div className="flex flex-col items-center text-xl font-semibold">
        <h1>Explore nossos serviços de desenvolvimento de software</h1>
      </div>
      <div className="flex items-center p-20 justify-center gap-20">
        <ul className="">
          <li className="p-2">Desenvolvimento de sites</li>
          <li className="p-2">Desenvolvimento de aplicativos móveis</li>
          <li className="p-2">Soluções de comércio eletrônico</li>
          <li >Desenvolvimento de software personalizado</li>
          <li>Hospedagem e Manutenção na Web</li>
        </ul>
        <ul>
          <li>Integração de API</li>
          <li>Design de UI/UX</li>
          <li>Sistemas de gerenciamento de conteúdo</li>
          <li>Serviços de marketing digital</li>
          <li>Consultoria e Suporte de TI</li>
        </ul>
      </div>
    </div>
  )
}

export default Services