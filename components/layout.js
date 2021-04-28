import blogFilter from "./filter";
import Nav from "./nav";
import Footer from "./footer";


const Layout = ({ children, OnHomePage, className, OnContactPage, dontShowFooter }) => (
  <>
    <Nav IsHomePage={OnHomePage} IsContactPage={OnContactPage} />
    <div className={className}>
      {children}
    </div>
    <Footer dontShow={dontShowFooter}/>
  </>
);

export default Layout;