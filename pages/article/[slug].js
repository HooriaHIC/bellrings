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
        <div className="row container" style={{alignItems: "center"}}>
          <div className="column" style={{"flex": 1}}>
            <div
              className="pageHeading"
            >
              <span><Moment format="MMM Do YYYY">{article.published_at}</Moment></span>
              <h1 style={{"width": "90%"}}>{article.title}</h1>
              <p style={{"width": "80%"}}>{article.description}</p>
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
          <div className="bannerImageArticle" style={{"backgroundImage": `url(${imageUrl})`}}></div>
          
        </div>
      <div className="startOfBody">
        <div className="container mt-5">
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