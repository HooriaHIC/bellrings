import React from "react";
import Link from "next/link";

const Nav = ({IsHomePage, IsContactPage}) => {


  if (typeof window !== "undefined") {
    window.onscroll = function() {scrollFunction()}
  }

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "90px";
      document.getElementById("navbar").style.backgroundColor = "black";
    } else {
      document.getElementById("navbar").style.height = "110px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }

  return (
    <>
     {
       IsHomePage ?
       <nav className="basicNavbar" id="navbar">
        <ul className="leftSide">
          <li className="brandName">
            <Link href="/">
              <a>Bellrings.</a>
            </Link>
          </li>
        </ul>
        <ul className="middleSide">
          <li className="NavLink">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className="NavLink">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="NavLink">
            <Link href="/contact">
              <a>Get In Touch</a>
            </Link>
          </li>
        </ul>
        <ul className="rightSide">
          <li className="NavLink">
            <Link href="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li className="NavLink">
            <Link href="/">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="NavLink">
            <Link href="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
    </nav> : 
        <nav className="MainNavbar" id="navbar">
          <ul className="leftSide">
            <li className="brandName">
              <Link href="/">
                <a>Bellrings.</a>
              </Link>
            </li>
          </ul>
          {IsContactPage ? 
            <ul className="middleSide">
              {null}
            </ul>
          :
            <ul className="middleSide">
              <li className="NavLink">
                <Link href="/">
                  <a>Request A Free Session</a>
                </Link>
              </li>
                <button className="btn-1">
                  <Link href="/">
                    <a>Free Deal Sheet</a>
                  </Link>
                </button>
            </ul>
          }
          <ul className="rightSide">
            <li className="NavLink">
              <Link href="/">
                <i className="fas fa-bars menuIcon"></i>
              </Link>
            </li>
          </ul>
      </nav>
     }
    </>
  );
};

export default Nav;