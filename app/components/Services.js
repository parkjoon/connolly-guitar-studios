import React from 'react';

export default class Services extends React.Component {
	render() {
		return (
			<div className="container" style={{marginTop: '1.5em', marginBottom: '1.5em'}}>
				<div className="row mb-lg">
					<div className="row pt-xl clearfix">
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="0">
								<div className="feature-box-icon">
									<i className="icon-globe icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Diverse Genres</h4>
									<p className="mb-lg">We specialize in rock, jazz, classical, blues, heavy metal, and R&B. We are open to teaching any genre of music that you would like to learn.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="0">
								<div className="feature-box-icon">
									<i className="fa fa-hand-paper-o icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Broad Range of Techniques</h4>
									<p className="mb-lg">Learn how to finger pick, tap, strum, bend, use slides, how to create swell effects, and a variety of other techniques.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="300">
								<div className="feature-box-icon">
									<i className="icon-music-tone-alt icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Reading Music & Theory</h4>
									<p className="mb-lg">Learn how to read and understand tablature, standard notation, and chord charts. Some music theory aspects that we cover are chord extensions, CAGED System, and modes.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="300">
								<div className="feature-box-icon">
									<i className="icon-star icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Improvisation</h4>
									<p className="mb-lg">We offer transcribing of your favorite tunes! You will also learn how to improvise so that you can perform in front of family and friends.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="600">
								<div className="feature-box-icon">
									<i className="icon-user icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Customer Service</h4>
									<p className="mb-lg">Our great availability allows you to take lessons on your own schedule. We are located in downtown Rochester in an easy to access studio.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="600">
								<div className="feature-box-icon">
									<i className="icon-microphone icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Other Services</h4>
									<p className="mb-lg">Feel free to contact us about performing at any personal events, such as weddings, funerals, and parties.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
