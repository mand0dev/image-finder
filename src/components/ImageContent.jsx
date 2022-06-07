import React from 'react';

const ImageContent = ( {val} ) => {

    const { urls, alt_description } = val;

    return(
        <img src={urls.small} alt={alt_description}/>
    );

}

export default ImageContent;