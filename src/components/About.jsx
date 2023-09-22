import assalahWomen from '../components/images/assalah_woman.jpg'; 
import assalaRole from '../components/images/assalah_role.jpg'; 
import { useTranslation } from 'react-i18next';
import './style/general.css';


function About() {
  const {t} = useTranslation()
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

  return (
      <div id='about-content' className='container my-[140px] w-screen'>
      <div  className=' mb-[100px]'>
        <div className='heading mb-[32px]'>
          <h1 id='heading-section' style={fontPlayfair} className='text-[#172432] text-[64px] mb-1'>
            {t('aboutTitle')}
          </h1>
          <div id='under' className='w-[365px] h-[3px] bg-blue-950'></div>
        </div>
        <div className='flex justify-between'>
          <p style={fontRubik} className='flex justify-center items-end text-[#767E86]'>
          {t('aboutSubtitle')}
          </p>
          <div className='flex items-center gap-[40px]'>
          </div>
        </div>
      </div>
      <div id='about-content' className=' flex gap-[32px] '>
        {/* about info */}
        <div className=' text-[#172432] my-[106.5px] '>
          <h2 id='about-heading' style={fontPlayfair} className='text-[54px] mb-[24px] text-center'>{t('aboutHeading')}</h2>
          <div id='about-side' className=' flex gap-20 items-center'>
          <div className='w-[350px] h-[250px] mb-9' style={cardBackground(assalahWomen)}></div>
            <p style={fontRubik} className='text-[24px] leading-[52px] my-[24px] mb-10  w-[70%]'>{t('aboutText1')} </p>
          </div>
          <div id='about-side' className=' flex gap-20 items-center'>
            <div className='w-[350px] h-[250px]' style={cardBackground(assalaRole)} ></div>
            <p style={fontRubik} className='text-[24px] leading-[52px] my-[24px] mb-10 w-[70%]'>{t('aboutText2')}</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default About;
