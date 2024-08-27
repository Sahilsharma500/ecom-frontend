import img from "../../../assets/blue_headphones.png"
import "../NewArrival.css";

const Arrivals = () => {
  return (
    <>
    <div className="container gx-0 Arrivals">
        <div className="row gx-0 align-items-center Arrivals_main">
            <div className="col-4">
                <div className="Arrivals_col1 text-center">
                    <img src={img} alt="" className="img-fluid" />
                    
                </div>
            </div>
            <div className="col-8">
                <div className="Arrivals_col2">
                <p className="Product_name">HeadPhone</p>
                        <div className="icons pb-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h4 className="Product_price">$ 40</h4>
                </div>
            </div>
            {/* ****************  */}
            
        </div>
    </div>
    </>
  )
}

export default Arrivals
