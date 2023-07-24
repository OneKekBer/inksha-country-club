import '../styles/map.css';
import React, { useEffect } from 'react';

const Map = () => {


        const
            positions = [
                {
                    title: 'Заголовок 1',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Большой заголовок для примера',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Спальный домик',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 4',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 5',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 6',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 7',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 8',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: ''
                },
                {
                    title: 'Свидание на берегу',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Посиделки у камина',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 11',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Заголовок 12',
                    imageSrc: 'https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Спорт и водные развлечения',
                    imageSrc: 'https://ie.wampi.ru/2023/05/10/Mask-group.png',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
                {
                    title: 'Пляж',
                    imageSrc: 'https://ie.wampi.ru/2023/05/10/Mask-group.png',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?',
                },
            ],
            positionRelativeMouse = { x: 10, y: 10 }

        // Elements

            useEffect(() => {
                const
                    mapTooltip = document.querySelector('.map-tooltip'),
                    mapControls = document.querySelector('.map-controls'),
                    mapControlsLists = document.querySelectorAll('.map-controls-list'),
                    popupWrapper = document.querySelector('.popup__wrapper'),
                    popup = popupWrapper.querySelector('.popup'),
                    popupClose = popupWrapper.querySelector('.popup-close'),
                    ships = document.querySelectorAll('.map_image_ship__wrapper');
        
                // Logic
                const
                    openPopup = (title, src, text) => {
                        popupWrapper.classList.add('view');
                        const
                            popupImage = popup.querySelector('.map-info_image'),
                            popupTitle = popup.querySelector('.map-info_title'),
                            popupText = popup.querySelector('.map-info-content');
        
                        popupImage.src = src;
                        popupTitle.innerHTML = title;
                        if (text === '') {
                            popupText.style.display = 'none';
                        } else {
                            popupText.style.display = 'block';
                            popupText.innerHTML = text;
                        }
                    },
                    getTooltip = (_e, title) => {
                        mapTooltip.textContent = title;
                        mapTooltip.style.top = `${_e.clientY + positionRelativeMouse.y + 10}px`;
        
                        const position_x = _e.clientX + positionRelativeMouse.x;
        
                        if (position_x + mapTooltip.clientWidth >= window.innerWidth)
                            mapTooltip.style.left = `${position_x - mapTooltip.clientWidth - 20}px`;
                        else
                            mapTooltip.style.left = `${position_x}px`;
                    },
                    mouseMove_mapButton = _e => {
                        getTooltip(_e, positions[+_e.currentTarget.dataset.position - 1].title)
                    },
                    mouseEnter_mapButton = _e => {
                        mapTooltip.style.display = 'block';
                    },
                    mouseLeave_mapButton = _e => {
                        mapTooltip.style.display = 'none';
                    },
                    pressedButton_mapButtons = _e => {
                        const pressedButton = _e.target.closest('.map_button');
                        if (pressedButton) {
                            const position = +pressedButton.dataset.position - 1;
        
                            const src = positions[position].imageSrc;
                            const text = positions[position].text;
                            const title = positions[position].title;
                            openPopup(title, src, text);
                        }
                    },
                    pressedPopupClose_popup = _e => {
                        popupWrapper.classList.remove('view')
                    },
                    range = (number, a, b, c, d) => c + (d - c) * ((number - a) / (b - a)),
                    mouseMove_ship = _e => {
                        const ship = _e.currentTarget;
                        const rect = ship.getBoundingClientRect();
        
                        const width = ship.clientWidth;
                        const height = ship.clientHeight;
                        const x = _e.clientX - rect.left
                        const y = _e.clientY - rect.top
        
                        const translateX = -range(x, 0, width, -width / 10, width / 10);
                        const translateY = -range(y, 0, height, -height / 10, height / 10);
        
                        ship.querySelector('.map_image_ship').classList.remove('swim')
                        ship.querySelector('.map_image_ship').style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
                    },
                    mouseLeave_ship = _e => {
                        _e.currentTarget.querySelector('.map_image_ship').classList.add('swim')
                        _e.currentTarget.querySelector('.map_image_ship').style.transform = `translateX(0px) translateY(0px)`;
                    },
                    pressed_ship = _e => {
                        if (_e.target.closest('svg'))
                            openPopup(positions[12].title, positions[12].imageSrc, positions[12].text)
                    };
                // ships.forEach(ship => {
                //     ship.addEventListener('mousemove', mouseMove_ship);
                //     ship.addEventListener('mouseleave', mouseLeave_ship);
                //     ship.addEventListener('click', pressed_ship);
                // });
                mapControlsLists.forEach((mapControlsList, i) => {
                    const mapButtons = mapControlsList.querySelectorAll('.map_button');
                    mapButtons.forEach(mapButton => {
                        mapButton.addEventListener('mousemove', mouseMove_mapButton)
                        mapButton.addEventListener('mouseenter', mouseEnter_mapButton)
                        mapButton.addEventListener('mouseleave', mouseLeave_mapButton)
                    })
                });
                mapControls.addEventListener('click', pressedButton_mapButtons);
                popupClose.addEventListener('click', pressedPopupClose_popup);
            })


    return (
        <div id="map" className="t-body relative" style={{margin: '0'}}>
        <div style={{ transform: 'translateX(-50%)' }} className="flex flex-col items-center absolute left-1/2 z-20 w-full"> {/* pt-[4.5rem]  */}
            <img src="/image/happy_title.png" alt="" />
        </div>
        <div id="allrecords" className="t-records t-records_animated t-records_visible" data-hook="blocks-collection-content-node" data-tilda-project-id="5147217" data-tilda-page-id="36876098" data-tilda-page-alias="map" data-tilda-formskey="52fd5696ee95138e553990b205147217" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
            <div id="rec595655846" className="r t-rec" style={{ backgrounColor: '#000000' }} data-animationappear="off" data-record-type="131" data-bg-color="#000000">
                <div className="t123"><div className="t-container_100 "><div className="t-width t-width_100 " />
                    <main className="main">
                        <div className="wrapper">
                            <div className="map__wrapper">
                                <picture className="map-picture">
                                    <source srcSet="/image/map_mobile.webp" media={{ maxWidth: 600 }} />
                                    <img className="map_image" src="/image/map_mobile.webp" />
                                </picture>
                                <div className="map-ships">
                                    <img className="map_legend" src="/image/map_legend.png" alt="" />
                                    <div className="map_image_ship__wrapper">
                                        <div className="map_image_ship swim">
                                            <img data-position="13" src="/image/ship.png" alt="" />
                                            <svg viewBox="0 0 100 200">
                                                <path d="m 50.652555,45.506039 3.250431,-1.218912 3.927605,-1.354346 4.604778,-0.812608 4.063039,-0.406304 c 0,0 3.250431,-0.135435 3.79217,-0.135435 0.541738,0 4.740212,0.270869 4.740212,0.270869 h 2.166954 L 76.79144,35.61931 78.687525,34.264964 h 1.625216 l 1.218912,0.406304 0.812608,1.354346 0.270869,5.417386 5.281951,-0.27087 2.573258,0.135435 3.656735,0.677173 3.250432,0.812608 3.927604,0.677173 3.65674,1.083477 3.11499,0.677173 3.92761,1.760651 2.43782,1.489781 2.16695,1.489781 3.115,2.573258 2.30239,3.114997 1.89608,2.979562 1.08348,4.063039 0.81261,2.166954 0.67717,3.521301 0.81261,1.76065 0.67717,3.521301 -0.13543,3.250431 0.27087,3.385866 -0.40631,3.79217 -0.67717,3.114997 c 0,0 -0.54174,2.302388 -0.54174,2.844127 0,0.541739 -1.21891,3.114997 -1.21891,3.114997 l -1.48978,2.573258 -1.35435,2.573258 -1.76065,2.302392 -1.89608,1.89608 -1.89609,2.03152 -1.89608,1.89609 -1.89609,2.16695 -1.89608,1.35435 -2.43782,1.48978 -2.30239,1.21891 -3.65674,1.35435 c 0,0 -0.94804,0.8126 -2.16695,1.35434 -1.218915,0.54174 -3.250434,1.21891 -3.250434,1.21891 l -4.333909,-1.89608 -3.521301,-1.48978 -2.708692,-0.40631 -0.135435,5.95913 0.135435,2.57326 11.511944,-1.21892 6.229992,-0.27086 5.01108,-0.81261 h 5.68826 c 0,0 2.30239,-0.27087 3.5213,-0.27087 1.21891,0 4.46934,-0.67717 5.28195,-0.67717 0.81261,0 3.79217,-0.40631 4.46934,-0.40631 0.67718,0 3.79217,-0.13543 4.46935,-0.13543 0.67717,0 2.43782,-0.13544 3.38586,0.13543 0.94804,0.27087 3.115,0.94804 3.115,0.94804 l 1.08348,1.76065 0.4063,2.97957 0.27087,2.57325 c 0,0 -0.27087,1.62522 -0.81261,2.84413 -0.54174,1.21891 -1.62521,2.43783 -1.76065,2.97956 -0.13543,0.54174 -1.89608,3.115 -1.89608,3.115 l -2.30239,2.84413 -2.03152,1.35434 -3.25043,-0.27086 -2.16696,0.67717 -0.94804,1.08348 -1.76065,1.08347 -1.89609,0.54174 c 0,0 -1.21891,0.13544 -2.16695,0 -0.94804,-0.13543 -2.16695,-0.27087 -2.16695,-0.27087 l -1.35435,-0.13543 -1.21891,1.48978 -1.48978,0.4063 -2.57326,0.27087 -2.03152,-0.81261 c 0,0 -1.89609,-0.13543 -2.16696,0.54174 -0.27087,0.67718 -0.4063,0.54174 -1.08347,1.35435 -0.67718,0.81261 -3.25043,1.21891 -3.25043,1.21891 l -1.89609,0.27087 -3.5213,0.13543 c 0,0 -0.541738,-0.13543 -1.354346,0.27087 -0.812608,0.40631 -1.489781,0.81261 -1.489781,0.81261 0,0 -2.03152,0.67717 -2.573258,0.94804 -0.541739,0.27087 -2.437824,0.67718 -2.437824,0.67718 0,0 -0.812608,0 -1.896085,0.27087 -1.083477,0.27087 -2.844127,0.27087 -2.844127,0.27087 l -2.03152,0.27086 -1.218912,0.54174 c 0,0 -1.218911,0.40631 -1.896085,0.67718 -0.677173,0.27087 -3.114996,0.67717 -3.114996,0.67717 l -3.114997,0.81261 -2.03152,0.13543 h -2.166954 c 0,0 -0.270869,0.81261 -0.677173,1.35435 -0.406304,0.54174 -0.541739,0.13543 -1.354346,0.94804 -0.812608,0.81261 -0.541739,0.94804 -1.083477,0.94804 -0.541739,0 -3.79217,-0.8126 -3.79217,-0.8126 l -11.511945,-7.31347 -2.031519,-18.14825 5.281951,-1.35434 7.719774,-1.89609 6.229993,-1.35434 c 0,0 4.469344,-1.48979 5.281951,-1.48979 0.812608,0 5.688255,-0.54173 6.636298,-0.67717 0.948042,-0.13543 3.250431,-0.67717 3.250431,-0.67717 l -0.948042,-11.78282 -31.014533,-7.99064 2.166954,-2.57326 3.385866,-1.896082 3.250432,-2.437824 c 0,0 3.250431,-1.625215 3.5213,-2.979562 0.27087,-1.354346 3.385866,-5.011081 3.385866,-5.011081 l 2.979562,-3.927605 c 0,0 0.406304,-2.302389 0.677174,-2.844127 0.270869,-0.541739 0.812607,-3.521301 0.812607,-3.521301 l 0.541739,-3.385866 -1.489781,-5.823689 -1.76065,-4.875647 -2.437824,-4.604778 -4.063039,-4.604778 -4.063039,-3.656735 z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="map_image_birds__wrapper">
                                        <div className="map_image_birds">
                                            <img src="/image/birds.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="map_image_ship__wrapper">
                                        <div className="map_image_ship swim">
                                            <img data-position="13" src="/image/ship.png" alt="" />
                                            <svg viewBox="0 0 100 200">
                                                <path d="m 50.652555,45.506039 3.250431,-1.218912 3.927605,-1.354346 4.604778,-0.812608 4.063039,-0.406304 c 0,0 3.250431,-0.135435 3.79217,-0.135435 0.541738,0 4.740212,0.270869 4.740212,0.270869 h 2.166954 L 76.79144,35.61931 78.687525,34.264964 h 1.625216 l 1.218912,0.406304 0.812608,1.354346 0.270869,5.417386 5.281951,-0.27087 2.573258,0.135435 3.656735,0.677173 3.250432,0.812608 3.927604,0.677173 3.65674,1.083477 3.11499,0.677173 3.92761,1.760651 2.43782,1.489781 2.16695,1.489781 3.115,2.573258 2.30239,3.114997 1.89608,2.979562 1.08348,4.063039 0.81261,2.166954 0.67717,3.521301 0.81261,1.76065 0.67717,3.521301 -0.13543,3.250431 0.27087,3.385866 -0.40631,3.79217 -0.67717,3.114997 c 0,0 -0.54174,2.302388 -0.54174,2.844127 0,0.541739 -1.21891,3.114997 -1.21891,3.114997 l -1.48978,2.573258 -1.35435,2.573258 -1.76065,2.302392 -1.89608,1.89608 -1.89609,2.03152 -1.89608,1.89609 -1.89609,2.16695 -1.89608,1.35435 -2.43782,1.48978 -2.30239,1.21891 -3.65674,1.35435 c 0,0 -0.94804,0.8126 -2.16695,1.35434 -1.218915,0.54174 -3.250434,1.21891 -3.250434,1.21891 l -4.333909,-1.89608 -3.521301,-1.48978 -2.708692,-0.40631 -0.135435,5.95913 0.135435,2.57326 11.511944,-1.21892 6.229992,-0.27086 5.01108,-0.81261 h 5.68826 c 0,0 2.30239,-0.27087 3.5213,-0.27087 1.21891,0 4.46934,-0.67717 5.28195,-0.67717 0.81261,0 3.79217,-0.40631 4.46934,-0.40631 0.67718,0 3.79217,-0.13543 4.46935,-0.13543 0.67717,0 2.43782,-0.13544 3.38586,0.13543 0.94804,0.27087 3.115,0.94804 3.115,0.94804 l 1.08348,1.76065 0.4063,2.97957 0.27087,2.57325 c 0,0 -0.27087,1.62522 -0.81261,2.84413 -0.54174,1.21891 -1.62521,2.43783 -1.76065,2.97956 -0.13543,0.54174 -1.89608,3.115 -1.89608,3.115 l -2.30239,2.84413 -2.03152,1.35434 -3.25043,-0.27086 -2.16696,0.67717 -0.94804,1.08348 -1.76065,1.08347 -1.89609,0.54174 c 0,0 -1.21891,0.13544 -2.16695,0 -0.94804,-0.13543 -2.16695,-0.27087 -2.16695,-0.27087 l -1.35435,-0.13543 -1.21891,1.48978 -1.48978,0.4063 -2.57326,0.27087 -2.03152,-0.81261 c 0,0 -1.89609,-0.13543 -2.16696,0.54174 -0.27087,0.67718 -0.4063,0.54174 -1.08347,1.35435 -0.67718,0.81261 -3.25043,1.21891 -3.25043,1.21891 l -1.89609,0.27087 -3.5213,0.13543 c 0,0 -0.541738,-0.13543 -1.354346,0.27087 -0.812608,0.40631 -1.489781,0.81261 -1.489781,0.81261 0,0 -2.03152,0.67717 -2.573258,0.94804 -0.541739,0.27087 -2.437824,0.67718 -2.437824,0.67718 0,0 -0.812608,0 -1.896085,0.27087 -1.083477,0.27087 -2.844127,0.27087 -2.844127,0.27087 l -2.03152,0.27086 -1.218912,0.54174 c 0,0 -1.218911,0.40631 -1.896085,0.67718 -0.677173,0.27087 -3.114996,0.67717 -3.114996,0.67717 l -3.114997,0.81261 -2.03152,0.13543 h -2.166954 c 0,0 -0.270869,0.81261 -0.677173,1.35435 -0.406304,0.54174 -0.541739,0.13543 -1.354346,0.94804 -0.812608,0.81261 -0.541739,0.94804 -1.083477,0.94804 -0.541739,0 -3.79217,-0.8126 -3.79217,-0.8126 l -11.511945,-7.31347 -2.031519,-18.14825 5.281951,-1.35434 7.719774,-1.89609 6.229993,-1.35434 c 0,0 4.469344,-1.48979 5.281951,-1.48979 0.812608,0 5.688255,-0.54173 6.636298,-0.67717 0.948042,-0.13543 3.250431,-0.67717 3.250431,-0.67717 l -0.948042,-11.78282 -31.014533,-7.99064 2.166954,-2.57326 3.385866,-1.896082 3.250432,-2.437824 c 0,0 3.250431,-1.625215 3.5213,-2.979562 0.27087,-1.354346 3.385866,-5.011081 3.385866,-5.011081 l 2.979562,-3.927605 c 0,0 0.406304,-2.302389 0.677174,-2.844127 0.270869,-0.541739 0.812607,-3.521301 0.812607,-3.521301 l 0.541739,-3.385866 -1.489781,-5.823689 -1.76065,-4.875647 -2.437824,-4.604778 -4.063039,-4.604778 -4.063039,-3.656735 z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="map-controls">
                                    <svg className="map-controls-list" viewBox="0 0 1920 1080">
                                        <g data-position="1" className="map_button">
                                            <path d="m 1086.2001,555.65729 226.0301,-74.7155 132.1648,-13.49902 -7.8482,76.91302 -63.728,21.66122 66.8673,19.77763 -56.5076,32.33486 -3.1393,4.39503 -68.4368,-32.64879 -167.953,69.37868 -62.7861,-52.1125 z"></path>
                                            <path d="m 1083.3748,582.3414 -32.3349,11.3015 0.3139,5.65076 86.9588,85.70307 196.5206,-83.50556"></path>
                                            <path d="m 1440,519.8692 45.206,19.93459 -81.308,34.68934"></path>
                                        </g>
                                        <g data-position="2" className="map_button">
                                            <path d="m 1487.0896,589.24788 16.0105,-22.91694 70.9483,6.59254 36.7299,-44.57816 79.7384,9.73186 56.8214,27.31196 -2.1975,6.90648 -5.3368,0.31393 0.3139,38.9274 19.7777,6.90648 -109.8758,51.1707 -164.4997,-50.85677 z"></path>
                                            <path d="m 1650.9614,700.0654 147.8614,-79.73839"></path>
                                            <path d="m 1740.1177,586.4225 20.0916,5.02289"></path>
                                            <path d="m 1679.2152,572.29562 51.4846,12.55723"></path>
                                            <path d="m 1522.2498,580.77175 53.9961,-33.59059 15.3826,2.82538"></path>
                                            <path d="m 1484.8921,602.74689 -52.7404,22.28908 16.0105,5.33682"></path>
                                            <path d="M 1651.2753,699.12361 1527.2727,659.88228"></path>
                                        </g>
                                        <g data-position="3" className="map_button">
                                            <path d="m 835.05559,556.91302 c 0.31393,-1.88359 -0.94179,-64.35579 -0.94179,-64.35579 l 109.87574,-46.77567 74.71546,12.87115 -2.8253,19.14978 7.5343,-0.9418 -0.9418,54.93787 13.1851,3.13931 -1.2557,6.27861 13.1851,4.0811 -0.314,3.76717"></path>
                                            <path d="m 807.57237,570.71703 94.56454,25.97195 24.86205,-16.4267 27.96979,10.21119 18.42455,-8.8793 -0.66595,-3.99568 90.12495,-33.74134"></path>
                                            <path d="m 833.10035,537.64164 -25.306,15.31679"></path>
                                        </g>
                                        <g data-position="4" className="map_button">
                                            <path d="m 1250.2055,417.32712 40.8448,41.73271 8.8793,-0.66595 9.7672,7.99137 54.1637,-5.32758 10.2112,-1.3319 -3.3297,-7.32542 6.6595,-53.2758 -53.2758,-52.60985 -73.9202,10.87714 z"></path>
                                            <path d="m 1238.2184,418.88099 44.3965,50.16805 10.6552,-2.21982 8.2133,7.5474 72.8103,-8.21335 -5.5496,-6.21551 5.9936,-1.10992"></path>
                                            <path d="m 1382.5071,461.05767 -11.0992,-17.53662"></path>
                                        </g>
                                        <g data-position="5" className="map_button">
                                            <path d="m 1445.5501,468.82706 -40.8448,3.99568 -13.7629,-9.98921 h -1.1099 l -2.8858,-0.88793 -1.5539,-1.77586 c 0,0 -0.2219,-1.99784 -0.2219,-2.88577 0,-0.88793 0,-3.10776 0,-3.99569 0,-0.88793 1.5538,-4.43965 1.7758,-5.54956 0.222,-1.10991 1.3319,-3.55172 1.3319,-3.55172 l 2.4418,-3.55172 1.5539,-1.77586 2.8858,-1.77586 2.6638,-1.10991 1.9978,-2.44181 2.8858,-1.55388 3.9957,-1.55388 c 0,0 1.1099,-0.66594 2.8857,-1.33189 1.7759,-0.66595 4.2177,-1.3319 5.3276,-1.3319 1.1099,0 4.6616,-1.10991 4.6616,-1.10991 l 2.2199,-0.66595 1.1099,-4.43965 2.4418,-4.66163 4.2177,-6.88146 2.8857,-4.88361 2.8858,-3.99569 3.9957,-5.10559 5.9935,-5.54957 3.1078,-3.55172 5.3275,-4.43965 6.8815,-4.43965 5.7716,-3.10775 6.2155,-3.32974 6.8814,-3.32974 5.7716,-2.66379 5.7715,-1.77586 8.8793,-2.44181 9.7672,-1.33189 6.2156,-0.66595 7.3254,1.55388 3.7737,0.88793 3.7737,-1.99784 5.1056,-1.77586 7.5474,-0.66595 5.7715,-0.66595 7.9914,1.3319 7.3254,1.55387 8.8793,3.99569 6.4375,2.66379 6.8815,4.43965 6.8814,5.1056 5.9936,5.99352 5.7715,5.99353 5.3276,7.54741 5.5495,7.99137 3.1078,5.54956 3.1078,6.88146 3.3297,6.88146 1.9978,5.54956 1.9979,6.21551 1.5539,5.77154 1.3318,5.99353 -0.8879,3.55172"></path>
                                            <path d="m 1443.6102,488.79006 c 0,0 6.2786,2.82538 7.0634,3.13931 0.7849,0.31393 9.104,3.76716 9.104,3.76716 l 8.6331,3.45324 c 0,0 8.6331,3.6102 9.7319,3.6102 1.0987,0 7.3774,1.41269 8.1622,1.72662 0.7848,0.31393 7.0634,1.88359 7.0634,1.88359 0,0 7.8483,1.72662 9.104,2.19751 1.2557,0.4709 9.8888,0.94179 12.0863,1.25572 2.1976,0.31394 9.104,0.78483 10.0458,0.78483 0.9418,0 7.8483,0.15697 10.3597,0.15697 2.5115,0 11.6155,0.15696 12.8712,0.15696 1.2557,0 23.5448,-1.88358 25.4284,-1.88358 1.8836,0 20.7194,-4.39503 22.2891,-4.39503 1.5696,0 13.6559,-5.80772 14.9117,-5.80772 1.2557,0 11.1445,-5.49379 11.1445,-5.49379 l 10.3597,-7.06344 9.104,-10.98757 2.8254,-6.59254 -0.4709,-9.57489 -1.8836,-4.70896 -2.5115,-4.55199 -2.9823,-3.76717 -2.9823,-2.35448"></path>
                                        </g>
                                        <g data-position="6" className="map_button">
                                            <path d="m 1085.7164,286.57942 2.6638,-59.93528 -87.6831,-19.09049 -0.4439,-6.4375 3.1077,-2.21982 0.444,-8.8793 -4.43965,-1.99785 -6.21551,-0.44396 -3.32973,1.55388 -2.44181,2.66379 -0.44397,3.99568 0.66595,2.66379 1.77586,1.55388 2.44181,0.88793 -0.66595,9.32327 -46.17236,19.09049 -0.88793,43.28659"></path>
                                            <path d="m 943.64764,272.37254 -13.09696,8.8793 -0.44397,4.43965 -9.32326,7.99137 19.09049,6.21551"></path>
                                            <path d="m 944.31359,298.34449 36.62711,11.76507 0.88793,4.88362 48.83617,16.4267 87.6831,-45.28443 -31.7435,-5.77154"></path>
                                        </g>
                                        <g data-position="7" className="map_button">
                                            <path d="m 900.41655,236.74435 c 0.11099,-0.33298 0.27748,-4.71713 0.27748,-4.71713 l 0.22198,-3.21875 c 0,0 0.72144,-2.21982 1.10991,-2.71928 0.38847,-0.49947 2.6083,-2.99677 3.16325,-3.27425 0.55496,-0.27748 3.44073,-2.21982 4.05119,-2.5528 0.61045,-0.33297 4.60613,-1.88685 4.60613,-1.88685 l 1.72037,-0.33297 -0.77694,-20.69987 4.77262,-6.43749 1.88685,-0.72145 1.05442,1.10992 3.16325,5.99352 -0.66595,1.72037 -0.16648,17.20364 7.26992,-0.44396 c 0,0 5.60506,0.22198 5.82704,0.22198 0.22199,0 5.60506,0.27748 5.60506,0.27748 0,0 5.49407,1.2764 5.71605,1.2764 0.22199,0 4.71713,1.16541 4.99461,1.33189 0.27748,0.16649 3.7737,1.88685 3.7737,1.88685 l 1.83136,2.10884 -14.92833,6.3265 -0.16648,35.5727"></path>
                                            <path d="m 943.81413,264.93612 -4.21767,1.55388 -5.93803,0.66595 -6.21551,0.61045 c 0,0 -2.21982,-0.22198 -2.5528,-0.22198 -0.33297,0 -4.16217,-0.27748 -4.38415,-0.27748 -0.22198,0 -3.7737,-0.77694 -3.7737,-0.77694 l -3.49623,-0.94342 -3.8292,-1.05442 c 0,0 -1.72036,-1.44289 -1.94234,-1.55388 -0.22199,-0.11099 -0.83244,-0.77694 -0.83244,-0.77694"></path>
                                        </g>
                                        <g data-position="8" className="map_button">
                                            <path d="m 882.93543,308.4447 -0.88793,-63.04304 18.53554,-8.8793 6.77046,0.99892 -0.55495,13.31895 4.66163,-0.44396 3.10776,-0.44397 4.43965,0.88793 0.88793,2.21983 0.11099,2.66379 -1.3319,1.10991 c 0,0 -3.10775,0.77694 -3.55172,0.77694 -0.44396,0 -3.32974,0 -3.32974,0 0,0 -1.33189,0 -1.77586,-0.33297 -0.44396,-0.33298 -1.55387,-1.44289 -1.55387,-1.44289 h -2.5528 l 0.11099,17.98058 1.55388,1.22091 v 1.88685 l -0.88793,0.88793 -0.22199,1.55388 0.66595,14.09589"></path>
                                            <path d="m 882.71345,308.55569 -0.88793,1.60937 0.94342,0.72144 1.49838,0.72145 21.80978,6.10452 4.82812,-2.49731 26.19394,-13.37444 0.83243,-0.44397 -30.3561,-6.99245 -0.61046,-0.94342"></path>
                                        </g>
                                        <g data-position="9" className="map_button">
                                            <path d="m 769.75801,281.28188 -63.88489,-18.44342 0.23545,-5.33682 -0.70634,-4.78745 -3.37476,-3.53172 c 0,0 -3.53172,-1.72662 -3.84565,-1.72662 -0.31393,0 -4.70896,-0.15696 -5.02289,0 -0.31393,0.15697 -2.82538,0.9418 -2.82538,0.9418 0,0 -3.92413,0.86331 -4.39503,1.17724 -0.47089,0.31393 -3.1393,1.49117 -3.1393,1.49117 l -4.31655,2.19751 c 0,0 -1.56965,0.94179 -2.11903,1.25572 -0.54938,0.31393 -37.04382,-11.53695 -37.04382,-11.53695 l -99.35906,43.55788 3.21779,9.73185"></path>
                                            <path d="m 543.72793,296.35056 -0.62786,3.1393 143.15238,48.34533 54.31001,-34.53238 -0.31393,-12.24329 32.64879,-18.20798 0.94179,-0.94179 -3.45324,-0.9418"></path>
                                        </g>
                                        <g data-position="10" className="map_button">
                                            <path d="m 770.3903,360.72158 c 1.2209,-0.22199 3.7737,-1.44289 3.7737,-1.44289 l -0.44397,-3.44073 c 0,0 4.77263,-2.99676 5.1056,-3.55172 0.33298,-0.55496 1.99784,-4.21767 2.33082,-4.88361 0.33297,-0.66595 1.33189,-3.32974 1.33189,-4.43965 0,-1.10992 -1.44288,-5.1056 -1.66487,-5.88254 -0.22198,-0.77694 -2.4418,-2.88577 -3.21874,-3.44073 -0.77694,-0.55496 -6.77047,-2.5528 -6.77047,-2.5528 l -3.99568,-0.44396 c 0,0 -2.10884,-1.99785 -2.44181,-2.5528 -0.33298,-0.55496 -2.21983,-3.8847 -2.21983,-3.8847 0,0 0.66595,-3.10775 0.88793,-3.55172 0.22199,-0.44396 1.44289,-2.21982 0.88793,-2.99676 -0.55495,-0.77694 -1.66487,-2.77478 -1.66487,-2.77478 l -1.88685,-0.99892 v 2.33081 c 0,0 0.77694,1.66487 0.77694,2.10884 0,0.44396 -2.77478,2.10883 -2.77478,2.10883 0,0 -1.55388,1.55388 -1.55388,2.10883 0,0.55496 -0.44396,3.55173 -0.44396,3.55173 0,0 -1.66487,-2.99677 -1.99784,-3.8847 -0.33298,-0.88793 -1.3319,-3.44073 -0.99893,-4.32866 0.33298,-0.88793 1.22091,-2.77478 1.99785,-3.55172 0.77694,-0.77694 2.33081,-1.66487 2.33081,-1.66487 0,0 -3.10775,-0.99892 -3.55172,-0.88793 -0.44396,0.11099 -3.21874,1.10992 -3.66271,1.77586 -0.44396,0.66595 -1.99784,2.33082 -2.10883,2.88578 -0.11099,0.55495 -0.44397,2.77478 -0.66595,3.44072 -0.22198,0.66595 -0.66595,1.88686 -0.66595,2.66379 0,0.77694 -0.11099,3.21875 -0.11099,3.21875 l -0.99892,1.88685 c 0,0 -1.55388,-1.2209 -1.66487,-1.99784 -0.11099,-0.77694 -0.22198,-3.21875 -0.22198,-3.21875 0,0 -2.44181,0.33298 -2.44181,0.88793 0,0.55496 -0.22198,3.10776 -0.33297,3.55172 -0.11099,0.44397 -0.33298,1.3319 -0.33298,1.77586 0,0.44397 -0.11099,2.5528 -0.11099,2.5528 0,0 -2.44181,0.77694 -2.99676,0.88793 -0.55496,0.11099 -3.7737,1.10992 -4.32866,1.3319 -0.55496,0.22198 -2.99676,1.33189 -3.55172,1.55388 -0.55496,0.22198 -3.10776,1.99784 -3.10776,1.99784 0,0 -1.99784,1.55388 -2.4418,1.99784 -0.44397,0.44397 -1.66487,2.77478 -1.66487,2.77478 l -0.22198,3.32974 0.11099,3.21875 1.55387,2.99676 c 0,0 0.66595,1.44289 1.10992,1.88685 0.44396,0.44397 1.44288,0.66595 2.10883,1.44289 0.66595,0.77694 2.66379,1.77586 2.66379,1.77586 0,0 1.66487,1.10991 2.21983,1.33189 0.55495,0.22199 0.11099,0.99892 0,1.77586 -0.111,0.77694 -0.111,1.77586 -0.111,1.77586 l 3.32974,0.55496"></path>
                                            <path d="m 748.88162,370.04578 4.63048,0.31393 3.68869,0.15697 5.02289,-0.0785 5.02289,-0.15697 3.37475,-0.54938 3.61021,-1.09875 3.37475,-1.56966 2.43296,-1.72662 1.56966,-2.27599 0.94178,-2.51145 -0.78482,-2.43296 -1.64813,-2.35448 -2.82538,-1.8051"></path>
                                            <path d="m 725.88621,353.72139 -2.58993,1.96207 -1.96207,2.58992 -0.23545,4.0811 2.51145,3.45323 4.47351,1.4127 4.39502,1.25572 3.21779,0.54938 0.39242,0"></path>
                                        </g>
                                        <g data-position="11" className="map_button">
                                            <path d="m 648.85487,421.54478 c 0,-1.44288 -0.88793,-38.29198 -0.88793,-38.29198 l -20.20041,-6.99245 v -2.10883 l -72.69927,-16.42671 -40.28982,9.65624 -2.10884,30.63359"></path>
                                            <path d="m 512.55761,396.90473 -9.87822,7.10344 -3.99568,2.88577 109.88134,45.50641 58.49239,-27.63682 -18.75752,-9.87822"></path>
                                        </g>
                                        <g data-position="12" className="map_button">
                                            <path d="m 336.52548,454.17621 65.48484,-48.83615 57.27149,6.88146 66.59475,18.64653 1.10992,27.74781 -6.4375,1.3319 -6.65947,6.88146 -1.77586,6.88145 0.88793,2.88578 -5.54957,-1.77586 -4.88361,3.7737 c 0,0 -2.66379,7.5474 -2.66379,8.43533 0,0.88793 1.10991,5.1056 1.10991,5.1056 l -9.32326,0.66595 c 0,0 -5.54957,4.88361 -5.1056,5.99353 0.44396,1.10991 1.77586,4.88361 1.77586,5.99352 0,1.10992 -3.10776,-1.55387 -3.10776,-1.55387 l -57.32534,33.0968 -74.75425,-33.0968 -2.88577,-42.39866 z"></path>
                                            <path d="m 431.75598,545.85499 59.49131,-31.07755"></path>
                                            <path d="m 351.17633,482.14601 -15.76076,10.43318"></path>
                                        </g>
                                        <g data-position="14" className="map_button">
                                            <path d="M -0.62786135,627.23349 C 1.2557227,626.60563 316.44212,512.96272 316.44212,512.96272 l 167.32505,96.06279 c 0,0 -135.30412,81.62197 -137.50164,81.30804 -2.19751,-0.31393 -57.44931,14.44081 -57.44931,14.44081 0,0 -65.29758,59.3329 -67.49509,59.96076 -2.19752,0.62786 -93.86528,18.20798 -95.121,18.83584 -1.25572,0.62786 -92.295617,47.71746 -92.295617,47.71746 l -34.84630502,-5.02289"></path>
                                            <path d="m 1.5696534,825.32374 34.8463046,-2.19751 37.671681,-8.1622 21.347286,-9.73185 c 0,0 26.056245,-10.67364 29.509485,-12.2433 3.45324,-1.56965 15.06867,-9.10399 22.28908,-11.92936 7.2204,-2.82538 34.8463,-11.30151 41.12491,-12.2433 6.27862,-0.94179 35.47417,-5.96468 39.55527,-7.84827 4.0811,-1.88358 21.03335,-11.61543 21.03335,-11.61543 0,0 17.26619,-11.92937 19.77764,-13.49902 2.51144,-1.56965 16.01046,-16.95226 17.26618,-18.52191 1.25573,-1.56965 18.52191,-11.3015 20.4055,-12.55723 1.88358,-1.25572 22.60301,-10.04578 22.60301,-10.04578 l 34.21844,-10.04578 c 0,0 33.90451,-11.3015 35.16024,-11.92937 1.25572,-0.62786 24.80052,-7.2204 27.31196,-8.79005 2.51145,-1.56966 16.01047,-14.12688 17.89405,-15.06868 1.88359,-0.94179 16.01047,-11.3015 17.58012,-13.81295 1.56965,-2.51144 11.61544,-21.34728 11.61544,-21.34728 l 4.08109,-8.1622"></path>
                                            <path d="m 0.62786135,614.36233 14.44081065,-6.59255 15.382603,-5.96468 16.638326,-6.27861 21.975147,-6.27861 17.266187,-4.70897 c 0,0 18.521915,-6.59254 20.405495,-6.59254 1.88358,0 27.6259,-5.02289 27.6259,-5.02289 l 18.52191,-7.22041 c 0,0 11.61543,-4.39502 13.18509,-5.02289 1.56965,-0.62786 13.49902,-6.59254 13.49902,-6.59254 0,0 9.41792,-6.27861 12.55722,-8.1622 3.13931,-1.88358 19.4637,-9.10399 19.4637,-9.10399 l 20.4055,-8.47613 18.20798,-5.33682 24.48659,-8.16219 23.5448,-5.65076 14.75474,-5.65075 6.27862,-0.31393"></path>
                                        </g>
                                    </svg>

                                    <svg className="map-controls-list" viewBox="0 0 2160 3840">
                                        <g data-position="1" className="map_button">
                                            <path d="m 1405.938,1846.0163 278.1948,-107.4689 163.2439,-18.3649 -8.1622,111.55 -64.6174,25.1668 74.8201,30.6082 -64.6173,44.2119 -93.8653,-38.0903 -212.8972,103.3878 -74.8201,-76.8606 z"></path>
                                            <path d="m 1402.5371,1863.0209 -48.293,20.4055 -2.7207,19.7253 121.7527,133.3158 240.7847,-121.7527"></path>
                                            <path d="m 1809.9666,1869.1425 80.9418,-39.4506 -48.9732,-21.7658"></path>
                                        </g>
                                        <g data-position="2" className="map_button">
                                            <path d="m 2001.7782,1802.4846 154.4015,71.4192 -2.7207,130.5951 c 0,0 -293.1588,-15.6442 -292.4786,-25.1667 0.6801,-9.5226 12.2432,-119.032 15.6442,-119.7122 3.4009,-0.6802 125.1536,-57.1354 125.1536,-57.1354 z"></path>
                                            <path d="m 2159.2786,1939.9599 -108.9379,69.98 -192.1443,-73.3467 42.5651,-27.6553"></path>
                                            <path d="M 2126.0922,1907.495 2160,1920"></path>
                                            <path d="m 2069.3387,1886.5732 47.6152,16.8336"></path>
                                            <path d="m 1930.3407,1887.7756 45.4509,-29.0982 15.6312,4.3286"></path>
                                        </g>
                                        <g data-position="3" className="map_button">
                                            <path d="m 1044.4208,1744.329 148.9601,-80.6017 126.1739,20.7456 -1.0203,122.4329 25.5069,18.0249 -157.1223,78.221 -150.6605,-45.5723 z"></path>
                                            <path d="m 1322.6156,1826.291 -1.0203,10.2028 -77.2007,32.6487 -2.0406,1.3604 0.6802,14.2839 -9.5226,9.5225 -63.2569,-22.1059 -24.1466,18.0248 -124.4734,-35.7096 35.7096,-26.5271"></path>
                                        </g>
                                        <g data-position="4" className="map_button">
                                            <path d="m 1669.5089,1492.6613 c 3.0608,-0.3401 101.0071,-18.3649 101.0071,-18.3649 l 73.4598,92.5049 -8.8424,89.1039 4.4212,18.365 -101.0072,10.5428 c 0,0 -69.7187,-88.7639 -69.7187,-90.1242 0,-1.3604 0.6802,-102.0275 0.6802,-102.0275 z"></path>
                                            <path d="m 1649.1034,1598.7699 61.5565,85.703 22.7862,-3.4009 11.9032,13.9437 95.2256,-15.6442"></path>
                                        </g>
                                        <g data-position="5" className="map_button">
                                            <path d="m 1844.656,1674.2702 c 0,0 2.0405,-47.6128 4.0811,-47.9529 2.0405,-0.3401 37.7501,1.7004 37.7501,1.7004 l 53.0543,-81.6219 105.7684,-19.3852 48.9732,30.6082 36.7299,52.7142 10.2027,60.8763 -19.7253,36.3898 -45.9124,22.106 -74.1399,3.741 -64.2773,-10.2028 -28.9077,-13.9437 -11.5631,1.0202 z"></path>
                                            <path d="m 2136.4544,1641.6214 10.2028,6.1216 3.4009,5.4415 1.0202,3.4009"></path>
                                            <path d="m 1909.9535,1730.3852 19.0451,5.4415 20.0654,6.1216 20.0654,2.0406 c 0,0 13.2636,1.7005 15.6442,2.3806 2.3807,0.6802 15.9843,2.3807 19.3852,2.7208 3.401,0.3401 18.365,0 21.4258,0.6802 3.0608,0.6801 24.8267,0.34 24.8267,0.34 0,0 15.6442,-2.0405 19.3852,-2.0405 3.741,0 23.1262,-4.7613 25.5069,-6.1217 2.3806,-1.3603 12.5833,-6.4617 15.9843,-7.482 3.4009,-1.0202 13.6036,-7.482 13.6036,-7.482 l 7.1419,-7.482"></path>
                                        </g>
                                        <g data-position="6" className="map_button">
                                            <path d="m 1264.46,1269.5613 c 1.7004,-1.3603 59.1759,-26.5271 58.8358,-27.8875 -0.3401,-1.3603 -2.7207,-40.8109 -2.7207,-40.8109 h 26.5271 l 0.6802,35.0294 113.2504,30.9483 -3.741,104.7482 -79.2413,39.7907 -41.1511,-17.0046 -20.7455,16.6645 -0.6802,-10.2028 -51.3538,-18.3649 z"></path>
                                            <path d="m 1459.3324,1333.8386 16.6644,5.1014"></path>
                                            <path d="m 1264.46,1381.7915 49.9934,19.3852 1.0203,9.1825 66.6579,27.2073 72.4395,-42.5114"></path>
                                            <path d="m 1262.0793,1340.6405 -17.0045,12.5833 -0.6802,9.1825 -15.9843,12.5834 29.5879,10.2027"></path>
                                        </g>
                                        <g data-position="7" className="map_button">
                                            <path d="m 1203.7275,1282.7255 -2.7656,-83.9279 91.3828,1.4429 -5.7716,57.2345 -25.2505,11.3026 0.962,58.4368 v 6.0121 l -48.5772,-0.7215 -0.4809,-12.505 22.6052,-4.5691 -2.1644,-14.1884 c 0,0 -19.7194,1.4429 -19.4789,0.4809 0.2405,-0.9619 0.9619,-22.3647 0.9619,-22.3647 z"></path>
                                            <path d="m 1212.2559,1329.0773 3.7411,1.8705 c 0,0 3.826,1.1904 4.1661,1.2754 0.3401,0.085 5.7815,1.2753 5.7815,1.2753 0,0 4.1661,1.1053 5.1014,1.1053 0.9353,0 5.1864,-0.085 6.0366,0.085 0.8503,0.17 6.3767,0.17 6.8019,0.17 0.4251,0 3.996,0.2551 5.6115,0 1.6154,-0.2551 4.7612,-1.0203 5.3564,-1.0203 0.5952,0 4.6763,-1.3603 4.6763,-1.3603 l 2.5506,-1.4454 0.5102,-0.4251"></path>
                                        </g>
                                        <g data-position="8" className="map_button">
                                            <path d="m 1177.1543,1296.1924 c 2.6453,-0.9619 26.2124,-13.9479 26.2124,-13.9479 l 9.6193,2.6453 -0.7215,20.9218 13.467,-0.4809 5.2905,4.3286 -2.1643,5.2906 -5.7715,1.6834 -6.7335,-0.7215 -0.7214,-2.1643 -4.5692,-0.9619 0.481,31.503 1.6834,4.0882 -1.6834,2.4048 0.9619,26.4529 39.4389,11.0621 -41.8437,27.4148 -31.022,-12.2645 z"></path>
                                            <path d="m 1219.2385,1409.4589 34.8697,-20.4409"></path>
                                            <path d="m 1177.3948,1392.1443 -15.6313,11.5431 39.4389,15.1503"></path>
                                        </g>
                                        <g data-position="9" className="map_button">
                                            <path d="m 548.2274,1458.9923 205.41523,65.2975 165.28444,-86.7233 2.72073,-24.8267 97.6062,-40.1308 -250.64735,-68.0182 -218.3387,125.1536 z"></path>
                                            <path d="m 548.90758,1459.6725 c 1.36037,0.34 204.39496,64.2772 204.39496,64.2772 l 165.96462,-87.7436 1.02027,-24.1464 100.66707,-40.811"></path>
                                        </g>
                                        <g data-position="10" className="map_button">
                                            <path d="m 840.36594,1504.5645 c 2.38064,-1.7004 40.13079,-42.5114 40.13079,-42.5114 l 26.18704,7.1419 18.70503,51.0137 -10.20274,30.2682 -4.42119,10.5428 -59.85609,2.0406 -19.38521,-41.1511 z"></path>
                                            <path d="m 847.16777,1542.3147 -6.12164,5.2714 v 7.482 l 2.55068,7.8221 8.84238,2.7207 14.96402,1.8705 12.75343,0.1701 18.53499,-0.1701 9.35251,-1.5304 9.52256,-3.0608 3.23087,-6.4617 -0.51014,-6.2917 -4.42119,-6.6318 -4.25114,-3.4009"></path>
                                        </g>
                                        <g data-position="11" className="map_button">
                                            <path d="m 542.44584,1615.9445 c 0.85023,-0.1701 52.20404,-14.794 52.20404,-14.794 l 120.73246,30.4382 c 0,0 0.34009,68.3584 -0.68018,68.3584 -1.02028,0 -53.05427,27.5474 -54.75472,26.5271 -1.70046,-1.0203 -123.96333,-47.1027 -122.43292,-53.2243 1.53041,-6.1217 4.93132,-57.3054 4.93132,-57.3054 z"></path>
                                            <path d="m 539.21498,1658.6259 -16.83453,12.4134 c 0,0 140.11767,67.3381 141.13795,67.168 1.02027,-0.17 70.90906,-40.3008 70.90906,-40.3008 l -20.57553,-11.5631"></path>
                                        </g>
                                        <g data-position="12" className="map_button">
                                            <path d="m 288.81764,1787.2545 c 0.96192,-0.9619 91.14228,-81.2826 91.14228,-81.2826 l 85.13026,13.2265 86.33267,30.5411 -0.96193,97.8757 -52.66533,-8.8978 -39.91984,49.2986 c 0,0 -44.00801,24.5291 -44.96994,24.2886 -0.96192,-0.2405 -100.76152,-46.4128 -100.76152,-46.4128 l -3.60722,-68.5371 z"></path>
                                            <path d="m 532.66533,1826.6934 22.36473,8.4168 8.65732,3.3668 -14.66934,8.4168"></path>
                                            <path d="m 310.94188,1851.7034 -24.76953,14.1884 137.07414,68.7775 21.40281,-12.024"></path>
                                        </g>
                                        <g data-position="14" className="map_button">
                                            <path d="m 0,2000.8016 c 7.6953908,-0.9619 252.98597,-136.5932 252.98597,-136.5932 l 230.86173,303.006 -162.56513,136.5932 -138.51704,72.1443 -70.22044,46.1724 -113.50701385,42.3246"></path>
                                            <path d="M 2.8857715,2498.1162 58.677355,2475.992 c 0,0 39.438878,-10.5812 45.210425,-14.4289 5.77154,-3.8477 37.51503,-23.0861 37.51503,-23.0861 0,0 27.89579,-16.3527 35.59118,-22.1243 7.69539,-5.7715 39.43888,-28.8577 39.43888,-28.8577 l 44.24849,-21.1623 c 0,0 43.28658,-24.0481 47.13427,-25.972 3.8477,-1.9238 49.05812,-27.8958 49.05812,-27.8958 l 67.33467,-45.2104 38.47695,-31.7435 31.74349,-27.8958 15.39078,-21.1623"></path>
                                            <path d="m 0,1983.487 c 3.8476954,-1.9239 44.248497,-21.1623 44.248497,-21.1623 0,0 30.781563,-17.3147 34.629259,-19.2385 C 82.725451,1941.1623 112.54509,1920 112.54509,1920 l 26.93387,-20.2004 45.21042,-19.2385 31.74349,-17.3146 25.97194,-14.4289 11.54309,-2.8857"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="map-tooltip" style={{ display: 'none', top: '177px', left: '264px' }}>Спальный домик</div>
                            </div>
                        </div>
                    </main>
                    <div className="popup-list">
                        <div className="popup__wrapper map-info__wrapper">
                            <div className="popup">
                                <button className="popup-close"> </button>
                                <div className="popup-content map-info">
                                    <div className="map-info-title">
                                        <div className="map-info_image__wrapper">
                                            <img className="map-info_image" src="https://sun9-73.userapi.com/impg/ISQjVHwwgM0BPtscZP6l9mq1owGEaL0CCR5IWw/PD6qXHxDkfw.jpg?size=1080x1080&quality=95&sign=c0abb82fb112fceb16cacc692f88d622&type=album" alt="sdfdfsf" />
                                        </div>
                                        <h2 className="map-info_title">Спальный домик</h2>
                                    </div>
                                    <div className="map-info-content" style={{ display: 'block' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut atque maiores sint ex nisi autem laboriosam perspiciatis eos explicabo nemo a eius et corrupti enim deserunt animi omnis numquam, quis officia. Esse facilis nam in ipsam voluptate est facere quam, neque numquam magni! Amet aut quasi odit cum rerum recusandae eum enim itaque suscipit similique. Officia voluptatum hic corporis voluptates excepturi quibusdam iste corrupti molestias nihil repellat earum quam recusandae facere repudiandae dignissimos cumque optio ab, iusto doloremque quidem dolore iure, fugiat, aut error? Minima, nulla necessitatibus odit impedit nam sapiente obcaecati laudantium, quae eveniet voluptatem magnam unde doloribus?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <script>
                    'use strict';

                    // Consts
                </script> */}






                </div> </div></div></div></div>
    );
}

export default Map;
