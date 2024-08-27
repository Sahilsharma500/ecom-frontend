import img from "../../../assets/mid_headphone.png"
import "./BestSails.css"
const Bestsails = () => {
  return (
    <>
    <div className="container Discount px-5 my-5">
        <div className="row align-items-center">
            <div className="col-md-6">
            <div className="Discount_col1 pt-md-4">
                                <h6 className="Main_Label pb-3"><i className="fa-solid fa-star"></i>Top Products Of the Month</h6>
                                <h2>
                                    Micropack MHP 
                                    Headphone Black
                                    <span>Transform</span> Your Life
                                </h2>
                                <p className="py-md-3">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa culpa ea earum provident vel illum natus, repellendus voluptate? Est reiciendis ad rem quidem veniam perspiciatis deleniti earum? Iusto, cum assumenda?
                                </p>
                                <div className="banner_btns">
                                    <button className="main_btn">Shop Now</button>
                                </div>
                            </div>
            </div>
            <div className="col-md-5">
                <img src={img} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bestsails
