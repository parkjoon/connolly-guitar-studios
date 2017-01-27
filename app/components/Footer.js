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
								<span className="pull-right">test 1</span>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<span className="pull-right">test 2</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
