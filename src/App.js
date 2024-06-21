import React, { Component } from 'react';

import H1 from './components/Titles/H1/H1';
import ProgressBar from './components/ProgressBar/ProgressBar';
import WorkProject from './components/WorkProject/WorkProject';

// header section
import classes from './App.css';
import Logo from './assets/images/logo.svg';
import NightSpace from './assets/images/night-space-with-text-and-mountains-2.svg';
import NightSpaceTablet from './assets/images/night-space-with-text-and-mountains-tablets.svg';
import NightSpacePhone from './assets/images/night-space-with-text-and-mountains-phone.svg';
import NightSpacePhoneMedium from './assets/images/night-space-with-text-and-mountains-phone-medium.svg';
import NightSpacePhoneSmall from './assets/images/night-space-with-text-and-mountains-phone-small.svg';
import NightSpacePhoneTiny from './assets/images/night-space-with-text-and-mountains-phone-tiny.svg';

// about section
import Rocket from './assets/images/rocket2.svg';
import ProfilePhoto from './assets/images/profile-photo-min.png';
import ProfilePhotoTablet from './assets/images/profile picture-circular-tablet-min.png';
import CodeLangIcn from './assets/images/code-lang-icons.svg'
import DownloadIcn from './assets/images/download.svg';
import CVFile from "./assets/files/ori-benezra-cv-en.pdf";
import EmailIcn from './assets/images/email-icn.svg'
import PhoneIcn from './assets/images/phone-icn.svg'

// portfolio images
import CleanHeadImg from './assets/images/mac-Img-cleanhead-main.png';
import RideItImg from './assets/images/mac-Img-rideit.png';
import BeAzmiImg from './assets/images/beazmi-app-show-2.png';
import HangmanImg from './assets/images/hangman-game.png';
import PixelartImg from './assets/images/pixelart-website.png';
import MateAppImg from './assets/images/notify_mate_5.png';




