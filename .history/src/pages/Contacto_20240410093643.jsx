import { useRef } from 'react';
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
    <div className="flex flex-col gap-4 items-center mt-10">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold leading-5 mb-3">Contacte-nos</h1>
        <h5>Chamada urgente?</h5>        
        <div className='mx-auto p-6 flex font-semibold items-center justify-center border rounded-full bg-blue text-white'>
          <span className="mr-2"><BsTelephoneFill /></span>
          <span>+244927332692</span>
        </div> 
        <h5>Ou mande-nos um email</h5>       
      </div>
      
      <form 
        id='contact-form' 
        ref={form} 
        onSubmit={sendEmail}
        className='flex flex-col gap-3 max-w-xl'
      >
        <input type="hidden" name="contact_number" value="697483" />
        <label>Nome</label>
        <input 
          type="text" 
          name="user_name" 
          className='rounded-xl'  
        />
        <label>Email</label>
        <input 
          type="email" 
          name="user_email"
          className='rounded-xl'  
        />
        <label>Mensagem</label>
        <textarea 
          name="message"
          className='rounded-xl'  
        />
        <input 
          type="submit" 
          value="Enviar" 
          className='bg-blue text-white p-4 rounded-full'  
        />
      </form>    
    </div>  
  );
}

export default Contacto;
