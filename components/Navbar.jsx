import { useState } from 'react'
import {socialLinks} from './lib/constants'
import Link from 'next/link'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import Menu from './Menu'



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

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav className='fixed top-0 z-10 w-screen  bg-white flex items-center justify-between px-12 h-20 border-b border-gray-200 lg:px-8 md:px-6'>
			<Link href='/' passHref>
				<img src='' className='h-14 cursor-pointer'></img>
			</Link>
			<ul className=' hidden md:flex items-center space-x-4 justify-end uppercase' >
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.path}>
							<a className='py-4 px-2 font-medium hover:text-blue-600 active:text-black'>{link.name}</a>
						</Link>
					</li>
				))}
				<li>
					
				</li>
				<li>
				
				</li>
			</ul>
			<BiMenu
				className='text-3xl  hover:text-blue-600 active:text-black cursor-pointer md:hidden'
				onClick={() => setShowMenu(true)}
			/>
			<Menu show={showMenu} onClose={() => setShowMenu(false)} />
		</nav>
	)
}