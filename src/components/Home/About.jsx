import React, { useEffect, useState } from "react";
import NumeredItemsData from '../../utils/Home/NumeredItemsData';
import NumberedItem from './helpers/NumberedItem';
import { m } from 'framer-motion';

const ytSrc = 'https://www.youtube.com/embed/Eat2wgPNuIo';
const ytId = ytSrc.split('/')[ytSrc.split('/').length - 1];

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLinesOpacity = {
    hidden: {
        opacity: 0,
        // clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        // clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
};

const About = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleDownload = () => {
        const fileUrl = '/pdf/iksha_pdf.pdf';
        window.open(fileUrl, '_blank');
    }
    return (
        <section style={{ backgroundImage: 'url(/image/about_bg_styled.webp)' }} className="section back_settings relative" id="about">
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="m-0">

                <div style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 z-30 top-[30px] w-[215px] bg-transparent">
                    <img className="bg-transparent" src="/image/girman.gif" alt="Икша Кантри Клаб" />
                </div>
                {/* <m.img style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 z-30 top-[30px] w-[215px]" variants={headingLinesOpacity} src="/image/man_about.webp" alt="" /> */}
                <div className="pt-[180px] pb-[1.75rem] flex justify-center items-center">

                    <div className="w-[330px] h-[205px] relative group">
                        {!isVideoPlaying && (
                            <div>
                                <a href={ytSrc}>
                                    <img
                                        src={`https://i.ytimg.com/vi_webp/${ytId}/mqdefault.webp`}
                                        alt="Обложка ролика с ютуб канала Икша Кантри Клаб"
                                    />
                                </a>
                                <button
                                    className="bg-transparent border-none h-[48px] w-[68px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
                                    aria-label="Запустить Видео"
                                    onClick={handlePlayVideo}
                                >
                                    <svg width="68" height="48" viewBox="0 0 68 48">
                                        <path
                                            className="fill-[#212121] duration-300 opacity-80 group-hover:fill-[#ff0000] group-hover:opacity-100"
                                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                        ></path>
                                        <path className="fill-white" d="M 45,24 27,14 27,34"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                        {isVideoPlaying && (
                            <iframe
                                width="330"
                                height="205"
                                src={`${ytSrc}?rel=0&showinfo=0&autoplay=1`}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
                <NumberedItem arrayData={NumeredItemsData} />
                <div className="flex justify-center items-center back_settings mt-3 h-60 mb-[10px]" style={{ backgroundImage: 'url(/image/about_text_border.webp)', backgroundSize: 'auto' }}  >
                    <p className="w-[260px] text-center montaguSlab text-[#000] text-[15px]">
                        <span className="font-semibold">Икша Кантри Клаб</span> – это уютное место, где вы можете организовать незабываемые мероприятия или просто отдохнуть с семьей или друзьями на выходных. Резиденция расположена в <span className="font-semibold">25</span> км от м. Алтуфьево в лесной зоне на берегу водохранилища
                    </p>
                </div>
                <div className="flex justify-center pb-12">
                    <button onClick={handleDownload}>
                        <div
                            style={{ background: 'linear-gradient(98deg, rgba(253, 249, 249, 0.12) 0%, rgba(253, 249, 249, 0.08) 100%)' }}
                            className="rounded-[10px] colored text-[13px] border-[2px] border-[#A08C7D] backdrop-blur-[1px] montaga px-[6px] py-[2px] underline"
                        >
                            Скачивайте PDF версию о нашем клубе
                        </div>
                    </button>
                </div>
                <picture>
                    <source srcSet="/avif/gorshok_left.avif 1x" type="image/avif" />
                    <img alt="Икша Кантри Клаб" className="absolute bottom-0 left-0" src="/image/gorshok_left.webp" />
                </picture>
                <picture>
                    <source srcSet="/avif/gorshok.avif 1x" type="image/avif" />
                    <img alt="Икша Кантри Клаб" className="absolute bottom-0 right-0" src="/image/gorshok.webp" />
                </picture>
                <picture>
                    <source srcSet="/avif/wood_translate.avif 1x" type="image/avif" />
                    <img alt="Икша Кантри Клаб" className="w-full absolute -bottom-14 z-10" src="/image/wood_translate.webp" />
                </picture>
            </m.div>
        </section>
    );
}

export default About;
