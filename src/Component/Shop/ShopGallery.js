import React from 'react';
import { useParams } from 'react-router-dom';

const ShopGallery = () => {
    const {shopId} = useParams();
    console.log(shopId);
    return (
        <div>
            <h1>this is shop ShopGallery</h1>
        </div>
    );
};

export default ShopGallery;