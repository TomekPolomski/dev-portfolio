'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
	{ title: 'About', path: '#about' },
	{ title: 'Portfolio', path: '#portfolio' },
	{ title: 'Stack', path: '#stack' },
	{ title: 'Contact', path: '#contact' },
];

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};

	const closeNav = () => {
		setNav(false);
	};

	const menuVariants = {
		open: {
			x: 0,
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
		closed: {
			x: '-100%',
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
	};

	return (
		<nav
			className='z-50'
			id='navbar'>
			<div
				className='border border-white/20 mt-12 backdrop-blur-3xl rounded-3xl hidden md:flex
                            items-center justify-center p-2 max-w-[400px] mx-auto'>
				<ul className='flex flex-row p-2 space-x-8'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								href={link.path}
								className='transform hover:text-white/50
                                                                transition-all duration-300 ease-in-out'>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<button
				type='button'
				onClick={toggleNav}
				className='md:hidden fixed top-5 right-5 border rounded z-50 text-white/70 border-white/70 p-2 cursor-pointer'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</button>

			<motion.div
				initial={false}
				animate={nav ? 'open' : 'closed'}
				variants={menuVariants}
				className='fixed z-40 left-0 top-0 w-full h-full bg-black/90 menu md:hidden'>
				<ul className='flex flex-col items-center justify-center space-y-6 h-full'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								href={link.path}
								onClick={closeNav}
								className='text-4xl font-bold'>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</nav>
	);
};

export default Navbar;
