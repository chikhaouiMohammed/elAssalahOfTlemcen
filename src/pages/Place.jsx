import React, { useEffect, useState } from 'react'
import discoverBackground from '../components/images/0efd9913-city-54811-1671d0171d5.jpg';
import { Link, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { DZ, US } from 'country-flag-icons/react/3x2';
import { usePlacesList } from '../components/Data';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from '../components/images/logo.png'
import '../components/style/general.css';


function Place() {

  const { index } = useParams();
  const placesList = usePlacesList()
  const currentPlace = placesList[index]
  
  const { t, i18n } = useTranslation();
  const [placeContent, setPlaceContent] = useState(null);
  const currentLanguage = i18n.language;
  var currentImages = currentPlace?.images || [];
  const lat=currentPlace?.latitude || null;
  const lon=currentPlace?.longtitude || null;
  const iframeSrc =`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  
  const [imageListCols, setImageListCols] = useState(2);
  

 
    const updateImageListCols = () => {
      if (window.innerWidth <= 515) {
        setImageListCols(1); // Set to 1 column for screens 515px and below
      } else {
        setImageListCols(2); // Set to 2 columns for wider screens
      }
      };
      useEffect(() => {
        // Call the function initially to set the columns
        updateImageListCols();
    
        // Add an event listener to update the columns when the window resizes
        window.addEventListener('resize', updateImageListCols);
    
        // Cleanup the event listener when the component unmounts
        
      }, []);

  useEffect(() => {
    if(currentPlace){
      if (placesList && !isNaN(index) && index >= 0 && index < placesList.length) {
        const place = placesList[index];
        
        // Define the JSX content for the place here
        const content = (
          <div id='placeContent' className=' container text-white mt-20 flex gap-[10%] mb-10'>
            {/* Place info */}
              <div className=' w-[45%]'>
                <div>
                <h1 className=' mb-5 text-5xl'>{i18n.language === 'ar' ? place.title.AR : place.title.EN }</h1>
                <p className=' mb-5 font-semibold leading-8'>{i18n.language === 'ar' ? place.description.AR : place.description.EN }</p>
                <h2 className=' mb-3 text-2xl font-medium'><span className=' text-3xl font-bold'>{t('wilaya')}: </span>{i18n.language === 'ar' ? 'نلمسان' : place.wilaya}</h2>
                <h2 className=' mb-3 text-2xl font-medium'><span className=' text-2xl font-bold'>{t('category')}: </span>{i18n.language === 'ar' ? 'تاريخي' : place.categorie}</h2>
                <h2 className=' mb-3 text-2xl font-medium'><span className=' text-2xl font-bold'>{t('status')}: </span>{i18n.language === 'ar' ? 'مفتوح للزوار' : place.status}</h2>
                </div>
                <div id='iframe' className=' w-[600px]'>
                  <iframe
                    
                    title="Google Map"
                    width="100%"
                    height="250"
                    loading="lazy"
                    src={iframeSrc}
                    allowfullscreen
                  ></iframe>
              </div>
              </div>
              {/* Places UI */}
              <div className='w-[45%]'>
                  <div id='imagesList'>
                  <ImageList sx={{ width: '100%', height: 650 }} cols={imageListCols} rowHeight={500} rowWidth={'100%'}>
                    {currentImages.map((image, index) => (
                        <ImageListItem  key={index} >
                        <img
                          src={image}
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
                    </div>
              </div>
          </div>
        );
  
        // Set the JSX content in state
        setPlaceContent(content);
      }
    }
  },[placesList, index, currentLanguage, currentImages] );


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
  const [menuActive, setMenuActive] = useState(false); 
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };


  return (
    <div style={backgroundStyles}  id='place' className='card-container  card-container-place h-screen relative'>
     <div id='header' className="header-section text-white  py-[32px]">
        <div id='header-content' className=" flex items-center md:justify-around sm:gap-x-20 md:gap-x-10 relative">
        <a href='/'  className=' w-[150px] h-[50px]'>
          <img src={logo} alt="" />
        </a>
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
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in"><a href="/#home/about">{t('about')}</a></li>
            <li className="hover:border-solid hover:border-b-white hover:border-b-4 transition-all duration-150 ease-in"><a href="/#home/contact">{t('contact')}</a></li>
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

      {placeContent}
    </div>
  )
}

export default Place