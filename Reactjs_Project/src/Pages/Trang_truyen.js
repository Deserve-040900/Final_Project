import React, { Component } from 'react';
import Carousel1 from '../Modules/Carousel/Carousel1';
import ComicHot from '../Modules/Comic/ComicHot';
import ListUpdate from '../Modules/Comic/ListUpdate';
import Complete from '../Modules/Comic/Complete';
import Ads from '../Modules/Comic/Ads';

class Trang_truyen extends Component {
    render() {
        return (
            <>
                <Carousel1 />
                
                <ComicHot />

                <ListUpdate />

                <Complete />

                <Ads />
            </>
        );
    }
}

export default Trang_truyen;