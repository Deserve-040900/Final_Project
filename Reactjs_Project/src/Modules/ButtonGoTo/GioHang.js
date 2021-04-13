import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GioHang extends Component {
    render() {
        return (
            <>
                <Link to="/gio-hang">
                    <button className="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                    </button>
                </Link>
            </>
        );
    }
}

export default GioHang;