class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        {/* page design - space background and mountains */}
        <img src={NightSpace} className={classes.NightSpace} alt="" />
        <img src={NightSpaceTablet} className={classes.NightSpaceTablet} alt="" />
        <img src={NightSpacePhone} className={classes.NightSpacePhone} alt="" />
        <img src={NightSpacePhoneMedium} className={classes.NightSpacePhoneMedium} alt="" />
        <img src={NightSpacePhoneSmall} className={classes.NightSpacePhoneSmall} alt="" />
        <img src={NightSpacePhoneTiny} className={classes.NightSpacePhoneTiny} alt="" />

        <div className={classes.Wrapper}>{/* content */}

          {/* header section */}
          <header>
            <img src={Logo} alt="Logo" className={classes.Logo} />
            <span className={classes.HelloLabel}>Hi there,<br />
  I’m Ori, a <strong>program developer. </strong></span>

            <div className={classes.ScrollDownContainer}>
              <div className={classes.Chevron}></div>
              <div className={classes.Chevron}></div>
              <div className={classes.Chevron}></div>
            </div>

            {/* <div className={classes.HeaderSpacer}></div> */}
          </header>

          {/* about section */}
          <section className={classes.WrapperSectionAbout}>
            <aside className={classes.WrapperRocket}>
              <img src={Rocket} className={classes.Rocket} alt="" />
              <img src={ProfilePhoto} className={classes.ProfilePhoto} alt="" />
              <div className={classes.SkillsChart}>
                <H1 style={{ margin: '0 auto 5px auto' }}>skills</H1>
                {/* <ProgressBar fill='95%' label='JS' />
                <ProgressBar fill='95%' label='React.js' /> */}
                <div style={{ background: '#669898', color: '#fff', padding: '10px', fontSize:'1.2vw;', letterSpacing: '0.1vw' }}><b>Code:</b> JS, React.js, Node.js, MongoDB, CSS, HTML, SQL, OOP, Java, C++, Python, C#, ASP.NET, Computer Vision</div>
                <div style={{ background: '#025159', color: '#fff', padding: '10px', fontSize:'1.2vw;', letterSpacing: '0.1vw' }}><b>Api's & Tools: </b>Shopify DEV, Photoshop, Illustrator, Figma, Git, Excel</div>
                <div style={{ background: '#669898', color: '#fff', padding: '10px', fontSize:'1.2vw;', letterSpacing: '0.1vw' }}><b>Personal:</b> Problem Solving, Team Player, Deep Researcher, Ambitious</div>
              </div>
            </aside>

            <aside className={classes.WrapperContent}>

              <img src={ProfilePhotoTablet} alt="" className={classes.ProfilePhotoTablet} />

              {/* about */}
              <article >
                <H1>about</H1>
                <p>
                  My name is Ori Ben-Ezra, a program developer living in Lapid, Israel.
                  I Love my family,  coffee and coding.
                  My interest in coding stems from a fascination with the dynamic nature of technology
                  and a desire to implement new ideas that will yield the next breakthrough.
                  I'm eager to expand my knowledge and to investigate new technologies.
                  Hope you’ll like my work.
                  <br />
                  <a href='https://www.linkedin.com/in/oribenezra' alt='LinkedIn Profile' target="_blank" >
                    <div className={classes.SocialIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style></style></defs><title>Asset 13</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Text_Container" data-name="Text Container"><g id="About_Container" data-name="About Container"><path d="M26.94,0H3.06A3.06,3.06,0,0,0,0,3.06V26.94A3.06,3.06,0,0,0,3.06,30H26.94A3.06,3.06,0,0,0,30,26.94V3.06A3.06,3.06,0,0,0,26.94,0ZM9.3,24.29h-4v-13h4Zm-2-14.55a2,2,0,0,1-2.09-2,2,2,0,0,1,2.15-2,2,2,0,1,1-.06,4ZM24.83,24.29h-4V17.11c0-1.67-.58-2.81-2-2.81a2.21,2.21,0,0,0-2.06,1.51,2.77,2.77,0,0,0-.14,1v7.47h-4V15.46c0-1.61-.06-3-.11-4.13h3.5l.18,1.8h.08a4.65,4.65,0,0,1,4-2.09c2.65,0,4.64,1.77,4.64,5.59v7.66Z" /></g></g></g></g></svg>
                    </div>
                  </a>
                  <a href='https://github.com/oribenez' alt='GitHub Proflie' target="_blank">
                    <div className={classes.SocialIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.78 31"><defs></defs><title>Asset 14</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Text_Container" data-name="Text Container"><g id="About_Container" data-name="About Container"><path d="M15.89,0a15.89,15.89,0,0,0-5,31c.79.15,1.08-.34,1.08-.76s0-1.63,0-3c-4.42,1-5.35-1.88-5.35-1.88a4.24,4.24,0,0,0-1.77-2.32c-1.44-1,.11-1,.11-1a3.34,3.34,0,0,1,2.44,1.64A3.37,3.37,0,0,0,12,25a3.43,3.43,0,0,1,1-2.12c-3.53-.4-7.24-1.77-7.24-7.86A6.13,6.13,0,0,1,7.39,10.8a5.76,5.76,0,0,1,.15-4.21s1.34-.43,4.37,1.63a15.21,15.21,0,0,1,8,0c3-2.06,4.37-1.63,4.37-1.63a5.72,5.72,0,0,1,.16,4.21A6.16,6.16,0,0,1,26,15.06c0,6.11-3.72,7.45-7.26,7.85a3.79,3.79,0,0,1,1.08,2.94c0,2.12,0,3.83,0,4.36s.29.92,1.09.76a15.89,15.89,0,0,0-5-31Z" /></g></g></g></g></svg>
                    </div>
                  </a>
                </p>


              </article>

              {/* skills */}
              <article className={classes.SkillsWrapper}>
                <H1>skills</H1>
                <p>
                  C#, ASP.NET, SQL, JS, React, HTML, CSS, Photoshop, Illustrator, M.Office, Git, Visual Studio.
                  <br />
                  <img src={CodeLangIcn} alt='' className={classes.CodeLangIcn} />
                </p>
              </article>

              {/* curriculum vitae */}
              <article>
                <H1>curriculum vitae</H1>
                <p>
                  Check out my CV for more information.
                  <br />
                  <a href={CVFile} className={classes.Btn}>
                    <img src={DownloadIcn} alt='' className={classes.DownloadIcon} />
                    <span>&nbsp;&nbsp; CV - PDF</span>
                  </a>
                </p>
              </article>

              {/* contact */}
              <article>
                <H1>contact</H1>
                <p>
                  Feel free to contact me! I’m always available to bounce
                  thoughts around and I'd love to collaborate.
                  <br />
                  <span>
                    <img src={EmailIcn} alt='' className={classes.ContactEmailIcn} />&nbsp;&nbsp;
                  oriben467@gmail.com</span>
                  <br />
                  <span>
                    <img src={PhoneIcn} alt='' className={classes.ContactPhoneIcn} />&nbsp;&nbsp;
                  +972 54 832 1468</span>
                  <span></span>
                </p>
              </article>
            </aside>

          </section>

        </div>

        {/* portfolio section */}
        <section className={classes.WrapperSectionPortfolio}>
          <H1 color='#333333' style={{ margin: '0 auto 3vw auto' }}>portfolio</H1>
          
          {/* Mate: Restock alerts Project */}
          <div style={{ background: '#1e1e1e', color: '#fff' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='Mate: Restock alerts' img={MateAppImg} width='100px'>
              Application built for Shopify merchants to increase sales by retrieving lost customers. 
The app adds a button “Notify me” for every product page. 
Customers sign up to the app service to get notified when the product they want is back in stock /price drop.
This is the best project I’ve ever created all by myself using MERN stack, designing skills, and planning.
              <a href="https://apps.shopify.com/notify-mate-price-drop-alerts" className={classes.Btn} target='blank'>
                  <span> To the App</span>
                </a>
              </WorkProject>
            </div>
          </div>

          {/* Clean Head Project */}
          <div style={{ background: '#eeeeee' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='Clean Head' img={CleanHeadImg}>
                Web software that effectively links teachers and students.
                C#, Asp.NET, JavaScript SQL, This software is used by
                teachers to insert students' grades at school. In addition,
                you can view a student behavior sheet, schedule, vacation schedule,
                and homework to do.
              </WorkProject>
            </div>
          </div>

          {/* Ride It Project */}
          <div style={{ background: '#1e1e1e', color: '#fff' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='Ride It' img={RideItImg} rtl>
                An app for finding different types of cycling routes in Israel, setting up meetings with riders for shared cycling to get to know new people.
              </WorkProject>
            </div>
          </div>

          {/* Hangman Game */}
          <div style={{ background: '#eee' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='Hangman Game' img={HangmanImg}>
                Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.
                <a href="http://hangmanplay.com" className={classes.Btn} target='blank'>
                  <span> To the Game</span>
                </a>
              </WorkProject>
            </div>
          </div>

          {/* Be Atzmi Project */}
          <div style={{ background: '#1e1e1e', color: '#fff' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='Be Atzmi' img={BeAzmiImg} rtl>
                Windows Phone 8 application that helps the chronic unemployed get into the work cycle.
              </WorkProject>
            </div>
          </div>

          {/* pixelart website */}
          <div style={{ background: '#eee' }}>
            <div className={classes.Wrapper}>
              <WorkProject title='pixelart' img={PixelartImg}>
                Static website for small businesses
              </WorkProject>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
