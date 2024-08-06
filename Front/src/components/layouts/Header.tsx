// import React from 'react';
import { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function Header() {

    // state to control responsive nav list
    const [showResponsiveNav , setShowResponsiveNav] = useState<boolean>(false);

    return (
        <>
            <header className='border-b-2 border-solid border-gray-100'>
                {/* top header part */}
                <div className="top-header-part">
                    <div className='text-center flex items-center justify-center bg-black text-white p-3 text-sm'>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </div>
                </div>


                {/* bottom header part */}
                <div className="bottom-header-part flex items-center justify-around pt-8 pb-5">
                    {/* logo */}
                    <div className="text-2xl font-bold tracking-wide">Exclusive</div>

                    {/* nav links */}
                    <nav>
                        <ul className='flex items-center justify-between gap-6 font-medium'>
                            <li >
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={'/'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={'contact'}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={"about"}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={"signup"}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* search-cart-wishlist-box */}
                    <div className="search-cart-wishlist-box flex items-center justify-between gap-5">
                        <div className="px-4 rounded-md flex items-center justify-between text-center w-60 gap-4 bg-gray-100 hover:shadow-custom-black transition-all ease-in-out duration-500">
                            <input
                                id='search'
                                type="text"
                                className="placeholder-custom w-52 text-inherit bg-gray-100 border-none text-gray-600 py-[0.7rem] -mr-8 outline-none"
                                placeholder="What are you looking for?"
                            />
                            <div className="bg-gray-100 mt-[0.1em]">
                                <label htmlFor="search" className='hover:cursor-pointer'>
                                    <svg
                                    className="h-[1.1em] w-[1.1em] fill-gray-950"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    >
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                    </svg>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <IoIosHeartEmpty size={25} className='opacity-60 transition-all hover:opacity-100 cursor-pointer' />
                            <CiShoppingCart size={25} className='opacity-60 transition-all hover:opacity-100 cursor-pointer' />
                        </div>
                    </div>


                    {/* bar-btn-list */}
                    <div className="bar-btn-list hidden">
                        <div className="flex justify-center items-center">
                            <input onChange={
                                e => setShowResponsiveNav(e.target.checked)
                            } 
                            id="checkbox" type="checkbox" className="hidden show-list-btn" />
                            <label
                                className="toggle relative w-8 cursor-pointer m-auto block h-[calc(2px*3+11px*2)]"
                                htmlFor="checkbox"
                            >
                                <div className="bar bar--top absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s)*0.6] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                                <div className="bar bar--middle absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s*0.3)] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                                <div className="bar bar--bottom absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </header>

            

            {/* responsive nav-container */}
            <div className={`${showResponsiveNav && 'open-list'} responsive-nav-container p-12 transition-all`}>
                <div className="responsive-nav flex flex-col text-white h-[100%]">
                    {/* logo */}
                    <div className="logo text-2xl font-bold tracking-wide flex items-center justify-between">
                        Exclusive
                        <AiOutlineCloseSquare onClick={
                            (): void => {
                                setShowResponsiveNav(false)
                                const checkboxShowList = document.querySelector('.show-list-btn') as HTMLInputElement;
                                if(checkboxShowList) checkboxShowList.checked = false;
                            }
                        } />
                    </div>

                    {/* nav links */}
                    <nav className='flex-1 flex items-center justify-center'>
                        <ul className='flex flex-col items-center justify-between gap-10 font-medium text-lg'>
                            <li >
                                <NavLink to={'/'} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'contact'} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"about"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"signup"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Sign Up
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"wishlist"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Wishlist
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"cart"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;