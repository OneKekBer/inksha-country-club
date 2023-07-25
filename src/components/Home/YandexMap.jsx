import React from "react";
import { m } from 'framer-motion';

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
        // clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        // clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const YandexMap = () => {
    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            className="relative"
            id="contacts">
            <div className="relative">
            <div style={{transform: 'translateX(-50%)'}} className="absolute top-3 left-1/2 w-[320px]">
                <img src="/image/yandex_map_title.png" alt="" />
            </div>

                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe>
            </div>
            <m.div variants={headingLines} className="absolute bottom-[50px] left-[15px] bg-white border border-black rounded-[10px] w-[317px] h-[183px] px-[15px] pt-5 monterey">
                <div className="relative flex flex-col gap-[10px] h-full">
                    <p className="text-black underline">
                        <a href="tel:+79859091202">+7 985 909 12 02</a>
                    </p>
                    <p className="text-black underline">
                        <a href="mailto:contact@ikshacountryclub.com">contact@ikshacountryclub.com</a>
                    </p>
                    <p className="text-black">
                        посёлок Менжинец, городской округ Мытищи, Московская область, Россия
                    </p>

                    <div className="absolute bottom-[2px] right-1 flex">
                        <a href="https://vk.com/ikshacountryclub">
                            <img src="/image/vk.png" alt="" />
                        </a>
                        <a href="https://www.instagram.com/ikshacountryclub">
                            <img src="/image/inst.png" alt="" />
                        </a>
                    </div>
                </div>
            </m.div>
        </m.section>
    );
}

export default YandexMap;
