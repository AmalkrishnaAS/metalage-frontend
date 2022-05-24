import React from "react";
import { useRouter } from "next/dist/client/router";

const CTA = (props) => {
    const router = useRouter();
    return (
        <div className="mx-auto w-full bg-white shadow-sm p-5 container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0  background flex">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0b ">
                <div className="w-80 sm:w-[100%] flex flex-col justify-center items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-50">{props.title}</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 xl:w-full ">
                        <p className="text-base leading-6 text-white max-w-[850px] m-auto">{props.desc}.</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button onClick={()=>{router.push(props.path)}} className="px-4 bg-gray-100 flex justify-between items-center w-full lg:w-72 h-14 text-gray-800 hover:bg-blue-100">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    

                        </div>

                
                </div>
            </div>
        
    );
};

export default CTA;
