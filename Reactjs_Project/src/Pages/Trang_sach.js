import React, { Component } from 'react';
import Breadcrumbs from '../Modules/Book/Breadcrumbs';
import Shop from '../Modules/Book/Shop';

class Trang_sach extends Component {
    render() {
        return (
            <>
                <Breadcrumbs />

                <Shop />
            </>
        );
    }
}

export default Trang_sach;