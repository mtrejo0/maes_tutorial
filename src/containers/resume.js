import React from 'react'

import pdf from './Moises_Trejo_Resume.pdf';

import '../styles/resume.css'

const Resume = () => {

    let link = 'https://drive.google.com/file/d/1kF2FEqdvBEcCksgv8rMmDxnlfD3vDUaL/view?usp=sharing'

    let id = '1kF2FEqdvBEcCksgv8rMmDxnlfD3vDUaL'
    let src = `https://drive.google.com/file/d/${id}/preview`

    return <div class='center'>
        <h1>Resume</h1>
        <a href={pdf} download> <button class='button' >Download</button></a>
        <a href={link} target="_blank"> <button class='button' >View</button></a>

        <iframe class='pdf' src={src}/>
    </div>
}

export default Resume;