import { Context } from "../../../utils/context"
import { useContext } from "react" 
const CartItems = () => {
  const {cartItems, handleRemoveFromCart, handleCartQuantity } = useContext(Context);
  return (
    <>
    <div className="container">
    {cartItems.map((item) => (
      <div key= {item.id} className="row gx-0">
        <div className="col-3">
          <img src={"http://localhost:1337" + item?.attributes?.img?.data?.attributes?.url }
          alt="" 
          className="img-fluid"
          />
        </div>
        <div className="col-8">
          <div className="cartitem2">
            <h6>{item.attributes.title}</h6>
            <img src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png" 
            width="25"
            height="25"
            title=""
            onClick={()=> {handleRemoveFromCart(item)    
            }}
            alt="" 
            className="img-small"></img>
            <div className="quality-buttons py-2">
              <span 
              className="single-span cartitem_span"
              onClick={() => {
                handleCartQuantity(item, "dec");
              }}
              >
                -
              </span>
              <span className="cartitem_span1">{item.attributes.quantity}</span>
              <span 
              className="single-span cartitem_span"
              onClick={() => {
                handleCartQuantity(item, "inc");
              }}
              >
                +
              </span>
            </div>
            <div className="cart_size">
              <span className="cart-span">{item.attributes.quantity}</span>
              <span> X </span>
              <span className="cart-span">${item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
    
    </>
  )
}

export default CartItems
