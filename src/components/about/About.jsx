import "./about.css"
import Navbar from "../navbar/Navbar"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Me from '../../assets/images/avatar.jpeg'
import Project1 from '../../assets/images/1.png'
import Project2 from '../../assets/images/2.png'
import Project3 from '../../assets/images/3.png'
import { MoveRight  } from 'lucide-react';
import { motion } from "framer-motion"
const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => setIsDarkMode(!isDarkMode);

  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [buttonText, setButtonText] = useState("Copy Email"); // State to manage button text

const copyEmailToClipboard = () => {
  const email = "ankeara017@email.com"; // Replace this with the actual email you want to copy
  navigator.clipboard.writeText(email)
    .then(() => {
      // Show alert
      setShowAlert(true);
      
      // Change button text to "Copied!" and set it back to "Copy Email" after 2 seconds
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy Email"), 2000);
      
      // Automatically hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};

const closeAlert = () => {
  setShowAlert(false); // Manually close alert
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
              <p className="title">About Me</p>
            </div>
          </div>
          <h1 className="my__name">It's Me Ankeara</h1>
          <p className="detail__me">
            As a dedicated Frontend Developer, I specialize in creating dynamic and visually appealing user interfaces that enhance user experience and drive engagement. With a solid understanding of modern web technologies and design principles, I am proficient in translating design concepts into responsive and interactive web applications.
          </p>
          <div className="about__img">
            <img src={Me} alt="Hout Ankeara" />
          </div>
          <h2 className="my__skill">Design and Development Skills:</h2>
          <ul>
              <li><strong>UI/UX Design</strong>: You design user interfaces and experiences that prioritize intuitive use, aesthetic appeal, and accessibility across different devices and platforms.</li>
              <li><strong>Frontend Development</strong>: You possess strong frontend development skills, particularly in <strong>React.js, HTML, CSS,</strong> and <strong>JavaScript</strong>, allowing you to not only design but also implement functional and dynamic user interfaces.</li>
              <li><strong>Mobile and Web Development</strong>: Your expertise spans across web and mobile platforms, ensuring responsive and adaptable designs.</li>
          </ul>
          <h2 className="my__skill">Tools and Software:</h2>
          <ul>
              <li><strong>Design Tools:</strong>: You use tools like <strong>Adobe XD, Figma, Canva</strong> for wireframing, prototyping, and collaborating with developers and clients.</li>
          </ul>
          <h2 className="my__skill">Technical Tools:</h2>
          <ul>
              <li><strong>Text Editors:</strong>: You frequently use text editors like <strong>VS Code, Sublime Text</strong> to manage code for your projects, especially for frontend development tasks.</li>
          </ul>
          <ul>
              <li><strong>Development Setup:</strong>: ou are familiar with <strong>Vite</strong> for building and optimizing React applications, preferring efficient tools that boost productivity.</li>
          </ul>
          <div className="view__more flex items-center justify-center mt-5 mb-5">
            <a href="https://porfoliome-host.vercel.app/" target="blank" className="flex items-center justify-center ">See More About Me <MoveRight className="ml-3" size={16} absoluteStrokeWidth /></a>
          </div>

          <h2 className="my__name">My Side Projects</h2>
          <ul className="mb-10">
              <li>I did passion side projects in the weekend, please take a look you will love it (i hope).</li>
          </ul>
          <div className="project__ex">
            <div className="status-container">
              <div className="category">
                <span className="dot"></span>
                <p className="title">Project Designer</p>
              </div>
              <a href="https://ankearaportfolio.vercel.app/about" className="btn__hire">
                  View All <MoveRight size={16} absoluteStrokeWidth />
              </a>
            </div>
            
            <Link to={"/view"} className="box__item">
              <div className="box__detail">
                <div className="box__img">
                  <img src={Project1} alt="me" />
                </div>

                <div className="detail">
                  <h3 className="name">Design In Figma</h3>
                  <p className="description">UI/UX Mobile App & Web Appplication</p>
                </div>
              </div>
              <Link to={"/view"} className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#cccc" fill="none">
                    <path d="M12.9997 11L5.99969 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Link>

            <Link to={"/view"} className="box__item">
              <div className="box__detail">
                <div className="box__img">
                  <img src={Project3} alt="me" />
                </div>

                <div className="detail">
                  <h3 className="name">Write In VS Code</h3>
                  <p className="description">Code Mobile App & Web Appplication</p>
                </div>
              </div>
              <Link to={"/view"} className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#cccc" fill="none">
                    <path d="M12.9997 11L5.99969 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Link>

            <Link to={"/view"} className="box__item">
              <div className="box__detail">
                <div className="box__img">
                  <img src={Project2} alt="me" />
                </div>

                <div className="detail">
                  <h3 className="name">Write With Database</h3>
                  <p className="description">Code Mobile/Web Application Store Data</p>
                </div>
              </div>
              <Link to={"/view"} className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#cccc" fill="none">
                    <path d="M12.9997 11L5.99969 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Link>
          </div>        
          
          <div className="follow__work">
           <h1 className="title">Let's Work Together</h1>
           <p className="desc">Creating user experience and visual appealing design</p>
           <div className="btn">
                <Link to={"/contact"} className="btn__hire">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ffffff"} fill={"none"}>
                        <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> Hire Me 
                </Link>

                <Link to="#" onClick={copyEmailToClipboard} className="btn__copy">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ccc"} fill="none">
                      <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> 
                    Copy Email
                </Link>

                  {showAlert && (
                    <aside className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
                      <a href="#" target="_blank" rel="noreferrer" className="text-sm font-medium hover:opacity-75">
                        Email copied to clipboard! 👋
                      </a>
                      <button onClick={closeAlert} className="rounded bg-white/20 p-1 hover:bg-white/10">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </aside>
                  )}
              </div>
          </div>

          <div className="status-container-social mt-5">
            <div className="category">
              <span className="dot"></span>
              <p className="title">Follow Me</p>
            </div>
            <div className="box__socials">
             <a href="https://ankearaportfolio.vercel.app/" target="_blank" className="social">
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

export default About
