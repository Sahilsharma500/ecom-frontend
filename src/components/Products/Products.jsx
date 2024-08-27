import Product from "./Product/Product"
import "./Products.css"
const Products = ({products}) => {
  return (
    <>
    <div className="container gx-0 py-5">
      {/* <h2 className="Product_h2 pb-5">Popular Products</h2> */}
        <div className="row gx-0">
            <div className="col-md-12">
                <div className="Products_main">
                {products?.data?.map((item) => {
                  return <Product key={item.id} id ={item.id} data = {item.attributes}/>
                })}
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Products
