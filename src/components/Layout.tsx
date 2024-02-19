import { ScrollRestoration, useLocation } from "react-router-dom";
import { SectionProps } from "../types/SectionProps";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

interface LayoutProps {
	data: SectionProps[]
}

function Layout({ data }: LayoutProps) {
	const location = useLocation();
	const isHomeRoute = location.pathname === '/';
	return (
		<>
			<Header />
			{isHomeRoute && <Buttons />}
			<div className="yeeter-container my-12">
				{data.map((item, index) => (
					<Section key={index} {...item} />
				))}
			</div>
			<Buttons />
			<Footer />
			<ScrollRestoration />
		</>
	);
}

export default Layout;