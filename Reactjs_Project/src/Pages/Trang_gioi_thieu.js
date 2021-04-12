import React, { Component } from 'react';
import InnerBanner from '../Modules/About/InnerBanner';
import Breadcrumbs from '../Modules/About/Breadcrumbs';
import About from '../Modules/About/About';
import Advice from '../Modules/About/Advice';
import Advice2 from '../Modules/About/Advice2';
import Instagram from '../Modules/About/Instagram';
import Service from '../Modules/Home/Service';

class Trang_gioi_thieu extends Component {
    render() {
        return (
            <>
                <InnerBanner />

                <Breadcrumbs />

                <About />

                <Advice />

                <Advice2 />

                <Instagram />

                <Service />
            </>
        );
    }
}

export default Trang_gioi_thieu;