import React from 'react';

import Banner from './Banner';
import Experience from './Experience';
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
					<Testimonials />
					<Experience />
				</div>
				<Footer />
			</div>
		);
	}
}
