import React from "react";
import Moment from "react-moment";
import Image from './image';

const LatestBlog = ({articles}) => {
    const FeaturedArticles = articles.filter(art => art.IsFeatured === "Yes");

    return (
        <>
            <div className="latestBlogSection">
                <svg xmlns="http://www.w3.org/2000/svg" width="auto" height={200} viewBox="0 0 713 238">
                    <g id="Group_19" data-name="Group 19" transform="translate(-604 -14755)">
                        <text id="Articles" transform="translate(892 14782)" fill="#fff" fontSize={26} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={0}>ARTICLES</tspan></text>
                        <text id="Latest_from_our_blog" data-name="Latest from our blog" transform="translate(645 14878)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>Latest From Our Blog</tspan></text>
                        <text id="I_write_about_sales_and_consulting_topics_that_will_help_you_in_the_long_term" data-name="I write about sales and consulting topics that will help you in the long term" transform="translate(604 14923)" fill="#fff" fontSize={24} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} opacity="0.54"><tspan x="16.66" y={25}>I Write About Sales And Consulting Topics That Will Help </tspan><tspan x="227.344" y={60}>You In The Long Term</tspan></text>
                    </g>
                </svg>
                <div className="lblogCardGrid">
                    {FeaturedArticles.map((article, index) => {
                            return (
                                <div className="card" key={`article__left__${article.slug}`}>
                                    <Image image={article.image} className="blogCardImage" />
                                    <div className="overlayOnLBlog">
                                        <span><Moment format="MMM Do YYYY" className="cardDate">{article.published_at}</Moment></span>
                                        <h1>{article.title}</h1>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default LatestBlog;