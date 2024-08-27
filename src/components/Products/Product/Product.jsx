import { useNavigate } from "react-router-dom"


const Product = ({id, data}) => {
    const navigate = useNavigate();
  return (
    <>
    
        <div className="Product_main">
            <div className="col-md-12" onClick={() => navigate("/products/" + id)}>
                <div className="card border-0 h-100">
                    <div className="card_head">
                        <img src={"http://localhost:1337" + data?.img?.data?.attributes?.url} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <p className="Product_name py-1">{data.title}</p>
                        <div className="icons py-2 d-flex align-items-center">
                            <i className="fa-solid fa-star">
                                <p>{data.rating}</p>
                            </i>
                        </div>
                        <h4 className="Product_price">${data.price}</h4>
                    </div>
                </div>
                </div>
            </div>
        
    </>
  )
}

export default Product
