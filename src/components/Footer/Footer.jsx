import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="Footer py-5">
                <div className="container gx-0">
                    <div className="row gx-0">
                        <div className="col-md-4">
                            <div className="footer_col1">
                                <img src={logo} alt="" />
                                <div className="ft_icons pt-md-2 pb-md-4">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                                <p>@2024 Copyright.All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_col2">
                                <h5 className="ft_h5">Get to know Us</h5>
                                <ul>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Contact us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="footer_col2">
                                <h5 className="ft_h5">Get to know Us</h5>
                                <ul>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="nav_li">
                                        <NavLink className="text-decoration-none">
                                            Contact us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer_col3">
                            <h5 className="ft_h5">Contact</h5>
                            <p className="py-2">
                            <i className="fa-solid fa-phone"></i>
                            9876543210
                            </p>
                            <p className="py-2">
                            <i className="fa-solid fa-envelope"></i>
                            hgfashgfhgfs@gmail.com
                            </p>
                            <p className="py-2">
                            <i className="fa-solid fa-location-dot"></i>
                            chicham bridge
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
