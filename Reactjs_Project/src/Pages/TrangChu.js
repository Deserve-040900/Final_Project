import React, { Component } from 'react';
import SignUp from '../Modules/Modal/SignUp';
import SignIn from '../Modules/Modal/SignIn';
import Carousel from '../Modules/Carousel/Carousel';
import TopBanner from '../Modules/TopBanner/TopBanner';
import Featured from '../Modules/Featured/Featured';
import BookHot from '../Modules/BookHot/BookHot';
import ComicsHot from '../Modules/ComicsHot/ComicsHot';
import About from '../Modules/Home/About';
import Service from '../Modules/Home/Service';
class TrangChu extends Component {
	render() {
		return (
			<>
				<SignUp />

				<SignIn />
				
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

export default TrangChu;