import React, { Component } from 'react';
import InnerBanner from '../Modules/About/InnerBanner';
import Contact from '../Modules/Contact/Contact';
import Breadcrumbs from '../Modules/Contact/Breadcrumbs';

class TrangLienHe extends Component {
    render() {
        return (
            <>
                <InnerBanner />

                <Breadcrumbs />
                
                <Contact />
            </>
        );
    }
}

export default TrangLienHe;