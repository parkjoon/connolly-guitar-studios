import React from 'react';

const textStyle = {
	textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)'
};

export default class Banner extends React.Component {
	render() {
		return (
			<div className="slider-container rev_slider_wrapper" style={{height: '760px'}}>
				<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 760}'>
					<ul>
						<li data-transition="fade">
							<img src="static/img/connolly-guitar-studios/guitar-1.jpg"
								alt=""
								data-bgposition="center center"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								className="rev-slidebg" />

							<div className="tp-caption"
								data-x="center" data-hoffset="-120"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: '5'}}
								data-transform_in="x:[-300%];opacity:0;s:500;"><img src="static/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption top-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-95"
								data-start="500"
								style={{...textStyle, zIndex: '5', cursor: 'default'}}
								data-transform_in="y:[-300%];opacity:0;s:500;">LOOKING FOR</div>

							<div className="tp-caption"
								data-x="center" data-hoffset="120"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: '5'}}
								data-transform_in="x:[300%];opacity:0;s:500;"><img src="static/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption main-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-45"
								data-start="1500"
								data-whitespace="nowrap"
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;"
								style={{...textStyle, zIndex: '5', cursor: 'default'}}
								data-mask_in="x:0px;y:0px;">GUITAR LESSONS?</div>

							<div className="tp-caption bottom-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="5"
								data-start="2000"
								style={{...textStyle, zIndex: '5', cursor: 'default'}}
								data-transform_in="y:[100%];opacity:0;s:500;">Check out what we have to offer.</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
