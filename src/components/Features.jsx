import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLocationDot, faMap, faStreetView } from '@fortawesome/free-solid-svg-icons'; // Change to the correct icon library
import { useTranslation } from 'react-i18next';
import './style/general.css';

function Features() {
    const {t} = useTranslation()
    const fontPlayfair = {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 400,
      };
    
      const fontRubik = {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: 400,
      };
  return (
    <section className=' relative'>
        <div className=' container mx-auto my-[140px]'>
          <div className=' mb-[100px]'>
          <div className='heading mb-[32px]'>
            <h1 id='heading-section' style={fontPlayfair} className='text-[#172432] text-[64px] mb-1'>
            {t('features')}
            </h1>
            <div id='under' className='w-[365px] h-[3px] bg-blue-950'></div>
          </div>
          <div className='flex justify-between'>
            <p style={fontRubik} className='flex justify-center items-end text-[#767E86]'>
            {t('features-heading')}
            </p>
            <div className='flex items-center gap-[40px]'>
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div id='grid-cards' className=' w-fit mx-auto md:grid md:grid-rows-2 md:grid-cols-2 md:gap-10 my-16'>
          {/* first feature */}
          <div id='grid-card' className=' bg-slate-100 flex flex-col justify-center items-center md:w-[450px] h-[300px] rounded-[30px] py-7 px-10 gap-4'>
              <div className=' text-6xl' >
              <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h3 className=' text-4xl'>{t('Mobility-features')}</h3>
              <p className=' text-xl leading-8'>{t('Mobility-features-des')}</p>
          </div>
          {/* Second feature */}
          <div id='grid-card' className='  bg-slate-100 flex flex-col justify-center items-center md:w-[450px] h-[300px] rounded-[30px] py-7 px-10 gap-4'>
              <div className=' text-6xl'  >
              <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              <h3 className=' text-4xl'>{t('Simplicity-features')}</h3>
              <p className=' text-xl leading-8'>{t('Simplicity-features-des')}</p>
          </div>
          {/* Third feature */}
          <div id='grid-card' className='  bg-slate-100 flex flex-col justify-center items-center md:w-[450px] h-[300px] rounded-[30px] py-7 px-10 gap-4'>
              <div className=' text-6xl' >
              <FontAwesomeIcon icon={faMap} />
              </div>
              <h3 className=' text-4xl'>{t('Explore-features')}</h3>
              <p className=' text-xl leading-8'>{t('Explore-features-des')}</p>
          </div>
          {/* Forth feature */}
              <div id='grid-card' className='  bg-slate-100 flex flex-col justify-center items-center md:w-[450px] h-[300px] rounded-[30px] py-7 px-10 gap-4'>
              <div  className=' text-6xl'  >
                      <FontAwesomeIcon icon={faStreetView} />
              </div>
              <h3 className=' text-4xl'>{t('Find-features')}</h3>
              <p className=' text-xl leading-8'>{t('Find-features-des')}</p>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Features