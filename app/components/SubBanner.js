import React from 'react';

export default class SubBanner extends React.Component {
	render() {
		return (
			<div className="home-intro home-intro-primary" id="home-intro" style={{margin: '0px'}}>
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<p className="text-center" style={{cursor: 'default'}}>
								Novice or expert, we offer <em className="text-light" style={{marginLeft: '0.1em', marginRight: '0.15em'}}>inspiring</em> instruction that will improve your playing style.<span className="text-light">From rock to classical, we provide the teaching to become a better guitarist.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
