import React from "react";
import Layout from "../components/layout";

const About = () => {
    return (
        <>
            <Layout OnHomePage={false} className="container1">
                <div>
                    <div className="container aboutPage">
                        <img className="aboutusImage mt-5" src="/assets/images/9E0A1174 (1).jpg" />
                        <div className="pageHeading" style={{marginBottom: "0", width: "50%"}}>
                            <span>about us</span>
                            <h1 style={{width: "100%"}}>Get To Know More About Us</h1>
                        </div> 
                        <p style={{fontSize: "16px", color: "var(--lighter-primary-4)", textAlign: "justify"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique tincidunt arcu non bibendum. Donec a elementum dui, sed commodo lectus. Donec gravida pretium lacus, sed interdum est maximus vitae. Curabitur lobortis porttitor lacinia. Phasellus ultrices, elit at vestibulum accumsan, eros erat porta nisl, at vestibulum tortor purus eget lorem. Phasellus accumsan neque ac urna faucibus maximus. In pellentesque elementum enim, id faucibus ante malesuada eu. Praesent at vulputate lorem, et ullamcorper quam. Duis neque lectus, elementum sed mauris ut, tincidunt aliquet neque. Aliquam vitae elit sit amet ex dignissim imperdiet vitae eu justo.
                            <br />
                            <br />
                            Etiam tincidunt libero ut odio bibendum aliquet. Duis vitae dui erat. Etiam quis imperdiet nisl. Quisque porta sagittis ante, eu eleifend augue facilisis at. Suspendisse potenti. Fusce lacinia lacus purus. Mauris quis iaculis massa. Proin eu erat non nunc gravida imperdiet. Etiam at efficitur ante. Phasellus molestie quam sed posuere rutrum. Nunc tincidunt arcu libero, sit amet gravida neque viverra at. In egestas semper diam, at fringilla risus eleifend ac. Donec vel elit eget ipsum aliquet molestie a nec ipsum. Fusce et lacinia purus. Integer non felis eget massa finibus rhoncus et sit amet nunc. Phasellus vulputate maximus sem, ut condimentum arcu tincidunt rhoncus.
                            <br />
                            <br />
                            Aenean ac nunc eget nunc ultrices dictum at quis velit. Integer in scelerisque dui. Maecenas vehicula congue nibh vel elementum. Donec sit amet feugiat ante, quis vulputate justo. Cras quis pharetra sapien. Nam eget bibendum arcu. Nam eu egestas nunc. Integer rhoncus sapien ac laoreet dignissim. Donec facilisis non velit at varius.
                            <br />
                            <br />
                            In hac habitasse platea dictumst. Morbi feugiat vitae nulla sed vulputate. Vivamus magna nibh, consequat ac purus ut, cursus gravida eros. Fusce faucibus vitae purus ac iaculis. Nam tempus placerat sapien, vitae malesuada urna vestibulum ut. Mauris consequat leo at mauris accumsan ornare. Vivamus faucibus sem metus, sit amet rutrum nulla pharetra vel. Suspendisse ornare, urna vel scelerisque porta, tortor magna tincidunt enim, quis tincidunt ipsum eros a purus.
                            <br />
                            <br />
                            Nam egestas elit nibh, in facilisis orci faucibus tempus. Curabitur sodales felis sed tortor interdum, a posuere turpis ultrices. Praesent maximus urna id enim venenatis, rhoncus pellentesque eros commodo. Sed ornare ultricies nibh in scelerisque. Morbi sollicitudin faucibus vestibulum. Donec a tellus fringilla, ornare diam eget, tempor enim. Aliquam ac laoreet magna. Morbi id tempus libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum enim et diam dignissim, sed ornare neque blandit. Integer ultrices suscipit porta. Nulla facilisi. Morbi magna eros, bibendum nec sapien vel, vestibulum viverra erat. Vestibulum sit amet mi id ipsum mattis ullamcorper. Quisque ligula sem, suscipit et massa et, tempus faucibus tortor.
                        </p>
                    </div>
                </div>
                <div className="container" style={{background: "#111111"}}>
                <div className="row aboutPage topRanked">
                    <div className="pageHeading" style={{marginBottom: "0"}}>
                        <span>Top Ranked</span>
                        <h1 style={{width: "70%", fontSize: "50px", lineHeight: "60px", maxWidth: "100%"}}>An inspirational software & SaaS sales coach & mentor</h1>
                    </div> 
                    <div className="column topImage" style={{flex: 1}}>
                        <img className="topRankedImage mt-5" src="/assets/images/inspiration-software-banner-latest.jpg" ALIGN="right" />
                    </div>
                    <div className="column" style={{flex: 1.2, padding: '2rem'}}>
                        <div className="mt-3">
                            <p style={{fontSize: "16px", color: "var(--primary-color)"}}>
                                <b>Award-winning & celebrated</b>
                                <br />
                                Top revenue contributor for US and UK software firms since 2001. Global sales leader for the last 10 years, developing high-performance sales teams to crush quota across EMEA – consistently.
                            </p>
                            <p className="mt-1" style={{fontSize: "16px", color: "var(--primary-color)"}}>
                                <b>$22 million in software & SaaS Sales</b>
                                <br />
                                Teams that I have coached and mentored are closing over 300 deals per day. Several sales professionals I have managed and coached have broken company records for $ closed and secured their financial future.
                            </p>
                            <p className="mt-1" style={{fontSize: "16px", color: "var(--primary-color)"}}>
                                <b>A unique gift to inspire others</b>
                                <br />
                                I am passionate about becoming a stakeholder in your success. I will work with you in the trenches on your current pipeline opps. I will hold you to account and give you a complete software/SaaS sales playbook that will make you a habitual WINNER.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default About;