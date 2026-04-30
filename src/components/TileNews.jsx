import React from 'react';
import Marquee from 'react-fast-marquee';

const TileNews = () => {
    return (
        <div className='bg-[gray] fond-bold h-[40] flex items-center '>
            <Marquee pauseOnHover={true} speed={100}>
                <b>New Arrivals</b>: Check out our latest collection! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
     <b>Weekly Feature</b>: 20% Off on all Featured Items! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
     <b>Join the Community</b>: Follow us for more updates!
            </Marquee>
        </div>
    );
};

export default TileNews;

