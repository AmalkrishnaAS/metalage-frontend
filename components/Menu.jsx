import { socialLinks } from './lib/constants'

import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { motion,AnimatePresence } from 'framer-motion'

const links = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'contact',
		path: '/contact',
	},
	{
		name: 'products',
		path: '/products',
	},
]
const menuVariants = {
	hidden: {
		opacity: 0,
		y: '-100vh',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
		
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	exit: {
		opacity: 0,
		y: '-100vh',
		opacity:0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
}

export default function Menu({ show, onClose }) {
	return (
		<AnimatePresence >
		{show&&<motion.div className={`w-screen h-screen bg-white fixed top-0 left-0 ${show ? 'visible' : 'invisible'}`} variants={menuVariants} animate={show?'visible':'hidden'} exit='exit' initial='hidden'>
			<div className='h-20 px-6 flex items-center justify-between border-b border-gray-200 '>
			<Link href="/" class="flex items-center justify-center  pt-6">
            <div className="flex cursor-pointer   md:mb-0">
            <img src="/favicon.ico" class="mr-3 h-8" alt="Flowbite Logo" />
            <div className="flex flex-col ">

            <span class="self-center text-2xl font-semibold whitespace-nowrap  font-roboto">metalage</span>
            <span className=" text-xs font-popins text-blue-400 tracking-widest  uppercase">technologies</span>
            </div>
            </div>
            
        </Link>
				<IoMdClose onClick={onClose} className='text-3xl mr-5 hover:text-blue-600 active:text-black' />
			</div>

			<ul className='px-6 py-12 flex flex-col gap-6'>
				{links.map((link, index) => (
					<li key={index} className=' border-b pb-4'>
						<Link href={link.path}>
							<a className='font-medium hover:text-blue-600 active:text-black uppercase' onClick={onClose} >
								{link.name}
							</a>
						</Link>
					</li>
				))}
				<div className='flex gap-4 pt-6'>
					<li>
						<a
							className='text-2xl hover:text-blue-600 active:text-black cursor-pointer'
							href={socialLinks?.facebook}
							target='_blank'
							rel='noreferrer noopener'
						>
							<FaFacebookSquare />
						</a>
					</li>
					<li>
						<a
							className='text-2xl hover:text-blue-600 active:text-black cursor-pointer'
							href={socialLinks?.instagram}
							target='_blank'
							rel='noreferrer noopener'
						>
							<FaYoutube className='text-2xl hover:text-red-600' />
						</a>
					</li>
					
				</div>
			</ul>
		</motion.div>}
		</AnimatePresence>
	)
}