import "./OrderMethod.css"
import img1 from "../../../assets/ship.png"
import img2 from "../../../assets/secure.png"
import img3 from "../../../assets/online-support.png"
const OrderMethod = () => {
  return (
    <>
    <div className="Order">
        <div className="container gx-0 py-5">
            <div className="row gx-0 align-items-center">
            <div className="col-md-4">
                <div className="order_col1">
                <img src={img1} alt="" className="img-fluid"/>
                <h6 className="py-2">Free Shipping</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum facere doloremque rem officia ab.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="order_col1">
                <img src={img2} alt="" className="img-fluid"/>
                <h6 className="py-2">Free Shipping</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum facere doloremque rem officia ab.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="order_col1">
                <img src={img3} alt="" className="img-fluid"/>
                <h6 className="py-2">Free Shipping</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum facere doloremque rem officia ab.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OrderMethod
