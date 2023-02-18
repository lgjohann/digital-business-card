import React from 'react'
import { FaGithub } from 'react-icons/fa'

const github = 'https://github.com/lgjohann'

export default function Footer() {
    return (
        <footer>
            <a className='github' href={github} target='_blank'>
            <div className='footer-content'>
            <FaGithub/>
            </div>
            </a>
        </footer>
    )
}