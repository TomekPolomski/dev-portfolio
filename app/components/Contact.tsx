'use client';

import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<section
			id='contact'
			className='py-32 text-white max-w-[1200px] mx-auto px-4'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className='grid lg:grid-cols-2 gap-16'>
				<div className='space-y-12'>
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-7xl font-bold text-gray-300'>
						Get in <span className='text-purple-500'>touch</span>
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='glass p-8 rounded-2xl space-y-8'>
						<div className='space-y-2'>
							<p className='text-lg text-purple-300'>Phone</p>
							<a
								href='tel:+999999999'
								className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'>
								+99 (0) 99 999 999
								<span className='text-purple-500'>↗</span>
							</a>
						</div>

						<div className='space-y-2'>
							<p className='text-lg text-purple-300'>Email</p>
							<a
								href='mailto:john@doe.com'
								className='text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'>
								john@doe.com
								<span className='text-purple-500'>↗</span>
							</a>
						</div>

						<div className='space-y-2'>
							<p className='text-lg text-purple-300'>Office</p>
							<address className='text-xl not-italic leading-relaxed'>
								Oławska 6
								<br />
								Wroclove
								<br />
								Poland
							</address>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.980142647623!2d17.032117576965884!3d51.10882653974161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2768097ffb9%3A0xc9cd79742d96c907!2zT8WCYXdza2EgNiwgNTAtNTI5IFdyb2PFgmF3!5e0!3m2!1spl!2spl!4v1743344786443!5m2!1spl!2spl'
						width='100%'
						height='100%'
						style={{ border: 0 }}
						allowFullScreen
						loading='lazy'></iframe>
				</motion.div>
			</motion.div>
		</section>
	);
};
export default Contact;
