import React from 'react';

export default class Extras extends React.Component {
	render() {
		return (
			<section className="section section-primary" style={{margin: '0px'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h2 className="mb-xs" style={{cursor: 'default'}}><strong>Fun Stuff</strong></h2>
							<div className="row">
								<div className="col-md-6">
									<div className="recent-posts mt-xl">
										<article className="post">
											<h4><span className="text-light">Basic Chords</span></h4>
											<p>These 8 beginning guitar chords are sometimes referred to as open position chords, because they are played in the first few frets of the guitar and all contain at least one open string. If you are looking for easy guitar chords for beginners, these are the ones to start with.</p>
											<a className="btn btn-secondary mt-md mb-xl" href="static/img/connolly-guitar-studios/basic-chords-1.jpg" target="_blank">View Image</a>
										</article>
									</div>
								</div>
								<div className="col-md-6">
									<div className="recent-posts mt-xl">
										<article className="post">
											<h4><span className="text-light">Blues Chords</span></h4>
											<p>Blues guitar chords have a distinct sound. That sound is the Dominant 7 chord (R 3 5 b7). Dominant 7's are Major Triads with a flat 7. For our first round of blues, we will stick with the Major keys.</p>
											<a className="btn btn-secondary mt-md mb-xl" href="static/img/connolly-guitar-studios/blues-chords-1.jpg" target="_blank">View Image</a>
										</article>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6" style={{cursor: 'default'}}>
							<h2 className="mb-xs"><strong>Our Stats</strong></h2>
							<div className="content-grid content-grid-dashed mt-xlg mb-lg">
								<div className="row content-grid-row">
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="300" data-append="+">0</strong>
												<label>Happy Students</label>
											</div>
										</div>
									</div>
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="25" data-append="+">0</strong>
												<label>Years in Business</label>
											</div>
										</div>
									</div>
								</div>
								<div className="row content-grid-row">
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="9999" data-append="+">0</strong>
												<label>Head Bangs</label>
											</div>
										</div>
									</div>
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="2">0</strong>
												<label>Cats</label>
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
