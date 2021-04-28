import React from "react";
import Layout from "../components/layout";

const Contact = () => {
    return (
        <>
            <Layout OnHomePage={false} dontShowFooter={true} className="container contactPage" OnContactPage={true}>
                <div className="row">
                    <div className="column" style={{flex: 1, paddingTop: '2rem'}}>
                        <div className="pageHeading">
                            <h1 style={{width: "90%"}}>We Would Love To Hear From You.</h1>
                            <p style={{width: "90%", fontSize: "16px", color: "var(--lighter-primary-4)"}}>Nam Purus Nulla, Luctus Ac Turpis Nec, Vulputate Scelerisque Ipsum. Sed Efficitur Sapien In Nisl Scelerisque, Id Pellentesque Risus Aliquam. Aenean Sit Amet Vestibulum Nisl.</p>
                            <div className="mt-3">
                                <a className="btn facebook" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn twitter" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn google" href="#">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div className="column" style={{flex: 1.1}}>
                        <form className="contactForm" action="/" method="POST">
                            <fieldset>
                                <label>Name</label>
                                <input type="name" name="name" placeholder="i.e, John Doe" required />
                            </fieldset>
                            <fieldset>
                                <label>Email</label>
                                <input type="email" name="email" placeholder="i.e, example@example.com" required />
                            </fieldset>
                            <fieldset>
                                <label>Message</label>
                                <textarea name="message" placeholder="i.e, I would like to know more about your courses..." required />
                            </fieldset>
                            <button className="submitBtn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Contact;