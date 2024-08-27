const NewsLetter = () => {
  return (
    <>
    <div className="NewLetter py-5">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="Newletter_col1">
                        <h2>Join Us & Get Updates</h2>
                        <p>Sign up for exclusive offers, latest news and updates</p>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <div className="Newletter_col2">
                        <form action="">
                            <div className="form-input d-flex rounded">
                               <input type="email" placeholder="Enter your Email" className="form-control mx-3 "/> 
                               <button type="email" className="main_btn rounded">
                                Subscribe
                               </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewsLetter
