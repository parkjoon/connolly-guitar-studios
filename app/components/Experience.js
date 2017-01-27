import React from 'react';

export default class Experience extends React.Component {
	render() {
		return (
			<section className="section section-primary" style={{margin: '0px'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h2 className="mb-xs">Our <strong>Blog</strong></h2>
							<div className="row">
								<div className="col-md-6">
									<div className="recent-posts mt-xl">
										<article className="post">
											<div className="date">
												<span className="day">15</span>
												<span className="month background-color-secondary">Jan</span>
											</div>
											<h4><a className="text-light" href="blog-post.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat libero.</p>
											<a className="btn btn-secondary mt-md mb-xl">Read More</a>
										</article>
									</div>
								</div>
								<div className="col-md-6">
									<div className="recent-posts mt-xl">
										<article className="post">
											<div className="date">
												<span className="day">15</span>
												<span className="month background-color-secondary">Jan</span>
											</div>
											<h4><a className="text-light" href="blog-post.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat libero.</p>
											<a className="btn btn-secondary mt-md mb-xl">Read More</a>
										</article>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">

							<h2 className="mb-xs">Our <strong>Stats</strong></h2>

							<div className="content-grid content-grid-dashed mt-xlg mb-lg">
								<div className="row content-grid-row">
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="25000" data-append="+">0</strong>
												<label>Happy Clients</label>
											</div>
										</div>
									</div>
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="15">0</strong>
												<label>Years in Business</label>
											</div>
										</div>
									</div>
								</div>
								<div className="row content-grid-row">
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="352">0</strong>
												<label>Cups of Coffee</label>
											</div>
										</div>
									</div>
									<div className="content-grid-item col-md-6 center">
										<div className="counters">
											<div className="counter text-color-light">
												<strong data-to="178">0</strong>
												<label>High Score</label>
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
