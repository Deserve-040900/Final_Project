import React, { useState } from 'react';

const LogoBanner = (props) => {
    const [title_edit, SetTitleEdit] = useState(props.title_logo);

    // setTimeout(() => {
    //     SetTitleEdit(title_edit + <span className="agile_btxtaas"> + '๖ۣۜ𝓑' + </span> + '.𝓢𝓽𝓸𝓻𝓮');
    // }, 5000)

    return (
        <div className="logo">
            <h1 className="agile_btxt">
                <a href="index.html">
                    {title_edit}
                </a>
            </h1>
        </div>
    );
}

export default LogoBanner;