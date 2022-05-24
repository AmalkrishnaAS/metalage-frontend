import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const CTA = (props) => {
    const router = useRouter();
    return (
       <div className="background h-[450px] w-screen flex flex-col  justify-center"
       >
           <div className="text-center text-white space-y-10  m-auto md:max-w-[66%] p-3">
               <h3 className="font-semibold text-4xl">{props.title}</h3>
               <p className="">{props.desc}</p>
               <button onClick={()=>{router.push(props.path)}} href='/brochure.pdf' target='_blank'  class=" w-[170px] m-auto    group relative mt-6 flex overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-[0] before:rounded-full before:bg-red-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100 md:mt-0">
          <span class=" relative z-0 flex items-center justify-center uppercase text-black transition duration-500 ease-in-out group-hover:text-gray-200 m-auto">
            {' '}
            See MORE &rarr;
          </span>
        </button>
           </div>
          
       </div>
        
    );
};

export default CTA;
