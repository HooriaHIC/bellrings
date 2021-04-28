export default function getStrapiURL(path = "https://afternoon-beyond-31145.herokuapp.com/") {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL
    }${path}`;
}

export async function fetchAPI(path){
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}