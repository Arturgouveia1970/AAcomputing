import { useRef } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';

function Contacto() {
  // ('artgouveiag@gmail.com');
  //  servive_key('service_cv4y3di');
  // template_key('template_ys3ohdk');
  // public_key('J_mwjbn0_mLl6UFwW');
     
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log('Sending email...');
  
    emailjs
     .sendForm('service_cv4y3di', 'template_ys3ohdk', form.current, {
        publicKey: 'J_mwjbn0_mLl6UFwW',
      })
     .then(
        () => {
          console.log('Email sent successfully!');
        },
        (error) => {
          console.log('Failed to send email', error.text);
        },
      )
     .then(() => {
        console.log('Email sent successfully!');
      })
     .catch((error) => {
        console.log('Failed to send email', error.text);
      });
  };

  return (
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
    
      <form ref={form} id='contact-form' onSubmit={sendEmail} className="flex max-w-xl flex-col gap-4 mt-3">
      <div className="max-w-xl">
        <div className="mb-2 ">
          <Label htmlFor="name" value="o seu nome" />
        </div>
        <TextInput className="max-w-xl" type="text" name="user_name" id="nome1" placeholder="o seu nome" required />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email1" value="o seu email" />
        </div>
        <TextInput type="email" name="user_email" id="email1" placeholder="name@flowbite.com" required className="w-full" />
      </div>      
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <div className="block">
          <Label htmlFor="large" value="mensagem" name="message" />
        </div>
        <TextInput type="submit" value="Send" na id="large" className="w-full h-32" />
      <Button type="submit" className="w-full">Submit</Button>
    </form>
    </div>
  </div>  
  );
}

export default Contacto;
