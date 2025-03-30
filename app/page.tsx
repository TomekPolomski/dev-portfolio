import ArrowUp from './components/ArrowUp';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import LogoAnimation from './components/LogoAnimation';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stack from './components/Stack';

function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<LogoAnimation />
			<About />
			<Portfolio />
			<Stack />
			<KeyMetrics />
			<Services />
			<Contact />
			<Footer />
			<ArrowUp />
		</>
	);
}
export default HomePage;
