import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

const Contact = ({ isLightTheme, userInfo }) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send post request to the backend
            await axios.post('/api/send-message', { subject, email, body });

            // Reset form fields
            setSubject('');
            setBody('');
            setEmail('');

            // Show success message to the user
            alert('Message sent successfully!');
        } catch (error) {
            // Handle error
            console.error(error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className={`contact ${isLightTheme ? 'bg-light-body-background1' : 'bg-dark-body-background1'}`}>
            <div className={`contact-container content-center justify-center`}>
                <h1 className={`contact-title text-4xl title font-bold text-center py-4 ${isLightTheme ? 'text-light-body-title1' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>Get in touch</h1>
                <h2 className={`contact-subtitle subtitle text-center ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' }}>Ready to take the next career step.<br></br> Let's start a conversation:</h2>
                <div className='send-message'>
                    <form className='message-form' onSubmit={handleSubmit}>
                        <input className={`subject border-1 ${isLightTheme ? 'border-light-highlight' : 'border-dark-highlight'}`} type="text" id="subject"  placeholder="Subject"  value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <input className={`email border-1 ${isLightTheme ? 'border-light-highlight' : 'border-dark-highlight'}`} type="email" id="email" placeholder="Your E-mail address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea className='message-body' id="body" placeholder='Message' value={body} onChange={(e) => setBody(e.target.value)} />
                        <button className={`contact-form-btn ${isLightTheme? 'bg-light-body-button text-light-body-text1':'bg-dark-body-button text-dark-body-text1'}`} type="submit">Send</button>
                    </form>
                </div>
                <h2 className={`contact-subtitle subtitle text-center ${isLightTheme ? 'text-light-body-text3' : 'text-dark-body-title1'}`} style={{ transition: 'color 0.5s ease' } }>Or reach out to me on:</h2>
                <div className='flex flex-row space-x-4'>
                    <a href={`${userInfo.linkedin}`} target="_blank" rel='noreferrer'>
                        <i className={`contact-icon fa fa-linkedin ${isLightTheme? 'bg-light-body-button text-light-body-text1':'bg-dark-body-button text-dark-body-text1'}`}></i>
                    </a>
                    <a href={`${userInfo.github}`} target="_blank" rel='noreferrer'>
                        <i className={`contact-icon fa fa-github ${isLightTheme? 'bg-light-body-button text-light-body-text1':'bg-dark-body-button text-dark-body-text1'}`}></i>
                    </a>
                    <a href={`mailto:${userInfo.email}`}>
                        <i className={`contact-icon fa fa-envelope ${isLightTheme? 'bg-light-body-button text-light-body-text1':'bg-dark-body-button text-dark-body-text1'}`}></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
