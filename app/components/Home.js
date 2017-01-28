import React from 'react';

import About from './About';
import Banner from './Banner';
import Extras from './Extras';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import SubBanner from './SubBanner';
import Testimonials from './Testimonials';

export default class Home extends React.Component {
	render() {
		return (
            <div>
				<Header />
				<div role="main" className="main">
					<Banner />
					<SubBanner />
					<Services />
					<About />
					<Testimonials />
					<Extras />
				</div>
				<Footer />
			</div>
		);
	}
}
