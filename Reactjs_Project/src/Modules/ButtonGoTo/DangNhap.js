import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DangNhap extends Component {
    render() {
        return (
            <>
                <Link to="/dang-nhap">
                    <button className="btn top_hub_card mt-1" type="submit" name="submit" value="" title="Card">
                        <span className="glyphicon glyphicon-user"></span>
                    </button>
                </Link>
            </>
        );
    }
}

export default DangNhap;