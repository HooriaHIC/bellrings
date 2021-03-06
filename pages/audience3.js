import React, {useEffect} from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import LatestBlog from "../components/latestBlog";
import { SharedJs } from "../components/Js/main";

const Audience3 = ({articles}) => {
    
   SharedJs();
   
  return (
    <>
    <Layout className="container1" OnHomePage={false}>
        <Header media="/assets/video/audience 3.mp4" isVideo={true}>
            <div className="pageHeadingAudience">
                <h1 className="headingAudience">
                    Supporting Founders & CEOs <br/> 
                    to engage, convert, repeat <br/> 
                    and scale sales revenues on <br/> 
                    the path to high growth
                </h1>
                <div className="row">
                    <div className="column" style={{"flex": 1}}>
                    <p className="whoAreYouTxt">
Pivot now and regain Investor and Board confidence through predictable, <br/> consistent sales growth.

                    </p> 
                    <div className="mt-1 row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="CTABtn" viewBox="0 0 383 109">
                        <g id="button" transform="translate(-138 -1939)">
                            <rect id="Rectangle_26" data-name="Rectangle 26" width="383" height="109" rx="5" transform="translate(138 1939)" fill="#fff"/>
                            <Link href="/blog">
                            <a>
                                <text id="Get_Started" data-name="Get Started" transform="translate(215 2008)" fontSize="40" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="0">Get Started</tspan></text>
                            </a>
                            </Link>
                        </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="whatWeDo" viewBox="0 0 268 40">
                            <g id="play_video" data-name="play video" transform="translate(-475 -916)">
                                <image id="play-button" width={40} height={40} transform="translate(475 916)" opacity="0.8" xlinkHref="data:image/png;base64,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" />
                                <text id="What_we_can_do" data-name="What we can do" transform="translate(539 945)" fill="#fff" fontSize={24} fontFamily="Poppins-Regular, Poppins" opacity="0.9"><tspan x={0} y={0}>What We Can Do</tspan></text>
                            </g>
                        </svg>
                    </div>
                </div>
                </div>            
            </div>
        </Header>
        <div className="blackBox">
                <div className="UnderHeaderBoxes" >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="CTABoxesUnderHeader" viewBox="0 0 1066 404">
                <g id="card" transform="translate(-60 -895)">
                    <rect id="Rectangle_6" dataname="Rectangle 6" width="1066" height="404" transform="translate(60 895)" fill="#fff" opacity="0"/>
                    <image id="content" width="100" height="100" transform="translate(166 1029)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflAxcSDiS9EYsmAAADiElEQVR42u3dMU4bURDG8e8ZYxmRHIDkBtiCjoIcAKVK6x7cJUrvPkoFQjgRDSfgCOAcwHITvECXJpFIauwOvJNiQUpYRzGE+Nme/69cs2j27QBPYp4+CY/K0mrVbHfX7PTU0n7fYkv7fbPTU7PdXUur1djrM7MsLZXMPn40Gwxiv/M/u742azYtLZVir9dMsbRUsvTTp9ivd2Rpq0UTPKLsJ3/a7O1JUoi9eNPO0mpV4fNnaW4udi33MxhIq6tFSTKr1aSNDdniYuyyogmDgZQksmYzFHq90e/b2hr+8pNEdnAgff8e98GWlhTqdenuBnBuTra5KbNGI/Yvo8nSbltaLI66vGZnZ/nv0e2alctxX/yvNZbLZkmSrzNJZHZxEXvJJ8/6+uiL2+vl73/zJvZLz9f59m2+zsvLQuzCJpPZ6F/75En+9h8/Yj9BvqaLi/zFp08LUrMZu7aJYu22rNOJXca4FEN4/97syxfp5Us2gd2u1GyGwvV17HLGpShJIRweSoeHsYvB+LEHcI4GcI4GcI4GcI4GcI4GcI4GcI4GcI4GcI55gFsPnQeYckWzRkN69y5bhNjlxFarKbx6ZemLF17+H1CQXr+OXcRkWVtTWFuLXcW4sAcY6j7zAMP+XCwtxX6CnPD8ef7i5SXzAHfdex7g27fcpVCvT9ZI2MKCtLWV/+TrV+YBbj14HuDoSFpe/v1atSp1OmYHB8Mnccb5XM+eSfW6VKnkPrOjI/fbvn9lVqlIJyfTORa+ssIe4B+FcHYm7e/HruP+PnwI4fw8dhUzITsa1mrFnmUeWXp8bOn8fOx1mynZ4dC9vewA5qS6uspOCfPy/xuzSsXSnZ3sIMawMwPj1uuZJYml29tmdzerAAAAAAAAAAAAAAAA+CvyApwiL8Ax8gKcIy/AMfICZgV5AciQFwDyArwjL8Av8gKcIi+AvACP2AM4RwM4RwM4RwM4RwM4RwM4RwM4RwM4RwM4xzzALfICxHwQeQEgLwAiL8Az8gKcIi8AD0FegHPkBYC8AJAXgBvkBQAAAAAAAAAAAAAAAMwY8gKcIi/AMfICnCMvwDHyAmYFeQHIkBcA8gK8Iy/AL/ICnCIvgLwAj9gDOEcDOEcDOEcDOEcDOEcDOEcDOEcDOEcDOMc8wC3yAsR8EHkBIC8AIi/AM/ICnCIvAA9BXoBz5AWAvACQF4Ab05YX8BOtcyYnr6LaTgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0yM1QxODoxNDozNiswMDowMKcg39YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMjNUMTg6MTQ6MzYrMDA6MDDWfWdqAAAAAElFTkSuQmCC"/>
                    <text id="Visit_My_Blog" dataname="Visit My Blog" transform="translate(368.525 1058)" fill="#fff" fontSize="60" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="0">Visit My Blog</tspan></text>
                    <text id="We_Use_Creative_idea_for_your_future_success" dataname="We Use Creative idea for your future success" transform="translate(368.524 1095)" fill="#fff" fontSize="34" fontFamily="Poppins-Regular, Poppins"><tspan x="0" y="36">We Use Creative idea for your </tspan><tspan x="0" y="87">future success</tspan></text>
                </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="CTABoxesUnderHeader" viewBox="0 0 1066 404">
                <defs>
                    <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                    <image width={128} height={128} xlinkHref="data:image/png;base64,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" />
                    </pattern>
                </defs>
                <g id="card" transform="translate(-60 -895)">
                    <rect id="Rectangle_6" data-name="Rectangle 6" width={1066} height={404} transform="translate(60 895)" fill="#fff" opacity={0} />
                    <rect id="content" width={100} height={100} transform="translate(166 1029)" fill="url(#pattern)" />
                    <text id="Listen_To_My_Podcast" data-name="Listen To My Podcast" transform="translate(368.525 1058)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>Listen To My Podcast</tspan></text>
                    <text id="We_Use_Creative_idea_for_your_future_success" data-name="We Use Creative idea for your future success" transform="translate(368.524 1095)" fill="#fff" fontSize={34} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={36}>We Use Creative idea for your </tspan><tspan x={0} y={87}>future success</tspan></text>
                </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="CTABoxesUnderHeader" viewBox="0 0 1066 404">
                <defs>
                    <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                    <image width={128} height={128} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflAxcSDyitvPZMAAADbklEQVR42u3cP2tTYRiG8fs5IFU7uegk0nwEu4WMig5GOvQLaLv4DRy7CuIoiOgibgraTrqk1D842I/QM+iki5NpkyGPQ3VQa4bmJC/mvn5TyRvePJxz0XNOKZEAAAAAeIk/X8jRhQuK1VXp4kXl2bOlB0QD4utXaXdX+exZVJ8+/bb064fMkyelO3ekW7ekEydKz4xpGA6l+/eVt29HNRhIPwPIXFyUXr+W2u3SI2IW3r6VrlyJ6PerwxcePuTkO+l0pAcPJCly1Oko3rwpPRJKaLcrxfp66TFQSK6vR2ZdS0tLpWdBAVnXkXlwIC0s/OsNUl2XnhOTaLUUrdbRa4OBcqyNjdLjYzKZGxvjznBVekCURQDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBHA3Msct0oA5gjAHAGYIwBzBGCOAMwRgDkCMEcA5gjAHAGYIwBzBGCOAMwRgDkCMEcA5gjAHAGYIwBzBGCOAMwRgDkCMEcA5gjAHAGYIwBzBGCOAMwRgDkCMEcAc48viMAYBGCOAMwRgDkCMEcA5gjAHAGYi8yDA2lh4cjVrGuprksPiUm0WopW6+i1wSAy61paWio9JgrIvb1K2t4uPQdK6fUis92W3r0rPQpmLVNqt6uI9++lp09Lj4NZe/Ik4sOHkKTM06elV6+kTqf0WJiFnR3p6tWI/f1KkiL6feWlS8p796ThsPR4mJbhUHn3rvLy5Yj9fUmKP9+So/PnFaur0vKy8ty50iP/JZaXpTNnjl789k25uzvXn3+smb98kT5+VD5/HtXnz6XHmUiOer38l1GvN++f3zT+EmiOAMwRgDkCMEcA5gjAHAGYIwBzBGCOAMwRgDkCMEcA5gjAHAGYIwBzBGAuJt/ib5lVpVxbU3S7ylOnmp3Y7F/Cot9Xbm0pHj2KGP91L8favukNM6tKevlSunat6b29bW1JKysRo1GTuzZ/Cci1NU7+NHS70o0bTe/afADR7c7keFi6fr3pHbkJ/K80fw8whUvA5uZMjoWl5o/tlG4CX7w4vGahOZubhzeBzf4WmNJjYIR086bU7SoXF2dzgOZUfP9++ATw+PE0HgMBAAAAuPkBGS9F1kbWtkcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMjNUMTg6MTU6NDArMDA6MDAh94jLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTIzVDE4OjE1OjQwKzAwOjAwUKowdwAAAABJRU5ErkJggg==" />
                    </pattern>
                </defs>
                <g id="card" transform="translate(-60 -895)">
                    <rect id="Rectangle_6" data-name="Rectangle 6" width={1066} height={404} transform="translate(60 895)" fill="#fff" opacity={0} />
                    <rect id="content" width={100} height={100} transform="translate(166 1029)" fill="url(#pattern)" />
                    <text id="Watch_Our_Video" data-name="Watch Our Video" transform="translate(368.525 1058)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>Watch Our Video</tspan></text>
                    <text id="We_Use_Creative_idea_for_your_future_success" data-name="We Use Creative idea for your future success" transform="translate(368.524 1095)" fill="#fff" fontSize={34} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={36}>We Use Creative idea for your </tspan><tspan x={0} y={87}>future success</tspan></text>
                </g>
                </svg>
             </div>
            </div>
       
 
        <section className="section whiteBox onlyWebSection">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="100%"
                    viewBox="0 0 1800 183"
                    >
                    <defs>
                        <pattern
                        id="aconex"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 275 75"
                        >
                        <image
                            width={275}
                            height={75}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                        <pattern
                        id="pattern-2"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 360 118"
                        >
                        <image
                            width={360}
                            height={118}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                        <pattern
                        id="pattern-3"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 256 97"
                        >
                        <image
                            width={256}
                            height={97}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                        <pattern
                        id="pattern-4"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 360 280"
                        >
                        <image
                            width={360}
                            height={280}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                    </defs>
                    <g id="Group_57" data-name="Group 57" transform="translate(-60 -1299)">
                        <rect
                        id="Rectangle_46"
                        data-name="Rectangle 46"
                        width={1800}
                        height={183}
                        transform="translate(60 1299)"
                        fill="#fff"
                        />
                        <rect
                        id="Aconex_2_"
                        data-name="Aconex (2)"
                        width={171}
                        height={47}
                        transform="translate(1609 1368)"
                        opacity="0.9"
                        fill="url(#aconex)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <image
                        id="Repedo"
                        width={171}
                        height="61.145"
                        transform="translate(1315.179 1360.427)"
                        opacity="0.9"
                        xlinkHref="data:image/png;base64,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"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <rect
                        id="Roam_Works"
                        data-name="Roam Works"
                        width={247}
                        height={81}
                        transform="translate(945 1350)"
                        opacity="0.9"
                        fill="url(#pattern-2)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <rect
                        id="_4_Project"
                        data-name="4 Project"
                        width={174}
                        height={66}
                        transform="translate(649 1359)"
                        opacity="0.9"
                        fill="url(#pattern-3)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <image
                        id="SGE"
                        width={127}
                        height={127}
                        transform="translate(400 1327)"
                        opacity="0.9"
                        xlinkHref="data:image/png;base64,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"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <rect
                        id="Viewpoint"
                        width={150}
                        height={117}
                        transform="translate(126 1332)"
                        opacity="0.9"
                        fill="url(#pattern-4)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                    </g>
                    </svg>

        </section>

        <section className="section whiteBox onlyMobSection">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="100%"
                    viewBox="0 0 1800 510"
                    >
                    <defs>
                        <pattern
                        id="aconex1"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 275 75"
                        >
                        <image
                            width={275}
                            height={75}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                        <pattern
                        id="roamworks"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 360 118"
                        >
                        <image
                            width={360}
                            height={118}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                        <pattern
                        id="4projects"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 256 97"
                        >
                        <image
                            width={256}
                            height={97}
                            xlinkHref="data:image/png;base64,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"
                        />
                        </pattern>
                    </defs>
                    <g id="Group_57" data-name="Group 57" transform="translate(-60 -1299)">
                        <rect
                        id="Rectangle_46"
                        data-name="Rectangle 46"
                        width={1800}
                        height={255}
                        transform="translate(60 1299)"
                        fill="#fff"
                        />
                        <rect
                        id="Rectangle_49"
                        data-name="Rectangle 49"
                        width={1800}
                        height={255}
                        transform="translate(60 1554)"
                        fill="#fff"
                        />
                        <rect
                        id="Aconex_2_"
                        data-name="Aconex (2)"
                        width={390}
                        height={106}
                        transform="translate(1292 1620)"
                        opacity="0.9"
                        fill="url(#aconex1)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <image
                        id="Repedo"
                        width="379.321"
                        height="135.636"
                        transform="translate(770.34 1609.364)"
                        opacity="0.9"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAA7CAYAAAAaR0rpAAAQrklEQVR4nO2dCYycZRnH/3PtzO6y2+L2AtrSUstRpBSKgiDlPkQElEMTEIQoiCFKEFONF56EBBSNinIEbfAgcoSj3NgKUrkKBLAWSmmh0GPpwnav7s7uzGte83uTx4+Z2d3uzLKF7598mZ3ve8/nfd7nep9vVjFixIgRI0aMGDFixIgRI0aMGDFixIjxHiMxku6dc8MpnpaUk9QVL/r7F4nEiFjqf0jXiDrNknaVdKikPSXN5/Ij/qykxTXqN8b/w9N7WJJjLKBaknIaTLevpNNhxFSZakVJf5R0o6TH+B6juvDreqCkw2j1P5L2knSXpBW1pHU1JOVImXKKpM9LOl7SBPPodUnPSHpe0iZJ67h/mqTvSprI97slnStp80jGEeNd2FnSjyQdJ6lP0lZJ4yXdKemiWkrPsaC+N0raB6YcCn4lqV/SHEmfkXSipJWSviXp+hHPJkbALEnT2fwOxsxLykqq4/uYRXKEA/NMnRlmnb9DLK/ifyupRdJ1kq6IWapqOBJzKg0T7iCpAUk5phlSVWDKOlTFQcOo85Kk/bErvSo5U1KHpG9K+sk2MHmMd2OcsekLkgZgxme3B1qNlCl7JNWjloeDRZJmoFr+DJP+Q9J3JC2TNHnkU/vAwqvomXzKMOVbklq3B6KMlCk9NsCYw8FVkqZi+3islnSEpDMkzZZ0L7s9xvDh1+LDaJwiNnyKz8L2QM9qMeWaYTKR9wa/Kumnkft/I5ThJfDDknaswvg+aKjD0x6AKZNEWdq4N+ZRDaZcxu6cMcwQ062SeiV9PHL/JeJrN6LOs2Xql8O2xCSGYscmq0SvasM7M42mzcNwamSYMEmYbrtANU50HpR0jaRfSPq2pCeGUOcTkv4EsQ5BvXgCzkOKTke1e9voNhj10hKBdl/mYgLDdUjWNG2tl/RzjPvNkbofkvRF6tZRdjkx1E2UOYwxrpX0FA7dmzz3QeiXhyh5/IZt4iRrMholi3P3Gu2/Rf9DQT0mzgF8ZrlW0fax9CfjaacZezkksOt3k3Q4c/XopN6L0NHOeUfG8A7m1zvce2eI8yiLajDlZhjTE2IhxB8Mp8B4Fp0wSxv25RGUyRLXXBhhLK+irqStUvgI180Q83emzG7YtQGeWfaDqFeymDewaWbRjp3vZOKqg52OTCIW6xf6JO4VkGR9/N3BpjhkkLbqscM9fY+StBP3mnneB62aI5536O+ZMu3O5PNHhOqmQdsEsU2/Hu2S7oM5F/P9aEnXUnY5f/vTvGMGmUdt4Y8ZuU5wzj3inHvKObeDuV/uetC9G23OuZnOuUXOuQ1cXebzdOdcguso59zTzrliiXYK3PdXnvovUCeMZ5pz7m767DHtPEv/fi5vUj9vnhf43Oqcu9k511Jhjgudc+sou442ttLegLl6md8Dzrn5zC/aVoZx+Xl00EaB9jq4uphPQJ62fZmVzrlspM05zrnjnXNPUq7ImLpMG/5+O+37ttcwjjOdc/XOuYedc6dCN78eD1aD4aplI91HW/448awhlO+KSD3/99Oo24ORui1kFdUjRXdB7V/ECdDuxn4coMwWdnEfaqSd5z54fI6JEvh238ah2oJEKCKZvYSei9RIGW3SH6HXTKRb1B5NELc9C8mWQ1JtZlyv0m8om2Fc85DeDZH2vCS6mlOzD/M89Jni7wzjDHUdEjIcJ77OHO3YvyTpAiRuHhr2M8Ze6Nlt1kdokqA5MrTvJf0t2P9VQbWyhIoMyk9yQURVRhH6DERL8rkr95sx3Au0m8c8GAdj7ctih5BHN7bZI6ivJoi+O4vUSZv7YYM9DxO0mEUMHup4TIh+GLqDun2c7edhhBSO3SXYWuvMHD8t6YeS9mBeQQ0+g23cxwbbz4RuQt/+yPYUbFkxxkVkWwn7N9BrFbZcF8wykU2V43nYREXKBgZtZHxHwIhNhsnfZIwhvXAqJ2/jaW8A06ed+Z/PJnsaIbCqWoy5zYiog5Rz7gnn3A2DqG6vih4zqnEAVeRVRSvqtpfLq4vFqIvrjfoKqtCrlB9EVNMkyr5iVGNQoV8x6v9Jo/ZCf3nU1e3OuYsxJ+ajioNJ0WHKtqICQ9+zmVubUftdzCFjVHOGcT9J2WAW+LYXmfZ+Q/0B+s5TxqvLQ2kvzZz9eJeaubQy73aeifLnQddA+3b630B/M6FnI3R6wJgvoXwrZaMmQVX4qpr5lAUkRpbdtbJMuUazM4MhnmFXd2P0+1SrJUiCFUiSH5dQlcu5b02BVs545+JoNNB2FmmbRipPNFIqSJZe+r3USL81zOUkJFejqZdDct/HvQuRJBkj6ZdhcvSbMfZz3n8s5bppK5Spp90TTOC7G0n5Ds7Yo5QdYM5X40HPQzK/jYRLm7WYQVbXFKNpcjgzf5B0mfHY+4gVH41JVQ8dmxjPPCRz1aVjteNuC1ms8yuUmY5KLJhrAOL70Mg3JH0ZFfY4KvR6iBHsqQ5stHtKhInqiX3uBMGTEDiFqhlAjbeYzRDgwzO/jqhj0c5qGDJp1H2Yj+/zk6jEJnOSsgGPdU2kvTRlwyZrQ3V6268TD3Yhajl46ZOwRZca9R5FJ2MLJzdJ6qzm+9nMPWVMpzx5rZeVSdZ4iPHnmXOCDe7b+ViFdd5mVDvzfDUM18yuXFuizAHYbRZp7JRbYUSLSUgNBzGCNNnM96Nor4945f4QK5wGDbBIr2P7iHo5w5A9LOjDRgJZbDGOQs7YZ930O5W80F3MKx9FYz/aMe4MQ85BYodNlUIrLMfeDDHAKWYDeHv4+2VoPx6J1mhs7SJx1bU8/5TZWH1sii3EXctlDz0H7eqxq5uZf87kxVYVtXgdYivEuQg1GMVsJpRgIcLuK5CUEcU+METO3E9D5HNRR9MpU8fzRiN9g2f5AqaBiyQrBGmxhAOAUggB4wYT6C8Y73QWTst4I0mTJgj9PRgwaIWJmBIJ47h0IDGXEIWwXniGvp5nDqWwgA2QgD5ZmLKNjTyffhtM1pAwle6rsJ5B6i6njR0Yc+82nLYNCbVgys9J+iu2yNGI/4AENpdghB3420uEmyQ9WaK92UjdIFGSMMZEw9R5E5AOkqyHOq2ovK/zvBl7aBNB8AT3OgfJgN/LLHSChQ2nKS0EnUO0IEjzFMy4mxm7LVOHpNqITegD0B9jI2bNJstT99oK4zuOeYTNOAFGvxemPofnaRiqwBherMDoYQ7TmUcddQeQoDVJzK4FUzpOUGYgLS1T5lCrdUYFFiHe0jLv64Q0tiakRQ+EyvJZgPEmMJ8OI5GegtGvM7HBFhanydhWvTzLIumjSFLPbgzBxK20FaRGBikY+ivwdwP99Jr44kbMhX9jOvixzGJ8RZNQ4fFGhdSz0LeL0LADR6vflMuaOOZQjklnIzyCuZPGPOmv1ZuptXqb8S8w5P44HBu4H+JpISW/aOJoS8u0NYlxhvIhTtjDvR48zU0s2npzrryYhbee78Go2azxvDtZvFIMKYLFU43TkWEMPqZ3O5KtwDiTEZuzl3r9tL/GMLN3qO5AxQbMNyq215g6G425EEXI0CpQPjBzJ2ZLgLVfC0jgLYOs5UFskuCUhXm01SqLvVZMuYIFO5CA+mXcH4/dI6MCg/fXUaG9PEw2kwV4C3V3G6p4N+zRV1lwV+HlqNPYHCnDlN0VXvtNYhvnjGQJnmsXzt3OMEDKOHHdjO/35sTp7chpTinNkDVJJXkjoSplMh2DphgwNqVgoEDXzsiGKcKYlZiynrBUkzkI6GVuS405UlXUMhXrGj5PNPf2Rgo4IwlaeW+nHFZRLhA3MHMOlXYLfT1OW8UKDNmI5M1F5t5mjiSjOIIjvmTEsO8j477HSMQOc/LRi9e6gmsd5VwJNRtFmiskViTZeHNLlJ3PRtvdzCk4j+2mn2UlJFt9JNkkimPQAhkTASiy+ZfU6vXoWjLlYog/k0k1Ez9MGaYM0mNjhXYeJaSxL0RdT91DCI/kykjZZAlNsCdSLWFUegJmiWbPZ0x2UrMpG2zglahGh7R8zQS6Q/hoNg5QJSnXGOn7BaRXyPoJdXfkKNeu2RzS7eahgWyM0kXU/bMm1hjayMLU50XGlODdqYUmDa5ocgr+WibcVxXUSn0LNfooBDsAAoV3w4MH2ocq7q3QzkquuTBxlgXaCemRxTzI8Tykion2/0AoRTzbib/D4iWwcb2a/SXSdkEkMSMsYppN9BxmSZDIG5CKU0x0YApxwRbG/y/a7oAJT8QUaebeJbS1GOZrMjZqEeZcgAe+Dok/G/r2MYcUtAx17jJ0XA3DTzS2fIaNejbjWMx4vyDpozirAXmzpnfU8t3xWjKlOHlYQJLBXUy4APGCKmlDBZb7iZFuVM8pLOY4Y99M5f3xA5FQDRCyyezqZk6Yiixk0nieRWOvhWPEtbQx1zgQefP5NsnM9pTGkXCxH99DTHUKqv94xhmchH6iChP4vo65+b/fQO2OizgXWeqcxjiC89HPxpZxxPq57EFEH6bQAsYbwkw5nL8WNFkdQiTMPQWdeth8t0CDmqHWTHkndtdxGMazTEhnFxhjKZOsZAeuRco0IwnqTNrXLix+kHx1pm7ahGu28neS/vr4XkDidJKNc5ihS55NMQDDL+cYslSW+AO0E04+suYMvIcxhnZzxh4bxziC5+/YILdhg1unLUH5YHp0sjnWs4l2Nqc1j5c4l77aZMFPiKSzTeOyr30MsEF6OdL1avuftf59oloz5UZihBcQHM8aKdnD93UVJpmg7gUQZyuL3GQSBKxnWjSORtak84dyLSas1GAYuZtndWZBgqfawOLdzlgfKzPWFbwIl2UTFmCgHBvLOhk9JlabR6JnTZk1MMCpqNfAwP0mgN3Jsel61PIhhoEdanovY7oIJr0UNXwSmkPG5g/HrfUm2rCRuPPVjKvmP5g1Gj8F6B2dV1ik9RB/iwlXfK2M5JmMI3MyTkRImj2SU489IkHwXuNkbMbGe4QX0Foh9EOo+gGIm4Jpl5NQUWccgUCbdn7z6BuoycEm3YipcQ6ea8qcNuWN89FJey9ib94Sabse2ixAw2Sh4SbmuYS3P0MG0OPYy1lzGHFFhSyeueRVWlXdD2OG98Q9Q99fYmxlMRZ+4GqoRe8k+XUvGCyo4HSZgPCJnEN7hv4Z749ETx8aWfSTkQqrTMLp+hLhj/A++XQTB+yEca/AeToNB8dxJryMo7RtfYk/hKAmE6PtNuGnoQSfk+aYshGmbmee0Q3SjLQP5/Jdg8R+AybR/hlIxOdg/LYh1v8/VIMpR4QhvIsTrk+TJPo6ycDlyiWdc5c757Y45152zp07jD4GuxaaxN/wfssakm2r1ccH/qoGRus95nvYfdN4460U6lE5l6KWdkf1Vgv7m9OSpJEmd48SDWIMEaPFlAXzSuuFJZ77A//L8X6vI8m3WghZQPtiO4VQUEjeqFkQOMa2odbet8WVJLseQ+7hKzDM3oRTMnibt1W53/D7jDOMt5sx4Y4Rvzwfo7oYzZ8hcZwUbMbpEQ7AIjzl+TVgyICTYMI3zauhIq0t/nnrMYbR/m2c8A7OuXjMN2M/Hl7j37rpM55uAQndF8lmjzFGMJrqO+AmjquuItxz/yj0+UqE6Sehtl/k+3b5XxTerxjN/6MTRU1y8cqgEefpBXM+PIcNMuZ/bnl7wnsep4wRI0aMGDFixIjxgUeMGDFixIgRI0aMGDFixIgRo+aQ9F9DoJ+jbOfPDQAAAABJRU5ErkJggg=="
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <rect
                        id="Roam_Works"
                        data-name="Roam Works"
                        width={445}
                        height={146}
                        transform="translate(213 1599)"
                        opacity="0.9"
                        fill="url(#roamworks)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <rect
                        id="_4_Project"
                        data-name="4 Project"
                        width={404}
                        height={153}
                        transform="translate(1292 1355)"
                        opacity="0.9"
                        fill="url(#4projects)"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <image
                        id="SGE"
                        width={244}
                        height={244}
                        transform="translate(838 1308)"
                        opacity="0.9"
                        xlinkHref="data:image/png;base64,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"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                        <image
                        id="Viewpoint"
                        width={311}
                        height={242}
                        transform="translate(213 1308)"
                        opacity="0.9"
                        xlinkHref="data:image/png;base64,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"
                        style={{ mixBlendMode: "difference", isolation: "isolate" }}
                        />
                    </g>
                </svg>
        </section>

        <div className="comparisonAudience1 onlyWebSection">
            <svg xmlns="http://www.w3.org/2000/svg" className="comparisonAudience1" viewBox="0 0 1800 1149">
                <g id="problems" transform="translate(-60 -2541)">
                    <rect id="Rectangle_9" data-name="Rectangle 9" width={1800} height={1149} transform="translate(60 2541)" fill="#161616" />
                    <g id="section" transform="translate(60 2541)">
                    <rect id="Rectangle_10" data-name="Rectangle 10" width={1800} height={503} fill="none" />
                    <text id="Startup" transform="translate(81 141)" fill="#fff" fontSize={40} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.49"><tspan x={0} y={0}>Startup</tspan></text>
                    <text id="Is_your_strength_product_and_technology_but_you_re_struggling_on_the_sales_front_" data-name="Is your strength product and technology but you???re struggling on the sales front?" transform="translate(124 185)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Is your strength product and technology but you???re struggling on the sales front?</tspan></text>
                    <text id="Do_you_have_a_compelling_software_SaaS_value_proposition_and_are_looking_to_gain_some_commercial_traction_with_some_quick_big-wins_in_time_for_your_next_round_of_funding_" data-name="Do you have a compelling software/SaaS value proposition and are looking to gain some commercial traction with some quick big-wins in time for your next round of funding?" transform="translate(124 241)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Do you have a compelling software/SaaS value proposition and are looking to gain some </tspan><tspan x={0} y={82}>commercial traction with some quick big-wins in time for your next round of funding?</tspan></text>
                    <circle id="Ellipse_23" data-name="Ellipse 23" cx="7.5" cy="7.5" r="7.5" transform="translate(85 202)" fill="#fff" opacity="0.22" />
                    <circle id="Ellipse_24" data-name="Ellipse 24" cx="7.5" cy="7.5" r="7.5" transform="translate(85 258)" fill="#fff" opacity="0.22" />
                    <text id="Are_you_looking_to_build_a_sales_team_from_a_zero_base_with_a_sales_strategy_that_delivers_predictable_software_SaaS_sales_revenues_" data-name="Are you looking to build a sales team from a zero base with a sales strategy that delivers predictable software/SaaS sales revenues?" transform="translate(124 338)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Are you looking to build a sales team from a zero base with a sales strategy that delivers </tspan><tspan x={0} y={82}>predictable software/SaaS sales revenues?</tspan></text>
                    <circle id="Ellipse_28" data-name="Ellipse 28" cx="7.5" cy="7.5" r="7.5" transform="translate(85 355)" fill="#fff" opacity="0.22" />
                    </g>
                    <line id="Line_1" data-name="Line 1" y2={1197} transform="translate(1559 3043.714) rotate(90)" fill="none" stroke="#707070" strokeWidth={1} />
                    <g id="section-2" data-name="section" transform="translate(60 3045)">
                    <rect id="Rectangle_10-2" data-name="Rectangle 10" width={1800} height={640} fill="none" />
                    <text id="Do_you_have_4-6_months_to_bridge_a_250K_MRR_gap_before_you_go_back_to_the_street_to_raise_more_funds_" data-name="Do you have 4-6 months to bridge a $250K MRR gap before you go back to the street to raise more funds?" transform="translate(120 185)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Do you have 4-6 months to bridge a $250K MRR gap before you go back to the street to raise </tspan><tspan x={0} y={82}>more funds?</tspan></text>
                    <text id="Are_you_attempting_to_reach_profitability_in_the_next_year_to_avoid_raising_a_Series_C_round_and_potentially_losing_control_of_the_Board_" data-name="Are you attempting to reach profitability in the next year to avoid raising a Series C round and potentially losing control of the Board?" transform="translate(120 281)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Are you attempting to reach profitability in the next year to avoid raising a Series C round and </tspan><tspan x={0} y={82}>potentially losing control of the Board?</tspan></text>
                    <circle id="Ellipse_25" data-name="Ellipse 25" cx="7.5" cy="7.5" r="7.5" transform="translate(81 202)" fill="#fff" opacity="0.22" />
                    <circle id="Ellipse_26" data-name="Ellipse 26" cx="7.5" cy="7.5" r="7.5" transform="translate(81 298)" fill="#fff" opacity="0.22" />
                    <text id="_Studies_by_The_Institute_of_Sales_Management_The_Bridge_Group_Objective_Management_Group_Inc._" data-name="*Studies by The Institute of Sales Management, The Bridge Group & Objective Management Group Inc.
                " transform="translate(943 515)" fill="#fff" fontSize={24} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.32"><tspan x="56.904" y={25}>*Studies by The Institute of Sales Management, The Bridge </tspan><tspan x="246.072" y={61}>Group &amp; Objective Management Group Inc.</tspan></text>
                    <text id="Scale-Up" transform="translate(81 141)" fill="#fff" fontSize={40} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.49"><tspan x={0} y={0}>Scale-Up</tspan></text>
                    <text id="Have_you_just_lost_a_VP_of_Sales_or_CRO_or_is_your_current_sales_strategy_just_not_delivering_the_desired_results_" data-name="Have you just lost a VP of Sales or CRO or is your current sales strategy just not delivering the desired results?" transform="translate(120 387)" fill="#fff" fontSize={35} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={37}>Have you just lost a VP of Sales or CRO or is your current sales strategy just not delivering the </tspan><tspan x={0} y={82}>desired results?</tspan></text>
                    <circle id="Ellipse_27" data-name="Ellipse 27" cx="7.5" cy="7.5" r="7.5" transform="translate(81 404)" fill="#fff" opacity="0.22" />
                    </g>
                </g>
            </svg>
            <ul className="container linksArea" style={{paddingTop: 0}}>
                <li><a href="#InterimSalesVp">Get a proven interim VP Sales</a></li>
                <li><a href="#SalesCoaching">The impact of sales coaching</a></li>
                <li><a href="#GrowthTrajectory">Achieve a 40%+ YOY growth trajectory</a></li>
                <li><a href="#StepsSec">Interim VP Sales - 90-Day Blueprint</a></li>
            </ul>
        </div>

        <div className="comparisonAudience1 onlyMobSection">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                classname="comparisonAudience1"
                viewBox="0 0 1800 4162"
                >
                <g id="problems" transform="translate(-60 -2541)">
                    <rect
                    id="Rectangle_9"
                    data-name="Rectangle 9"
                    width={1800}
                    height={4162}
                    transform="translate(60 2541)"
                    fill="#161616"
                    />
                    <g id="section" transform="translate(60 2541)">
                    <rect
                        id="Rectangle_10"
                        data-name="Rectangle 10"
                        width={1800}
                        height={2073}
                        fill="none"
                    />
                    <text
                        id="Startup"
                        transform="translate(96 157)"
                        fill="#fff"
                        fontSize={80}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                        opacity="0.49"
                    >
                        <tspan x={0} y={0}>
                        Startup
                        </tspan>
                    </text>
                    <text
                        id="Is_your_strength_product_and_technology_but_you_re_struggling_on_the_sales_front_"
                        data-name="Is your strength product and technology but you???re struggling on the sales front?"
                        transform="translate(124 185)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Is your strength product and{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        technology but you???re{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        struggling on the sales front?
                        </tspan>
                    </text>
                    <text
                        id="Do_you_have_a_compelling_software_SaaS_value_proposition_and_are_looking_to_gain_some_commercial_traction_with_some_quick_big-wins_in_time_for_your_next_round_of_funding_"
                        data-name="Do you have a compelling software/SaaS value proposition and are looking to gain some commercial traction with some quick big-wins in time for your next round of funding?"
                        transform="translate(124 579)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Do you have a compelling{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        software/SaaS value{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        proposition and are looking to{" "}
                        </tspan>
                        <tspan x={0} y={435}>
                        gain some commercial traction{" "}
                        </tspan>
                        <tspan x={0} y={545}>
                        with some quick big-wins in{" "}
                        </tspan>
                        <tspan x={0} y={655}>
                        time for your next round of{" "}
                        </tspan>
                        <tspan x={0} y={765}>
                        funding?
                        </tspan>
                    </text>
                    <circle
                        id="Ellipse_23"
                        data-name="Ellipse 23"
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        transform="translate(88 244)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M7.5,0A7.5,7.5,0,1,1,0,7.5,7.5,7.5,0,0,1,7.5,0Z"
                        transform="translate(88 633)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    <text
                        id="Are_you_looking_to_build_a_sales_team_from_a_zero_base_with_a_sales_strategy_that_delivers_predictable_software_SaaS_sales_revenues_"
                        data-name="Are you looking to build a sales team from a zero base with a sales strategy that delivers predictable software/SaaS sales revenues?"
                        transform="translate(124 1409)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Are you looking to build a sales{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        team from a zero base with a{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        sales strategy that delivers{" "}
                        </tspan>
                        <tspan x={0} y={435}>
                        predictable software/SaaS{" "}
                        </tspan>
                        <tspan x={0} y={545}>
                        sales revenues?
                        </tspan>
                    </text>
                    <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M7.5,0A7.5,7.5,0,1,1,0,7.5,7.5,7.5,0,0,1,7.5,0Z"
                        transform="translate(88 1468)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    </g>
                    <line
                    id="Line_1"
                    data-name="Line 1"
                    y2={1197}
                    transform="translate(1558.5 4615) rotate(90)"
                    fill="none"
                    stroke="#707070"
                    strokeWidth={1}
                    />
                    <g id="section-2" data-name="section" transform="translate(76 4614.636)">
                    <rect
                        id="Rectangle_10-2"
                        data-name="Rectangle 10"
                        width={1800}
                        height={1007}
                        transform="translate(-16 0.364)"
                        fill="none"
                    />
                    <text
                        id="Do_you_have_4-6_months_to_bridge_a_250K_MRR_gap_before_you_go_back_to_the_street_to_raise_more_funds_"
                        data-name="Do you have 4-6 months to bridge a $250K MRR gap before you go back to the street to raise more funds?"
                        transform="translate(119 185.364)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Do you have 4-6 months to{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        bridge a $250K MRR gap before{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        you go back to the street to{" "}
                        </tspan>
                        <tspan x={0} y={435}>
                        raise more funds?
                        </tspan>
                    </text>
                    <text
                        id="Are_you_attempting_to_reach_profitability_in_the_next_year_to_avoid_raising_a_Series_C_round_and_potentially_losing_control_of_the_Board_"
                        data-name="Are you attempting to reach profitability in the next year to avoid raising a Series C round and potentially losing control of the Board?"
                        transform="translate(119 685.364)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Are you attempting to reach{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        profitability in the next year to{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        avoid raising a Series C round{" "}
                        </tspan>
                        <tspan x={0} y={435}>
                        and potentially losing control of{" "}
                        </tspan>
                        <tspan x={0} y={545}>
                        the Board?
                        </tspan>
                    </text>
                    <circle
                        id="Ellipse_25"
                        data-name="Ellipse 25"
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        transform="translate(81 216.364)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    <circle
                        id="Ellipse_26"
                        data-name="Ellipse 26"
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        transform="translate(81 742.364)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    <text
                        id="_Studies_by_The_Institute_of_Sales_Management_The_Bridge_Group_Objective_Management_Group_Inc._"
                        data-name="*Studies by The Institute of Sales Management, The Bridge Group & Objective Management Group Inc.
                "
                        transform="translate(464 1888.364)"
                        fill="#fff"
                        fontSize={34}
                        fontFamily="Poppins-Bold, Poppins"
                        fontWeight={700}
                        opacity="0.32"
                    >
                        <tspan x="64.344" y={36}>
                        *Studies by The Institute of Sales Management, The Bridge Group &amp;{" "}
                        </tspan>
                        <tspan x="631.77" y={72}>
                        Objective Management Group Inc.
                        </tspan>
                    </text>
                    <text
                        id="Scale-Up"
                        transform="translate(89 157.364)"
                        fill="#fff"
                        fontSize={80}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                        opacity="0.49"
                    >
                        <tspan x={0} y={0}>
                        Scale-Up
                        </tspan>
                    </text>
                    <text
                        id="Have_you_just_lost_a_VP_of_Sales_or_CRO_or_is_your_current_sales_strategy_just_not_delivering_the_desired_results_"
                        data-name="Have you just lost a VP of Sales or CRO or is your current sales strategy just not delivering the desired results?"
                        transform="translate(119 1295.364)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={105}>
                        Have you just lost a VP of Sales{" "}
                        </tspan>
                        <tspan x={0} y={215}>
                        or CRO or is your current sales{" "}
                        </tspan>
                        <tspan x={0} y={325}>
                        strategy just not delivering the{" "}
                        </tspan>
                        <tspan x={0} y={435}>
                        desired results?
                        </tspan>
                    </text>
                    <circle
                        id="Ellipse_27"
                        data-name="Ellipse 27"
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        transform="translate(81 1343.364)"
                        fill="#fff"
                        opacity="0.22"
                    />
                    </g>
                </g>
                </svg>

        </div>

        <div className="InterimSaleVp container onlyWebSection" id="InterimSalesVp">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1659.047 1623.318">
                <defs>
                    <pattern id="QuotePattern" width={1} height={1} patternTransform="translate(384 384) rotate(-180)" viewBox="0 0 192 192">
                    <image preserveAspectRatio="none" width={192} height={192} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflBRQOISLOpxYkAAACJ0lEQVR42u3cvU0sMQCFUc8KqiAgQJBCAWQrkSJRARXRAAkFgCgAJCQq4CeDmIQOSNavBKMn74zfu+fEq52x+a5EtKUAAAAAAAAAAAD/j6luHh6WfontnOzra5ouL3t8Va03N6Xu7S19pG2Yaq116ZfYjs/PaTo66vFNtX58lHJ4uPSJtmG19AuwLAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQDgBhBNAOAGEE0A4AYQTQLidUg4OZntavbsr08nJPA97e+v33ut1mXZ353nvq6tSzs/nedbr6zzPKaXUzelpnc1mUzfHx7Mdrtsd7e/X+vMz3z1dXMx4uKen+Q52e7v0H/Pv7uj6er47en+vdTXPvwDW/5s7sv5OrL/N+odi/d1Yf5v1D8X6u7H+NusfivV3Y/1t1j8U6+/G+tusfyjW3431t1n/UKy/G+tvs/6hWH831t9m/UOx/m6sv836h2L93Vh/m/UPxfq7sf426x+K9Xdj/W3WPxTr78b626x/KNbfjfW3Wf9QrL8b62+z/qFYfzfW32b9Q/lX17/zq09N63Wpj4/zXOXLy7Sa8bdrujk7K/X5eZZHTd/fpdzfL31iAAAAAAAAAABgNH8AavnHM97lG6wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMjBUMTQ6MzM6MzQrMDA6MDCkoWpdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTIwVDE0OjMzOjM0KzAwOjAw1fzS4QAAAABJRU5ErkJggg==" />
                    </pattern>
                </defs>
                <g id="Group_62" data-name="Group 62" transform="translate(-135.953 -2392.83)">
                    <text id="Get_a_proven_interim_VP_Sales" data-name="Get a proven interim VP Sales" transform="translate(430.953 2392.83)" fill="#fff" fontSize={70} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={74}>Get a proven Interim VP sales</tspan></text>
                    <text id="Experience_what_happens_when_a_proven_software_SaaS_sales_framework_and_process_is_combined_with_innovative_go-to-market_strategies_and_driven_impactfully_by_an_inspirational_global_sales_leader_across_your_sales_organization._" data-name="Experience what happens when a proven software & SaaS sales framework and process is combined with innovative go-to-market strategies and driven impactfully by an inspirational global sales leader across your sales organization. " transform="translate(154.453 2943)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>Experience what happens when a proven software &amp; SaaS sales framework and process is combined with </tspan><tspan x={0} y={69}>innovative go-to-market strategies and driven impactfully by an inspirational global sales leader across your sales </tspan><tspan x={0} y={109}>organization. </tspan></text>
                    <text id="That_means_ensuring_you_can_measurably_predict_and_secure_consistent_revenue_performance_vs._budget._" data-name="That means ensuring you can measurably predict and secure consistent revenue performance vs. budget.
                " transform="translate(158 3372.5)" fill="#fff" fontSize={28} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={29}>That means ensuring you can measurably predict and secure consistent revenue performance vs. budget.</tspan></text>
                    <rect id="quote" width={192} height={192} transform="translate(135.953 2510.33)" opacity="0.21" fill="url(#QuotePattern)" />
                    <text id="_-_Albert_Einstein" data-name="- Albert Einstein" transform="translate(1365.953 2861.33)" fill="#fff" fontSize={40} fontFamily="Poppins-Italic, Poppins" fontStyle="italic" opacity="0.72"><tspan x={0} y={0}>- Albert Einstein</tspan></text>
                    <text id="We_can_t_solve_problems_by_using_the_same_kind_of_thinking_we_used_when_we_created_them._" data-name="We can't solve problems by using the same kind of thinking we used when we created them.  
                " transform="translate(205.453 2570.83)" fill="#9b9b9b" fontSize={70} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={74}>We Can't Solve Problems By Using The </tspan><tspan x={0} y={154}>Same Kind Of Thinking We Used When We </tspan><tspan x={0} y={234} xmlSpace="preserve">Created Them.</tspan></text>
                    <text id="There_are_many_situations_where_going_out_and_paying_an_executive_recruiter_to_find_a_great_VP_of_Sales_does_not_suit_your_company_right_at_this_time._" data-name="There are many situations where going out and paying an executive recruiter to find a great VP of Sales does not suit your company right at this time. 
                " transform="translate(154.453 3136.67)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>There are many situations where going out and paying an executive recruiter to find a great VP of Sales does not </tspan><tspan x={0} y={69}>suit your company right at this time. </tspan></text>
                    <text id="It_s_a_catalyst_for_rapid_revenue_growth_in_90_days." data-name="It's a catalyst for rapid revenue growth in 90 days." transform="translate(154.953 3110.33)" fill="#fff" fontSize={28} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>It's a catalyst for rapid revenue growth in 90 days.</tspan></text>
                    <text id="I_only_select_a_handful_of_companies_per_year_which_allows_me_to_apply_the_methodologies_build_them_into_scalable_processes_and_then_actually_work_side-by-side_with_your_leadership_team_and_existing_sales_team_to_manage_the_process_until_results_are_achie" data-name="I only select a handful of companies per year which allows me to apply the methodologies, build them into scalable processes and then actually work side-by-side with your leadership team and existing sales team to manage the process until results are achie" transform="translate(154.453 3236.17)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>I only select a handful of companies per year which allows me to apply the methodologies, build them into </tspan><tspan x={0} y={69}>scalable processes and then actually work side-by-side with your leadership team and existing sales team to </tspan><tspan x={0} y={109}>manage the process until results are achieved. </tspan></text>
                    <text id="As_your_Interim_VP_of_Sales_I_become_a_stakeholder_in_your_success_and_optimize_every_aspect_of_the_B2B_Enterprise_Software_SaaS_Sales_Funnel_from_Lead_Generation_Discovery_Demos_Proposals_Quotes_Contracts_Negotiation_CLOSED_WON_-_to_deliver_pr" data-name="As your Interim VP of Sales, I become a stakeholder in your success and optimize every aspect of the B2B Enterprise Software & SaaS Sales Funnel from Lead Generation & Discovery >> Demos>>Proposals/Quotes>>Contracts>>Negotiation>>CLOSED/WON - to deliver pr" transform="translate(155.453 3425.83)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>As your </tspan><tspan y={29} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>Interim VP of Sales, </tspan><tspan y={29}>I become a stakeholder in your success and optimize every aspect of the B2B Enterprise </tspan><tspan x={0} y={69}>Software &amp; SaaS Sales Funnel from Lead Generation &amp; Discovery &gt;&gt; Demos&gt;&gt;Proposals/</tspan><tspan x={0} y={109}>Quotes&gt;&gt;Contracts&gt;&gt;Negotiation&gt;&gt;CLOSED/WON - to deliver </tspan><tspan y={109} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>predictable net-new revenues.</tspan></text>
                    <text id="There_are_a_lot_of_VPs_of_Sales_today_that_manage_only_._I_am_not_one_of_them._As_an_early_stage_company_you_need_someone_that_can_coach_and_manage_other_sales_team_members_whilst_physically_driving_revenue_from_your_existing_sales_pipeline._" data-name="There are a lot of VPs of Sales today that ???manage only???. I am not one of them. As an early stage company, you need someone that can coach and manage other sales team members whilst physically driving revenue from your existing sales pipeline.
                " transform="translate(154.453 3562.159)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>There are a lot of VPs of Sales today that ???manage only???. I am not one of them. As an early stage company, you </tspan><tspan x={0} y={69}>need someone that can coach and manage other sales team members whilst physically driving revenue from your </tspan><tspan x={0} y={109}>existing sales pipeline.</tspan></text>
                    <text id="Your_team_will_learn_my_tested_close_strategies_by_watching_interacting_and_experiencing_1-2-1_software_sales_coaching._Competitive_advantage_can_come_from_who_are_and_what_you_sell._It_s_sustained_by_the_way_you_sell_it._" data-name="Your team will learn my tested close strategies by watching, interacting, and experiencing 1-2-1 software sales coaching. Competitive advantage can come from who are and what you sell. It's sustained by the way you sell it. " transform="translate(154.453 3698.489)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>Your team will learn my tested close strategies by watching, interacting, and experiencing 1-2-1 software sales </tspan><tspan x={0} y={69}>coaching. Competitive advantage can come from who are and what you sell. It's sustained by the way you sell it. </tspan></text>
                    <text id="Once_I_have_understood_your_value_proposition_laid_out_my_tested_software_SaaS_sales_strategy_and_put_proven_processes_in_place_I_will_be_in_the_trenches_doing_the_hard_work_to_close_the_deals._The_sales_playbook_I_will_develop_will_combine_innovative_" data-name="Once I have understood your value proposition, laid out my tested software & SaaS sales strategy and put proven processes in place, I will be in the trenches doing the hard work to close the deals. The sales playbook I will develop will combine innovative " transform="translate(154.453 3794.819)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>Once I have understood your value proposition, laid out my tested software &amp; SaaS sales strategy and put proven </tspan><tspan x={0} y={69}>processes in place, I will be in the trenches doing the hard work to close the deals. The sales playbook I will develop </tspan><tspan x={0} y={109}>will combine innovative strategies and the latest tools that will enable efficient and rapid customer acquisition on </tspan><tspan x={0} y={149}>scale.</tspan></text>
                    <text id="I_can_also_establish_your_commercial_footprint_across_EMEA._Check_out_these_videos_" data-name="I can also establish your commercial footprint across EMEA. Check out these videos
                " transform="translate(154.453 3974.148)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={29}>I can also establish your commercial footprint across EMEA. Check out these videos</tspan></text>
                </g>
            </svg>
        </div>

        <div className="InterimSaleVp container onlyMobSection" id="InterimSalesVp">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 1689 2929"
                >
                <g id="Group_84" data-name="Group 84" transform="translate(-121 -9848)">
                    <rect
                    id="Rectangle_50"
                    data-name="Rectangle 50"
                    width={1550}
                    height={409}
                    transform="translate(193 9848)"
                    fill="none"
                    />
                    <text
                    id="Get_a_proven_interim_VP_Sales_"
                    data-name="Get a proven interim VP Sales
                "
                    transform="translate(193 9848.5)"
                    fill="#fff"
                    fontSize={100}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    >
                    <tspan x="20.7" y={105}>
                        Get A Proven Interim VP Sales
                    </tspan>
                    </text>
                    <text
                    id="We_can_t_solve_problems_by_using_the_same_kind_of_thinking_we_used_when_we_created_them"
                    data-name="We can't solve problems by using the same kind of thinking we used when we created them"
                    transform="translate(121 10030)"
                    fill="#fff"
                    fontSize={110}
                    fontFamily="Poppins-Bold, Poppins"
                    fontWeight={700}
                    opacity="0.66"
                    >
                    <tspan x="69.275" y={116}>
                        We can't solve problems by{" "}
                    </tspan>
                    <tspan x="206.555" y={236}>
                        using the same kind of{" "}
                    </tspan>
                    <tspan x="102.88" y={356}>
                        thinking we used when we{" "}
                    </tspan>
                    <tspan x="459.72" y={476}>
                        created them
                    </tspan>
                    </text>
                    <text
                    id="_-_Albert_Einstein"
                    data-name="- Albert Einstein"
                    transform="translate(1482 10637)"
                    fill="#fff"
                    fontSize={60}
                    fontFamily="Poppins-SemiBoldItalic, Poppins"
                    fontWeight={600}
                    fontStyle="italic"
                    opacity="0.31"
                    >
                    <tspan x="-244.8" y={0}>
                        - Albert Einstein
                    </tspan>
                    </text>
                    <text
                    id="Experience_what_happens_when_a_proven_software_SaaS_sales_framework_and_process_is_combined_with_innovative_go-to-market_strategies_and_driven_impactfully_by_an_inspirational_global_sales_leader_across_your_sales_organization._It_s_a_catalyst_for_rapi"
                    data-name="Experience what happens when a proven software & SaaS sales framework and process is combined with innovative go-to-market strategies and driven impactfully by an inspirational global sales leader across your sales organization. 
                
                It's a catalyst for rapi"
                    transform="translate(174 10710)"
                    fill="#fff"
                    fontSize={40}
                    fontFamily="Poppins-Regular, Poppins"
                    >
                    <tspan x={0} y={42}>
                        Experience what happens when a proven software &amp; SaaS sales
                        framework{" "}
                    </tspan>
                    <tspan x={0} y={92}>
                        and process is combined with innovative go-to-market strategies and
                        driven{" "}
                    </tspan>
                    <tspan x={0} y={142}>
                        impactfully by an inspirational global sales leader across your sales{" "}
                    </tspan>
                    <tspan x={0} y={192}>
                        organization.{" "}
                    </tspan>
                    <tspan fontFamily="Poppins-Medium, Poppins" fontWeight={500}>
                        <tspan x={0} y={242}>
                        {" "}
                        </tspan>
                    </tspan>
                    <tspan fontFamily="Poppins-Bold, Poppins" fontWeight={700}>
                        <tspan x={0} y={292}>
                        It's a catalyst for rapid revenue growth in 90 days.
                        </tspan>
                    </tspan>
                    <tspan fontFamily="Poppins-Medium, Poppins" fontWeight={500}>
                        <tspan x={0} y={342}>
                        {" "}
                        </tspan>
                    </tspan>
                    <tspan x={0} y={392}>
                        There are many situations where going out and paying an executive
                        recruiter{" "}
                    </tspan>
                    <tspan x={0} y={442}>
                        to find a great VP of Sales does not suit your company right at this
                        time.{" "}
                    </tspan>
                    <tspan fontFamily="Poppins-Medium, Poppins" fontWeight={500}>
                        <tspan x={0} y={492}>
                        {" "}
                        </tspan>
                    </tspan>
                    <tspan x={0} y={542}>
                        I only select a handful of companies per year which allows me to apply
                        the{" "}
                    </tspan>
                    <tspan x={0} y={592}>
                        methodologies, build them into scalable processes and then actually work{" "}
                    </tspan>
                    <tspan x={0} y={642}>
                        side-by-side with your leadership team and existing sales team to manage
                        the{" "}
                    </tspan>
                    <tspan x={0} y={692}>
                        process until results are achieved.{" "}
                    </tspan>
                    <tspan x={0} y={742}>
                        {" "}
                    </tspan>
                    <tspan fontFamily="Poppins-Bold, Poppins" fontWeight={700}>
                        <tspan x={0} y={792}>
                        That means ensuring you can measurably predict and secure consistent{" "}
                        </tspan>
                        <tspan x={0} y={842}>
                        revenue performance vs. budget.
                        </tspan>
                    </tspan>
                    <tspan fontFamily="Poppins-Medium, Poppins" fontWeight={500}>
                        <tspan x={0} y={892}>
                        {" "}
                        </tspan>
                    </tspan>
                    <tspan x={0} y={942}>
                        As your{" "}
                    </tspan>
                    <tspan y={942} fontFamily="Poppins-Bold, Poppins" fontWeight={700}>
                        Interim VP of Sales
                    </tspan>
                    <tspan y={942}>, I become a stakeholder in your success and </tspan>
                    <tspan x={0} y={992}>
                        optimize every aspect of the B2B Enterprise Software &amp; SaaS Sales
                        Funnel from{" "}
                    </tspan>
                    <tspan x={0} y={1042}>
                        Lead Generation &amp; Discovery &gt;&gt; Demos&gt;&gt;Proposals/
                    </tspan>
                    <tspan x={0} y={1092}>
                        Quotes&gt;&gt;Contracts&gt;&gt;Negotiation&gt;&gt;CLOSED/WON - to
                        deliver{" "}
                    </tspan>
                    <tspan y={1092} fontFamily="Poppins-Bold, Poppins" fontWeight={700}>
                        predictable net-
                    </tspan>
                    <tspan x={0} y={1142} fontFamily="Poppins-Bold, Poppins" fontWeight={700}>
                        new revenues
                    </tspan>
                    <tspan y={1142}>. </tspan>
                    <tspan fontFamily="Poppins-Medium, Poppins" fontWeight={500}>
                        <tspan x={0} y={1192}>
                        {" "}
                        </tspan>
                    </tspan>
                    <tspan x={0} y={1242}>
                        There are a lot of VPs of Sales today that ???manage only???. I am not one
                        of them.{" "}
                    </tspan>
                    <tspan x={0} y={1292}>
                        As an early stage company, you need someone that can coach and manage{" "}
                    </tspan>
                    <tspan x={0} y={1342}>
                        other sales team members whilst physically driving revenue from your
                        existing{" "}
                    </tspan>
                    <tspan x={0} y={1392}>
                        sales pipeline.
                    </tspan>
                    <tspan x={0} y={1442} />
                    <tspan x={0} y={1492}>
                        Your team will learn my tested close strategies by watching,
                        interacting, and{" "}
                    </tspan>
                    <tspan x={0} y={1542}>
                        experiencing 1-2-1 software sales coaching.
                    </tspan>
                    <tspan x={0} y={1592}>
                        Competitive advantage can come from who are and what you sell. It's{" "}
                    </tspan>
                    <tspan x={0} y={1642}>
                        sustained by the way you sell it.{" "}
                    </tspan>
                    <tspan x={0} y={1692}>
                        {" "}
                    </tspan>
                    <tspan x={0} y={1742}>
                        Once I have understood your value proposition, laid out my tested
                        software &amp;{" "}
                    </tspan>
                    <tspan x={0} y={1792}>
                        SaaS sales strategy and put proven processes in place, I will be in the
                        trenches{" "}
                    </tspan>
                    <tspan x={0} y={1842}>
                        doing the hard work to close the deals. The sales playbook I will
                        develop will{" "}
                    </tspan>
                    <tspan x={0} y={1892}>
                        combine innovative strategies and the latest tools that will enable
                        efficient and{" "}
                    </tspan>
                    <tspan x={0} y={1942}>
                        rapid customer acquisition on scale.
                    </tspan>
                    <tspan x={0} y={1992}>
                        {" "}
                    </tspan>
                    <tspan x={0} y={2042}>
                        I can also establish your commercial footprint across EMEA.
                    </tspan>
                    </text>
                </g>
                </svg>

        </div>

        <div className="Audience2Custom onlyWebSection">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1719.047 1271.801">
                <defs>
                    <pattern id="audience2customimg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 512 512">
                    <image width={512} height={512} xlinkHref="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OENGRjNDRTY2MUIxMUVCQkFDMkEwMjZFMDc4RTNCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OENGRjNDRjY2MUIxMUVCQkFDMkEwMjZFMDc4RTNCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4Q0ZGM0NDNjYxQjExRUJCQUMyQTAyNkUwNzhFM0I5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg4Q0ZGM0NENjYxQjExRUJCQUMyQTAyNkUwNzhFM0I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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" />
                    </pattern>
                </defs>
                <g id="Group_62" data-name="Group 62" transform="translate(-61.953 -2226.33)">
                    <path id="why-sales-manages-banner" d="M5084.387,2227.412s93.378,116.333,34.082,200.123-151.046,100.493-229.28,169.583-12.394,105.2-117.739,157.021-272.657-3.14-399.691,50.247-328.429,15.7-328.429,15.7-3.1-590.242,0-592.676S5084.387,2227.412,5084.387,2227.412Z" transform="translate(-3980)" opacity="0.48" fill="url(#audience2customimg)" />
                    <text id="The_impact_of_sales_coaching_" data-name="The impact of sales coaching
                " transform="translate(141 2444)" fill="#fff" fontSize={40} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.89"><tspan x={0} y={0}>The impact of sales coaching</tspan><tspan x={0} y={60} /></text>
                    <text id="Why_don_t_B2B_software_SaaS_sales_leaders_focus_on_coaching_their_sales_teams_" data-name="Why don???t B2B software & SaaS sales leaders focus on coaching their sales teams?
                " transform="translate(141 2488)" fill="#fff" fontSize={65} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={68}>Why don???t B2B software &amp; SaaS sales leaders </tspan><tspan x={0} y={143}>focus on coaching their sales teams?</tspan></text>
                    <text id="Sales_coaching_ranks_as_the_1_activity_to_impact_sales_effectiveness_but_only_15_of_managers_say_they_have_the_right_amount_of_coaching_at_their_organization._Sales_coaching_can_dramatically_win_rates_by_as_much_as_25_._That_s_a_massive_impact_right_" data-name="Sales coaching ranks as the #1 activity to impact sales effectiveness but only 15% of managers  say they have the right amount of coaching at their organization. Sales coaching can dramatically win rates by as much as 25%. That???s a massive impact, right?" transform="translate(144.453 2916)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={25} xmlSpace="preserve">Sales coaching ranks as the #1 activity to impact sales effectiveness but only 15% of managers  say they have the right amount of </tspan><tspan x={0} y={59}>coaching at their organization. Sales coaching can dramatically win rates by as much as 25%. That???s a massive impact, right?</tspan></text>
                    <text id="The_real_payoff_from_effective_sales_coaching_lies_among_the_middle_60_your_core_performers._For_this_group_the_best-quality_coaching_can_improve_performance_up_to_19_._In_fact_even_moderate_improvement_in_coaching_quality_simply_from_below_to_above" data-name="The real payoff from effective sales coaching lies among the middle 60% ??? your core performers. For this group, the best-quality coaching can improve performance up to 19%. In fact, even moderate improvement in coaching quality ??? simply from below to above" transform="translate(141 3073.13)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={25}>The real payoff from effective sales coaching lies among the middle 60% ??? your core performers. For this group, the best-quality </tspan><tspan x={0} y={59}>coaching can improve performance up to 19%. In fact, even moderate improvement in coaching quality ??? simply from below to above </tspan><tspan x={0} y={93}>average ??? can mean a six to eight percent increase in performance across 50% of your sales force. </tspan></text>
                    <g id="Group_67" data-name="Group 67" transform="translate(-12.547 127)">
                    <text id="_94_of_sales_reps_who_achieve_exceptional_coaching_hit_their_quotas_" data-name="94% of sales reps who achieve exceptional coaching hit their quotas* 
                " transform="translate(192 2885)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={25}>94% of sales reps who achieve exceptional coaching hit their quotas* </tspan></text>
                    <circle id="Ellipse_16" data-name="Ellipse 16" cx="4.5" cy="4.5" r="4.5" transform="translate(157 2889.785)" fill="#fff" />
                    </g>
                    <text id="What_would_that_mean_for_you_as_a_Founder_or_CEO_of_a_software_SaaS_startup_or_scale-up_What_impact_would_that_make_on_your_revenue_goals_and_hitting_the_KPIs_and_targets_that_you_have_committed_to_the_Board_and_Investors_" data-name="What would that mean for you as a Founder or CEO of a software / SaaS startup or scale-up? What impact would that make on your revenue goals and hitting the KPIs and targets that you have committed to the Board and Investors?" transform="translate(143.453 3204.13)" fill="#fff" fontSize={30} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={32}>What would that mean for you as a Founder or CEO of a software / SaaS startup or scale-up? What impact </tspan><tspan x={0} y={72}>would that make on your revenue goals and hitting the KPIs and targets that you have committed to the </tspan><tspan x={0} y={112}>Board and Investors?</tspan></text>
                    <g id="Group_68" data-name="Group 68" transform="translate(-13.547 471.131)">
                    <text id="_67_of_B2B_companies_that_have_a_multi-year_sales_coaching_programme_experience_high_revenue_growth._60_of_high-growth_companies_use_sales_coaching_as_an_integrated_part_of_a_sales_training_program._" data-name="67% of B2B companies that have a multi-year sales coaching programme experience high revenue growth.
                60% of high-growth companies use sales coaching as an integrated part of a sales training program.
                " transform="translate(192 2885)" fill="#fff" fontSize={24} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={25}>67% of B2B companies that have a multi-year sales coaching programme experience high revenue growth.</tspan><tspan x={0} y={59}>60% of high-growth companies use sales coaching as an integrated part of a sales training program.</tspan></text>
                    <circle id="Ellipse_16-2" data-name="Ellipse 16" cx="4.5" cy="4.5" r="4.5" transform="translate(157 2897)" fill="#fff" />
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="4.5" cy="4.5" r="4.5" transform="translate(157 2932)" fill="#fff" />
                    </g>
                    <g id="Group_69" data-name="Group 69" transform="translate(-10.547 527.13)">
                    <text id="_The_B2B_sales_coaching_challenge_p.4_ValueSelling_Associates_and_Training_Industry_study_" data-name="*The B2B sales coaching challenge, p.4), ValueSelling Associates and Training Industry study  
                " transform="translate(640 2934)" fill="#fff" fontSize={24} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} opacity="0.56"><tspan x={0} y={25} xmlSpace="preserve">*The B2B sales coaching challenge, p.4), ValueSelling Associates and Training Industry study</tspan></text>
                    </g>
                </g>
            </svg>
        </div>

        <div className="Audience2Custom onlyMobSection">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                viewBox="0 0 1752.726 2016.801"
                >
                <defs>
                    <pattern
                     id="audience2customimgMob"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                    viewBox="0 0 512 512"
                    >
                    <image
                        width={512}
                        height={512}
                        xlinkHref="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OENGRjNDRTY2MUIxMUVCQkFDMkEwMjZFMDc4RTNCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OENGRjNDRjY2MUIxMUVCQkFDMkEwMjZFMDc4RTNCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4Q0ZGM0NDNjYxQjExRUJCQUMyQTAyNkUwNzhFM0I5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg4Q0ZGM0NENjYxQjExRUJCQUMyQTAyNkUwNzhFM0I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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"
                    />
                    </pattern>
                </defs>
                <g id="Group_77" data-name="Group 77" transform="translate(-61.953 -2226.33)">
                    <path
                    id="why-sales-manages-banner"
                    d="M5207.79,2227.612s104.432,137.873,38.116,237.178-168.927,119.1-256.422,200.982-13.86,124.684-131.676,186.095-304.935-3.722-447.007,59.55-367.308,18.609-367.308,18.609-3.465-699.529,0-702.414S5207.79,2227.612,5207.79,2227.612Z"
                    transform="translate(-3980)"
                    opacity="0.48"
                    fill="url(#audience2customimgMob)"
                    />
                    <text
                    id="The_impact_of_sales_coaching_"
                    data-name="The impact of sales coaching
                "
                    transform="translate(141 2444)"
                    fill="#fff"
                    fontSize={60}
                    fontFamily="Poppins-Medium, Poppins"
                    fontWeight={500}
                    opacity="0.89"
                    >
                    <tspan x={0} y={0}>
                        The impact of sales coaching
                    </tspan>
                    <tspan x={0} y={90} />
                    </text>
                    <text
                    id="Why_don_t_B2B_software_SaaS_sales_leaders_focus_on_coaching_their_sales_teams_"
                    data-name="Why don???t B2B software & SaaS sales leaders focus on coaching their sales teams?
                "
                    transform="translate(141 2488)"
                    fill="#fff"
                    fontSize={100}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    >
                    <tspan x={0} y={105}>
                        Why don???t B2B software &amp; SaaS{" "}
                    </tspan>
                    <tspan x={0} y={205}>
                        sales leaders focus on coaching{" "}
                    </tspan>
                    <tspan x={0} y={305}>
                        their sales teams?
                    </tspan>
                    </text>
                    <text
                    id="Sales_coaching_ranks_as_the_1_activity_to_impact_sales_effectiveness_but_only_15_of_managers_say_they_have_the_right_amount_of_coaching_at_their_organization._Sales_coaching_can_dramatically_win_rates_by_as_much_as_25_._That_s_a_massive_impact_right_"
                    data-name="Sales coaching ranks as the #1 activity to impact sales effectiveness but only 15% of managers  say they have the right amount of coaching at their organization. Sales coaching can dramatically win rates by as much as 25%. That???s a massive impact, right?"
                    transform="translate(145.679 3056)"
                    fill="#fff"
                    fontSize={45}
                    fontFamily="Poppins-Medium, Poppins"
                    fontWeight={500}
                    >
                    <tspan x={0} y={47}>
                        Sales coaching ranks as the #1 activity to impact sales effectiveness{" "}
                    </tspan>
                    <tspan x={0} y={107} xmlSpace="preserve">
                        but only 15% of managers say they have the right amount of coaching{" "}
                    </tspan>
                    <tspan x={0} y={167}>
                        at their organization. Sales coaching can dramatically win rates by as{" "}
                    </tspan>
                    <tspan x={0} y={227}>
                        much as 25%. That???s a massive impact, right?
                    </tspan>
                    </text>
                    <text
                    id="The_real_payoff_from_effective_sales_coaching_lies_among_the_middle_60_your_core_performers._For_this_group_the_best-quality_coaching_can_improve_performance_up_to_19_._In_fact_even_moderate_improvement_in_coaching_quality_simply_from_below_to_above"
                    data-name="The real payoff from effective sales coaching lies among the middle 60% ??? your core performers. For this group, the best-quality coaching can improve performance up to 19%. In fact, even moderate improvement in coaching quality ??? simply from below to above"
                    transform="translate(145.679 3411.13)"
                    fill="#fff"
                    fontSize={45}
                    fontFamily="Poppins-Medium, Poppins"
                    fontWeight={500}
                    >
                    <tspan x={0} y={47}>
                        The real payoff from effective sales coaching lies among the middle{" "}
                    </tspan>
                    <tspan x={0} y={107}>
                        60% ??? your core performers. For this group, the best-quality coaching{" "}
                    </tspan>
                    <tspan x={0} y={167}>
                        can improve performance up to 19%. In fact, even moderate{" "}
                    </tspan>
                    </text>
                    <g id="Group_67" data-name="Group 67" transform="translate(-11.321 453.8)">
                    <text
                        id="_94_of_sales_reps_who_achieve_exceptional_coaching_hit_their_quotas_"
                        data-name="94% of sales reps who achieve exceptional coaching hit their quotas* 
                "
                        transform="translate(192 2873.721)"
                        fill="#fff"
                        fontSize={45}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={47}>
                        94% of sales reps who achieve{" "}
                        </tspan>
                    </text>
                    <circle
                        id="Ellipse_16"
                        data-name="Ellipse 16"
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        transform="translate(157 2897.955)"
                        fill="#fff"
                    />
                    </g>
                    <text
                    id="What_would_that_mean_for_you_as_a_Founder_or_CEO_of_a_software_SaaS_startup_or_scale-up_What_impact_would_that_make_on_your_revenue_goals_and_hitting_the_KPIs_and_targets_that_you_have_committed_to_the_Board_and_Investors_"
                    data-name="What would that mean for you as a Founder or CEO of a software / SaaS startup or scale-up? What impact would that make on your revenue goals and hitting the KPIs and targets that you have committed to the Board and Investors?"
                    transform="translate(148.132 3629.13)"
                    fill="#fff"
                    fontSize={50}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    >
                    <tspan x={0} y={53}>
                        What would that mean for you as a Founder or CEO of a{" "}
                    </tspan>
                    <tspan x={0} y={113}>
                        software / SaaS startup or scale-up? What impact would that{" "}
                    </tspan>
                    <tspan x={0} y={173}>
                        make on your revenue goals and hitting the KPIs and targets{" "}
                    </tspan>
                    <tspan x={0} y={233}>
                        that you have committed to the Board and Investors?
                    </tspan>
                    </text>
                    <g
                    id="Group_68"
                    data-name="Group 68"
                    transform="translate(-12.321 1109.131)"
                    >
                    <text
                        id="_67_of_B2B_companies_that_have_a_multi-year_sales_coaching_programme_experience_high_revenue_growth._60_of_high-growth_companies_use_sales_coaching_as_an_integrated_part_of_a_sales_training_program._"
                        data-name="67% of B2B companies that have a multi-year sales coaching programme experience high revenue growth.
                60% of high-growth companies use sales coaching as an integrated part of a sales training program.
                "
                        transform="translate(206.273 2820)"
                        fill="#fff"
                        fontSize={45}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                    >
                        <tspan x={0} y={47}>
                        67% of B2B companies that have a multi-year sales coaching{" "}
                        </tspan>
                        <tspan x={0} y={107}>
                        programme experience high revenue growth.
                        </tspan>
                    </text>
                    <circle
                        id="Ellipse_16-2"
                        data-name="Ellipse 16"
                        cx="7.554"
                        cy="7.554"
                        r="7.554"
                        transform="translate(162 2838)"
                        fill="#fff"
                    />
                    <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M7.554,0A7.554,7.554,0,1,1,0,7.554,7.554,7.554,0,0,1,7.554,0Z"
                        transform="translate(161 2905.757)"
                        fill="#fff"
                    />
                    </g>
                    <g
                    id="Group_69"
                    data-name="Group 69"
                    transform="translate(-65.321 1155.13)"
                    >
                    <text
                        id="_The_B2B_sales_coaching_challenge_p.4_ValueSelling_Associates_and_Training_Industry_study_"
                        data-name="*The B2B sales coaching challenge, p.4), ValueSelling Associates and Training Industry study  
                "
                        transform="translate(550 2944)"
                        fill="#fff"
                        fontSize={40}
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight={600}
                        opacity="0.56"
                    >
                        <tspan x={0} y={42}>
                        *The B2B sales coaching challenge, p.4), ValueSelling Associates{" "}
                        </tspan>
                        <tspan x={0} y={102} xmlSpace="preserve">
                        and Training Industry study
                        </tspan>
                    </text>
                    </g>
                </g>
                </svg>

        </div>

        <div className="GrowingTrajectory container" id="GrowthTrajectory">
            <svg
                className="onlyWebSection"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 1628 190.33"
            >
                    <text
                        id="Achieving_a_40_YOY_growth_trajectory_"
                        data-name="Achieving a 40%+ YOY growth trajectory
                    "
                        transform="translate(143.274)"
                        fill="#fff"
                        fontSize={65}
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight={600}
                    >
                        <tspan x={0} y={68}>
                        Achieving A 40%+ YOY Growth Trajectory
                        </tspan>
                    </text>
                    <text
                        id="When_you_hire_me_as_your_Interim_VP_Sales_it_means_reduced_costs_less_risk_Speedy_go-to-market_and_maximum_ROI._"
                        data-name="When you hire me as your Interim VP Sales, it means reduced costs, less risk, Speedy go-to-market and maximum ROI.
                    "
                        transform="translate(263 112.33)"
                        fill="#fff"
                        fontSize={28}
                        fontFamily="Poppins-Medium, Poppins"
                        fontWeight={500}
                        opacity="0.58"
                    >
                        <tspan x="17.242" y={29}>
                        When you hire me as your Interim VP Sales, it means reduced costs, less
                        risk,{" "}
                        </tspan>
                        <tspan x="260.254" y={63}>
                        Speedy go-to-market and maximum ROI.
                        </tspan>
                    </text>
                    <rect
                        id="Rectangle_50"
                        data-name="Rectangle 50"
                        width={1628}
                        height={190}
                        transform="translate(0 0.33)"
                        fill="none"
                    />
            </svg>

            <svg
                className="onlyMobSection"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 1550 409"
                >
                <g id="Group_81" data-name="Group 81" transform="translate(-193 -9848)">
                    <rect
                    id="Rectangle_50"
                    data-name="Rectangle 50"
                    width={1550}
                    height={409}
                    transform="translate(193 9848)"
                    fill="none"
                    />
                    <text
                    id="Achieving_a_40_YOY_growth_trajectory_"
                    data-name="Achieving a 40%+ YOY growth trajectory
                "
                    transform="translate(193 9848.5)"
                    fill="#fff"
                    fontSize={100}
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight={600}
                    >
                    <tspan x={0} y={105}>
                        Achieving A 40%+ YOY Growth{" "}
                    </tspan>
                    <tspan x={0} y={215}>
                        Trajectory
                    </tspan>
                    </text>
                    <text
                    id="When_you_hire_me_as_your_Interim_VP_Sales_it_means_reduced_costs_less_risk_Speedy_go-to-market_and_maximum_ROI._"
                    data-name="When you hire me as your Interim VP Sales, it means reduced costs, less risk, Speedy go-to-market and maximum ROI.
                "
                    transform="translate(193 10136)"
                    fill="#fff"
                    fontSize={40}
                    fontFamily="Poppins-Medium, Poppins"
                    fontWeight={500}
                    opacity="0.58"
                    >
                    <tspan x={0} y={42}>
                        When you hire me as your Interim VP Sales, it means reduced costs, less
                        risk,{" "}
                    </tspan>
                    <tspan x={0} y={92}>
                        Speedy go-to-market and maximum ROI.
                    </tspan>
                    </text>
                </g>
                </svg>

            <div className="mt-5"></div>
            <div className="serviceCardRow">
                <div className="column" style={{flex: 1}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 796 320"
                        >
                        <defs>
                            <pattern
                            id="GrowthTrajectory-1"
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
                        <g id="card_2" data-name="card 2" transform="translate(-391 -9265)">
                            <rect
                            id="Rectangle_6"
                            data-name="Rectangle 6"
                            width={796}
                            height={320}
                            rx={15}
                            transform="translate(391 9265)"
                            fill="#131212"
                            />
                            <g id="image" transform="translate(409 9280)">
                            <rect
                                id="Rectangle_34"
                                data-name="Rectangle 34"
                                width={192}
                                height={290}
                                rx={15}
                                fill="#1c1c1c"
                            />
                            <rect
                                id="low-prices_1_"
                                data-name="low-prices (1)"
                                width={100}
                                height={100}
                                transform="translate(46 96)"
                                fill="url(#GrowthTrajectory-1)"
                            />
                            </g>
                            <text
                            id="Reduce_costs_by_60_"
                            data-name="Reduce costs by >60%

                        "
                            transform="translate(632 9285)"
                            fill="#fff"
                            fontSize={30}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={32}>
                                Reduce costs by &gt;60%
                            </tspan>
                            </text>
                            <text
                            id="A_bad_hire_could_cost_your_business_over_200k._Not_to_mention_the_opportunity_costs_related_to_poor_performing_sales_teams._No_upfront_recruiter_fees_or_on_boarding_leads_times._An_Interim_VP_of_Sales_will_jump-start_your_business_with_a_fresh_perspective"
                            data-name="A bad hire could cost your business over $200k. Not to mention the opportunity costs related to poor performing sales teams. No upfront recruiter fees or on boarding leads times. An Interim VP of Sales will jump-start your business with a fresh perspective"
                            transform="translate(632 9339)"
                            fill="#fff"
                            fontSize={22}
                            fontFamily="Poppins-Regular, Poppins"
                            >
                            <tspan x={0} y={23}>
                                A bad hire could cost your business over{" "}
                            </tspan>
                            <tspan x={0} y={55}>
                                $200k. Not to mention the opportunity costs{" "}
                            </tspan>
                            <tspan x={0} y={87}>
                                related to poor performing sales teams. No{" "}
                            </tspan>
                            <tspan x={0} y={119}>
                                upfront recruiter fees or on boarding leads{" "}
                            </tspan>
                            <tspan x={0} y={151}>
                                times. An Interim VP of Sales will jump-start{" "}
                            </tspan>
                            <tspan x={0} y={183}>
                                your business with a fresh perspective and{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                no personal agenda to promote.{" "}
                            </tspan>
                            </text>
                        </g>
                        </svg>

                </div>
                <div className="column" style={{flex: 1}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 796 320"
                        >
                        <defs>
                            <pattern
                            id="GrowthTrajectory-2"
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
                        <g id="card_2" data-name="card 2" transform="translate(-391 -9265)">
                            <rect
                            id="Rectangle_6"
                            data-name="Rectangle 6"
                            width={796}
                            height={320}
                            rx={15}
                            transform="translate(391 9265)"
                            fill="#131212"
                            />
                            <g id="image" transform="translate(-112 -11)">
                            <rect
                                id="Rectangle_34"
                                data-name="Rectangle 34"
                                width={192}
                                height={281}
                                rx={15}
                                transform="translate(521 9297)"
                                fill="#1c1c1c"
                            />
                            <rect
                                id="check-list"
                                width={100}
                                height={100}
                                transform="translate(567 9388)"
                                fill="url(#GrowthTrajectory-2)"
                            />
                            </g>
                            <text
                            id="Significantly_lower_risk_"
                            data-name="Significantly lower risk

                        "
                            transform="translate(632 9285)"
                            fill="#fff"
                            fontSize={30}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={32}>
                                Significantly lower risk
                            </tspan>
                            </text>
                            <text
                            id="A_trusted_advisor_for_the_CEO_Founder._5x_the_sales_pipeline_and_see_highly_accurate_real-time_sales_forecasts_and_management_reports._Aligning_the_organization_and_tracking_performance_with_OKRs._An_Interim_VP_of_Sales_is_a_low_risk_route_to_fast-track_re"
                            data-name="A trusted advisor for the CEO/Founder. 5x the sales pipeline and see highly accurate real-time sales forecasts and management reports. Aligning the organization and tracking performance with OKRs. An Interim VP of Sales is a low risk route to fast-track re"
                            transform="translate(632 9339)"
                            fill="#fff"
                            fontSize={22}
                            fontFamily="Poppins-Regular, Poppins"
                            >
                            <tspan x={0} y={23}>
                                A trusted advisor for the CEO/Founder. 5x the{" "}
                            </tspan>
                            <tspan x={0} y={55}>
                                sales pipeline and see highly accurate real-
                            </tspan>
                            <tspan x={0} y={87}>
                                time sales forecasts and management{" "}
                            </tspan>
                            <tspan x={0} y={119}>
                                reports. Aligning the organization and{" "}
                            </tspan>
                            <tspan x={0} y={151}>
                                tracking performance with OKRs. An Interim{" "}
                            </tspan>
                            <tspan x={0} y={183}>
                                VP of Sales is a low risk route to fast-track{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                revenue growth with no long-term tie-in.
                            </tspan>
                            </text>
                        </g>
                        </svg>
                </div>
            </div>

            <div className="serviceCardRow">
                <div className="column" style={{flex: 1}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 796 421"
                        >
                        <defs>
                            <pattern
                            id="GrowthTrajectory-3"
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
                        <g id="card_2" data-name="card 2" transform="translate(-391 -9265)">
                            <rect
                            id="Rectangle_6"
                            data-name="Rectangle 6"
                            width={796}
                            height={421}
                            rx={15}
                            transform="translate(391 9265)"
                            fill="#131212"
                            />
                            <g id="image" transform="translate(409 9282)">
                            <rect
                                id="Rectangle_34"
                                data-name="Rectangle 34"
                                width={192}
                                height={387}
                                rx={15}
                                fill="#1c1c1c"
                            />
                            <rect
                                id="ok"
                                width={100}
                                height={100}
                                transform="translate(46 144)"
                                fill="url(#GrowthTrajectory-3)"
                            />
                            </g>
                            <text
                            id="Building_proven_scalable_processes_"
                            data-name="Building proven, scalable processes

                        "
                            transform="translate(632 9292)"
                            fill="#fff"
                            fontSize={30}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={32}>
                                Building proven, scalable{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                                processes
                            </tspan>
                            </text>
                            <text
                            id="Innovative_go-to-market_strategies_supported_by_a_proven_world-class_sales_process_used_by_top_performing_startups_scale-ups_and_magic_quadrant_firms_globally_to_ensure_consistent_and_predictable_monthly_quarterly_sales_performance_vs._budget._Scale-up_r"
                            data-name="Innovative go-to-market strategies supported by a proven, world-class sales process used by top performing startups, scale-ups and magic quadrant firms globally to ensure consistent and predictable monthly/quarterly sales performance vs. budget. Scale-up r"
                            transform="translate(632 9386)"
                            fill="#fff"
                            fontSize={22}
                            fontFamily="Poppins-Regular, Poppins"
                            >
                            <tspan x={0} y={23}>
                                Innovative go-to-market strategies supported{" "}
                            </tspan>
                            <tspan x={0} y={53}>
                                by a proven, world-class sales process used{" "}
                            </tspan>
                            <tspan x={0} y={83}>
                                by top performing startups, scale-ups and{" "}
                            </tspan>
                            <tspan x={0} y={113}>
                                magic quadrant firms globally to ensure{" "}
                            </tspan>
                            <tspan x={0} y={143}>
                                consistent and predictable monthly/quarterly{" "}
                            </tspan>
                            <tspan x={0} y={173}>
                                sales performance vs. budget. Scale-up{" "}
                            </tspan>
                            <tspan x={0} y={203}>
                                rapidly and get on the path towards high-
                            </tspan>
                            <tspan x={0} y={233}>
                                growth. Any new sales hires will be inducted{" "}
                            </tspan>
                            <tspan x={0} y={263}>
                                smartly to hit the ground running.
                            </tspan>
                            </text>
                        </g>
                        </svg>
                </div>
                <div className="column" style={{flex: 1}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 796 421"
                        >
                        <defs>
                            <pattern
                            id="GrowthTrajectory-4"
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
                        <g id="card_2" data-name="card 2" transform="translate(-391 -9265)">
                            <rect
                            id="Rectangle_6"
                            data-name="Rectangle 6"
                            width={796}
                            height={421}
                            rx={15}
                            transform="translate(391 9265)"
                            fill="#131212"
                            />
                            <g id="image" transform="translate(-112 -9)">
                            <rect
                                id="Rectangle_34"
                                data-name="Rectangle 34"
                                width={192}
                                height={375}
                                rx={15}
                                transform="translate(521 9297)"
                                fill="#1c1c1c"
                            />
                            <rect
                                id="coaching"
                                width={100}
                                height={100}
                                transform="translate(567 9435)"
                                fill="url(#GrowthTrajectory-4)"
                            />
                            </g>
                            <text
                            id="Sales_coaching_and_closing_deals_"
                            data-name="Sales coaching and closing deals

                        "
                            transform="translate(632 9292)"
                            fill="#fff"
                            fontSize={30}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={32}>
                                Sales coaching and closing{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                                deals
                            </tspan>
                            </text>
                            <text
                            id="In_the_trenches_to_physically_close_revenue_gaps_and_win_deals_quickly._Creating_a_high-performance_sales_team_with_impactful_coaching_and_mentoring_with_tried_and_tested_software_SaaS_sales_training_and_the_latest_sales_strategies_and_tools_to_optimize_"
                            data-name="In the trenches to physically close revenue gaps and win deals quickly. Creating a high-performance sales team with impactful coaching and mentoring with tried and tested software & SaaS sales training and the latest sales strategies and tools to optimize "
                            transform="translate(632 9386)"
                            fill="#fff"
                            fontSize={22}
                            fontFamily="Poppins-Regular, Poppins"
                            >
                            <tspan x={0} y={23}>
                                In the trenches to physically close revenue{" "}
                            </tspan>
                            <tspan x={0} y={55}>
                                gaps and win deals quickly. Creating a high-
                            </tspan>
                            <tspan x={0} y={87}>
                                performance sales team with impactful{" "}
                            </tspan>
                            <tspan x={0} y={119}>
                                coaching and mentoring with tried and tested{" "}
                            </tspan>
                            <tspan x={0} y={151}>
                                software &amp; SaaS sales training and the latest{" "}
                            </tspan>
                            <tspan x={0} y={183}>
                                sales strategies and tools to optimize every{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                component of the software &amp; SaaS Sales{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                                Funnel so that your sales team can close big-
                            </tspan>
                            <tspan x={0} y={279}>
                                ticket, complex deals intelligently.
                            </tspan>
                            </text>
                        </g>
                        </svg>

                </div>
            </div>
        </div>

        <div className="stepSecAudience3 onlyWebSection" id="StepsSec">
            <div className="container" style={{paddingTop: "0 !important"}}>
                <svg id="StepsSvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1552 2693">
                    <defs>
                        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                        <stop offset={0} stopColor="#fff" />
                        <stop offset="0.08" stopColor="#e4e4e4" />
                        <stop offset="0.09" stopColor="#3a3a3a" />
                        <stop offset={1} stopColor="#3a3a3a" />
                        </linearGradient>
                    </defs>
                    <text id="Interim_VP_Sales_-_90-Day_Blueprint" data-name="Interim VP Sales - 90-Day Blueprint" transform="translate(233 108)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={63}>Interim VP Sales - 90-Day blueprint</tspan></text>
                    <text id="How_it_works" data-name="How it works" transform="translate(685 80)" fill="#fff" fontSize={20} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={21}>HOW IT WORKS</tspan></text>
                    <text id="As_your_Interim_VP_Sales_I_will_partner_with_you_to_spearhead_your_sales_transformation_to_deliver_accelerated_sales_growth_so_that_you_fulfil_your_revenue_amibions._The_90-Day_Sales_Acceleration_Blueprint_is_a_complete_framework_engagement_that_will_prov" data-name="As your Interim VP Sales I will partner with you to spearhead your sales transformation to deliver accelerated sales growth so that you fulfil your revenue amibions.

                    The 90-Day Sales Acceleration Blueprint is a complete framework engagement that will prov" fill="#fff" transform="translate(0 225)" fontSize={20} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={21}>As your Interim VP Sales I will partner with you to spearhead your sales transformation to deliver accelerated sales growth so that you fulfil your revenue </tspan><tspan x={0} y={51}>amibions.</tspan><tspan x={0} y={81} /><tspan x={0} y={111}>The 90-Day Sales Acceleration Blueprint is a complete framework engagement that will provide you with the most appropriate go-to-market strategies </tspan><tspan x={0} y={141}>tailored for your revenue goals so that you enjoy Board and Investor confidence moving forward. Your company???s sales organization will be set on the path </tspan><tspan x={0} y={171}>of predictable and sustained revenue growth.</tspan><tspan x={0} y={201} /><tspan x={0} y={231}>If we are starting from a zero base, that???s absolutely fine. I will deliver the commercial traction and momentum you need to get going fast and secure some </tspan><tspan x={0} y={261}>quick wins.</tspan><tspan x={0} y={291} /><tspan x={0} y={321}>If there is an existing sales pipeline to work with, I will align you and/or your sales team members to apply proven software/SaaS sales strategies to reduce </tspan><tspan x={0} y={351}>deal risk and convert more deals to CLOSED-WON. Your sales team members will apply what they learn and we???ll overcome any hurdles they come across </tspan><tspan x={0} y={381}>together until they are experts at executing their new sales playbook.</tspan></text>

                    <g id="Group_8" data-name="Group 8" transform="translate(-960 -10417)">
                        <rect id="Rectangle_25" data-name="Rectangle 25" width={6} height={1559} transform="translate(1032 11314)" fill="url(#linear-gradient)" />
                        <g id="Group_4" data-name="circlePrg">
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx={75} cy={75} r={75} transform="translate(960 11179)" fill="#fff" />
                            <text id="_1" data-name={1} transform="translate(1028 11270)" fontSize={45} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>1</tspan></text>
                        </g>
                        <g id="Group_7" data-name="circlePrg" transform="translate(0 -150)">
                        <circle id="Ellipse_5" data-name="Ellipse 5" cx={75} cy={75} r={75} transform="translate(960 12544)" fill="#3a3a3a" />
                        <text id="_4" data-name={4} transform="translate(1021 12635)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>4</tspan></text>
                        </g>
                        <g id="Group_5" data-name="circlePrg" transform="translate(0 -72)">
                        <circle id="Ellipse_3" data-name="Ellipse 3" cx={75} cy={75} r={75} transform="translate(960 11634)" fill="#3a3a3a" />
                        <text id="_2" data-name={2} transform="translate(1022 11725)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>2</tspan></text>
                        </g>
                        <g id="Group_6" data-name="circlePrg" transform="translate(0 -90)">
                        <circle id="Ellipse_4" data-name="Ellipse 4" cx={75} cy={75} r={75} transform="translate(960 12089)" fill="#3a3a3a" />
                        <text id="_3" data-name={3} transform="translate(1022 12180)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>3</tspan></text>
                        </g>
                        <g id="Group_71" data-name="circlePrg" transform="translate(3 254)">
                        <circle id="Ellipse_5-2" data-name="Ellipse 5" cx={75} cy={75} r={75} transform="translate(960 12544)" fill="#3a3a3a" />
                        <text id="_5" data-name={5} transform="translate(1021 12635)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>5</tspan></text>
                        </g>
                    </g>
                    <g id="cloud" transform="translate(-817 -10505)">
                        <rect id="Rectangle_26" data-name="Rectangle 26" width={1306} height={308} rx={20} transform="translate(1063 11183)" fill="#fff" />
                        <path id="Polygon_1" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11368) rotate(-90)" fill="#fff" />
                        <text id="Setting_Revenue_Goals_and_KPIs" data-name="Setting Revenue Goals and KPIs" transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>Setting revenue goals and KPIs</tspan></text>
                        <text id="We_will_establish_the_revenue_gaps_between_where_you_are_today_and_where_you_need_to_be._We_will_set_short_medium_and_long-term_goals_that_are_realistic_and_I_will_support_you_in_getting_these_approved_by_the_Board_and_Investors._I_will_also_conduct_an_au" data-name="We will establish the revenue gaps between where you are today and where you need to be. We will set short, medium and long-term goals that are realistic and I will support you in getting these approved by the Board and Investors. I will also conduct an au" transform="translate(1129 11313)" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>We will establish the revenue gaps between where you are today and where you need to be. We will set short, medium and </tspan><tspan x={0} y={41}>long-term goals that are realistic and I will support you in getting these approved by the Board and Investors. I will also </tspan><tspan x={0} y={63}>conduct an audit of how you currently go-to-market and what your current sales process looks like (if applicable). I will coach </tspan><tspan x={0} y={85}>you and the senior leadership team to use OKRs as a performance management framework to ensure a sales-centric culture </tspan><tspan x={0} y={107}>exists to support the ongoing sales efforts. </tspan></text>
                    </g>
                    <text id="Process" transform="translate(647 202)" fill="#fff" fontSize={192} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.02"><tspan x={0} y={0}>Process</tspan></text>
                    <g id="cloud-2" data-name="cloud" transform="translate(-817 -10124)">
                        <rect id="Rectangle_26-2" data-name="Rectangle 26" width={1306} height={378} rx={20} transform="translate(1063 11183)" fill="#fff" />
                        <path id="Polygon_1-2" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11368) rotate(-90)" fill="#fff" />
                        <text id="Devising_a_Go-to-Market_Strategy" data-name="Devising a Go-to-Market Strategy" transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>Devising a Go-to-Market strategy</tspan></text>
                        <text id="We_will_collaborate_on_an_in-depth_analysis_of_your_value_proposition_and_monetization_strategy_based_on_your_addressable_market_s_._As_I_assess_your_potential_customers_and_partners_my_goal_is_to_identify_and_dissect_the_psychology_of_your_ideal_target_c" data-name="We will collaborate on an in-depth analysis of your value proposition and monetization strategy based on your addressable market(s). As I assess your potential customers and partners, my goal is to identify and dissect the psychology of your ideal target c" transform="translate(1129 11313)" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>We will collaborate on an in-depth analysis of your value proposition and monetization strategy based on your addressable </tspan><tspan x={0} y={41}>market(s). As I assess your potential customers and partners, my goal is to identify and dissect the psychology of your ideal </tspan><tspan x={0} y={63}>target customer(s). This will enable us to position your software / SaaS solutions in the most effective manner to secure a </tspan><tspan x={0} y={85}>competitive edge. This will feed into a powerful communications strategy that will ensure high levels of customer engagement </tspan><tspan x={0} y={107}>throughout the software/SaaS sales cycle.In addition to defining your Customer Avatar(s), I will develop a Customer Belief </tspan><tspan x={0} y={129}>System and Offer Strategy. The goal here is to develop commercial offers that are irresistible and positioned in a compelling </tspan><tspan x={0} y={151}>way as part of the overall sales process. The offers will be designed to create a sense of urgency with prospects and ensure </tspan><tspan x={0} y={173}>high conversion rates, in line with sales targets.</tspan></text>
                    </g>
                    <g id="cloud-3" data-name="cloud" transform="translate(-817 -9673)">
                        <rect id="Rectangle_26-3" data-name="Rectangle 26" width={1306} height={321} rx={20} transform="translate(1063 11183)" fill="#fff" />
                        <path id="Polygon_1-3" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11368) rotate(-90)" fill="#fff" />
                        <text id="The_Bell_Rings_Sales_Opportunity_Framework_Pipeline_Management" data-name="The Bell Rings Sales Opportunity Framework & Pipeline Management" transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>The bell rings sales opportunity framework &amp; pipeline management</tspan></text>
                        <text id="Your_sales_team_members_will_know_what_to_do_next_in_each_deal_and_how_to_do_it._It_s_like_a_GPS_system_for_B2B_software_SaaS_sellers._They_will_never_feel_lost_in_a_deal_ever_again_and_as_a_sales_leader_you_will_be_able_to_tangibly_measure_their_progres" data-name="Your sales team members will know what to do next in each deal and how to do it. It???s like a GPS system for B2B software & SaaS sellers. They will never feel lost in a deal ever again and as a sales leader you will be able to tangibly measure their progres" fontSize={18} transform="translate(1129 11313)" fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>Your sales team members will know what to do next in each deal and how to do it. It???s like a GPS system for B2B software &amp; SaaS </tspan><tspan x={0} y={41}>sellers. They will never feel lost in a deal ever again and as a sales leader you will be able to tangibly measure their progress in </tspan><tspan x={0} y={63}>a sales opportunity. You will focus on the right deals and be able to close them efficiently and with predictable accuracy. You </tspan><tspan x={0} y={85}>will soon have a highly qualified, 4x sales pipeline and tangible metrics will be used to produce accurate sales forecasts that </tspan><tspan x={0} y={107}>will restore the confidence of the Board and senior leadership team.</tspan></text>
                    </g>
                    <g id="cloud-4" data-name="cloud" transform="translate(-817 -9279)">
                        <rect id="Rectangle_26-4" data-name="Rectangle 26" width={1306} height={336} rx={20} transform="translate(1063 11183)" fill="#fff" />
                        <path id="Polygon_1-4" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11368) rotate(-90)" fill="#fff" />
                        <text id="Software_SaaS_Sales_Funnel_Optimisation" data-name="Software / SaaS Sales Funnel Optimisation" transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>Software / SaaS sales funnel optimisation</tspan></text>
                        <text id="Each_member_of_your_sales_team_will_excel_in_each_stage_of_the_sales_funnel_-_from_prospecting_discovery_demos_proposals_through_to_CLOSED-WON._They_will_experience_the_latest_sales_tools_and_resources_to_automate_aspects_of_the_Bell_Rings_Sales_Accele" data-name="Each member of your sales team will excel in each stage of the sales funnel - from prospecting, discovery, demos, proposals, through to CLOSED-WON. They will experience the latest sales tools and resources to automate aspects of the Bell Rings Sales Accele" fontSize={18} transform="translate(1129 11313)" fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>Each member of your sales team will excel in each stage of the sales funnel - from prospecting, discovery, demos, proposals, </tspan><tspan x={0} y={41}>through to CLOSED-WON. They will experience the latest sales tools and resources to automate aspects of the Bell Rings Sales </tspan><tspan x={0} y={63}>Acceleration Blueprint. Templates, guides and strategies that separate the #1 software sales professionals from the rest. They </tspan><tspan x={0} y={85}>will embrace social selling like a champion and win in the most competitive sales situations. Prospecting and maintaining a 4x </tspan><tspan x={0} y={107}>pipeline will be discussed in detail and each sales team member will learn how they can continue their prospecting efforts </tspan><tspan x={0} y={129}>24x7. No more relying solely on the marketing team or SDRs to deliver leads.</tspan></text>
                    </g>
                    <g id="cloud-5" data-name="cloud" transform="translate(-817 -8870)">
                        <rect id="Rectangle_26-5" data-name="Rectangle 26" width={1306} height={380} rx={20} transform="translate(1063 11183)" fill="#fff" />
                        <path id="Polygon_1-5" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11368) rotate(-90)" fill="#fff" />
                        <text id="Sales_Management" data-name="Sales Management" transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>Sales management</tspan></text>
                        <text id="I_will_review_and_audit_your_CRM_setup_and_will_set_up_tools_reports_and_dashboards_for_accurate_management_reporting_on_at_least_12_KPIs._I_will_also_recommend_the_use_of_specific_sales_reporting_and_pipeline_management_tools_if_applicable._I_will_also_e" data-name="I will review and audit your CRM setup and will set up tools, reports and dashboards for accurate management reporting on at least 12 KPIs. I will also recommend the use of specific sales reporting and pipeline management tools if applicable. I will also e" fontSize={18} transform="translate(1129 11313)" fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>I will review and audit your CRM setup and will set up tools, reports and dashboards for accurate management reporting on at </tspan><tspan x={0} y={41}>least 12 KPIs. I will also recommend the use of specific sales reporting and pipeline management tools if applicable. I will also </tspan><tspan x={0} y={63}>establish the baseline for all future Sales Team Meetings so that they provide a healthy platform for learning and development </tspan><tspan x={0} y={85}>as well as discussing matters related to specific sales opportunities and sales intelligence for management purposes. Having a </tspan><tspan x={0} y={107}>forum forIdeation and continuous improvement will ensure the right sales team culture is maintained. I will also examine your </tspan><tspan x={0} y={129}>company???s Sales Compensation Plan and ensure it is designed to incentivise peak sales performance. If a formal plan doesn???t </tspan><tspan x={0} y={151}>exist, I shall collaborate with you to create a world-class plan in line with the business goals and to ensure your sales team are </tspan><tspan x={0} y={173}>motivated to exceed their individual sales targets. </tspan></text>
                    </g>
                </svg>
              </div>
        </div>

        <div className="stepSec onlyMobSection">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="100%"
                    id="StepsSvg"
                    viewBox="0 0 1804 6512"
                    >
                    <defs>
                        <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2={1}
                        gradientUnits="objectBoundingBox"
                        >
                        <stop offset={0} stopColor="#fff" />
                        <stop offset="0.08" stopColor="#e4e4e4" />
                        <stop offset="0.09" stopColor="#3a3a3a" />
                        <stop offset={1} stopColor="#3a3a3a" />
                        </linearGradient>
                    </defs>
                    <g id="steps" transform="translate(-58 -10924)">
                        <path
                        id="Path_11"
                        data-name="Path 11"
                        d="M0,0H1800l2,6512H-2Z"
                        transform="translate(60 10924)"
                        fill="#1c1c1c"
                        />
                        <text
                        id="Interim_VP_Sales_-_90-Day_Blueprint"
                        data-name="Interim VP Sales - 90-Day Blueprint"
                        transform="translate(185 11147)"
                        fill="#fff"
                        fontSize={100}
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight={600}
                        >
                        <tspan x="120.5" y={105}>
                            Interim VP Sales - 90-Day{" "}
                        </tspan>
                        <tspan x="545.6" y={215}>
                            Blueprint
                        </tspan>
                        </text>
                        <text
                        id="How_it_works"
                        data-name="How it works"
                        transform="translate(695 11052)"
                        fill="#fff"
                        fontSize={60}
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight={600}
                        letterSpacing="0.1em"
                        opacity="0.54"
                        >
                        <tspan x={0} y={63}>
                            HOW IT WORKS
                        </tspan>
                        </text>
                        <text
                        id="As_your_Interim_VP_Sales_I_will_partner_with_you_to_spearhead_your_sales_transformation_to_deliver_accelerated_sales_growth_so_that_you_fulfil_your_revenue_amibions._The_90-Day_Sales_Acceleration_Blueprint_is_a_complete_framework_engagement_that_will_prov"
                        data-name="As your Interim VP Sales I will partner with you to spearhead your sales transformation to deliver accelerated sales growth so that you fulfil your revenue amibions.

                    The 90-Day Sales Acceleration Blueprint is a complete framework engagement that will prov"
                        transform="translate(185 11446)"
                        fill="#fff"
                        fontSize={40}
                        fontFamily="Poppins-Regular, Poppins"
                        >
                        <tspan x={0} y={42}>
                            As your Interim VP Sales I will partner with you to spearhead your sales{" "}
                        </tspan>
                        <tspan x={0} y={102}>
                            transformation to deliver accelerated sales growth so that you fulfil
                            your{" "}
                        </tspan>
                        <tspan x={0} y={162}>
                            revenue amibions.
                        </tspan>
                        <tspan x={0} y={222} />
                        <tspan x={0} y={282}>
                            The 90-Day Sales Acceleration Blueprint is a complete framework{" "}
                        </tspan>
                        <tspan x={0} y={342}>
                            engagement that will provide you with the most appropriate go-to-market{" "}
                        </tspan>
                        <tspan x={0} y={402}>
                            strategies tailored for your revenue goals so that you enjoy Board and{" "}
                        </tspan>
                        <tspan x={0} y={462}>
                            Investor confidence moving forward. Your company???s sales organization
                            will{" "}
                        </tspan>
                        <tspan x={0} y={522}>
                            be set on the path of predictable and sustained revenue growth.
                        </tspan>
                        <tspan x={0} y={582} />
                        <tspan x={0} y={642}>
                            If we are starting from a zero base, that???s absolutely fine. I will
                            deliver the{" "}
                        </tspan>
                        <tspan x={0} y={702}>
                            commercial traction and momentum you need to get going fast and secure{" "}
                        </tspan>
                        <tspan x={0} y={762}>
                            some quick wins.
                        </tspan>
                        <tspan x={0} y={822} />
                        <tspan x={0} y={882}>
                            If there is an existing sales pipeline to work with, I will align you
                            and/or your{" "}
                        </tspan>
                        <tspan x={0} y={942}>
                            sales team members to apply proven software/SaaS sales strategies to{" "}
                        </tspan>
                        <tspan x={0} y={1002}>
                            reduce deal risk and convert more deals to CLOSED-WON. Your sales team{" "}
                        </tspan>
                        <tspan x={0} y={1062}>
                            members will apply what they learn and we???ll overcome any hurdles they{" "}
                        </tspan>
                        <tspan x={0} y={1122}>
                            come across together until they are experts at executing their new sales{" "}
                        </tspan>
                        <tspan x={0} y={1182}>
                            playbook.
                        </tspan>
                        </text>
                        <g id="Group_8" data-name="Group 8" transform="translate(-775 1607)">
                        <rect
                            id="Rectangle_25"
                            data-name="circlePrg"
                            width={7}
                            height={3667}
                            transform="translate(1057 11242)"
                            fill="url(#linear-gradient)"
                        />
                        <g id="Group_4" data-name="circlePrg" transform="translate(960 11171)">
                            <circle
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            fill="#fff"
                            />
                            <text
                            id="_1"
                            data-name={1}
                            transform="translate(86 113)"
                            fontSize={55}
                            fontFamily="Poppins-Regular, Poppins"
                            >
                            <tspan x={0} y={0}>
                                1
                            </tspan>
                            </text>
                        </g>
                        <g id="Group_7" data-name="circlePrg" transform="translate(963 13395.77)">
                            <circle
                            id="Ellipse_5"
                            data-name="Ellipse 5"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            transform="translate(0 0.23)"
                            fill="#3a3a3a"
                            />
                            <text
                            id="_4"
                            data-name={4}
                            transform="translate(77 113.23)"
                            fill="#fff"
                            fontSize={55}
                            fontFamily="Poppins-Regular, Poppins"
                            opacity="0.6"
                            >
                            <tspan x={0} y={0}>
                                4
                            </tspan>
                            </text>
                        </g>
                        <g id="Group_5" data-name="circlePrg" transform="translate(959 11799.583)">
                            <circle
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            transform="translate(0 0.417)"
                            fill="#3a3a3a"
                            />
                            <text
                            id="_2"
                            data-name={2}
                            transform="translate(78 115.417)"
                            fill="#fff"
                            fontSize={56}
                            fontFamily="Poppins-Regular, Poppins"
                            opacity="0.6"
                            >
                            <tspan x={0} y={0}>
                                2
                            </tspan>
                            </text>
                        </g>
                        <g id="Group_6" data-name="circlePrg" transform="translate(963 12648.737)">
                            <circle
                            id="Ellipse_4"
                            data-name="Ellipse 4"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            transform="translate(0 0.263)"
                            fill="#3a3a3a"
                            />
                            <text
                            id="_3"
                            data-name={3}
                            transform="translate(78 115.263)"
                            fill="#fff"
                            fontSize={56}
                            fontFamily="Poppins-Regular, Poppins"
                            opacity="0.6"
                            >
                            <tspan x={0} y={0}>
                                3
                            </tspan>
                            </text>
                        </g>
                        <g id="Group_71" data-name="circlePrg" transform="translate(963 14104)">
                            <circle
                            id="Ellipse_5-2"
                            data-name="Ellipse 5"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            fill="#3a3a3a"
                            />
                            <text
                            id="_5"
                            data-name={5}
                            transform="translate(77 121)"
                            fill="#fff"
                            fontSize={55}
                            fontFamily="Poppins-Regular, Poppins"
                            opacity="0.6"
                            >
                            <tspan x={0} y={0}>
                                5
                            </tspan>
                            </text>
                        </g>
                        <g id="Group_76" data-name="circlePrg" transform="translate(963 14815)">
                            <circle
                            id="Ellipse_5-3"
                            data-name="Ellipse 5"
                            cx="94.5"
                            cy="94.5"
                            r="94.5"
                            fill="#3a3a3a"
                            />
                            <text
                            id="_6"
                            data-name={6}
                            transform="translate(77 121)"
                            fill="#fff"
                            fontSize={55}
                            fontFamily="Poppins-Regular, Poppins"
                            opacity="0.6"
                            >
                            <tspan x={0} y={0}>
                                6
                            </tspan>
                            </text>
                        </g>
                        </g>
                        <g id="cloud" transform="translate(-632 1490)">
                        <rect
                            id="Rectangle_26"
                            data-name="Rectangle 26"
                            width={1306}
                            height={620}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1"
                            data-name="Polygon 1"
                            d="M34,3.767a3,3,0,0,1,5,0L69.908,50.341A3,3,0,0,1,67.409,55H5.591a3,3,0,0,1-2.5-4.659Z"
                            transform="translate(1034 11399) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="Setting_Revenue_Goals_and_KPIs"
                            data-name="Setting Revenue Goals and KPIs"
                            transform="translate(1127 11266)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            Setting Revenue Goals and KPIs
                            </tspan>
                        </text>
                        <text
                            id="We_will_establish_the_revenue_gaps_between_where_you_are_today_and_where_you_need_to_be._We_will_set_short_medium_and_long-term_goals_that_are_realistic_and_I_will_support_you_in_getting_these_approved_by_the_Board_and_Investors._I_will_also_conduct_an_au"
                            data-name="We will establish the revenue gaps between where you are today and where you need to be. We will set short, medium and long-term goals that are realistic and I will support you in getting these approved by the Board and Investors. I will also conduct an au"
                            transform="translate(1127 11363)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            We will establish the revenue gaps between where you are today{" "}
                            </tspan>
                            <tspan x={0} y={75}>
                            and where you need to be. We will set short, medium and long-
                            </tspan>
                            <tspan x={0} y={113}>
                            term goals that are realistic and I will support you in getting these{" "}
                            </tspan>
                            <tspan x={0} y={151}>
                            approved by the Board and Investors. I will also conduct an audit{" "}
                            </tspan>
                            <tspan x={0} y={189}>
                            of how you currently go-to-market and what your current sales{" "}
                            </tspan>
                            <tspan x={0} y={227}>
                            process looks like (if applicable). I will coach you and the senior{" "}
                            </tspan>
                            <tspan x={0} y={265}>
                            leadership team to use OKRs as a performance management{" "}
                            </tspan>
                            <tspan x={0} y={303}>
                            framework to ensure a sales-centric culture exists to support the{" "}
                            </tspan>
                            <tspan x={0} y={341}>
                            ongoing sales efforts.{" "}
                            </tspan>
                        </text>
                        </g>
                        <g id="cloud-2" data-name="cloud" transform="translate(-632 2164)">
                        <rect
                            id="Rectangle_26-2"
                            data-name="Rectangle 26"
                            width={1306}
                            height={805}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1-2"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11372) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="Devising_a_Go-to-Market_Strategy"
                            data-name="Devising a Go-to-Market Strategy"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            Devising a Go-to-Market Strategy
                            </tspan>
                        </text>
                        <text
                            id="We_will_collaborate_on_an_in-depth_analysis_of_your_value_proposition_and_monetization_strategy_based_on_your_addressable_market_s_._As_I_assess_your_potential_customers_and_partners_my_goal_is_to_identify_and_dissect_the_psychology_of_your_ideal_target_c"
                            data-name="We will collaborate on an in-depth analysis of your value proposition and monetization strategy based on your addressable market(s). As I assess your potential customers and partners, my goal is to identify and dissect the psychology of your ideal target c"
                            transform="translate(1129 11344)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            We will collaborate on an in-depth analysis of your value{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                            proposition and monetization strategy based on your{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                            addressable market(s). As I assess your potential customers and{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                            partners, my goal is to identify and dissect the psychology of{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                            your ideal target customer(s). This will enable us to position your{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                            software / SaaS solutions in the most effective manner to secure{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                            a competitive edge. This will feed into a powerful{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            communications strategy that will ensure high levels of customer{" "}
                            </tspan>
                            <tspan x={0} y={317}>
                            engagement throughout the software/SaaS sales cycle.In{" "}
                            </tspan>
                            <tspan x={0} y={352}>
                            addition to defining your Customer Avatar(s), I will develop a{" "}
                            </tspan>
                            <tspan x={0} y={387}>
                            Customer Belief System and Offer Strategy. The goal here is to{" "}
                            </tspan>
                            <tspan x={0} y={422}>
                            develop commercial offers that are irresistible and positioned in{" "}
                            </tspan>
                            <tspan x={0} y={457}>
                            a compelling way as part of the overall sales process. The offers{" "}
                            </tspan>
                            <tspan x={0} y={492}>
                            will be designed to create a sense of urgency with prospects and{" "}
                            </tspan>
                            <tspan x={0} y={527}>
                            ensure high conversion rates, in line with sales targets.
                            </tspan>
                        </text>
                        </g>
                        <g id="cloud-3" data-name="cloud" transform="translate(-632 3765)">
                        <rect
                            id="Rectangle_26-3"
                            data-name="Rectangle 26"
                            width={1306}
                            height={654}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1-3"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11368) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="The_Bell_Rings_Sales_Opportunity_Framework_Pipeline_Management"
                            data-name="The Bell Rings Sales Opportunity Framework & Pipeline Management"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            The Bell Rings Sales Opportunity{" "}
                            </tspan>
                            <tspan x={0} y={123}>
                            Framework &amp; Pipeline Management
                            </tspan>
                        </text>
                        <text
                            id="Your_sales_team_members_will_know_what_to_do_next_in_each_deal_and_how_to_do_it._It_s_like_a_GPS_system_for_B2B_software_SaaS_sellers._They_will_never_feel_lost_in_a_deal_ever_again_and_as_a_sales_leader_you_will_be_able_to_tangibly_measure_their_progres"
                            data-name="Your sales team members will know what to do next in each deal and how to do it. It???s like a GPS system for B2B software & SaaS sellers. They will never feel lost in a deal ever again and as a sales leader you will be able to tangibly measure their progres"
                            transform="translate(1129 11411)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            Your sales team members will know what to do next in each deal{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                            and how to do it. It???s like a GPS system for B2B software &amp; SaaS{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                            sellers. They will never feel lost in a deal ever again and as a{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                            sales leader you will be able to tangibly measure their progress{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                            in a sales opportunity. You will focus on the right deals and be{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                            able to close them efficiently and with predictable accuracy. You{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                            will soon have a highly qualified, 4x sales pipeline and tangible{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            metrics will be used to produce accurate sales forecasts that will{" "}
                            </tspan>
                            <tspan x={0} y={317}>
                            restore the confidence of the Board and senior leadership team.
                            </tspan>
                        </text>
                        </g>
                        <g id="cloud-4" data-name="cloud" transform="translate(-632 4474)">
                        <rect
                            id="Rectangle_26-4"
                            data-name="Rectangle 26"
                            width={1306}
                            height={650}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1-4"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11368) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="Software_SaaS_Sales_Funnel_Optimisation"
                            data-name="Software / SaaS Sales Funnel Optimisation"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            Software / SaaS Sales Funnel{" "}
                            </tspan>
                        </text>
                        <text
                            id="Each_member_of_your_sales_team_will_excel_in_each_stage_of_the_sales_funnel_-_from_prospecting_discovery_demos_proposals_through_to_CLOSED-WON._They_will_experience_the_latest_sales_tools_and_resources_to_automate_aspects_of_the_Bell_Rings_Sales_Accele"
                            data-name="Each member of your sales team will excel in each stage of the sales funnel - from prospecting, discovery, demos, proposals, through to CLOSED-WON. They will experience the latest sales tools and resources to automate aspects of the Bell Rings Sales Accele"
                            transform="translate(1129 11337)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            Each member of your sales team will excel in each stage of the{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                            sales funnel - from prospecting, discovery, demos, proposals,{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                            through to CLOSED-WON. They will experience the latest sales{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                            tools and resources to automate aspects of the Bell Rings Sales{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                            Acceleration Blueprint. Templates, guides and strategies that{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                            separate the #1 software sales professionals from the rest. They{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                            will embrace social selling like a champion and win in the most{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            competitive sales situations. Prospecting and maintaining a 4x{" "}
                            </tspan>
                            <tspan x={0} y={317}>
                            pipeline will be discussed in detail and each sales team member{" "}
                            </tspan>
                            <tspan x={0} y={352}>
                            will learn how they can continue their prospecting efforts 24x7. No{" "}
                            </tspan>
                            <tspan x={0} y={387}>
                            more relying solely on the marketing team or SDRs to deliver{" "}
                            </tspan>
                        </text>
                        </g>
                        <g id="cloud-5" data-name="cloud" transform="translate(-632 5179)">
                        <rect
                            id="Rectangle_26-5"
                            data-name="Rectangle 26"
                            width={1306}
                            height={805}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1-5"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11368) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="Sales_Management"
                            data-name="Sales Management"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            Sales Management
                            </tspan>
                        </text>
                        <text
                            id="I_will_review_and_audit_your_CRM_setup_and_will_set_up_tools_reports_and_dashboards_for_accurate_management_reporting_on_at_least_12_KPIs._I_will_also_recommend_the_use_of_specific_sales_reporting_and_pipeline_management_tools_if_applicable._I_will_also_e"
                            data-name="I will review and audit your CRM setup and will set up tools, reports and dashboards for accurate management reporting on at least 12 KPIs. I will also recommend the use of specific sales reporting and pipeline management tools if applicable. I will also e"
                            transform="translate(1129 11337)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            I will review and audit your CRM setup and will set up tools,{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                            reports and dashboards for accurate management reporting on{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                            at least 12 KPIs. I will also recommend the use of specific sales{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                            reporting and pipeline management tools if applicable. I will also{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                            establish the baseline for all future Sales Team Meetings so that{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                            they provide a healthy platform for learning and development as{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                            well as discussing matters related to specific sales opportunities{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            and sales intelligence for management purposes. Having a{" "}
                            </tspan>
                            <tspan x={0} y={317}>
                            forum forIdeation and continuous improvement will ensure the{" "}
                            </tspan>
                            <tspan x={0} y={352}>
                            right sales team culture is maintained. I will also examine your{" "}
                            </tspan>
                            <tspan x={0} y={387}>
                            company???s Sales Compensation Plan and ensure it is designed to{" "}
                            </tspan>
                            <tspan x={0} y={422}>
                            incentivise peak sales performance. If a formal plan doesn???t exist,{" "}
                            </tspan>
                            <tspan x={0} y={457}>
                            I shall collaborate with you to create a world-class plan in line{" "}
                            </tspan>
                            <tspan x={0} y={492}>
                            with the business goals and to ensure your sales team are{" "}
                            </tspan>
                            <tspan x={0} y={527}>
                            motivated to exceed their individual sales targets.{" "}
                            </tspan>
                        </text>
                        </g>
                        <g id="cloud-6" data-name="cloud" transform="translate(-632 3024)">
                        <rect
                            id="Rectangle_26-6"
                            data-name="Rectangle 26"
                            width={1306}
                            height={686}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                        />
                        <path
                            id="Polygon_1-6"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11352) rotate(-90)"
                            fill="#fff"
                        />
                        <text
                            id="Lead_Generation_Strategy"
                            data-name="Lead Generation Strategy"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                        >
                            <tspan x={0} y={63}>
                            Lead Generation Strategy
                            </tspan>
                        </text>
                        <text
                            id="Your_sales_pipeline_needs_to_be_at_least_4x_your_monthly_quarterly_revenue_target._Creating_customer_awareness_and_interest_that_results_in_raw_and_highly_qualified_sales_leads_is_critical._If_we_nail_this_we_significantly_reduce_the_risk_of_not_hitting_o"
                            data-name="Your sales pipeline needs to be at least 4x your monthly/quarterly revenue target. Creating customer awareness and interest that results in raw and highly qualified sales leads is critical. If we nail this, we significantly reduce the risk of not hitting o"
                            transform="translate(1129 11344)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                        >
                            <tspan x={0} y={37}>
                            Your sales pipeline needs to be at least 4x your monthly/
                            </tspan>
                            <tspan x={0} y={72}>
                            quarterly revenue target. Creating customer awareness and{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                            interest that results in raw and highly qualified sales leads is{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                            critical. If we nail this, we significantly reduce the risk of not{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                            hitting or exceeding revenue goals. I will work with you to develop{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                            Lead Magnets, and secure net-new incoming leads via social{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                            selling strategies as well as a world-class Webinar Sales Funnel.{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            Your sales team members will be coached on how to create self-
                            </tspan>
                            <tspan x={0} y={317}>
                            generated leads intelligently - virtually on auto-pilot. Your{" "}
                            </tspan>
                            <tspan x={0} y={352}>
                            Marketing function will be aligned to focus on lead generation{" "}
                            </tspan>
                            <tspan x={0} y={387}>
                            and other key activities that can deliver a measurable outcome.{" "}
                            </tspan>
                            <tspan x={0} y={422} />
                        </text>
                        </g>
                    </g>
                    </svg>
            </div>
        </div>
        
        <div className="contactFormSec">
            <h1>Ready to start</h1>
            <p>Let's begin the journey of your success together!</p>
            <div className="row mt-3">
                <div className="column" style={{margin: "5px"}}>
                    <button className="btn-1">
                    <Link href="/">
                        <a>Contact Us</a>
                    </Link>
                    </button>
                </div>
                <div className="column" style={{margin: "5px"}}>
                    <button className="btn-2">
                    <Link href="/">
                        <a>Request A Free Session</a>
                    </Link>
                    </button>
                </div>
            </div>
        </div>

        <div className="freeDealSheetSec">
            <video autoPlay muted loop className="freeDealSheetVideo">
                <source src="/assets/video/videoplayback.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className="content">
                <span>Request a free session</span>
                <h1>Let's start today</h1>
                <p>We are very selective about the software/SaaS companies we work with. If you cannot afford to continue with the status quo and simply must transform your company???s sales performance, book a FREE, no-obligation strategy session so we can assess if it makes sense to collaborate.</p>
                <custom style={{color: "rgba(255,255,255,0.7)", fontSize: '12px', float: "right", marginRight: "60px", fontWeight: 600}}>*By submitting this form, you agree to our Privacy Policy & Terms of Service</custom>
            </div>
            <form className="inlineForm">
                <input placeholder="Enter Your Name Here..." required/>
                <input placeholder="Enter Preferred Email Here..." required/>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div className="testimonialSec">
            <div className="pageHeading">
                <h1>We can teach you</h1>
                <p>Here are some of our happy clients reviews, <br/> We try to provide with the best</p>
            </div>
            <div className="testCardGrid">
                <div className="card">
                    <img alt="client" src="/assets/images/clients/victor.png"/>
                    <h1>Victor Almalm</h1>
                    <span>SBD Manager</span>
                    <hr />
                    <p>"Mohammad???s training helped me close the largest ever software deal in our company???s history, just as our President was in town. I rang the sales bell and felt do proud in front of my colleagues.???</p>
                </div>
                <div className="card">
                    <img alt="client" src="/assets/images/clients/azra.jpg"/>
                    <h1>Azra Syed</h1>
                    <span>SS Executive</span>
                    <hr />
                    <p>???Mohammad is the best mentor and coach I have come across. He has shown me a repeatable process to close complex software deals and the results I have experienced will enable me to hit my annual target by Q3 itself.???</p>
                </div>
                <div className="card">
                    <img alt="client" src="/assets/images/clients/danny.jpg"/>
                    <h1>Danny Hidgen</h1>
                    <span>EA Executive</span>
                    <hr />
                    <p>???I had to tell you, Mohammad, that the sheer value I got from your coaching is amazing. Especially the strategies around prospecting are amazing for me as an Enterprise SaaS Seller.???</p>
                </div>
            </div>
            <button className="viewTestimonials">View More</button>
        </div>

        <LatestBlog articles={articles} />
    </Layout>
    </>
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

export default Audience3;