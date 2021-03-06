import React from "react";

const Footer = ({dontShow}) => {
    return (
        <>
            {dontShow ? null : 
            <>
            <div className="onlyWebSection">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1800 935">
            <defs>
              <pattern id="facebook-2" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                <image width={128} height={128} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQwPFijfmuyJAAACqElEQVR42u3bvW4TURAF4LMmf46EEAoNIhKUdhWEhIQoQPAAAZRUlHRUvAMtygPkJZIuEhI0SKSAAgQSRaq1ghKIi+Ai5ifBQ0cBkZK7M3vHY59TX49nPt/1rtd2gaGKTGIBN9DGZVzBHKZxDg0M0AMA/MIBejhAHz100cUedrGHbrGlecbCe+S/o1/APTzAXTSTH9ooxLt77fDXZFW+S9UMzYtYbfi2bFQePTqATMuKHCrHjwsgbXmvHj4ugNyWbybjxwSQRcWbnimAi57cwnPMmJVTnQYdAKSFTZw3LBgLQKbwBgumJVUAjdwAeGo8vjKZd4C08BETxkVD7YBn5uMrk3UHyE28rqFsoB3wJOuznSoZd4BcRAeTNRQOswMe1jK+MjkB7nsPe1yyHQIyh684U0vpIIfAnZrGVybfWfl6xceVeIV32Mc++scvCHJHUF4mf8wdyJpc9e7bDqCbOP4PWfbu2XL82eTXf8m7Z1uAduL467k6y3UWuJS4fmXUAM4mrd7B5qgBzCatflsMRg0g7Rao6uvO4QSYSlr9ZfQA0tLXl4gN8HPcATKGAN4NeIcA3g14hwDeDXiHAN4NeIcA3g14hwDeDXiHAN4NeEf95agUyHb/7r8coln81pWIvQO2teNHByj1JQjgPYMqnXEHKAkw5gAGh0Dk64AjNIsjbZHIO2BbP35sgNKiCAG8p1DE4C0wNkA57gDcARZF4l4HmFwFRN4Bny3GjwxQ2pQhgPcclWNyDiCAyR8mXpxizTxaCRU/YefENR9sADJFHif9VvxRvs7iHgIEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhDg3/wBA2L6KWQRlh8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMTJUMTU6MjI6NDArMDA6MDCUo1kpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTEyVDE1OjIyOjQwKzAwOjAw5f7hlQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
              </pattern>
              <pattern id="twitterIconWeb" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                <image width={128} height={128} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQwPFwDzNHUyAAAIFklEQVR42u2ceWwVVRjFz61AaUulYGUrZdEAgViWuNCCKDTaoChuCEoQt6hxQQQSSBM1ilHjlihocIkaxYW4IYiAJLigtgrYhSJQhS4IYekrLaW0QFuOf7TQea/vzdx5M3Nvq/P7q+/dO3e+czrz5rvfzFzAx8fHx8fHx8fHx+f/iNAdgDWMQwbGYziGoTcSkIRa1OIIdqEYW/CDqNYdn6fSeTvXsp6RaWQOH2FP3ZF6IT6Zz/AI5TjB93ihjbHP48sco1uhWYBdmM1aSfFnaOA7PE9i7Hhms4q7IneIZYxm+WO506b4MxzmTNOR+3IxD5Ek50XutIDPaxQvOJ+nopTfzLvsGnbkDH7Mky19KpgQKYB4HiR5ryb5nfi+I/HNbGHvoFEv5YssCeqxMHII80iSp3iVBvmxXOWCfJLcyRSA/TmLb7M0TGuXyEHsaOl0jBmK5cfwM5fkk+S+kP95K02cGDmI0YaOVRyt1IAlLso3w+wXji8EdT3Ei5TJn6FI/vfsbBbGtpDuAV6sRP4gHlUiv4hJZmEksLHNJtW8XIEB3yiRv519Q/bbnzcbP04Iu9lx3uix/OuVyN/MZMM+43gT17CGI4yBzImwaRPneyhfsECB/A/OpEfsyVn8oiXRDs53uNhkgGUm105nBkzxXHwV72IML+RMvsFtbDr7/cehobxuOkwO+3tiwHqP5TfxJ+aFmVLnMzE0lE8shqpgluvy+4X54VXBPqY2R2Cc+VlVh5Kxji8w1lUHpuMct02VoBqTxT9tDai23DAGC/E701wMRcOcAydwi9jeKsmOAQAwClv4hDvHATthgnL5x3Gd+L71o9GAw5JDxGIxCjnJhWCG4FzF8quRJTYavzAaUGhjoGHYyE852GE4wxTLr0CmyAn+ymhAPmhjMIHbsJMvs4eDgIYolV+AdJEf+qXBAFGFEptDxmIB9vDpqMvSSQrlL8c4EUZfcAH0mygG7oEnUcYX2S+KbbspEt+AOWK2qLfsx/EOUotTXEGbv+lcpijt+TtyDMFHQC72Re1yZ8zAJm7jfBvHwvGo92YPk3lMkAHiNJY63FUaXsFebuDd7CXRu7adGQDgTcl0yIxzcDXewwHmMJtjaJbqVioywKQMFmKAqMESl3Yagww8hzxU8lsu4qSwl8tiRQY0RG5qMwFiPLbDaYITnnIUoBglKEUp9os6gKnYq8SAcjEoUlOnNo7U8WGs9SSMgRjY+oH1qFR2CpyM3BTmRqhYh3cVBBWH/hilyIA6WwYAeBA/KwpNDRU2DRANmOEgI2h/HJEygIa5mTiAiYp+oFQQkDIAq/ld641DsQdXYI/uyF1iv5wBdcjCD/yLzzQXvUQ50rFed+yuUBa5yZAHcCMyz34I4HdsRikqcQ9u0R2/Y8aJ3EhNxjyg1PB3MqZgiu64XcOkzmE8BXbrjtMjAuKQnAGbdUfqEdvMGoMNaNQdqycUSRogarFJd6yekG/WGJwJrtQdqyfkmDUGTYeZjH/QFf8tAuglTMr9wSWxAD7XHa/r5AjTux2hk6GXcFp3xC6z0bw5tCRWhBW6I3YZi2S+bUlsAP5UdsPCe8qERXmvTT1A7MXjuqN2kTVWHcIVRJb+R+aAAPCFVYewj8UwGX9ggO7YXeAQUkSTeZfwJbEArjErI3UYvrKSH6koCrED16JKd/yO+dC6i8mTYRyF9eijW4MD/hQST7ubvCAlCnEJftOtwgFSdzcsng1kLBZjgZZn+ZxShwFC4s6TxSty4qRYhPEdslSyXEa+5LvDFLgV2RitW5MNiBFil0xHGy9PMxN34UYkym+hkTXiermONt8eZxwy8RAmW5062hkrJE/bTmaNnIcs7MZRHAOQiO5IwjCkdYCSyVpZ+RZHAMcgT7eWKCDS5Q0wPZRFPnJlB2pHfCYv3/IyiJd0q7HNSWTb6W5lwNfYoluRTZaIUjvdLa8CvBybOsJKIy3swwhxzM4Glpcz8Qve0q3KBnPsyZfKA5iIrRiqW5kUK8XNdjeRS4XTkIsEmZ5aqUSaOGB3I6mMThRhRge4cfqQffk24B2a3vCT5YPodNmZDE3Hcnj0Aq1jinGZqPHYAIDj8GW7LJLVY5woiG5TW7M6kYOLsUG32jDcH638KKDgfazQfcIHoT5dZ08+q2jRC2tWalr5ij04l9t1q+dWOsxPHGb5HI6pmIB0SCxj5gE7caWocDaES9Mcno8hSMZcw7Om3lOKCWK/82Fcgj1cXQnKmjJeoFuzUf6V3KtU/l9sP3ev2ZOvGZYmUcGOqF7U9UR8DGcrzwp+Na4IpFf8NBYqFk9+5PIqJlGLn84i5eKb+CT1l+fYh4u4W7l48qjXi3pZS4/nDfzS4Zqf0ZKn9bLHFN7H1azTIp1s5PNeLeVlfmusN4biMoxFOlI1ul+KO4VnL3IKTsIs1CCARjTgFBJwLuLQDX0xGIMRr1F2M414FU8Jbxda4BB+q+nQtuI3qnq7mFO5R7faEMo4U+klj134AMt1q24hwIXU8RQCO3O29iOhgk+xuwbxZ02I5b3M0yS+mI86rfC4ZUMGP+IJhdIbuZpZ7SDNDTKhF+fyF572XPwffIza7jZYPx+QimmYjrEePCPQhFyswSq55/m0GdBiQzImIhOZLi2AV4xN+BEbRMD5UIoMOGtECjIwCiMxEoNs76scBShEAXLFQd2yozbAYEUShiMVKRiAfkhBIrqhK+KQgC6oxwkQ1ajBYQQQQDlKUIISoWrhLB8fHx8fHx8fHx8fH0v+BZT0RCjgqCQTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTEyVDE1OjIzOjAwKzAwOjAw/ys87QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0xMlQxNToyMzowMCswMDowMI52hFEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" />
              </pattern>
            </defs>
            <g id="Group_30" data-name="Group 30" transform="translate(-60 -16834)">
              <rect id="Rectangle_32" data-name="Rectangle 32" width={1800} height={824} transform="translate(60 16834)" fill="#161616" />
              <text id="contact_us" data-name="contact us" transform="translate(140 16969)" fill="#fff" fontSize={26} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={0}>CONTACT US</tspan></text>
              <text id="Have_any_ideas_in_mind" data-name="Have any ideas in mind" transform="translate(140 17002)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={63}>Have any ideas in </tspan><tspan x={0} y={153}>mind</tspan></text>
              <text id="Weekly_Newsletter" data-name="Weekly Newsletter" transform="translate(1106 16969)" fill="#fff" fontSize={26} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={0}>WEEKLY NEWSLETTER</tspan></text>
              <text id="Get_my_tips_directly_into_your_inbox." data-name="Get my tips directly into your inbox." transform="translate(1106 17002)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={63}>Get my tips directly </tspan><tspan x={0} y={153}>into your inbox.</tspan></text>
              <g id="Group_25" data-name="Group 25" transform="translate(0 -12)">
                <g id="Group_24" data-name="Group 24" transform="translate(1581 17271)">
                  <rect id="Rectangle_34" data-name="Rectangle 34" width={199} height={94} fill="#fff" />
                    <text id="Submit" transform="translate(51 29)" fontSize={26} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={27}>Submit</tspan></text>
                </g>
                <foreignObject width={475} height={94} transform="translate(1106 17271)">
                    <input placeholder="Enter You Email..." type="email" required/>
                </foreignObject>
              </g>
              <g id="Group_26" data-name="Group 26" transform="translate(0 -48)">
                <image id="phone" width={50} height={50} transform="translate(140 17294)" xlinkHref="data:image/png;base64,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" />
                <image id="mail" width={50} height={50} transform="translate(140 17368)" xlinkHref="data:image/png;base64,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" />
                <text id="_44_20_7193_4821" data-name="+44 20 7193 4821" transform="translate(237 17331)" fill="#fff" fontSize={30} fontFamily="Telegraf-Regular, Telegraf"><tspan x={0} y={0}>+44 20 7193 4821</tspan></text>
                <text id="info_bellrings.co" data-name="info@bellrings.co" transform="translate(236 17403)" fill="#fff" fontSize={30} fontFamily="Telegraf-Regular, Telegraf"><tspan x={0} y={0}>info@bellrings.co</tspan></text>
              </g>
              <g id="Group_27" data-name="Group 27" transform="translate(4 -87)">
                <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(1068 17537)" fill="#fff" stroke="#707070" strokeWidth={1}>
                  <circle cx={50} cy={50} r={50} stroke="none" />
                  <circle cx={50} cy={50} r="49.5" fill="none" />
                </g>
                <image id="instagram" width={40} height={40} transform="translate(1098 17567)" xlinkHref="data:image/png;base64,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" style={{mixBlendMode: 'difference', isolation: 'isolate'}} />
              </g>
              <g id="Group_28" data-name="Group 28" transform="translate(-158 -87)">
                <g id="Ellipse_6-2" data-name="Ellipse 6" transform="translate(1068 17537)" fill="#fff" stroke="#707070" strokeWidth={1}>
                  <circle cx={50} cy={50} r={50} stroke="none" />
                  <circle cx={50} cy={50} r="49.5" fill="none" />
                </g>
                <rect id="instagram-2" data-name="instagram" width={40} height={40} transform="translate(1098 17567)" fill="url(#facebook-2)" style={{mixBlendMode: 'difference', isolation: 'isolate'}} />
              </g>
              <g id="Group_29" data-name="Group 29" transform="translate(-320 -87)">
                <g id="Ellipse_6-3" data-name="Ellipse 6" transform="translate(1068 17537)" fill="#fff" stroke="#707070" strokeWidth={1}>
                  <circle cx={50} cy={50} r={50} stroke="none" />
                  <circle cx={50} cy={50} r="49.5" fill="none" />
                </g>
                <rect id="instagram-3" data-name="instagram" width={40} height={40} transform="translate(1098 17567)" fill="url(#twitterIconWeb)" style={{mixBlendMode: 'difference', isolation: 'isolate'}} />
              </g>
            </g>
            <g id="Group_31" data-name="Group 31" transform="translate(-60 -16960)">
              <rect id="Rectangle_35" data-name="Rectangle 35" width={1800} height={111} transform="translate(60 17784)" />
              <text id="Copyright_2021_Bellrings_Sales_Accelerations" data-name="Copyright @ 2021 | Bellrings Sales Accelerations" transform="translate(142 17849)" fill="#fff" fontSize={26} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>Copyright @ 2021 | </tspan><tspan y={0} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>Bellrings Sales Accelerations</tspan></text>
              <text id="Privacy_Policies" data-name="Privacy Policies" transform="translate(1466 17849)" fill="#fff" fontSize={26} fontFamily="Poppins-Regular, Poppins" opacity="0.73"><tspan x={0} y={0}>Privacy Policies</tspan></text>
              <text id="FAQ" transform="translate(1728 17849)" fill="#fff" fontSize={26} fontFamily="Poppins-Regular, Poppins" opacity="0.73"><tspan x={0} y={0}>FAQ</tspan></text>
            </g>
          </svg>        
          </div>
          <div className="onlyMobSection">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                viewBox="0 0 1800 2361"
              >
                <defs>
                  <pattern
                    id="facebookIconMob"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                    viewBox="0 0 128 128"
                  >
                    <image
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAQwPFijfmuyJAAACqElEQVR42u3bvW4TURAF4LMmf46EEAoNIhKUdhWEhIQoQPAAAZRUlHRUvAMtygPkJZIuEhI0SKSAAgQSRaq1ghKIi+Ai5ifBQ0cBkZK7M3vHY59TX49nPt/1rtd2gaGKTGIBN9DGZVzBHKZxDg0M0AMA/MIBejhAHz100cUedrGHbrGlecbCe+S/o1/APTzAXTSTH9ooxLt77fDXZFW+S9UMzYtYbfi2bFQePTqATMuKHCrHjwsgbXmvHj4ugNyWbybjxwSQRcWbnimAi57cwnPMmJVTnQYdAKSFTZw3LBgLQKbwBgumJVUAjdwAeGo8vjKZd4C08BETxkVD7YBn5uMrk3UHyE28rqFsoB3wJOuznSoZd4BcRAeTNRQOswMe1jK+MjkB7nsPe1yyHQIyh684U0vpIIfAnZrGVybfWfl6xceVeIV32Mc++scvCHJHUF4mf8wdyJpc9e7bDqCbOP4PWfbu2XL82eTXf8m7Z1uAduL467k6y3UWuJS4fmXUAM4mrd7B5qgBzCatflsMRg0g7Rao6uvO4QSYSlr9ZfQA0tLXl4gN8HPcATKGAN4NeIcA3g14hwDeDXiHAN4NeIcA3g14hwDeDXiHAN4NeEf95agUyHb/7r8coln81pWIvQO2teNHByj1JQjgPYMqnXEHKAkw5gAGh0Dk64AjNIsjbZHIO2BbP35sgNKiCAG8p1DE4C0wNkA57gDcARZF4l4HmFwFRN4Bny3GjwxQ2pQhgPcclWNyDiCAyR8mXpxizTxaCRU/YefENR9sADJFHif9VvxRvs7iHgIEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhDg3/wBA2L6KWQRlh8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMTJUMTU6MjI6NDArMDA6MDCUo1kpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTEyVDE1OjIyOjQwKzAwOjAw5f7hlQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                    />
                  </pattern>
                  <pattern
                    id="twitterIconMob"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                    viewBox="0 0 128 128"
                  >
                    <image
                      width={128}
                      height={128}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </pattern>
                </defs>
                <g id="footer" transform="translate(-60 -16744)">
                  <g id="Group_80" data-name="Group 80" transform="translate(0 880)">
                    <rect
                      id="Rectangle_35"
                      data-name="Rectangle 35"
                      width={1800}
                      height={441}
                      transform="translate(60 17784)"
                    />
                    <text
                      id="Copyright_2021_Bellrings_Sales_Accelerations"
                      data-name="Copyright @ 2021 | Bellrings Sales Accelerations"
                      transform="translate(605 18147)"
                      fill="#fff"
                      fontSize={48}
                      fontFamily="Poppins-Regular, Poppins"
                    >
                      <tspan x={0} y={0}>
                        Copyright @ 2021 |{" "}
                      </tspan>
                      <tspan y={0} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>
                        Bellrings Sales Accelerations
                      </tspan>
                    </text>
                    <text
                      id="Privacy_Policies"
                      data-name="Privacy Policies"
                      transform="translate(133 17941)"
                      fill="#fff"
                      fontSize={60}
                      fontFamily="Poppins-Regular, Poppins"
                      opacity="0.73"
                      textDecoration="underline"
                    >
                      <tspan x={0} y={0}>
                        Privacy Policies
                      </tspan>
                    </text>
                    <text
                      id="FAQ"
                      transform="translate(130 18036)"
                      fill="#fff"
                      fontSize={60}
                      fontFamily="Poppins-Regular, Poppins"
                      opacity="0.73"
                      textDecoration="underline"
                    >
                      <tspan x={0} y={0}>
                        FAQ
                      </tspan>
                    </text>
                  </g>
                  <rect
                    id="Rectangle_32"
                    data-name="Rectangle 32"
                    width={1800}
                    height={1920}
                    transform="translate(60 16744)"
                    fill="#161616"
                  />
                  <text
                    id="contact_us"
                    data-name="contact us"
                    transform="translate(140 16969)"
                    fill="#fff"
                    fontSize={45}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    letterSpacing="0.1em"
                    opacity="0.54"
                  >
                    <tspan x={0} y={0}>
                      CONTACT US
                    </tspan>
                  </text>
                  <text
                    id="Have_any_ideas_in_mind"
                    data-name="Have any ideas in mind"
                    transform="translate(140 17002)"
                    fill="#fff"
                    fontSize={100}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                  >
                    <tspan x={0} y={105}>
                      Have Any Ideas In Mind
                    </tspan>
                  </text>
                  <text
                    id="Weekly_Newsletter"
                    data-name="Weekly Newsletter"
                    transform="translate(140 17738)"
                    fill="#fff"
                    fontSize={45}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    letterSpacing="0.1em"
                    opacity="0.54"
                  >
                    <tspan x={0} y={0}>
                      WEEKLY NEWSLETTER
                    </tspan>
                  </text>
                  <text
                    id="Get_my_tips_directly_into_your_inbox."
                    data-name="Get my tips directly into your inbox."
                    transform="translate(140 17771)"
                    fill="#fff"
                    fontSize={100}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                  >
                    <tspan x={0} y={105}>
                      Get My Tips Directly Into Your{" "}
                    </tspan>
                    <tspan x={0} y={195}>
                      Inbox.
                    </tspan>
                  </text>
                  <g id="Group_25" data-name="Group 25" transform="translate(-966 801)">
                    <g id="Group_24" data-name="Group 24" transform="translate(2109 17271)">
                      <rect id="Rectangle_34" data-name="Rectangle 34" width={623} height={215} fill="#fff" />
                      <text id="Submit" transform="translate(16 72)" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={180} y={60}>Submit</tspan></text>
                    </g>
                    <foreignObject width={1003} height={215} transform="translate(1100 17270)">
                        <input placeholder="Enter You Email..." type="email" required/>
                    </foreignObject>
                  </g>
                   <g id="Group_26" data-name="Group 26" transform="translate(0 -48)">
                    <image
                      id="phone"
                      width={96}
                      height={96}
                      transform="translate(140 17294)"
                      xlinkHref="data:image/png;base64,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"
                    />
                    <image
                      id="mail"
                      width={96}
                      height={96}
                      transform="translate(140 17436)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflAxgNLDk2vFXEAAAMG0lEQVR42u2dWXAUVRuG39OAaEGRgCJBIYkgmwu73FgKBAhhkUASUZaAWsKNeqWWF5ZV3Khl4QaWChQUkQQSCCSsCSRIAlwQIFAsIhLW4EIkiICxMGLO918chgn8MOd0T/f0JPmeS/jS/fV5nz7T08s0wDAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzQTxL3+g2TbthDjxgGpqcDQoaC4OIiHHvK7YcYAunQJoqYGqKwENmwAtm4V4p9/zP6WLIto9myi6mpimgnV1SRnzSKyrDvzvm0GINm+PcSKFcCUKX5LzHhBURFo2jRhXbsW+JdbAqjwd+4EBg/2u03GSw4eBA0fLqy6OgCwADXtQ+TkcPgtgcGDIbKzAx8HNz8TZs1SB3tMy2DyZNCMGQAgiO6/HzhxAoiP97stJpKcOwfq27c1kJJiL/yGBmDJEiB4IMFEAx06AHPnAq1amdUnJgLJya2ByZPtrahVK2DgQFBKSuOjScY/iNq1A4qKzMO/iUhNBdHRo86+W1ZWEnXs6PfGt3RIduhAcs8eZxkePgyiP/5wfoKhspKoUye/B6GlQjImxnn4RCRra0EkpXMBiEhWVJCMifF7MFoaKvyKirCyIykRuqC+3mxBe/cSxcb6PSgtBaLYWDXmJoTOUCPAJ5+QLC01k+ngQf448B6SMTHm4e/cSXL+/FAVVujVXb8OMWkSaPt2bWdi0CDQ9u1EDz7o9yA1V4hiYyFKSoBhw/TVu3YB48dD/P13qCpLtxghrl8HJk4EtmzRrlMMGgQqLWUJ3Ed9xG7bZhQ+lZYCKSlCEz5gIAAACKu+HpSeDmzerC/mmcBtVPime35JCURqqtpx9RgJAAQkyMgwk2DgQJbAHYLhP/OMvrqkBJg82TR8wIYAgN2Z4KYEku8icgpRx45qOvcmfMCmAAAgrH//VRJs2qQvHjgQgiVwggq/pARi6FB99bZtgPm03xjbAgABCTIygI0b9dUDBrAE9lCn2EtLzcLfulXt+Yb3/N2BIwGAgAQvvmguwa5dRHFx3g1b84Bk585AeTkwZIi+eutWYMoUp+EDYQgANJZgwwZ9db9+wI4dLMG9Idm5M8T33wP9++uLi4vDDR8IUwAgIMHUqcYSUFkZUdeuLo5bsyAY/tNP64uLiyHS0sINH3BBAKCxBOvX64v79gXt2MESBCH58MPG4aOoyI09P4ArAgAsgVNsh09pacKqr3dr/a4JAADCunFDSVBYqC/u2xcoKyN65BE3e2hKBMN/6il99ZYtbocPuCwAEJDgpZdABQX66j591IFhy5NAhb9jh3n46eluhw94IABwUwIxdSqQm6uvbnkSkOzSRYX/5JP64oIC0JQpXoQPeCQAAAjR0ABkZgKrVumr+/RpKR8HtsLHunXAyy8L68YNr/rxTAAgIMGsWWYS9O6tJHj0US978pNg+E88oa9eu1Y9x+dd+IDHAgCNJVi5Ul/dfCUgiouzF/706V6HD0RAACAgwezZQE6OvrpXr+YmgTr7aRg+5edHYs8PEBEBgIAEr7xiSwLZrVuk+vOKYPj9+umL8/OB6dOF9d9/keovYgIADiQQu3cTJSZGskc3UQLv3m0UPtasiXT4QIQFABpLkJ2tr05MBMrLm6IEJLt3hygrAx5/XF+9Zg1oxoxIhw/4IAAQkODVV4EVK/TVCQlKgsce86NXJ5Ds3h0wDX/1ar/CB3wSAAhI8Npr5hKUlTUFCW6FL3r21FevXg2aOdOv8AEfBQAaS/Ddd/rq6J8JSMbHm4efl+d3+IDPAgB2JYiPVxL06OF333diO3z4Hz4QBQIAgBBSKgmysvTVaqCjSYJg+CY95eYCM2cq8f0nKgQAGkuwaJG+OiCByd7mLSTj4yHKy83CX748msJXGxCSefMi348QRN98Y/bw4/nzfkpAMiGB6MwZs4dnly272w81ej+e8+aFaivqBFBNC0H09dfRLEFTCF+NZRMUQDVuUwJp8p3bpd5kQgLR2bNmvS1d6lf4ahxDCxA1xwB3x/QoWZ11i4QERImJEOXl6iyl6TYQed1XGBsUfTOA2vsXLjTbwxpz4QKRyXl3h33JXr2Ifv7Zfl+LFxMJEX4HTsayic0AaqAWLADeesv+X6srb0Qm19xt9iV79VLn9p1coZw7F7R4sZ8fBfciqhpS4S9c6Cz8AO5LEAw/jHsUxJw5oEWLok2CqGlGhf/VV8Cbb4a/tC5d3JKAZO/eYYcfQMyZE20zQVQ0osJftAh44w199S+/mF1A6tIF2L6dpMFzdvfqS/bvrw74TMJfsUL1pkG8/jrw7bd+HRP8/0b6fBBIZFkklywxO5hSX/fsHST+9RdRWprtvmRGBsm6OrN1LFxIJITq7fx5oz+RS5ZEYiaI6vMA6vU0S5cah9/ohI+SYMECs78lItq82WQ2IDlgANGWLebLXbCg8d5M1LOnsQQROEcQtQKoPX/ZMrOBqq6+28UfJcGXX5qHRUR0+DDRhx+SzMwkGjWKaNQokpmZJD/6iOjIEXvL+uKLu03lRD16GL9zyeOzhFEpgNrzly83Dz/0qV6ijz+2F5wLyM8/D9mTjI8nefq02cJWrSKy+UvfTVUAFX5WltnAnD1rej8gyc8+i1z4n35qtq2JieanjLOyvJgJokoAolatzMO/+7QfevnvvRf2j1+HTl7aHRM1E5w6Zbb83FySrVs3SwFU+NnZZgNx5gzJhARH65EZGURXrrgf/uXLRM5ep2fryiFlZ7v5cRAVAqjwc3KMtl+ePq3usAljfTIhgaigwL3w165VN3uG05OdY4KcHLck8F0AFf6qVWbhnzoV7kDfPujPPUeyqIioocF+6A0N6uvgs8+610/37uYfB+4cGPoqAMnWrYlyc802+ORJrx4FUwP/zjtExcVEV6/eu4crV5Qwb7/tpoi399KtG9HJk2ZjEv4xgW8CqPDz8sw2tKoqks8BEnXtSnLoUJKjR5McPZpoyJBI/nydkqCqymxs8vLCkcAXAdS0v3KlcfjN6Elg8zGKiyM6dsxsjPLzSbZp42w9Eb4fQH1uZWcD06frq6uqgJEjhfj1V++HPLoQoqYGlJQE/PijvjojAyI316kEoXBVgGD406bpq1tu+AGE9fvvSoJjx/TV6elAXp7bErgmgGosP98s/BMnVPi//ebmxjRFlASjRhlJINLSIAoLSbZt69b6XRGAZJs2EGvWACYnSk6cAJKSOPwgwZnghx/01RMmQBQUuCVB2AKQvO8+Fb7BK2jpp594z787wrp4Uc0EJhKMH++WBGEJYDt8kZQkxIUL7g1b8yIowdGj+urx44HCQvX2d+c4FiAYfmqqvpjDN8WWBGLcOFBBQTgSOBJAhZ+fbxQ+jh+HGDmSwzdHWLW1tiQIYyawLYAKf+1aYNIkffXx4+qAr6YmAuPWrAhKcOSIvjolBVi/3okEtgQIhv/CC/rqw4dBzz/P4TtHWLW1wIgRoMpKffXYsUqCBx6wsw5jAUi2bQuxbp15+KNHC+vSpcgPW/NCiD//hEhO9koCIwGC4U+cqC8+dIjDdxclwZgxwP79+urkZNCGDaYSaAVQC9q0CZgwQbs0OnQIgsP3AiGuXAGSk40kEGPGAMXFRO3aaWtDX4Wy+/p4flWs1xDFxrr5+niNAPX1ZuHv369edshEAqKOHdWYmxA6Q4R/F+2+feoFx0wkUTPBvn3hZScliC5dcr6AAweIOnXyezBaKiRjYkhWVDjP7+JF2H8cKkBlJYfvP0qCPXucZXjokAWYfL+8kwMHgDFjhLh82e8BaOkI6+pVYOxYUEWF/b+urBREqalGL3u8xY0bwPz5wLVrfm8805gOHYB33wXs3DGUmirUSZ6qKvXrm0zLoboa1KePJaz6etAHH/jdDhNp3n9fWPX1AlBP7Kp31Bnc2ME0AwoLgfR0IYiCv2wh27eH2LkTGDzY7/YYLzlwADRihLDq6oBG1wKEVVcHGj7c7J2/TNNk82ZQUlIgfOCOi0HCqquDyMgAZWYC1dV+t8u4xblzKtNJk4R1+7e3e/5Umfp2MHasuvNn2DD1A4ydO/u9KYwJtbVATQ1o715g40agpMSrl08zDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwUcP/AGQckj3y6turAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTI0VDEzOjQ0OjU3KzAwOjAwrF82cQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0yNFQxMzo0NDo1NyswMDowMN0Cjs0AAAAASUVORK5CYII="
                    />
                    <text
                      id="_44_20_7193_4821"
                      data-name="+44 20 7193 4821"
                      transform="translate(305 17379)"
                      fill="#fff"
                      fontSize={60}
                      fontFamily="Telegraf-Regular, Telegraf"
                    >
                      <tspan x={0} y={0}>
                        +44 20 7193 4821
                      </tspan>
                    </text>
                    <text
                      id="info_bellrings.co"
                      data-name="info@bellrings.co"
                      transform="translate(305 17501)"
                      fill="#fff"
                      fontSize={60}
                      fontFamily="Telegraf-Regular, Telegraf"
                    >
                      <tspan x={0} y={0}>
                        info@bellrings.co
                      </tspan>
                    </text>
                  </g>
                  <g id="Group_27" data-name="Group 27" transform="translate(4 890)">
                    <g
                      id="Ellipse_6"
                      data-name="Ellipse 6"
                      transform="translate(1068 17537)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth={1}
                    >
                      <circle cx={79} cy={79} r={79} stroke="none" />
                      <circle cx={79} cy={79} r="78.5" fill="none" />
                    </g>
                    <image
                      id="instagram"
                      width={64}
                      height={64}
                      transform="translate(1115 17584)"
                      xlinkHref="data:image/png;base64,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"
                      style={{ mixBlendMode: "difference", isolation: "isolate" }}
                    />
                  </g>
                  <g id="Group_28" data-name="Group 28" transform="translate(-187 890)">
                    <g
                      id="Ellipse_6-2"
                      data-name="Ellipse 6"
                      transform="translate(1068 17537)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth={1}
                    >
                      <circle cx={79} cy={79} r={79} stroke="none" />
                      <circle cx={79} cy={79} r="78.5" fill="none" />
                    </g>
                    <rect
                      id="instagram-2"
                      data-name="instagram"
                      width={64}
                      height={64}
                      transform="translate(1115 17584)"
                      fill="url(#facebookIconMob)"
                      style={{ mixBlendMode: "difference", isolation: "isolate" }}
                    />
                  </g>
                  <g id="Group_29" data-name="Group 29" transform="translate(-378 890)">
                    <g
                      id="Ellipse_6-3"
                      data-name="Ellipse 6"
                      transform="translate(1068 17537)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth={1}
                    >
                      <circle cx={79} cy={79} r={79} stroke="none" />
                      <circle cx={79} cy={79} r="78.5" fill="none" />
                    </g>
                    <rect
                      id="instagram-3"
                      data-name="instagram"
                      width={64}
                      height={64}
                      transform="translate(1115 17584)"
                      fill="url(#twitterIconMob)"
                      style={{ mixBlendMode: "difference", isolation: "isolate" }}
                    />
                  </g>
                </g>
              </svg>
 
          </div>  
            </>
            }
        </>
    );
}

export default Footer;