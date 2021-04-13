import React from 'react';

const Carousel1 = () => {
    return (
        // carousel
        <div id="carousel" className="carousel slide p-lg-0" data-ride="carousel">

            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
                <li data-target="#carousel" data-slide-to="4"></li>
                <li data-target="#carousel" data-slide-to="5"></li>
            </ol>

            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/comic/img-comic-1.jpg" id="comic" alt="img 1"/>
                </div>
                <div className="carousel-item">
                    <img src="images/comic/img-comic-2.jpg" id="comic" alt="img 2"/>
                </div>
                <div className="carousel-item">
                    <img src="images/comic/img-comic-3.jpg" id="comic" alt="img 3"/>
                </div>
                <div className="carousel-item">
                    <img src="images/comic/img-comic-4.jpg" id="comic" alt="img 4"/>
                </div>
                <div className="carousel-item">
                    <img src="images/comic/img-comic-5.jpg" id="comic" alt="img 5"/>
                </div>
                <div className="carousel-item">
                    <img src="images/comic/img-comic-6.jpg" id="comic" alt="img 6"/>
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

export default Carousel1;