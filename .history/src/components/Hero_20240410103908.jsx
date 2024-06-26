import { BsTelephoneFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="p-20 flex flex-col items-center mx-auto justify-center bg-opacity-100 shadow font-['Nunito']">
      <h1 className="font-semibold text-2xl mt-6">Serviços especializados de desenvolvimento de software em Angola</h1>
      <br />
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <p>
          <b>AAcomputing</b> é uma empresa especializada no desenvolvimento de software localizada no bairro da Maianga, em Luanda, que oferece
          uma variedade de serviços para ajudar negócios a prosperar no mundo digital.
        </p>
        
        <br />
        <p> 
          A nossa equipe de desenvolvedores e designers experientes são especializados na criação de soluções website
          personalizadas sob medida para atender às necessidades específicas de cada cliente, garantindo uma presença online única e eficaz.
        </p>
      
        <br />
        <p>
          Se voçe precisa de um novo site, uma plataforma de comércio electrónico ou um aplicativo móvel, a AAcomputing tem as habilidades e a
          experiência para tornar sua visão em realidade. Contacte-nos hoje mesmo para discutir o seu projecto e ver como nós podemos ajudá-lo a ter successo on-line. 
        </p>
      </div>

      <div className="flex flex-col mt-10">
        <p className="p-6 items-center justify-center mx-auto border rounded-full bg-blue text-white">Entre em contacto conosco</p>
        <div className='mx-auto p-4 flex items-center font-semibold text-2xl'>
          <span className="mr-2"><BsTelephoneFill /></span>
          <span>+244927332692</span>
        </div>        
        <div className="mt-5">
          <img src="/src/assets/mobile-575.jpeg" className="rounded" alt="image" />
        </div>

      </div>
      
    </div>
  )
}
