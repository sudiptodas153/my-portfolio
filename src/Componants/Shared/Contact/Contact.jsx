import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8dv5vcb', 'template_zh18ben', form.current, {
                publicKey: 'YxUpco6ItHb731mIM',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for contact me.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   form.current.reset();
                   
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div id='contact'>
            <h2 className='text-4xl font-bold text-center'>Contact</h2>
            <div className='md:flex gap-5  mt-10 border border-gray-400 rounded-lg p-5'>
                <div className='flex-1 border border-gray-600 rounded-lg p-5'>
                    <h2 className='text-2xl mb-3 font-bold'>Contact Information</h2>
                    <div className='space-y-2'>
                        <p className='flex font-semibold md:text-xl items-center gap-2'><FaEnvelope></FaEnvelope>Email: Sudiptodas4093@gmail.com</p>
                        <p className='flex font-semibold md:text-xl items-center gap-2'><FaPhone></FaPhone> Phone: +8801312590698</p>
                        <p className='flex font-semibold md:text-xl items-center gap-2'><FaWhatsapp></FaWhatsapp> Whatsapp: +8801312590698</p>

                    </div>
                </div>
                <div className='flex-1'>
                    <form ref={form} onSubmit={sendEmail}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" required name='name' className="border border-gray-500 rounded-lg p-2 outline-none" placeholder="type your name...." />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" required name='email' className="border border-gray-500 rounded-lg p-2 outline-none" placeholder="type your email...." />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea name="message" required className='border border-gray-500 rounded-lg p-2 outline-none' placeholder='Say something here....' rows={4} id=""></textarea>
                        </fieldset>
                        <button className='btn w-full text-black bg-white'>Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;