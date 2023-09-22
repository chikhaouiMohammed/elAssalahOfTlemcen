import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePlacesList } from './Data';
import { useTranslation } from 'react-i18next';
import './style/general.css';


function Places() {
  const {t, i18n} = useTranslation()
  const [width, setWidth] = useState(0);
  const carosual = useRef();
  const placesList = usePlacesList();
  const [renderPlaces, setRenderPlaces] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLanguage = i18n.language;

  // Log the current language to the console
  console.log('Current Language:', currentLanguage);
  
  useEffect(() => {
    // Slice the placesList to include only the first 5 places
    const placesToShow = placesList.slice(0, 6);
  
    const places = placesToShow.map((place, index) => (
      // eslint-disable-next-line react/jsx-key
      <Link to={`/place/${index}`} key={index}>
        <div
          id="card"
          className="hover:opacity-90 transition-all duration-200 ease-in relative sm:min-w-[467px] sm:min-h-[661px] px-[24px] py-[40px]"
          style={cardBackground(place.images[0])}
          key={index}
          ref={cardRef}
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
    ));
    setRenderPlaces(places);
  }, [placesList, currentLanguage]);
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
  const cardRef = useRef(0);

  useEffect(() => {
    // Calculate the width based on the offsetWidth of the card element
    const cardWidth = cardRef.current.offsetWidth;
    const totalWidth = placesList.length * cardWidth;
    setWidth(totalWidth);
  }, [placesList]);
  
  useEffect(() => {
    
    const newPosition = currentIndex * (cardRef.current.offsetWidth + 32); 
    carosual.current.style.transform = `translateX(-${newPosition}px)`;
  }, [currentIndex]);
  
  const handleSlide = (direction) => {
    let newIndex = currentIndex;
  
    if (direction === 'left') {
      newIndex = Math.max(0, currentIndex - 1);
    } else if (direction === 'right') {
      if (currentIndex + 1 < 4) {
        newIndex = currentIndex + 1;
      } else {
        return;
      }
    }
  
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };
  
  
  

  return (
    <section>
      <div className="container mx-auto my-[140px]">
        <div>
          <div className="heading mb-[32px]">
            <h1 id='heading-section' style={fontPlayfair} className="text-[#172432] text-[64px] mb-1">
            {t('popularPlaces')}
            </h1>
            <div id='under' className="w-[365px] h-[3px] bg-blue-950"></div>
          </div>
          <div className="flex justify-between">
            <p style={fontRubik} className="flex justify-center items-end text-[#767E86]">
            {t('mostPopularDestinations')}
            </p>
            <div className="flex items-center gap-[40px]">
              <div
                id="slide-to-the-left"
                onClick={() => handleSlide('left')}
                className="cursor-pointer flex justify-center items-center w-12 h-12 rounded-[12px] bg-[#172432]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                  <path d="M11 1L1 11L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div
                id="slide-to-the-right"
                onClick={() => handleSlide('right')}
                className="cursor-pointer flex justify-center items-center w-12 h-12 rounded-[12px] bg-orange-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                  <path d="M1 21L11 11L0.999999 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="flex flex-col gap-[100px] cursor-pointer overflow-hidden">
        <div
          id="cards"
          className="flex mt-[100px] gap-[32px] slide-transition"
          ref={carosual}
        >
          {renderPlaces}
        </div>

          <Link to="/explore" className="py-[10px] px-10 bg-blue-950 w-fit text-white rounded-lg self-center text-[22px]" style={fontRubik}>
          {t('findMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Places;
