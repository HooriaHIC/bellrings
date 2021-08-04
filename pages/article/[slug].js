import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <>
    <Layout categories={categories}>
      
      <Seo seo={seo} />
          <div className="column SingleBlogPageHeader" style={{"flex": 1, backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.6)), url(${imageUrl})`}}>
            <div
              className="pageHeading"
            >
              <span><Moment format="MMM Do YYYY">{article.published_at}</Moment></span>
              <h1 style={{"width": "90%"}} style={{fontSize: "3.5em", lineHeight: "1em"}}>{article.title}</h1>
              <p style={{"width": "80%"}} style={{color: "rgba(255,255,255,0.8)"}}>{article.description}</p>
              <div className="authorBox">
            <div>
              {article.author.picture && (
                <Image
                  image={article.author.picture}
                  className="authorImage"
                />
              )}
            </div>
            <div>
              <p>
                By <em>{article.author.name}</em>
              </p>
            </div>
          </div>
            </div>
          </div>          
      <div className="startOfBody">
        <div className="container" style={{textAlign: "justify"}}>
          <ReactMarkdown source={article.content} escapeHtml={false} className="articleBody" />
        </div>
      </div>
    </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;