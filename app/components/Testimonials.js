import React from 'react';

export default class Testimonials extends React.Component {
	render() {
		return (
			<section className="section section-background section-center mt-none" style={{backgroundImage: 'url(static/img/patterns/swirl_pattern.png)', margin: '0px'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<h2 className="heading-dark mt-xl"><strong>Testimonials</strong></h2>
							<div className="owl-carousel owl-theme nav-bottom rounded-nav" data-plugin-options='{"items": 1, "loop": false}'>
								<div>
									<div className="col-md-12">
										<div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
											<div className="testimonial-author">
												<img src="static/img/connolly-guitar-studios/male-placeholder-1.jpg" className="img-responsive img-circle" alt="" />
											</div>
											<blockquote>
												<p>Bryan's knowledge of the guitar and music continues to amaze me.  My playing has improved greatly with the time I have spent with him.</p>
											</blockquote>
											<div className="testimonial-author">
												<p><strong>Eric</strong><span>Student for 5 years.</span></p>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="col-md-12">
										<div className="testimonial testimonial-style-2 testimonial-with-quotes mb-none">
											<div className="testimonial-author">
												<img src="static/img/connolly-guitar-studios/jessica-1.png" className="img-responsive img-circle" alt="" />
											</div>
											<blockquote>
												<p>I first started learning music at Connolly Guitar Studios. Bryan's lessons were always fun and he was able to help me learn how to play many of my favorite songs. He also inspired me to learn how to play the piano and saxophone.</p>
											</blockquote>
											<div className="testimonial-author">
												<p><strong>Jessica</strong><span>Student for 3 years.</span></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
