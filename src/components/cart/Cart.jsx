import { Context } from "../../utils/context";
import { useContext } from "react";

import CartItems from "./CartItems/CartItems";
const Cart = ({setShowCart}) => {
    const{cartItems, cartSubTotal}= useContext(Context);
  return (
    <>
        <div 
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
        >
            <div
            className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Shopping Cart
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

                </button>
            </div>
            <hr/>
            <div className="offcanvas-body">
                {!cartItems.length && (
                    <div className="empty-cart text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png" alt="" className="img-fluid"/>
                        <h4 className="pt-5 pb-3">Unfortunately, your cart is empty</h4>
                        <p>Please Add Something in your cart</p>
                        <a href="/products">
                        <button className="btn5 my-3">Continue Shopping</button>
                        </a>
                    </div>
                )}
                <CartItems />
            </div>
            {cartItems.length && (
                <>
                <div className="offcanvas-footer p-3">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-12">
                            <h5>
                                SubTotal : <span>$ {cartSubTotal} </span>
                            </h5>
                        </div>
                        <div className="col-md-5 col-12 my-3 my-md-0">
                            <button className="btn4" >
                                CheckOut
                            </button>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    </>
  )
}

export default Cart
