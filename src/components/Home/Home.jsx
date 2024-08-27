import React, { useContext, useEffect } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'
import NewAriivals from '../Products/NewAriivals'
import Bestsails from './Bestsails/Bestsails'
import OrderMethod from './OrderMethod/OrderMethod'
import { FetchDataFromApi } from '../../utils/api'
import { Context } from '../../utils/context'


const Home = () => {
  const {category, setCategory, products, setProducts} = useContext(Context);
  useEffect(() => {
    getCategory();
    getProducts();
  },[])

  const getCategory = ()=>{
    FetchDataFromApi("/api/categories?populate=*").then((res)=>{
      setCategory(res);
    })
  }

  const getProducts = ()=>{
    FetchDataFromApi("/api/products?populate=*").then((res)=>{
      setProducts(res);
    })
  }



  return (
    <div>
      <Banner />
      <Category category={category}/>
      <Products products={products}/>
      <NewAriivals />
      <Bestsails />
      <div className="section1 py-5">
      <OrderMethod />
      </div>
     
    </div>
  )
}

export default Home
