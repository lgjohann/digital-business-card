import React from 'react'
import { IoMdMail } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai'

const myinfos = {
    name: 'Guilherme Johann',
    role: 'Frontend Developer',
    email: 'mailto:guilherme4695@gmail.com',
    linkedin: 'https://www.linkedin.com/in/guilherme-johann-15b97a18a/'
}


export default function Infos() {
    return (
        <div className='infos'>
            <img src="https://github.com/lgjohann.png" className='photo' />
            <div className='personal-infos'>
                <h1 className='name'>{myinfos.name}</h1>
                <h4 className='role'>{myinfos.role}</h4>
            </div>
            <div className="contact-buttons">
                <a href={myinfos.email}><button className='email-button'><IoMdMail />Email</button></a>
                <a href={myinfos.linkedin} target='_blank'><button className='linkedin-button'><AiFillLinkedin />LinkedIn</button></a>        
            </div>
        </div>
    )
} 