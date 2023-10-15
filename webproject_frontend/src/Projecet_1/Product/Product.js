import React from 'react';
import '../Bottom/Product.css'

const Product = ({ id, productName, description, price, image }) => {
  return (
      <div className="card" key={id}>
        <div className="card_photo">
        <img className="card_photoimg" src={image} alt={productName} />
        </div>
        <div className="card_desc">
          <h2 className="card_title">{productName}</h2>
          <p className="card_desc">{description}</p>
          <div className="card_price">{price}</div>
        </div>
      </div>
  );
};

export default Product;
