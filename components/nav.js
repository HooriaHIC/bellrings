import React, { useState } from "react";
import Link from "next/link";

const Nav = ({IsHomePage, IsContactPage}) => {

  const [backDrop, setBackDrop] = useState("");

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
          <div className="menu hiddenMenu" id="openNav">
            <i className="fas fa-bars"></i>
          </div>
        </ul>
    </nav> : 
     <>
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
            <div className="menu" id="openNav">
              <i className="fas fa-bars"></i>
            </div>
          </ul>
      </nav>
      <div id="fullscreenNav" className="fullscreenOverlay">
        <a href="javascript:void(0)" className="closebtn" id="closeNav">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={30} height={30} viewBox="0 0 40 40">
            <image id="cancel" width={40} height={40} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflARYQAwj7n3njAAACzklEQVR42u3dOXIiQRCF4UTXA+lUyBGO8OYyBHcS+G8cFCOYXmrL7aE2oQ3+DwikqowoERHBG8644oozXoX8mmjFO35eB2y8X6Ra/AaHu9a9iOAVj9eRkwAbHP9r3QnOwDMQTOYDJ8EV4CeYyQcuggvATjCbD3xNfwWoCBbygZNgBzATLOYDWxF5+GmgIljJP3zf9Llw05+8BCv5/8o4CYrzOQmq8vkIqvO5CJryeQia8zkIuvLzE3Tn5yYYkp+XYFh+ToKh+fkIhufnIlDJz0Oglp+DQDU/PoF6fmwCk/y4BGb5MQlM8+MRmOfHInDJj0Pglh+DwDXfn8A935cgRL4fQZh8H4JQ+fYE4fJtCULm2xGEzbchCJ2vTxA+X5cgRb4eQZp8HYJU+eMJ0uWPJUiZP44gbf4YgtT5/QTp8/sIKPLbCWjy2wio8usJ6PLrCCjzywlo88sIqPNvBEuBx5Vns+ffCJY+BczvfhcBT34TAVd+NQFffhUBZ34xAW9+EYF5/ou5AfP7u3at/FHE/hUoyuclKM7nJKjK5yOozuciaMrnIXjyf4fXlzv8Ry9d8293cRKUL3ZREtSt9dER1C91UhG0rfTSELQvdFMQ9K3zpyfo3+ZITTBmlyctwbhNrpQEY/f40hGM3+JMRaCzw5uGQG+DOwWB7v5+eAL98YbQBDbTHWEJ7IZbQhLYzvaEI7AfbQpF4DPZFYbAb7AtBIHvXJ87gf9YoyuBf74rQYx8N4I4+S4EsfLNCeLlmxLEzDcjiJtvQhA7X50gfr4qQY58NYI8+SoEufKHE+TLH0qQM38YQd78IQS587sJ8ud3EXDkNxPw5DcRcOVXE/DlVxFw5lcQPPlxexOnztLkFxDsfo/cnDl1liZ/hWD21Fmi/EWCr9+DlydOnSXMnyXYigj2dw99cObfCD7uWvffT+xwwgUXnLD1fpHqCA+tfwGec9cBRyDzbgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0yMlQxNjowMzowOCswMDowMHr4/AEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMjJUMTY6MDM6MDgrMDA6MDALpUS9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
          </svg>
        </a>
        <div className="overlay-content">
        <h1 className="backdropOnHover">{backDrop}</h1>
          <div className="overlayRow" style={{height: "100%", alignItems: "center"}}>
            <div className="overlayRowColumn col1">
              <div className="overlayRow">
                <svg xmlns="http://www.w3.org/2000/svg" className="navSectionCard" viewBox="0 0 433 151" onMouseEnter={() => setBackDrop("About")}>
                  <g id="Group_37" data-name="Group 37" transform="translate(-140 -377)">
                    <text id="About" transform="translate(140 430)" fontSize={50} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}><Link href="/about">About</Link></tspan></text>
                    <text id="Get_to_know_More_About_Me_What_I_do" data-name="Get to know More About Me, What I do" transform="translate(140 459)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.54"><tspan x={0} y={25}>Get to know More About </tspan><tspan x={0} y={60}>Me, What I do</tspan></text>
                  </g>
                </svg>
              </div>
              <div className="overlayRow">
                <svg xmlns="http://www.w3.org/2000/svg" className="navSectionCard" viewBox="0 0 510 151" onMouseEnter={() => setBackDrop("Sales")}>
                  <g id="Group_36" data-name="Group 36" transform="translate(-140 -580)">
                    <text id="Interim_Sales_VP" data-name="Interim Sales VP" transform="translate(140 633)" fontSize={50} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}><Link href="/audience3#InterimSalesVp">Interim Sales VP</Link></tspan></text>
                    <text id="Read_more_about_our_Interim_Sales_VP" data-name="Read more about our Interim Sales VP" transform="translate(144 662)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.54"><tspan x={0} y={25}>Read more about our </tspan><tspan x={0} y={60}>Interim Sales VP</tspan></text>
                  </g>
                </svg>
              </div>
            </div>
            <div className="overlayRowColumn col2">
              <div className="overlayRow">
                <svg xmlns="http://www.w3.org/2000/svg" className="navSectionCard" viewBox="0 0 466 151" onMouseEnter={() => setBackDrop("Blog")}>
                  <g id="Group_38" data-name="Group 38" transform="translate(-676 -377)">
                    <text id="Blog" transform="translate(676 430)" fontSize={50} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}><Link href="blog">Blog</Link></tspan></text>
                    <text id="See_what_we_ve_been_writing_articles_for_sales_and_saas" data-name="See what we've been writing,
                articles for sales and saas" transform="translate(676 459)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.54"><tspan x={0} y={25}>See What We've Been Writing,</tspan><tspan x={0} y={60}>Articles For Sales And Saas</tspan></text>
                  </g>
                </svg>
              </div>
              <div className="overlayRow">
                <svg xmlns="http://www.w3.org/2000/svg" className="navSectionCard" viewBox="0 0 433 151" onMouseEnter={() => setBackDrop("Contact")}>
                  <g id="Group_39" data-name="Group 39" transform="translate(-676 -580)">
                    <text id="Contact" transform="translate(676 633)" fontSize={50} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}><Link href="contact">Contact</Link></tspan></text>
                    <text id="Get_in_Touch_with_us_want_a_quote_let_us_know" data-name="Get in Touch with us, want a quote let us know" transform="translate(676 662)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.54"><tspan x={0} y={25}>Get In Touch With Us, Want </tspan><tspan x={0} y={60}>A Quote Let Us Know</tspan></text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="navbarFooter" viewBox="0 0 1920 98">
            <g id="Group_72" data-name="Group 72" transform="translate(0 -955.303)">
              <text id="Disclaimer" transform="translate(1007 1017.303)" fill="#fff" fontSize={34} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={0}>Disclaimer</tspan></text>
              <text id="Terms" transform="translate(1304 1016.303)" fill="#fff" fontSize={33} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={0}>Terms</tspan></text>
              <text id="Privacy_Policy" data-name="Privacy Policy" transform="translate(1527 1016.303)" fill="#fff" fontSize={33} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={0}>Privacy Policy</tspan></text>
              <ellipse id="Ellipse_7" data-name="Ellipse 7" cx={9} cy="9.5" rx={9} ry="9.5" transform="translate(1238 995.303)" fill="#fff" opacity="0.35" />
              <circle id="Ellipse_8" data-name="Ellipse 8" cx="9.5" cy="9.5" r="9.5" transform="translate(1460 995.303)" fill="#fff" opacity="0.35" />
              <image id="instagram" width={45} height={45} transform="translate(140 982.303)" xlinkHref="data:image/png;base64,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" />
              <image id="facebook" width={45} height={45} transform="translate(250 982.303)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQwPFijfmuyJAAACqElEQVR42u3bvW4TURAF4LMmf46EEAoNIhKUdhWEhIQoQPAAAZRUlHRUvAMtygPkJZIuEhI0SKSAAgQSRaq1ghKIi+Ai5ifBQ0cBkZK7M3vHY59TX49nPt/1rtd2gaGKTGIBN9DGZVzBHKZxDg0M0AMA/MIBejhAHz100cUedrGHbrGlecbCe+S/o1/APTzAXTSTH9ooxLt77fDXZFW+S9UMzYtYbfi2bFQePTqATMuKHCrHjwsgbXmvHj4ugNyWbybjxwSQRcWbnimAi57cwnPMmJVTnQYdAKSFTZw3LBgLQKbwBgumJVUAjdwAeGo8vjKZd4C08BETxkVD7YBn5uMrk3UHyE28rqFsoB3wJOuznSoZd4BcRAeTNRQOswMe1jK+MjkB7nsPe1yyHQIyh684U0vpIIfAnZrGVybfWfl6xceVeIV32Mc++scvCHJHUF4mf8wdyJpc9e7bDqCbOP4PWfbu2XL82eTXf8m7Z1uAduL467k6y3UWuJS4fmXUAM4mrd7B5qgBzCatflsMRg0g7Rao6uvO4QSYSlr9ZfQA0tLXl4gN8HPcATKGAN4NeIcA3g14hwDeDXiHAN4NeIcA3g14hwDeDXiHAN4NeEf95agUyHb/7r8coln81pWIvQO2teNHByj1JQjgPYMqnXEHKAkw5gAGh0Dk64AjNIsjbZHIO2BbP35sgNKiCAG8p1DE4C0wNkA57gDcARZF4l4HmFwFRN4Bny3GjwxQ2pQhgPcclWNyDiCAyR8mXpxizTxaCRU/YefENR9sADJFHif9VvxRvs7iHgIEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhDg3/wBA2L6KWQRlh8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMTJUMTU6MjI6NDArMDA6MDCUo1kpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTEyVDE1OjIyOjQwKzAwOjAw5f7hlQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
              <image id="twitter" width={45} height={45} transform="translate(360 982.303)" xlinkHref="data:image/png;base64,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" />
            </g>
          </svg>
        </div>
      </div>
     </>    
     }
    </>
  );
};

export default Nav;