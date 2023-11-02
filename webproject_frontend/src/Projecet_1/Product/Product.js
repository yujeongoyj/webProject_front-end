  import React from 'react';
  import '../Bottom/Product.css';
  import styled from 'styled-components'
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

//   const Product = () => {
//     return (
//       <>
//       <StoreInfoTitle>
//             상점정보
//         </StoreInfoTitle>
//         <StoreInfoWapper>
//             <SellerInfoWrapper>
//                 <SellerProfile>
//                     <img alt="seller"/>
//                 </SellerProfile>
//                 <SellerInfo>
//                     <SellerName>{}</SellerName>
//                     <SellerMoreInfo>
//                         <MoreInfo>상품1</MoreInfo>
//                         <MoreInfo>팔로워0</MoreInfo>
//                     </SellerMoreInfo>
//                 </SellerInfo>
//             </SellerInfoWrapper>
//             <FollowButton>
//                         <img alt="follow"/>
//                         팔로우
//                     </FollowButton>

//         </StoreInfoWapper>
//         </>
//     );
//   };

//   const FollowButton = styled.button`
// width: 100%;
//     height: 32px;
//     border: 1px solid rgb(238, 238, 238);
//     color: rgb(136, 136, 136);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 13px;
//     border-radius: 2px;
// img{
//     margin-right: 3px;
//     width: 20px;
//     height: 14px;
// }
// `

// const MoreInfo = styled.a`
// font-size: 13px;
//     color: rgb(153, 153, 153);
//     :first-child{
//         margin-right: 17px;
//     position: relative;
//     ::after{
//     content: "";
//     position: absolute;
//     top: 1px;
//     right: -8px;
//     width: 1px;
//     height: 12px;
//     border-right: 1px solid rgb(204, 204, 204);
//     }
//     }
// `

// const SellerMoreInfo = styled.div`
//     display: flex;
// `
// const SellerName = styled.div`
//   display: block;
//     margin: 4px 0px 11px;
// `
// const SellerInfo = styled.a`
  
// `

// const SellerProfile = styled.a`
//     margin-right: 16px;
//     img{
//         border-radius: 50%;
//         width: 48px;
//         height: 48px;
//     }
// `

// const SellerInfoWrapper = styled.div`
//         display: flex;
//     margin-top: 20px;
//     margin-bottom: 16px;
// `

// const StoreInfoWapper = styled.div`
//     padding: 0px 10px;
// `

// const StoreInfoTitle = styled.div`
//     font-size: 18px;
//     padding: 48px 0px 16px;
//     border-bottom: 1px solid rgb(238, 238, 238);
// `

  export default Product;
