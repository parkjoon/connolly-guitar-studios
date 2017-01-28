import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<section className="section section-tertiary pb-none mb-none" style={{padding: '0', border: '0'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-7" style={{marginTop: '10em'}}>
							<h2 className="text-light">About Me</h2>
							<p className="text-light">Hello! My name is Bryan Connolly and I am the owner of Connolly Guitar Studios. I have been playing guitar for more than 30 years, it is my passion. Connolly Guitar Studios has been teaching students to play guitar for 25 years. Our positive teaching environment helps students of all ages learn to play guitar while still having a great time.</p>
						</div>
						<div className="col-md-4 col-md-offset-1">
							<img className="img-responsive appear-animation" src="static/img/connolly-guitar-studios/brian-1.jpg" alt="" data-appear-animation="fadeInUp" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
