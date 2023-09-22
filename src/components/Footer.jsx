
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import logo from './images/logo.png'
function Footer() {
  const {t} = useTranslation()
    const fontRubik = {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: 400,
      };
  return (
    <footer id='footer-footer' className='bg-[#172432] pt-[100px] pb-[140px] px-[182px] relative'>
      <a style={fontRubik} className=' text-black text-lg absolute right-10 top-[-70px] underline' href="https://instagram.com/chm4ms?igshid=NzZlODBkYWE4Ng==">This website created by <br /> Chikhaoui Mohammed</a>
      <div id="footerContent" className='flex justify-around  items-center text-white relative'>
        {/* Logo */}
        <div  className=' w-[150px] h-[50px]'>
          <img src={logo} alt="" />
        </div>
        {/* Menue */}
        <div id='insideFooterContent' className='flex flex-col justify-around items-start'>
          <h3 style={fontRubik} className='text-[24px] mb-[16px]'>{t('menu')}</h3>
          <ul className=' flex flex-col gap-[12px]'>
            <li> <a href="#home">{t('home')}</a></li>
            <li> <a href="#about">{t('about')}</a></li>
          </ul>
        </div>
        {/* contact info */}
        <div id='insideFooterContent' className='flex flex-col justify-around items-start'>
          <h3 style={fontRubik} className='text-[24px] mb-[16px]'>{t('contact_info')}</h3>
          <ul className=' flex flex-col gap-[12px]'>
            <li>+213 771 52 49 20</li>
            <li>elassalahtlemcen@gmail.com</li>
            <li>Tlemcen</li>
          </ul>
        </div>
        {/* social media */}
        <div id='insideFooterContent'>
          <h3 style={fontRubik} className='text-[24px] mb-[16px]'>{t('follow_us_on')}</h3>
          {/* social media icons */}
          <div className=' flex items-center gap-[24px]'>
            <a href="https://www.facebook.com/profile.php?id=100054629492630&mibextid=ZbWKwL">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_11_746)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9489 0.484863C18.8335 0.51778 21.4394 1.22672 23.7667 2.61169C26.0662 3.96902 27.9791 5.89358 29.3224 8.20136C30.6989 10.5427 31.4036 13.1644 31.4364 16.0665C31.3547 20.0374 30.1022 23.4288 27.6791 26.241C25.256 29.0531 22.1526 30.7928 18.9399 31.4598V20.3268H21.9772L22.6641 15.9518H18.0649V13.0863C18.0394 12.4923 18.2272 11.9087 18.5945 11.4411C18.9623 10.9722 19.61 10.7258 20.5376 10.7018H23.3149V6.86941C23.2751 6.85659 22.8969 6.80589 22.1805 6.71731C21.3681 6.62225 20.551 6.57147 19.733 6.56521C17.8817 6.57375 16.4175 7.09599 15.3405 8.13192C14.2634 9.16756 13.7133 10.6659 13.6899 12.627V15.9518H10.1899V20.3268H13.6899V31.4598C9.74526 30.7928 6.64181 29.0531 4.21869 26.241C1.79556 23.4288 0.543188 20.0374 0.461426 16.0665C0.494138 13.1643 1.1988 10.5425 2.5754 8.20136C3.9187 5.89359 5.83158 3.96902 8.13113 2.61169C10.4584 1.22699 13.0643 0.518047 15.9489 0.484863Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_11_746">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </a>
            <a href="https://instagram.com/elassalatlemcen?igshid=MzRlODBiNWFlZA==">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_11_748)">
                <path d="M16.3149 31.9999C16.209 31.9999 16.103 31.9999 15.9963 31.9994C13.488 32.0055 11.1704 31.9418 8.9165 31.8046C6.8501 31.6789 4.96387 30.9648 3.46143 29.7397C2.01172 28.5575 1.02173 26.9591 0.519043 24.9894C0.081543 23.2746 0.0583496 21.5912 0.0361328 19.963C0.0200195 18.7948 0.00341797 17.4106 0 16.0028C0.00341797 14.5893 0.0200195 13.205 0.0361328 12.0368C0.0583496 10.4088 0.081543 8.7255 0.519043 7.01041C1.02173 5.04068 2.01172 3.44229 3.46143 2.26016C4.96387 1.03507 6.8501 0.320955 8.91675 0.195223C11.1707 0.0582598 13.4888 -0.00570501 16.0024 0.000398507C18.5115 -0.00497259 20.8284 0.0582598 23.0823 0.195223C25.1487 0.320955 27.0349 1.03507 28.5373 2.26016C29.9873 3.44229 30.977 5.04068 31.4797 7.01041C31.9172 8.72525 31.9404 10.4088 31.9626 12.0368C31.9788 13.205 31.9956 14.5893 31.9988 15.997V16.0028C31.9956 17.4106 31.9788 18.7948 31.9626 19.963C31.9404 21.591 31.9175 23.2743 31.4797 24.9894C30.977 26.9591 29.9873 28.5575 28.5373 29.7397C27.0349 30.9648 25.1487 31.6789 23.0823 31.8046C20.9238 31.9359 18.7065 31.9999 16.3149 31.9999ZM15.9963 29.4994C18.4639 29.5053 20.7295 29.443 22.9304 29.3092C24.4929 29.2143 25.8477 28.7072 26.9575 27.8022C27.9834 26.9655 28.6899 25.8112 29.0574 24.3712C29.4216 22.9438 29.4426 21.411 29.4629 19.9289C29.4788 18.7685 29.4954 17.394 29.4988 15.9999C29.4954 14.6056 29.4788 13.2314 29.4629 12.071C29.4426 10.5888 29.4216 9.05606 29.0574 7.62833C28.6899 6.18839 27.9834 5.03409 26.9575 4.19742C25.8477 3.29263 24.4929 2.78555 22.9304 2.69058C20.7295 2.55655 18.4639 2.49478 16.0022 2.50015C13.5352 2.49429 11.2693 2.55655 9.06836 2.69058C7.50586 2.78555 6.15112 3.29263 5.04126 4.19742C4.01538 5.03409 3.30884 6.18839 2.94141 7.62833C2.57715 9.05606 2.55615 10.5885 2.53589 12.071C2.52002 13.2323 2.50342 14.6076 2.5 16.0028C2.50342 17.392 2.52002 18.7675 2.53589 19.9289C2.55615 21.411 2.57715 22.9438 2.94141 24.3712C3.30884 25.8112 4.01538 26.9655 5.04126 27.8022C6.15112 28.7069 7.50586 29.214 9.06836 29.309C11.2693 29.443 13.5356 29.5055 15.9963 29.4994ZM15.9368 23.8124C11.6291 23.8124 8.12427 20.3078 8.12427 15.9999C8.12427 11.692 11.6291 8.18741 15.9368 8.18741C20.2446 8.18741 23.7493 11.692 23.7493 15.9999C23.7493 20.3078 20.2446 23.8124 15.9368 23.8124ZM15.9368 10.6874C13.0076 10.6874 10.6243 13.0707 10.6243 15.9999C10.6243 18.9291 13.0076 21.3124 15.9368 21.3124C18.8662 21.3124 21.2493 18.9291 21.2493 15.9999C21.2493 13.0707 18.8662 10.6874 15.9368 10.6874ZM24.6243 5.68741C23.5889 5.68741 22.7493 6.52676 22.7493 7.56241C22.7493 8.59805 23.5889 9.43741 24.6243 9.43741C25.6599 9.43741 26.4993 8.59805 26.4993 7.56241C26.4993 6.52676 25.6599 5.68741 24.6243 5.68741Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_11_748">
                <rect width="32" height="32" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            </a>
            <a href="https://youtube.com/@elassalatlemcen1163?si=ltzoG8GZ8Km8S91G">
            <FontAwesomeIcon className=' text-[35px]' icon={faYoutube} /> 
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.tlemcen.elassala.elassala">
            <FontAwesomeIcon className=' text-[35px]' icon={faGooglePlay} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
