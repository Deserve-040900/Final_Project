import React from 'react';

const Breadcrumbs = () => {
    return (
        // breadcrumbs
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
            </ol>
        </nav>
    );
}

export default Breadcrumbs;