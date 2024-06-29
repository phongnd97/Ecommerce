import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroserData } from './MainCaroselData';

const MainCrosel = () => {
    const items = mainCaroserData.map((item) => <img className='curson-pointer' role='presentation' src={item.image} alt='' />);

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay// tự động chuyển đổi
            autoPlayInterval={1000} //khoảng thời gian các lần chuyển đổi 1000
            infinite// lặp vô tận
        />
    )
}

export default MainCrosel
