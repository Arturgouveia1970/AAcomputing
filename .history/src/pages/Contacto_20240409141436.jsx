
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Contacto() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>Contacte-nos</h1>
        <h5>Chamada urgente?</h5>
        <div className="flex flex-col mt-4">
        <p className="p-7 items-center justify-center mx-auto border rounded-full bg-blue text-white">Entre em contacto conosco</p>
        <div className='mx-auto p-4 flex items-center font-semibold'>
          <span className="mr-2"><BsTelephoneFill /></span>
          <span>+244927332692</span>
        </div>        
        <div className="mt-5">
          <img src="/src/assets/mobile-575.jpeg" className="rounded" alt="image" />
        </div>

      </div>
      </div>
      <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="o seu nome" />
        </div>
        <TextInput id="nome1" type="name" placeholder="o seu nome" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="o seu email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>      
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <div className="mb-2 block">
          <Label htmlFor="large" value="a sua mensagem" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      <Button type="submit">Submit</Button>
    </form>
    </div>
    
  );
}

export default Contacto
