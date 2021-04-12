import React, { Component } from 'react';
import LogoBanner from '../TopBanner/LogoBanner';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_logo: this.props.title_page,
            count: 1,
            interval: null,
            search: '',
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSearchfunction = this.handleSearchfunction.bind(this);
    }

    updateCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    componentDidMount(){
        // this.setState({
        //     interval: setInterval(() => {
        //     this.updateCount();
        //     //console.log(this.state.title_logo);
        //     }, 1000)
        // })
    }

    componentDidUpdate(){
        // console.log("đang didupdate");
        // if(this.state.count === 3){
        //     this.props.delete_me();
        // }
    }

    componentWillUnmount(){
        console.log('đang bắt đầu cho component remove');
        clearInterval(this.state.interval);
    }

    handleChangeInput = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSearchfunction = () => {
        console.log(this.state.search);
    }

    render() {
        return (
            <div className="container">
                {/* top nav */}
                <nav className="top_nav d-flex pt-3 pb-1">
                    {/* logo */}
                    <LogoBanner title_logo={this.state.title_logo} />
                    <div className="w3ls_right_nav ml-auto d-flex">
                        {/* search form */}
                        <form className="nav-search form-inline my-0" action="#" method="post">
                            <input type="text" className="form-control" value={this.state.search} onChange={this.handleChangeInput} placeholder="Tên sách, tác giả, tên truyện...." />
                            <input className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" value="Search" onClick={this.handleSearchfunction} />
                        </form>

                        <div className="nav-icon d-flex">
                            {/* sigin and sign up */}
                            <a className="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                                <i className="far fa-user"></i>
                            </a>

                            {/* shopping cart */}
                            <div className="cart-mainf">
                                <div className="hubcart hubcart2 cart cart box_1">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="display" value="1" />
                                        <button className="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
                                            <i className="fas fa-shopping-bag"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* bottom nav */}
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link  active" href="index.html">HOME
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="bookhot.html">SÁCH</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="storyhot.html">TRUYỆN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">GIỚI THIỆU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="event.html">SỰ KIỆN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">LIÊN HỆ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="faqs.html">FAQS</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;