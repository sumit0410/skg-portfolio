import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import me from '../assets/sumits21.jpg'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Sumitkumargautam" />
            <h2>Sumit Kumar Gautam</h2>
            <p>"Life is like riding a bicycle. To keep your balance, you must keep moving.”</p>
            <span>—Albert Einstein</span>
        </div>
        <aside>
            <h2>Get In Touch</h2>
            <article>
                <a href="https://www.linkedin.com/in/sumit-kr-gautam-24999b211/" target={"blank"}><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/sumit.04.10" target={"blank"}><AiFillInstagram/></a>
                <a href="https://github.com/sumit0410" target={"blank"}><AiFillGithub/></a>
                <a href="https://wa.me/+918418999262"><AiOutlineWhatsApp/></a>
                <a href="https://twitter.com/SumitKu37163123"><AiOutlineTwitter/></a>
            </article>
        </aside>
        {/* <p>&copy; 2023 Sumit Kumar Gautam</p> */}
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer;