import React from 'react';
import '../Bottom/Product.css';

const Product = ({ id, productName, description, price, image }) => {
  // 이미지 데이터가 Base64로 인코딩되어 있으므로 data URL을 만들어 사용합니다.
  const imageUrl = `data:image/png;base64,${image}`;

  return (
    <div className="card" key={id}>
      <div className="card_photo">
        <img className="card_photoimg" src={imageUrl} alt={productName} />
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
