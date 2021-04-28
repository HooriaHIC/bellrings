import React from "react";
import Link from "next/link";
import Image from "./image";
import Moment from "react-moment";

const Card = ({ article, isRighty }) => {
  return (
    <>
      {article.IsFeatured === "Yes" ? 
        <div className="blogCard" style={{"marginTop": "40px", "marginBottom": "40px"}}>
          <div className={isRighty ? "blogCardRowReverse" : "blogCardRow"}>
            <div className="column" style={{"flex": 1, "paddingLeft": "20px", "paddingRight": "20px"}}>
              <div className="cardImageContainer">
                <Image image={article.image} className="blogCardImage" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="cardReadMore" viewBox="0 0 301 94">
                <g id="btn" transform="translate(-1374 -106)">
                  <rect id="Rectangle_2" dataname="Rectangle 2" width={301} height={94} transform="translate(1374 106)" fill="#fff" />
                  <text id="Read_More" dataname="Read More" transform="translate(1413 163)" fontSize={28} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>
                    <Link as={`/article/${article.slug}`} href="/article/[id]">
                      <a>Read More</a>
                    </Link>
                    </tspan>
                  </text>
                  <image id="right-arrow" width={50} height={50} transform="translate(1587 128)" opacity="0.63" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflAxsJMysd4y0gAAACz0lEQVR42u3dyy5sQRjF8ap2Zs6UJ2EgBl6AeAQxp6XRcUuYiUsjBhi6S8zEZSqGgmfAE4ikEwZkrzPYHJEQenf1+Y6u/+8BdpZ8S5ra1VXOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhP8l7q7ZUuLqTHR+n+Xjo+ltrbrbOhxqRcTtrZ0Yeen5Xk89YZUUNK8nl9aWjIOidqRLq5+boAkpLhYeusCExJU9O3hv+3BMWidWYEVHEBJEkjI9a5EdC3PwLeGR21zo1ApP7+ygsgSWNj1tkRQPpv4P5+thKMj1vnRwBSQ4O0u5utBJOT1vkRQHUlmJqyzo8A0hJ8tipICaKQlmB7O1sJZmas8yMASgBKgNcSbG1lK8HsrHV+BJCWYHMzUweSuTnr/AiAEuClBBsb2UowP2+dHwGky8ZZS1AqWedHAGkJ1tcpQcTSTaRra9lKsLBgnR8BUAK8lGB1NVsJFhet8yOAtAQrK5lKoKUl6/wIoNoSSN6/Psu/PbS727lCwamlxfnGRusfErW0vOxcoeC99Ms559KXCS+7T31VT8aPMDDg9PTkXLHo09/8gwPrSDCgri4vnZ0519FhnQUGdHrqpXLZud+/rbPAQrmcs44AS1LO6erKOgaM6PIy5xwrRNHyS0s5nzs6cm562joL/jGVSt6fnLwtBCWdnc4PDjrX2sofhfXubSHIOgky4H1AxHgjGLHq9gQw/B+NDSERY19gxNgZHDG+GxAxvh0UMYYfMb4hHLHqzghg+D8aB0REjOFHjJPCIsZZgRHjtNCIpcPf22P4EeKw6Mh9786gj3BcfF2Qbm8rHz4XRtQFJc3NlQ9/YsI6NwLh0ig46fr6e8Pn2ri6pKSv7+vpc3Fk3Uo3d3627s/VsVFIS9DTo+T8XHp4kO7upMNDqa3NOhsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+M38AwEpo/HlCw04AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjdUMDk6NTE6NDMrMDA6MDA9hTXaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI3VDA5OjUxOjQzKzAwOjAwTNiNZgAAAABJRU5ErkJggg==" style={{mixBlendMode: 'difference', isolation: 'isolate'}} />
                </g>
              </svg>
            </div>
            <div className="column" style={{"flex": 1.2, "alignItems": "center", "padding": "20px"}}>
              <div className="mt-1">
                <Moment format="MMM Do YYYY" className="cardDate">{article.published_at}</Moment>
                <Link as={`/article/${article.slug}`} href="/article/[id]">
                  <h1 className="cardTitleHeading">{article.title}</h1>
                </Link>
                <p className="cardBody">
                  {article.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      :
      <div>
          <div className="blogSmallCard" style={{"background": "transparent !important"}}>
            <div className="column" style={{"flex": 1}}>
              <div className="cardImageContainer">
                <Image image={article.image} className="blogCardImage" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="cardReadMore" viewBox="0 0 301 94">
                <g id="btn" transform="translate(-1374 -106)">
                  <rect id="Rectangle_2" data-name="Rectangle 2" width={301} height={94} transform="translate(1374 106)" fill="#fff" />
                  <text id="Read_More" data-name="Read More" transform="translate(1413 163)" fontSize={28} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>
                    <Link as={`/article/${article.slug}`} href="/article/[id]">
                      <a>Read More</a>
                    </Link>
                    </tspan>
                  </text>
                  <image id="right-arrow" width={50} height={50} transform="translate(1587 128)" opacity="0.63" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflAxsJMysd4y0gAAACz0lEQVR42u3dyy5sQRjF8ap2Zs6UJ2EgBl6AeAQxp6XRcUuYiUsjBhi6S8zEZSqGgmfAE4ikEwZkrzPYHJEQenf1+Y6u/+8BdpZ8S5ra1VXOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhP8l7q7ZUuLqTHR+n+Xjo+ltrbrbOhxqRcTtrZ0Yeen5Xk89YZUUNK8nl9aWjIOidqRLq5+boAkpLhYeusCExJU9O3hv+3BMWidWYEVHEBJEkjI9a5EdC3PwLeGR21zo1ApP7+ygsgSWNj1tkRQPpv4P5+thKMj1vnRwBSQ4O0u5utBJOT1vkRQHUlmJqyzo8A0hJ8tipICaKQlmB7O1sJZmas8yMASgBKgNcSbG1lK8HsrHV+BJCWYHMzUweSuTnr/AiAEuClBBsb2UowP2+dHwGky8ZZS1AqWedHAGkJ1tcpQcTSTaRra9lKsLBgnR8BUAK8lGB1NVsJFhet8yOAtAQrK5lKoKUl6/wIoNoSSN6/Psu/PbS727lCwamlxfnGRusfErW0vOxcoeC99Ms559KXCS+7T31VT8aPMDDg9PTkXLHo09/8gwPrSDCgri4vnZ0519FhnQUGdHrqpXLZud+/rbPAQrmcs44AS1LO6erKOgaM6PIy5xwrRNHyS0s5nzs6cm562joL/jGVSt6fnLwtBCWdnc4PDjrX2sofhfXubSHIOgky4H1AxHgjGLHq9gQw/B+NDSERY19gxNgZHDG+GxAxvh0UMYYfMb4hHLHqzghg+D8aB0REjOFHjJPCIsZZgRHjtNCIpcPf22P4EeKw6Mh9786gj3BcfF2Qbm8rHz4XRtQFJc3NlQ9/YsI6NwLh0ig46fr6e8Pn2ri6pKSv7+vpc3Fk3Uo3d3627s/VsVFIS9DTo+T8XHp4kO7upMNDqa3NOhsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+M38AwEpo/HlCw04AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjdUMDk6NTE6NDMrMDA6MDA9hTXaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTI3VDA5OjUxOjQzKzAwOjAwTNiNZgAAAABJRU5ErkJggg==" style={{mixBlendMode: 'difference', isolation: 'isolate'}} />
                </g>
              </svg>
            </div>
            <div className="column" style={{"flex": 1.2, "alignItems": "center", "padding": "20px"}}>
              <div className="mt-1">
                <Moment format="MMM Do YYYY" className="cardDate">{article.published_at}</Moment>
                <Link as={`/article/${article.slug}`} href="/article/[id]">
                  <h1 className="cardTitleHeading">{article.title}</h1>
                </Link>
                <p className="cardBody">
                  {article.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Card;