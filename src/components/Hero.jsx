import { Link } from 'react-router-dom';
import mainImage from './images/wallpaperflare.com_wallpaper.jpg';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { DZ, US } from 'country-flag-icons/react/3x2'
import i18next from 'i18next';
import { useState } from 'react';
import logo from './images/logo.png'
import './style/general.css';


function Hero() {
  const { t } = useTranslation();
  const fontPlayfair = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
  };

  const fontRubik = {
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 400,
  };

  const backgroundStyles = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
  };
  const [menuActive, setMenuActive] = useState(false); 
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  
  return (
    <section id='home' style={backgroundStyles} className="h-[100vh] relative">
      <div id='header' className="header-section text-white  py-[32px]">
        <div id='header-content' className=" flex items-center md:justify-around sm:gap-x-20 md:gap-x-10 relative">
        <div  className=' w-[150px] h-[50px]'>
          <img src={logo} alt="" />
        </div>
          <div id='menu' className={`md:hidden cursor-pointer ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M7.29167 14.5833C6.71637 14.5833 6.25 14.117 6.25 13.5417C6.25 12.9664 6.71637 12.5 7.29167 12.5H42.7083C43.2835 12.5 43.75 12.9664 43.75 13.5417C43.75 14.117 43.2835 14.5833 42.7083 14.5833H7.29167ZM7.29167 25C6.71637 25 6.25 24.5335 6.25 23.9583C6.25 23.3831 6.71637 22.9167 7.29167 22.9167H42.7083C43.2835 22.9167 43.75 23.3831 43.75 23.9583C43.75 24.5335 43.2835 25 42.7083 25H7.29167ZM7.29167 35.4167C6.71637 35.4167 6.25 34.9502 6.25 34.375C6.25 33.7998 6.71637 33.3333 7.29167 33.3333H42.7083C43.2835 33.3333 43.75 33.7998 43.75 34.375C43.75 34.9502 43.2835 35.4167 42.7083 35.4167H7.29167Z" fill="white"/>
            </svg>
          </div>
          <ul id='header-list' className={`${menuActive ? 'active' : ''} z-50  flex gap-[100px] items-center text-[20px] m-0 p-0 sm:flex-col  md:flex md:flex-row `}>
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in"><a href="/">{t('home')}</a></li>
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in">
              <Link to="/explore">{t('discover')}</Link>
            </li>
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in"><a href="#about">{t('about')}</a></li>
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in"><a href="#footer">{t('contact')}</a></li>
          </ul>
          <Dropdown id='language-btn' className={` custom-dropdown ${menuActive ? 'active' : ''}`}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span className="material-symbols-outlined">
              language
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2" className=' flex justify-between text-lg' onClick={()=> i18next.changeLanguage('ar')}> 
              <DZ title="Algeria" className=' w-8 h-8'/>
               العربية 
               </Dropdown.Item>
               <Dropdown.Item href="#/action-2" className=' flex justify-between text-lg' onClick={()=> i18next.changeLanguage('en')}> 
              <US title="United States" className=' w-8 h-8'/>
               English 
               </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <div>
          </div>
        </div>
      </div>
      <div className='w-full container mx-auto pt-[250px] text-white flex flex-col justify-center items-start gap-[16px]'>
        <h1 id='hero-heading' style={fontPlayfair} className='leading-normal text-[84px]'>
          {t('startUnforgettableJourney')}
        </h1>
        <p style={fontRubik} className='text-[24px] leading-normal'>
          {t('bestTravelBeginsNow')}
        </p>
        </div>
    </section>
  );
}

export default Hero;
