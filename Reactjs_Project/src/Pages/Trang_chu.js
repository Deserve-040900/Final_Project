import React, { Component } from 'react';
import Carousel from '../Modules/Carousel/Carousel';
import TopBanner from '../Modules/TopBanner/TopBanner';
import Featured from '../Modules/Featured/Featured';
import BookHot from '../Modules/BookHot/BookHot';
import ComicsHot from '../Modules/ComicsHot/ComicsHot';
import About from '../Modules/About/About';
import Service from '../Modules/About/Service';
class Trang_chu extends Component {
	render() {
		return (
			<>
				<Carousel />

				<TopBanner />

				<Featured />

				<BookHot />

				<ComicsHot />

				<About />

				<Service />
			</>
		);
	}
}

export default Trang_chu;