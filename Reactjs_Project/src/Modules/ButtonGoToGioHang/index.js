import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonGoToGioHang extends Component {
    render() {
        return (
            <>
                <Link to="/gio-hang">
                    <div className="button_gio_hang">
                        <button className="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
                            <i className="glyphicon glyphicon-shopping-cart"></i>
                        </button>
                    </div>
                </Link>
            </>
        );
    }
}

export default ButtonGoToGioHang;