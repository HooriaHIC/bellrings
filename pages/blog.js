import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Filter from "../components/filter";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { SharedJs } from "../components/Js/main";

const Blog = ({ articles, categories, blogpage }) => {

    SharedJs()

    return (
        <Layout OnHomePage={false} className="container">
          <Seo seo={blogpage.seo} />
          <div className="pageHeading">
            <span>Articles</span>
            <h1 style={{"width": "50%"}}>{blogpage.hero.title}</h1>
            <p style={{"width": "40%"}}>I Write About Sales And Consulting Topics That Will Help You In The Long Term</p>
          </div>  
          <div className="posts">
              {/* <Filter categories={categories}/> */}
              <Articles articles={articles} />
          </div>
        </Layout>
      );
};

export async function getStaticProps() {
    // Run API calls in parallel
    const [articles, categories, blogpage] = await Promise.all([
      fetchAPI("/articles?status=published"),
      fetchAPI("/categories"),
      fetchAPI("/homepage"),
    ]);
  
    return {
      props: { articles, categories, blogpage },
      revalidate: 1,
    };
  }

export default Blog;