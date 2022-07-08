import React,{useRef,useState} from 'react'
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs
    .sendForm(
      "service_px7y45l",
      "template_6yp961g",
      formRef.current,
      "MsFlZN7-zmOtcVVkv"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );

  }
  return (
 
<div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={formRef} onSubmit={handleSubmit}method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pt-20 mt-40 '>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Subject' name='user_subject' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            {done && "Thank you..."}
        </form>
    </div>
   
    
  )
}

export default Contact