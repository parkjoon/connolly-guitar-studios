import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer" style={{padding: '0px', border: '0px', margin: '0px'}}>
				<div className="footer-copyright" style={{margin: '0px'}}>
					<div className="container">
						<div className="row">
							<div className="col-md-1">
								<a href="index.html" className="logo">
									<img className="img-responsive" src="static/img/connolly-guitar-studios/logo-white-2.png" />
								</a>
							</div>
							<div className="col-md-7">
								<p>© Copyright 2017. All rights reserved.</p>
							</div>
							<div className="col-md-4">
								<span className="pull-right">Bryan Connolly, 248-601-3662</span>
								<a href="mailto:Bryan@ConnollyGuitarStudios.com" className="pull-right">Bryan@ConnollyGuitarStudios.com</a>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<a className="pull-right" target="_blank" href="https://www.google.com/maps/place/134+W+University+Dr+%23310,+Rochester,+MI+48307/@42.6824473,-83.1374274,17z/data=!3m1!4b1!4m5!3m4!1s0x8824e9b978be0157:0xc25bb27a2236278d!8m2!3d42.6824473!4d-83.1352387">134 W University Dr #310, Rochester, MI 48307</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
