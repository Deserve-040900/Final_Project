import React from 'react';

const Carousel = () => {
    return (
        // carousel
        <div id="carousel" className="carousel slide p-lg-0" data-ride="carousel">

            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
            </ol>

            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/1540_new.jpg" alt="Los Angeles" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                    <img src="images/1545_new.jpg" alt="Chicago" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                    <img src="images/1525_new.jpg" alt="New York" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                    <img src="images/1522_new.jpg" alt="New York" width="1100" height="500" />
                </div>
            </div>
            
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#carousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#carousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}

export default Carousel;