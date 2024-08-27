import { NavLink } from 'react-router-dom';
import "./SingleProduct.css"
import useFetch from"../../hooks/useFetch";
import { useParams} from "react-router-dom";
import { useContext, useState } from 'react';
import { Context } from '../../utils/context';
import RelatedProducts from './RelatedProducts/RelatedProducts';

const SingleProduct = () => {
  const[quantity, setQuantiy] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);


    const { handleAddToCart } = useContext(Context);
    

    const products = data?.data?.[0]?.attributes;
    if(!data) return;

    const increment = () => {
      setQuantiy((prevState) => prevState + 1);
    }

    const decrement = ()  => {
      setQuantiy((prevState) => {
      if(prevState === 1) return 1;
      return prevState - 1;
    })
  }

  return (
    <>
    <div className="container gx-0 py-4 single_Product_main">
      <div className="category-title">
        {/* <NavLink tp="/">
          <h2>Home</h2>
        </NavLink>{" "} */}
        {/* <span className='px-2'>/</span>
        {
          products?.categories?.data?.[0]?.attributes?.title
        } */}
      </div>
      <div className="row gx-0 py-2 align-items-center">
        <div className="col-md-6">
          <div className="single_Product1">
            <img src={"http://localhost:1337" + products?.img?.data?.attributes?.url} alt="" className='img-fluid' />
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_Product2">
            <div className="single_Product-title">{products.title}</div>
            <div className="single_Product-price">$ {products.price}</div>
            <p className="single_Product-description">{products.description}
            </p>
            <div className="cards-button">
              <div className="quality-buttons my-4 py-3">
                <span className='single-span'onClick={decrement}>-</span>
                <span className='single-span mx-1'>{quantity}</span>
                <span className='single-span' onClick={increment}>+</span>
              </div>
              <button className='btn3 py-3' onClick={() => {handleAddToCart(data?.data?.[0], quantity)}}>
                <i className='fa-solid fa-cart-shopping pe-2 fs-5'></i>ADD TO CART
              </button>
              <hr />
              <div className="single-category py-2">
                <span className='fw-bold fs-6'>Category : {products?.categories?.data?.[0]?.attributes?.title}</span>
                
              </div>
              <span className='fw-boldfs-6'>Brand : {products.brand}</span>
              {/* ************ */}
              <div className="single-social py-2">
                <span className='fw-bold fs-6'>Share : </span>
                <a href="https://www.facebook.com/"
                target="_blank"
                rel='noreferrer'
                >
                  <i className='fa-brands fa-facebook'></i>
                </a>
                <a href="https://www.instagram.com/"
                target="_blank"
                rel='noreferrer'
                >
                  <i className='fa-brands fa-instagram'></i>
                </a>
                <a href="https://www.twitter.com/"
                target="_blank"
                rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
                <a href="https://www.music.com/"
                target="_blank"
                rel='noreferrer'
                >
                  <i className='fa-brands fa-tiktok'></i>
                </a>
              </div>
              {/* ************** */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* *************** */}
    <RelatedProducts productId={id} categoryId={products?.categories?.data?.[0]?.id}/>
    </>
  )
}


export default SingleProduct
