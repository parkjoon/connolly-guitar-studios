import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header id="header" className="header-narrow header-semi-transparent header-transparent-sticky-deactive header-transparent-bottom-border" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 1, "stickySetTop": "1"}'>
				<div className="header-body">
					<div className="header-container container">
						<div className="header-row">
							<div className="header-column">
								<div className="header-logo">
									<a href="javascript:;">
										{/* <img alt="Porto" width="82" height="40" src="static/img/logo-default-slim-dark.png" /> */}
										<img alt="Porto" height="40" src="static/img/connolly-guitar-studios/logo-white-2.png" />
									</a>
								</div>
							</div>
							<div className="header-column">
								<div className="header-row pull-right">
									<span className="text-light">Bryan Connolly, 248-601-3662</span>
								</div>
								<div className="header-row pull-right">
									<a href="mailto:connollyguitarstudios@gmail.com" className="text-light">connollyguitarstudios@gmail.com</a>
								</div>
								<div className="header-row pull-right">
									<a target="_blank" href="https://www.google.com/maps/place/134+W+University+Dr+%23310,+Rochester,+MI+48307/@42.6824473,-83.1374274,17z/data=!3m1!4b1!4m5!3m4!1s0x8824e9b978be0157:0xc25bb27a2236278d!8m2!3d42.6824473!4d-83.1352387" className="text-light">134 W University Dr #310, Rochester, MI 48307</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
