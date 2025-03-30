import { FaArrowAltCircleUp } from 'react-icons/fa';
import Link from 'next/link';

const ArrowUp = () => {
	return (
		<Link
			href='#navbar'
			className='fixed bottom-14 right-5 z-50 rounded-[50%] animate-pulse'>
			<FaArrowAltCircleUp className='size-12 bg-transparent text-[#A252C7]' />
		</Link>
	);
};
export default ArrowUp;
