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
									<i className="icon-user-following icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Customer Support</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="0">
								<div className="feature-box-icon">
									<i className="icon-layers icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Sliders</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="300">
								<div className="feature-box-icon">
									<i className="icon-calculator icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">HTML5</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="300">
								<div className="feature-box-icon">
									<i className="icon-star icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Icons</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 reverse appear-animation" data-appear-animation="fadeInLeft" data-appear-animation-delay="600">
								<div className="feature-box-icon">
									<i className="icon-drop icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Colors</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="feature-box feature-box-style-2 appear-animation" data-appear-animation="fadeInRight" data-appear-animation-delay="600">
								<div className="feature-box-icon">
									<i className="icon-mouse icons text-color-quaternary"></i>
								</div>
								<div className="feature-box-info">
									<h4 className="mb-sm">Buttons</h4>
									<p className="mb-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
