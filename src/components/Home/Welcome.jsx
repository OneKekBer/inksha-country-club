import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import BookingCalendar from '../BookPicker';
import { useForm } from 'react-hook-form';
import routes from '../../utils/Home/routes';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet';

const heading = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingLines = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(100% 0px 0px)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0px 0px)',
    transition: {
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};

const Welcome = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.bronirui-online.ru/js/app.js';
    script.async = true;

    const initializeWidget = () => {
      window.znmsWidget.init('#znms-widget-1', {
        moduleId: 5026,
        index: 0,
        widget: {
          position: {
            top: '100px',
          },
          mobile: {
            absolute: false,
            color: undefined,
            position: {
              top: '100px',
            },
          },
        },
        button: {
          position: {
            bottom: '50px',
            left: '50px',
            right: '50px',
          },
        },
      });

      // Примените ваши стили после инициализации виджета
      const customStyles = `
          .znms-widget__main-wrapper {
            background-color: transparent !important;
            backdrop-filter: blur(0px) !important;
            -webkit-backdrop-filter: blur(0px) !important;
            --tw-backdrop-blur: 0px !important;
          }

          .znms-widget__teleporter {
            // margin-top: 90px; */
            position: relative;
            bottom: -150px;
          }

          .znms-widget__v-calendar-pane-container {
            z-index: 2000 !important;
          }

          .znms-widget__module-form-block {
            background-color: transparent !important;
            -webkit-backdrop-filter: blur(0px) !important;
            bottom: -80px;
          }
  
          .znms-widget__module-form-block__title, .znms-widget__widget-btn.znms-widget__v-color4 {
            display: none !important;
          }
  
          .znms-widget__module-form-block__btn {
            background-color: rgba(12, 242, 89, 0.50) !important;
            border-radius: 30px !important;
            border: 1px solid #000 !important;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
            font-size: 18px !important;
          }

          .znms-widget__module-form-block__items--links-container {
            display: none !important;
          }

          .znms-widget__module-form-block__item {
            opacity: 0.9;
          }
        `;
        setTimeout(() => {

          const doskaContainer = document.querySelector('.doska-container'),
          skyContainer1 = document.querySelector('.sky1'),
          skyContainer2 = document.querySelector('.sky2');

          skyContainer1.classList.add('animate-moveSky1');
          skyContainer2.classList.add('animate-moveSky2');
          doskaContainer.classList.add('animate-moveDoska');
        }, 2500)
      const styleElement = document.createElement('style');
      styleElement.innerHTML = customStyles;
      document.head.appendChild(styleElement);
    };
      script.onload = initializeWidget;
      document.body.appendChild(script);
  }, []);

  const [burgerState, setBurgerState] = useState(false);

  function handleBurgerClick() {
    setBurgerState(!burgerState);
  }

  function closeBurger() {
    setBurgerState(false);
  }

  useEffect(() => {
    // BookingCalendar([], 'zaezd'); // get data from FireBase
    // BookingCalendar([], 'viezd'); // get data from FireBase
    setTimeout(() => {
      document.querySelector('.animate-moveSky1').style.display = 'none'
      document.querySelector('.animate-moveSky2').style.display = 'none'
    }, 6000)
  }, []);
  return (
    <section id='book' className="relative m-0">
      <img className="w-full" src="/image/bg1.jpg" alt="" />
      <img style={burgerState ? { display: 'block' } : {}} className={` hidden absolute w-full z-[9] top-0`} src="/image/bg-burger.png" alt="" />
      <div style={burgerState ? { display: 'flex', transform: 'translateX(-50%)' } : { transform: 'translateX(-50%)' }} className={`top-[55px] hidden absolute pl-[21px] flex-col left-[55%] gap-[10px] w-[305px] bg-[#FFEFE4] rounded-[20px] z-10`}>
        {routes.map((el, i) => {
          return (
            <div onClick={closeBurger} key={uuidv4()}>
              <a href={el.link} className='flex gap-[1px]'>
                <p className='monterey'>
                  {el.text}
                </p>
                {el.icon && <img src={el.icon} />}
              </a>
            </div>
          );
        })}
      </div>
      <div style={{ transform: 'translateX(-50%)' }} className='absolute top-0 left-1/2 w-[260px] doska-container'>
        <img className='w-full h-full' src="/image/doska.png" alt="" />
        <a className='absolute left-1/2 bottom-[25px]' style={{ transform: 'translateX(-50%)' }} href="tel:+799999999">
          <img className='w-[44px]' src="/image/call.png" alt="" />
        </a>
        <a className='absolute left-1/2 bottom-[4rem]' style={{ transform: 'translateX(-50%)' }} href="#about">
          <img className='w-[80px]' src="/image/about.png" alt="" />
        </a>
      </div>
      <img className='absolute top-0 left-0 sky1 z-[21]' src="/image/sky1.png" alt="" />
      <img className='absolute top-0 right-0 sky2 z-[21]' src="/image/sky2.png" alt="" />
      <img onClick={handleBurgerClick} className='absolute top-8 left-3 z-20' src="/image/burger.png" alt="" />
      <div
        style={{ transform: 'translateX(-50%)' }}
        className='absolute left-1/2 w-full bottom-[4.5rem]'
      >
        <div id="znms-widget-1"></div>
        <m.form
          initial='hidden'
          // whileInView='visible'
          // viewport={{ once: true }}
          // variants={heading}
          onSubmit={handleSubmit(onSubmit)}
          className='px-16 hidden'>
          <m.div className='relative w-full mb-2'> {/*  variants={headingLines} */}
            <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.png" alt="" />
            <input style={errors.zaezd && { borderColor: 'red' }} {...register("zaezd", { required: true })} id='zaezd' placeholder='ЗАЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.div className='relative w-full mb-2'>
            <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.png" alt="" />
            <input style={errors.viezd && { borderColor: 'red' }} {...register("viezd", { required: true })} id='viezd' placeholder='ВЫЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.div className='relative w-full mb-2'>
            <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/persone.png" alt="" />
            <input style={errors.people && { borderColor: 'red' }} {...register("people", { required: true })} placeholder='КОЛИЧЕСТВО ЧЕЛОВЕК' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.button type='submit' className='w-full rounded-[30px] border border-black bg-[#0CF259] bg-opacity-50 shadow-md monterey text-white font-semibold text-lg h-9'>
            Посмотреть
          </m.button>
        </m.form>
      </div>
    </section>
  );
}

export default Welcome;
