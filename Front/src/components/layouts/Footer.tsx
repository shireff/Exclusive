import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" container min-w-full bg-black text-white px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-around items-center py-10 md:py-20 flex-wrap gap-10">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <NavLink className={"text-2xl font-bold tracking-wide"} to={"/"}>
                        Exclusive
                    </NavLink>
                    <p className="text-xl">Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="flex bg-black border border-white w-full md:w-fit rounded">
                        <input className="bg-black outline-none w-full md:w-auto" type="text" placeholder="Enter your email" />
                        <img className="p-2" src="public/images/Vector.png"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-center md:text-left">
                    <p className="text-xl font-medium">Support</p>
                    <p className="max-w-44">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                <div className="flex flex-col gap-[10px] text-center md:text-left">
                    <p className="text-xl font-medium">Account</p>
                    <NavLink to={"/"}>My Account</NavLink>
                    <div className="flex justify-center md:justify-start">
                        <NavLink to={"/login"}>Login /</NavLink>
                        <NavLink to={"/register"}>Register</NavLink>
                    </div>
                    <NavLink to={"/cart"}>Cart</NavLink>

                    <NavLink to={"/wishlist"}>Wishlist</NavLink>

                    <NavLink to={"/shop"}>Shop</NavLink>
                </div>

                <div className="flex flex-col gap-4 text-center md:text-left">
                    <p className="text-xl font-medium">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <p className="text-xl font-medium">Download App</p>
                    <p className="text-xs text-[#fafafa] font-medium opacity-70">Save $3 with App New User Only</p>
                    <div className="flex justify-center md:justify-start items-center gap-2">
                        <div className="w-20 h-20">
                            <img className="w-full h-full object-contain" src="public/images/qr.svg" alt="qr-code-image" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>
                                <img src="public/images/GooglePlay.svg" alt="GooglePlay-image" />
                            </div>
                            <div className="w-[110px] h-10">
                                <img className="w-full h-full object-contain" src="public/images/appstore.svg" alt="appstore-image" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start text-xl gap-6">
                        <FaFacebookF className="hover:bg-blue-600 rounded" />
                        <FaTwitter className="hover:bg-blue-400 rounded" />
                        <FaInstagram className="hover:bg-[#8134af] rounded" />
                        <FaLinkedin className="hover:bg-blue-700 rounded" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center text-[#aaa] pb-5">
                <p>© Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;
