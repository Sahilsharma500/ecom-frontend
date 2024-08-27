import "./Banner.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import img1 from "../../../assets/black_headphones.png"
import img2 from "../../../assets/blue_headphones.png"


const Banner = () => {
  return (
    <>
    <div className="banner_main py-5">
    <Swiper 
    scrollbar={{
        hide: true,
    }}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    modules={[Autoplay, Scrollbar]}
    className="mySwiper"
    >
        <SwiperSlide>
            {" "}
            <div className="container-fluid Banner_1 py-5">
                <div className="container gx-0 ">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-12 col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                            <div className="banner_col1 pt-md-4">
                                <h6 className="Main_Label pb-3"><i className="fa-solid fa-star"></i>Top Products Of the Month</h6>
                                <h1>
                                    Micropack MHP 
                                    Headphone Black
                                    <span>Transform</span> Your Life
                                </h1>
                                <p className="py-md-3">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa culpa ea earum provident vel illum natus, repellendus voluptate? Est reiciendis ad rem quidem veniam perspiciatis deleniti earum? Iusto, cum assumenda?
                                </p>
                                <div className="banner_btns">
                                    <button className="main_btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" 
                        >
                            <div className="banner_col2">
                            <img src={img1} alt="" className="img-fluid " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        {/************/}
        <SwiperSlide>
            {" "}
            <div className="container-fluid banner_2 py-5">
                <div className="container gx-0">
                    <div className="row gx-0 align-items-center">
                    <div className="col-md-12 col-lg-6">
                            <div className="banner_col2">
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div 
                        className="col-md-12 col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                            <div className="banner_col1 pt-md-4">
                                <h6 className="Main_Label pb-3"><i className="fa-solid fa-star"></i>Top Products Of the Month</h6>
                                <h1>
                                    Micropack MHP 
                                    Headphone Black
                                    <span>Transform</span> Your Life
                                </h1>
                                <p className="py-md-3">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa culpa ea earum provident vel illum natus, repellendus voluptate? Est reiciendis ad rem quidem veniam perspiciatis deleniti earum? Iusto, cum assumenda?
                                </p>
                                <div className="banner_btns">
                                    <button className="main_btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default Banner
