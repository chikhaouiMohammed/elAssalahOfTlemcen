import { useEffect, useState } from 'react';
import discoverBackground from '../components/images/0efd9913-city-54811-1671d0171d5.jpg'; // Check the path to the background image
import { usePlacesList } from '../components/Data'; // Make sure the import path is correct
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { DZ, US } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';
import logo from '../components/images/logo.png'
import '../components/style/general.css';


function Discover() {
  const { t, i18n } = useTranslation();
  const placesList = usePlacesList();
  const [renderPlaces, setRenderPlaces] = useState([]);
  const currentLanguage = i18n.language;
  const [category, setCategory] = useState('All'); 
  useEffect(() => {
    const places = placesList.map((place, index) => {
        return place.categorie === category || category === "All" ? (
          <Link to={`/place/${index}`} key={index}>
            <div
            id="card"
            className="cursor-pointer xl:min-w-[380px] 2xl:ml-0 lg:min-w-[290px] lg:h-[400px] md:min-w-[320px] md:h-[450px] sm:min-w-full sm:h-[650px] hover:opacity-90 transition-all duration-200 ease-in relative 2xl:min-w-[460px] xl:min-h-[661px] md:min-h-full px-[24px] py-[40px]"
            style={cardBackground(place.images[0])}
            key={index}
          >
            <div className="text-white absolute bottom-[24px]" id="info">
              <h3 style={fontPlayfair} className="text-[28px]">
                {i18n.language === 'ar' ? place.title.AR : place.title.EN}
              </h3>
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined">location_on</span>
                <p style={fontRubik} className="text-[24px]">
                  {i18n.language === 'ar' ? 'تلمسان' : place.wilaya}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ) : null;
    });
    setRenderPlaces(places);
  }, [placesList, currentLanguage, category]);
  

  const [value, setValue] = useState(null);
  const backgroundStyles = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("${discoverBackground}")`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  };

  const fontPlayfair = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
  };

  const fontRubik = {
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 400,
  };

  function cardBackground(url) {
    return {
      borderRadius: '26px',
      background: `linear-gradient(0deg, rgba(255, 119, 87, 0.10) 0%, rgba(255, 119, 87, 0.10) 100%), url("${url}") lightgray 50% / cover no-repeat`,
      backgroundSize: 'cover',
    };
  }
  
  const [menuActive, setMenuActive] = useState(false); 
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  

  return (
    <div style={backgroundStyles} className="h-screen relative">
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
          <Dropdown id='language-btn' className={`custom-dropdown ${menuActive ? 'active' : ''}`}>
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
      <div className="container mx-auto">
        <div className="p-6 bg-transparent mt-34">
          {/* Search form */}
          <div className="flex items-center mb-3">
            <div className="w-[20%]">
              <Dropdown id='language-btn' className="discover-custom-dropdown ml-10">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-xl">
                  {t(value  || 'category')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {setValue('all'); setCategory('All');}} href="#/action-1">
                    {t('all')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {setValue('customsAndTraditions'); setCategory('Customs and Traditions')}} href="#/action-2">
                    {t('customsAndTraditions')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {setValue('localMusic'); setCategory('Local Music')}} href="#/action-3">
                    {t('localMusic')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {setValue('touristic'); setCategory('Touristic')}} href="#/action-3">
                    {t('touristic')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {setValue('sportPaths'); setCategory('Sport Paths')}} href="#/action-3">
                    {t('sportPaths')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => {setValue('historical'); setCategory('Historical')}} href="#/action-3">
                    {t('historical')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/* Content */}
          <div className="card-container flex flex-wrap 2xl:justify-start items-center xl:justify-start gap-[30px] ">
            {/* cards */}
            {renderPlaces}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
