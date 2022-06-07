import React from 'react';

const ImageContent = ( {val} ) => {

    const { urls, alt_description, links } = val;

    return(
        <a href={links.download}>
            <img src={urls.small} alt={alt_description}/>
        </a>
    );

}

export default ImageContent;