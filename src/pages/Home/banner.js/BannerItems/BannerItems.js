import React from 'react';



const BannerItems = ({slide}) => {
      const {Image, id,prev,next}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={Image} alt='' className="w-full h-100 rounded-sm" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;