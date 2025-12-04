import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";   // <-- ADD THIS
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">ZEESH</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
         {/* FIXED MENU BUTTON */}
          <RouterLink to="/menu">
            <button className="menuBtn">OUR MENU</button>
          </RouterLink>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
