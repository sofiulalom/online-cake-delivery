import React from 'react';
import img1 from '../../../../src/assest/bannerItems/1.jpg';
import img2 from '../../../../src/assest/bannerItems/2.jpg';
import img3 from '../../../../src/assest/bannerItems/3.jpg';
import img4 from '../../../../src/assest/bannerItems/4.png'
import img5 from'../../../../src/assest/bannerItems/5.jpg';
import img6 from '../../../../src/assest/bannerItems/6.jpg';
import img7 from '../../../../src/assest/bannerItems/7.jpg';
import BannerItems from './BannerItems/BannerItems';

const bannerData=[
    {
      Image:img1,
      prev:7,
      id: 1,
      next: 2
    },
    {
      Image:img2,
      prev:1,
      id: 2,
      next: 3,
    },
    {
      Image:img3,
      prev:2,
      id: 3,
      next:4, 
    },
    {
      Image:img4,
      prev:3,
      id: 4,
      next: 5,
    },
    {
      Image:img5,
      prev:4,
      id: 5,
      next: 6
    },
    {
      Image:img6,
      prev:5,
      id: 6,
      next: 7,
    },
    {
      Image:img7,
      prev:6,
      id: 7,
      next: 1,
    },
];
console.log(bannerData)
const Banner = () => {
    return (
        <div className="carousel w-auto h-96 mx-5">
          {
            bannerData?.map(slide => <BannerItems
            key={slide.id}
            slide={slide}
            ></BannerItems>)
          } 
         
        </div>
    );
};

export default Banner;