import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import Button from "./Button";
import Cart from "./Cart";

const navlinks = [
    // { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    // { name: "FAQs   ", href: "/faqs" },
];

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items)
    // const [activeNav, setActiveNav] = useState("Home");

    const location = useLocation();

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center mb-24 px-4 md:px-20 py-4 border-b border-white/10"
            >
                <Link>
                    {/* <img src={""} alt="" /> */}
                </Link>
                <ul className="navbox">
                    {navlinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`hover:bg-[#f1f1f165] transition-all duration-200 ease-in-out tracking-tight py-2 px-4 rounded-full ${location.pathname === link.href ? "bg-[#f1f1f1] " : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Cart />
            </nav>
        </>
    );
};

export default Navbar;