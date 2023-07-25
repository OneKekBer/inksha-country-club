import React from "react";
import { v4 as uuidv4 } from 'uuid';

const HappyClickableItems = ({ arrayData }) => {
    return (
        <div className="flex flex-col gap-10 items-center py-10">
            {
                arrayData.map((el, i) => {
                    return (
                        <div key={uuidv4()} className="flex gap-[10px] items-center">
                            <div className="rounded-full relative w-[130px] h-[130px]">
                                <img style={{transform: 'translateX(-50%)'}} className="absolute left-[38%] -top-[13px]" src="/image/happy_contur.png" alt="" />
                                <img className="rounded-full object-cover w-[110px] h-[110px]" src={el.img} alt="" />
                            </div>
                            <div className="w-[115px] h-[34px] flex justify-center items-center mb-[25px]">
                                <img className="absolute" src="/image/happy_text_block.png" alt="" />
                                <p className="text-white text-center monterey text-base font-medium z-20 relative">
                                    {el.text}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default HappyClickableItems;
