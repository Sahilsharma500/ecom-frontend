import iphone from "../../assets/iphones.png"
import Arrivals from "./Arrivals/Arrivals";
import "./NewArrival.css";
const NewAriivals = () => {
  return (
    <>
    <div className="container gx-0 py-5">
        <h2 className="pb-5">New Arrivals</h2>
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="NewArrival_col1">
                    <h3>New Iphone 15 Pro Max</h3>
                    <div className="banner_btns pt-3">
                        <button className="main_btn">Shop Now</button>
                    </div>
                    <img src={iphone} alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="NewArrival_col2">
                    <Arrivals />
                    <Arrivals />
                    <Arrivals />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewAriivals
