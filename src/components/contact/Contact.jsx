import Navbar from "../navbar/Navbar"
import './contact.css'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { motion } from "framer-motion"
const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => setIsDarkMode(!isDarkMode);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7ea3145f-5ed3-4f08-ba33-ee6a98f91a78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <>
      <div className="content">
        <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <motion.div className="about" initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
          <div className="status-container mt-5">
            <div className="category">
              <span className="dot"></span>
              <p className="title">Hire Me</p>
            </div>
            <div className="availability">
              <span className="status-dot"></span>
              <span className="status-text">AVAILABLE FOR WORK</span>
            </div>
          </div>
          <h1 className="my__name">Design Inquiry</h1>
          <p className="detail__me">
           Got an idea and need design help? Reach out now
          </p>
          <div className="form__contact">
            <form onSubmit={onSubmit}>
              <div className="box__input">
                <div className="child__input">
                  <input type="text" name="name" className="input__text" required placeholder="Name" />
                </div>
                <div className="child__input">
                  <input type="email" name="email" className="input__text" required placeholder="Email Address" />
                </div>
              </div>
              <div className="box__input">
                <div className="child__input">
                  <textarea name="message" className="input__text" required placeholder="Message"></textarea>
                </div>
              </div>
              <button className="submit" type='submit'>Submit</button>
            </form>
          </div>
          <div className="status-container-social mt-5">
            <div className="category">
              <span className="dot"></span>
              <p className="title">Follow Me</p>
            </div>
            <div className="box__socials">
             <a href="https://porfoliome-host.vercel.app/" target="_blank" className="social">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
             </a>
             <a href="https://github.com/Ankeara" target="_blank" className="social">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
             <a href="https://www.behance.net/bde80a96/projects" target="_blank" className="social">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M6.75085 11.985V9.00492C6.75085 8.72282 6.9824 8.49414 7.26802 8.49414H9.24582C9.68571 8.49414 10.1378 8.56982 10.4656 8.8595C10.8163 9.16935 11.1564 9.64935 11.1395 10.2909C11.1199 11.0391 10.5736 11.9234 9.77316 11.985C8.97271 12.0466 8.22065 11.985 6.75085 11.985ZM6.75085 11.985V14.9675C6.75085 15.2496 6.98243 15.478 7.26804 15.4808C8.40871 15.4917 9.07239 15.5322 9.77316 15.4783C10.5736 15.4166 11.1199 14.5323 11.1395 13.7841C11.1564 13.1426 10.8163 12.6626 10.4656 12.3527C10.1378 12.063 9.68571 11.9873 9.24582 11.9873L6.75085 11.985ZM16.7954 14.9655C16.3572 15.3901 14.2227 16.2293 13.4537 14.0205C13.3738 13.8 13.3102 13.3244 13.3473 12.957M13.3473 12.957C13.4106 12.3314 13.6867 11.4539 14.7115 11.0958C16.1791 10.583 17.102 12.0065 17.341 12.957H13.3473ZM14.5888 9.00095H15.949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg> </a>
             <a href="https://dribbble.com/Ankeara" target="_blank" className="social">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
             </a>
            </div>
          </div>

          <footer className="footer__copyright">
            <p className="copyright">
              © Project Designer 2024. All rights reserved.
            </p>
          
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm">
                <li>
                  <a href="#" className="block transition">Created By </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                  </svg>
                </li>

                <li>
                  <a href="#" className="block"> Hout Ankeara </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                  </svg>
                </li>

                <li>
                  <a href="#" className="block"> Credit.Nur Praditya </a>
                </li>
              </ol>
            </nav>
          </footer>
        </motion.div>
      </div>
    </>
  )
}

export default Contact
