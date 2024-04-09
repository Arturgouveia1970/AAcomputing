
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Contacto() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>Contacte-nos</h1>
        <h5></h5> 
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
          <Label htmlFor="large" value="a sua " />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      <Button type="submit">Submit</Button>
    </form>
    </div>
    
  );
}

export default Contacto
