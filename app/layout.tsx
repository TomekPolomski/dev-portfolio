import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'John Doe Portfolio',
	description: 'Portfolio Website John Doe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth'>
			<body className={dmSans.className}>{children}</body>
		</html>
	);
}
