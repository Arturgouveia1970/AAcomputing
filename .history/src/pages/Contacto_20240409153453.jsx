import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { BsTelephoneFill } from "react-icons/bs";

function Contacto() {
  return (

    const handleSubmit = (event) => {
      event.preventDefault();
      // Collect form data and send it to your email
      
    };

    <div className="flex flex-col gap-4 items-center">
      <div className="">
        <h1 className="text-lg font-bold leading-5">Contacte-nos</h1>
        <h5>Chamada urgente?</h5>
        <div className="flex flex-col mt-4">
        
        <div className='mx-auto p-6 flex font-semibold items-center justify-center border rounded-full bg-blue text-white'>
          <span className="mr-2"><BsTelephoneFill /></span>
          <span>+244927332692</span>
        </div> 
        <h5>Ou mande-nos um email</h5>       
      </div>
    
      <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4 mt-3">
      <div className="max-w-xl">
        <div className="mb-2 ">
          <Label htmlFor="name" value="o seu nome" />
        </div>
        <TextInput className="max-w-xl" id="nome1" type="name" placeholder="o seu nome" required />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email1" value="o seu email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required className="w-full" />
      </div>      
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <div className="block">
          <Label htmlFor="large" value="a sua mensagem" />
        </div>
        <TextInput id="large" type="text" className="w-full h-32" />
      <Button type="submit" className="w-full">Submit</Button>
    </form>
    </div>
  </div>  
  );
}

export default Contacto;
