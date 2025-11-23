import React, { useRef, useState } from 'react';
import { personalInfo } from '../assets/assets';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace these with your actual EmailJS service ID, template ID, and public key
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <div className='py-20 bg-dark-100 min-h-screen pt-32' id='contact'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-4xl md:text-5xl font-bold text-white'
                    >
                        Get in <span className='text-purple'>Touch</span>
                    </motion.h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='space-y-8'
                    >
                        <div className='bg-dark-200 p-8 rounded-2xl border border-gray-800 hover:border-purple/50 transition-all duration-300'>
                            <h3 className='text-2xl font-bold text-white mb-6'>Contact Information</h3>
                            <div className='space-y-6'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-dark-300 rounded-lg text-purple text-xl'>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className='text-gray-300 font-medium mb-1'>Email</h4>
                                        <p className='text-gray-400'>{personalInfo.contact.email}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-dark-300 rounded-lg text-purple text-xl'>
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className='text-gray-300 font-medium mb-1'>Phone</h4>
                                        <p className='text-gray-400'>{personalInfo.contact.phone}</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-dark-300 rounded-lg text-purple text-xl'>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className='text-gray-300 font-medium mb-1'>Location</h4>
                                        <p className='text-gray-400'>{personalInfo.contact.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-linear-to-r from-purple to-pink-600 p-8 rounded-2xl text-white'>
                            <h3 className='text-2xl font-bold mb-4'>Let's Build Something Amazing!</h3>
                            <p className='mb-6 opacity-90'>I'm currently available for freelance projects and full-time opportunities.</p>
                            <a
                                href="/CV-Hasib Bin Farid.pdf"
                                download="CV-Hasib Bin Farid.pdf"
                                className='inline-block bg-white text-purple px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors'
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='bg-dark-200 p-8 rounded-2xl border border-gray-800'
                    >
                        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-gray-300 text-sm font-medium'>Name</label>
                                    <input type="text" name="user_name" required className='w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple transition-colors' placeholder='Your Name' />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-gray-300 text-sm font-medium'>Email</label>
                                    <input type="email" name="user_email" required className='w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple transition-colors' placeholder='Name@example.com' />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className='text-gray-300 text-sm font-medium'>Subject</label>
                                <input type="text" name="subject" required className='w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple transition-colors' placeholder='Project Inquiry' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-gray-300 text-sm font-medium'>Message</label>
                                <textarea name="message" rows="5" required className='w-full bg-dark-300 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple transition-colors' placeholder='Tell me about your project...'></textarea>
                            </div>

                            <button type='submit' disabled={status === 'sending'} className='w-full bg-purple text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                                {status === 'sending' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                            </button>

                            {status === 'success' && <p className='text-green-500 text-center'>Message sent successfully!</p>}
                            {status === 'error' && <p className='text-red-500 text-center'>Failed to send message. Please try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
