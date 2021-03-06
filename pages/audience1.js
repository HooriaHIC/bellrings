import React, {useEffect} from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import LatestBlog from "../components/latestBlog";
import { SharedJs } from "../components/Js/main";
const Audience1 = ({articles}) => {
    SharedJs(); 
    return (
        <>
        <Layout className="container1" OnHomePage={false}>s
            <Header media="/assets/video/audience 1 (1).mp4" isVideo={true}>
                <div className="pageHeadingAudience">
                    <h1 className="headingAudience">
                        Coaching B2B software <br/> 
                        sales professionals to <br/> 
                        close more Enterprise <br/> 
                        software & SaaS deals
                    </h1>
                    <div className="row">
                        <div className="column" style={{"flex": 1}}>
                        <p className="whoAreYouTxt">
                        Trusted by the top sales professionals at leading startups,scale-ups and magic<br /> quadrant companies all over the world.

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
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAA7CAYAAAAaR0rpAAAQrklEQVR4nO2dCYycZRnH/3PtzO6y2+L2AtrSUstRpBSKgiDlPkQElEMTEIQoiCFKEFONF56EBBSNinIEbfAgcoSj3NgKUrkKBLAWSmmh0GPpwnav7s7uzGte83uTx4+Z2d3uzLKF7598mZ3ve8/nfd7nep9vVjFixIgRI0aMGDFixIgRI0aMGDFixIjxHiMxku6dc8MpnpaUk9QVL/r7F4nEiFjqf0jXiDrNknaVdKikPSXN5/Ij/qykxTXqN8b/w9N7WJJjLKBaknIaTLevpNNhxFSZakVJf5R0o6TH+B6juvDreqCkw2j1P5L2knSXpBW1pHU1JOVImXKKpM9LOl7SBPPodUnPSHpe0iZJ67h/mqTvSprI97slnStp80jGEeNd2FnSjyQdJ6lP0lZJ4yXdKemiWkrPsaC+N0raB6YcCn4lqV/SHEmfkXSipJWSviXp+hHPJkbALEnT2fwOxsxLykqq4/uYRXKEA/NMnRlmnb9DLK/ifyupRdJ1kq6IWapqOBJzKg0T7iCpAUk5phlSVWDKOlTFQcOo85Kk/bErvSo5U1KHpG9K+sk2MHmMd2OcsekLkgZgxme3B1qNlCl7JNWjloeDRZJmoFr+DJP+Q9J3JC2TNHnkU/vAwqvomXzKMOVbklq3B6KMlCk9NsCYw8FVkqZi+3islnSEpDMkzZZ0L7s9xvDh1+LDaJwiNnyKz8L2QM9qMeWaYTKR9wa/Kumnkft/I5ThJfDDknaswvg+aKjD0x6AKZNEWdq4N+ZRDaZcxu6cMcwQ062SeiV9PHL/JeJrN6LOs2Xql8O2xCSGYscmq0SvasM7M42mzcNwamSYMEmYbrtANU50HpR0jaRfSPq2pCeGUOcTkv4EsQ5BvXgCzkOKTke1e9voNhj10hKBdl/mYgLDdUjWNG2tl/RzjPvNkbofkvRF6tZRdjkx1E2UOYwxrpX0FA7dmzz3QeiXhyh5/IZt4iRrMholi3P3Gu2/Rf9DQT0mzgF8ZrlW0fax9CfjaacZezkksOt3k3Q4c/XopN6L0NHOeUfG8A7m1zvce2eI8yiLajDlZhjTE2IhxB8Mp8B4Fp0wSxv25RGUyRLXXBhhLK+irqStUvgI180Q83emzG7YtQGeWfaDqFeymDewaWbRjp3vZOKqg52OTCIW6xf6JO4VkGR9/N3BpjhkkLbqscM9fY+StBP3mnneB62aI5536O+ZMu3O5PNHhOqmQdsEsU2/Hu2S7oM5F/P9aEnXUnY5f/vTvGMGmUdt4Y8ZuU5wzj3inHvKObeDuV/uetC9G23OuZnOuUXOuQ1cXebzdOdcguso59zTzrliiXYK3PdXnvovUCeMZ5pz7m767DHtPEv/fi5vUj9vnhf43Oqcu9k511Jhjgudc+sou442ttLegLl6md8Dzrn5zC/aVoZx+Xl00EaB9jq4uphPQJ62fZmVzrlspM05zrnjnXNPUq7ImLpMG/5+O+37ttcwjjOdc/XOuYedc6dCN78eD1aD4aplI91HW/448awhlO+KSD3/99Oo24ORui1kFdUjRXdB7V/ECdDuxn4coMwWdnEfaqSd5z54fI6JEvh238ah2oJEKCKZvYSei9RIGW3SH6HXTKRb1B5NELc9C8mWQ1JtZlyv0m8om2Fc85DeDZH2vCS6mlOzD/M89Jni7wzjDHUdEjIcJ77OHO3YvyTpAiRuHhr2M8Ze6Nlt1kdokqA5MrTvJf0t2P9VQbWyhIoMyk9yQURVRhH6DERL8rkr95sx3Au0m8c8GAdj7ctih5BHN7bZI6ivJoi+O4vUSZv7YYM9DxO0mEUMHup4TIh+GLqDun2c7edhhBSO3SXYWuvMHD8t6YeS9mBeQQ0+g23cxwbbz4RuQt/+yPYUbFkxxkVkWwn7N9BrFbZcF8wykU2V43nYREXKBgZtZHxHwIhNhsnfZIwhvXAqJ2/jaW8A06ed+Z/PJnsaIbCqWoy5zYiog5Rz7gnn3A2DqG6vih4zqnEAVeRVRSvqtpfLq4vFqIvrjfoKqtCrlB9EVNMkyr5iVGNQoV8x6v9Jo/ZCf3nU1e3OuYsxJ+ajioNJ0WHKtqICQ9+zmVubUftdzCFjVHOGcT9J2WAW+LYXmfZ+Q/0B+s5TxqvLQ2kvzZz9eJeaubQy73aeifLnQddA+3b630B/M6FnI3R6wJgvoXwrZaMmQVX4qpr5lAUkRpbdtbJMuUazM4MhnmFXd2P0+1SrJUiCFUiSH5dQlcu5b02BVs545+JoNNB2FmmbRipPNFIqSJZe+r3USL81zOUkJFejqZdDct/HvQuRJBkj6ZdhcvSbMfZz3n8s5bppK5Spp90TTOC7G0n5Ds7Yo5QdYM5X40HPQzK/jYRLm7WYQVbXFKNpcjgzf5B0mfHY+4gVH41JVQ8dmxjPPCRz1aVjteNuC1ms8yuUmY5KLJhrAOL70Mg3JH0ZFfY4KvR6iBHsqQ5stHtKhInqiX3uBMGTEDiFqhlAjbeYzRDgwzO/jqhj0c5qGDJp1H2Yj+/zk6jEJnOSsgGPdU2kvTRlwyZrQ3V6268TD3Yhajl46ZOwRZca9R5FJ2MLJzdJ6qzm+9nMPWVMpzx5rZeVSdZ4iPHnmXOCDe7b+ViFdd5mVDvzfDUM18yuXFuizAHYbRZp7JRbYUSLSUgNBzGCNNnM96Nor4945f4QK5wGDbBIr2P7iHo5w5A9LOjDRgJZbDGOQs7YZ930O5W80F3MKx9FYz/aMe4MQ85BYodNlUIrLMfeDDHAKWYDeHv4+2VoPx6J1mhs7SJx1bU8/5TZWH1sii3EXctlDz0H7eqxq5uZf87kxVYVtXgdYivEuQg1GMVsJpRgIcLuK5CUEcU+METO3E9D5HNRR9MpU8fzRiN9g2f5AqaBiyQrBGmxhAOAUggB4wYT6C8Y73QWTst4I0mTJgj9PRgwaIWJmBIJ47h0IDGXEIWwXniGvp5nDqWwgA2QgD5ZmLKNjTyffhtM1pAwle6rsJ5B6i6njR0Yc+82nLYNCbVgys9J+iu2yNGI/4AENpdghB3420uEmyQ9WaK92UjdIFGSMMZEw9R5E5AOkqyHOq2ovK/zvBl7aBNB8AT3OgfJgN/LLHSChQ2nKS0EnUO0IEjzFMy4mxm7LVOHpNqITegD0B9jI2bNJstT99oK4zuOeYTNOAFGvxemPofnaRiqwBherMDoYQ7TmUcddQeQoDVJzK4FUzpOUGYgLS1T5lCrdUYFFiHe0jLv64Q0tiakRQ+EyvJZgPEmMJ8OI5GegtGvM7HBFhanydhWvTzLIumjSFLPbgzBxK20FaRGBikY+ivwdwP99Jr44kbMhX9jOvixzGJ8RZNQ4fFGhdSz0LeL0LADR6vflMuaOOZQjklnIzyCuZPGPOmv1ZuptXqb8S8w5P44HBu4H+JpISW/aOJoS8u0NYlxhvIhTtjDvR48zU0s2npzrryYhbee78Go2azxvDtZvFIMKYLFU43TkWEMPqZ3O5KtwDiTEZuzl3r9tL/GMLN3qO5AxQbMNyq215g6G425EEXI0CpQPjBzJ2ZLgLVfC0jgLYOs5UFskuCUhXm01SqLvVZMuYIFO5CA+mXcH4/dI6MCg/fXUaG9PEw2kwV4C3V3G6p4N+zRV1lwV+HlqNPYHCnDlN0VXvtNYhvnjGQJnmsXzt3OMEDKOHHdjO/35sTp7chpTinNkDVJJXkjoSplMh2DphgwNqVgoEDXzsiGKcKYlZiynrBUkzkI6GVuS405UlXUMhXrGj5PNPf2Rgo4IwlaeW+nHFZRLhA3MHMOlXYLfT1OW8UKDNmI5M1F5t5mjiSjOIIjvmTEsO8j477HSMQOc/LRi9e6gmsd5VwJNRtFmiskViTZeHNLlJ3PRtvdzCk4j+2mn2UlJFt9JNkkimPQAhkTASiy+ZfU6vXoWjLlYog/k0k1Ez9MGaYM0mNjhXYeJaSxL0RdT91DCI/kykjZZAlNsCdSLWFUegJmiWbPZ0x2UrMpG2zglahGh7R8zQS6Q/hoNg5QJSnXGOn7BaRXyPoJdXfkKNeu2RzS7eahgWyM0kXU/bMm1hjayMLU50XGlODdqYUmDa5ocgr+WibcVxXUSn0LNfooBDsAAoV3w4MH2ocq7q3QzkquuTBxlgXaCemRxTzI8Tykion2/0AoRTzbib/D4iWwcb2a/SXSdkEkMSMsYppN9BxmSZDIG5CKU0x0YApxwRbG/y/a7oAJT8QUaebeJbS1GOZrMjZqEeZcgAe+Dok/G/r2MYcUtAx17jJ0XA3DTzS2fIaNejbjWMx4vyDpozirAXmzpnfU8t3xWjKlOHlYQJLBXUy4APGCKmlDBZb7iZFuVM8pLOY4Y99M5f3xA5FQDRCyyezqZk6Yiixk0nieRWOvhWPEtbQx1zgQefP5NsnM9pTGkXCxH99DTHUKqv94xhmchH6iChP4vo65+b/fQO2OizgXWeqcxjiC89HPxpZxxPq57EFEH6bQAsYbwkw5nL8WNFkdQiTMPQWdeth8t0CDmqHWTHkndtdxGMazTEhnFxhjKZOsZAeuRco0IwnqTNrXLix+kHx1pm7ahGu28neS/vr4XkDidJKNc5ihS55NMQDDL+cYslSW+AO0E04+suYMvIcxhnZzxh4bxziC5+/YILdhg1unLUH5YHp0sjnWs4l2Nqc1j5c4l77aZMFPiKSzTeOyr30MsEF6OdL1avuftf59oloz5UZihBcQHM8aKdnD93UVJpmg7gUQZyuL3GQSBKxnWjSORtak84dyLSas1GAYuZtndWZBgqfawOLdzlgfKzPWFbwIl2UTFmCgHBvLOhk9JlabR6JnTZk1MMCpqNfAwP0mgN3Jsel61PIhhoEdanovY7oIJr0UNXwSmkPG5g/HrfUm2rCRuPPVjKvmP5g1Gj8F6B2dV1ik9RB/iwlXfK2M5JmMI3MyTkRImj2SU489IkHwXuNkbMbGe4QX0Foh9EOo+gGIm4Jpl5NQUWccgUCbdn7z6BuoycEm3YipcQ6ea8qcNuWN89FJey9ib94Sabse2ixAw2Sh4SbmuYS3P0MG0OPYy1lzGHFFhSyeueRVWlXdD2OG98Q9Q99fYmxlMRZ+4GqoRe8k+XUvGCyo4HSZgPCJnEN7hv4Z749ETx8aWfSTkQqrTMLp+hLhj/A++XQTB+yEca/AeToNB8dxJryMo7RtfYk/hKAmE6PtNuGnoQSfk+aYshGmbmee0Q3SjLQP5/Jdg8R+AybR/hlIxOdg/LYh1v8/VIMpR4QhvIsTrk+TJPo6ycDlyiWdc5c757Y45152zp07jD4GuxaaxN/wfssakm2r1ccH/qoGRus95nvYfdN4460U6lE5l6KWdkf1Vgv7m9OSpJEmd48SDWIMEaPFlAXzSuuFJZ77A//L8X6vI8m3WghZQPtiO4VQUEjeqFkQOMa2odbet8WVJLseQ+7hKzDM3oRTMnibt1W53/D7jDOMt5sx4Y4Rvzwfo7oYzZ8hcZwUbMbpEQ7AIjzl+TVgyICTYMI3zauhIq0t/nnrMYbR/m2c8A7OuXjMN2M/Hl7j37rpM55uAQndF8lmjzFGMJrqO+AmjquuItxz/yj0+UqE6Sehtl/k+3b5XxTerxjN/6MTRU1y8cqgEefpBXM+PIcNMuZ/bnl7wnsep4wRI0aMGDFixIjxgUeMGDFixIgRI0aMGDFixIgRo+aQ9F9DoJ+jbOfPDQAAAABJRU5ErkJggg=="
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
                        xlinkHref="data:image/png;base64,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"
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
            
            <div className="comparisonSec onlyWebSection">
                <svg xmlns="http://www.w3.org/2000/svg" className="comparisonAudience1" viewBox="0 0 1800 1149">
                    <g id="problems" transform="translate(-60 -2541)">
                        <rect id="Rectangle_9" data-name="Rectangle 9" width={1800} height={1149} transform="translate(60 2541)" fill="#161616" />
                        <g id="section" transform="translate(60 2541)">
                        <rect id="Rectangle_10" data-name="Rectangle 10" width={1800} height={519} fill="none" />
                        <text id="Stress_Anxiety" data-name="Stress & Anxiety" transform="translate(81 141)" fill="#fff" fontSize={40} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.49"><tspan x={0} y={0}>Stress &amp; Anxiety</tspan></text>
                        <text id="_80_Say_they_feel_stressed_out_and_being_anxious_at_work." data-name="80% Say they feel stressed out and being anxious at work." transform="translate(81 185)" fill="#fff" fontSize={65} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={68}>80%</tspan><tspan y={68} xmlSpace="preserve" fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}> of B2B sales professionals say they feel</tspan><tspan x={0} y={143} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>stressed out and anxious at work.</tspan></text>
                        <text id="_56_feel_they_cannot_talk_to_their_sales_managers_about_work_related_stress_" data-name="56% feel they cannot talk to their sales managers about work related stress*" transform="translate(81 398)" fill="#fff" fontSize={24} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={25}>56% feel they cannot talk to their sales managers about work related stress</tspan></text>
                        </g>
                        <line id="Line_1" data-name="Line 1" y2={1197} transform="translate(1559 3080.714) rotate(90)" fill="none" stroke="#707070" strokeWidth={1} />
                        <g id="section-2" data-name="section" transform="translate(60 3071)">
                        <rect id="Rectangle_10-2" data-name="Rectangle 10" width={1800} height={619} fill="none" />
                        <text id="_Studies_by_The_Institute_of_Sales_Management_The_Bridge_Group_Objective_Management_Group_Inc._" data-name="*Studies by The Institute of Sales Management, The Bridge Group & Objective Management Group Inc.
                    " transform="translate(943 468)" fill="#fff" fontSize={24} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.32"><tspan x="1" y={25}>*Studies by the institute of Sales Management, The Bridge Group </tspan><tspan x="110.072" y={61}>&amp; Objective Management Group Inc and SiriusDecisions</tspan></text>
                        <text id="Sales_Target" data-name="Sales Target" transform="translate(81 141)" fill="#fff" fontSize={40} fontFamily="Poppins-Medium, Poppins" fontWeight={500} opacity="0.49"><tspan x={0} y={0}>Sales Target</tspan></text>
                        <text id="_1_in_2_Sales_professionals_fail_to_achieve_their_sales_targets_quota." data-name="1 in 2 Sales professionals fail to achieve their sales targets/quota." transform="translate(81 185)" fill="#fff" fontSize={65} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={68}>1 in 2</tspan><tspan y={68} xmlSpace="preserve" fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}> Sales professionals fail to achieve their sales</tspan><tspan x={0} y={143} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}>target or quota</tspan></text>
                        <text id="What_are_Sales_Leaders_doing_to_develop_a_winning_sales_culture_in_the_organization_" data-name="What are Sales Leaders doing to develop a winning sales culture in the organization?
                    " transform="translate(81 398)" fill="#fff" fontSize={24} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={25}>71% of sales reps blamed their inability to close deals on their lack of knowledge</tspan></text>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="comparisonSec onlyMobSection">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="comparisonAudience1"
                    viewBox="0 0 1800 2314.2"
                    >
                    <g id="Group_79" data-name="Group 79" transform="translate(-60 -1482)">
                        <g id="problems" transform="translate(0 -1059)">
                        <path
                            id="Path_12"
                            data-name="Path 12"
                            d="M0,0H1800V2314.2H0Z"
                            transform="translate(60 2541)"
                            fill="#161616"
                        />
                        <g id="section" transform="translate(60 2541)">
                            <rect
                            id="Rectangle_10"
                            data-name="Rectangle 10"
                            width={1800}
                            height={1055}
                            fill="none"
                            />
                            <text
                            id="Stress_Anxiety"
                            data-name="Stress & Anxiety"
                            transform="translate(81 141)"
                            fill="#fff"
                            fontSize={60}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            opacity="0.49"
                            >
                            <tspan x={0} y={0}>
                                Stress &amp; Anxiety
                            </tspan>
                            </text>
                            <text
                            id="_80_of_B2B_sales_professionals_say_they_feel_stressed_out_and_anxious_at_work_"
                            data-name="80% of B2B sales professionals say they feel stressed out and anxious at work*"
                            transform="translate(117 187)"
                            fill="#fff"
                            fontSize={100}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={105}>
                                80% of B2B sales professionals{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                say they feel stressed out and{" "}
                            </tspan>
                            <tspan x={0} y={325}>
                                anxious at work*
                            </tspan>
                            </text>
                            <text
                            id="_56_feel_they_cannot_talk_to_their_sales_managers_about_work_related_stress_"
                            data-name="56% feel they cannot talk to their sales managers about work related stress*"
                            transform="translate(125 579)"
                            fill="#fff"
                            fontSize={100}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={105}>
                                56% feel they cannot talk to{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                their sales managers about{" "}
                            </tspan>
                            <tspan x={0} y={325}>
                                work related stress*
                            </tspan>
                            </text>
                            <g
                            id="Ellipse_30"
                            data-name="Ellipse 30"
                            transform="translate(85 230)"
                            fill="#888"
                            stroke="#707070"
                            strokeWidth={1}
                            >
                            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                            <circle cx="7.5" cy="7.5" r={7} fill="none" />
                            </g>
                            <g
                            id="Ellipse_31"
                            data-name="Ellipse 31"
                            transform="translate(93 637)"
                            fill="#888"
                            stroke="#707070"
                            strokeWidth={1}
                            >
                            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                            <circle cx="7.5" cy="7.5" r={7} fill="none" />
                            </g>
                        </g>
                        <line
                            id="Line_1"
                            data-name="Line 1"
                            y2={1197}
                            transform="translate(1558.5 3596.142) rotate(90)"
                            fill="none"
                            stroke="#707070"
                            strokeWidth={1}
                        />
                        <g id="section-2" data-name="section" transform="translate(60 3604.576)">
                            <rect
                            id="Rectangle_10-2"
                            data-name="Rectangle 10"
                            width={1800}
                            height={1244}
                            transform="translate(0 0.424)"
                            fill="none"
                            />
                            <g
                            id="Ellipse_32"
                            data-name="Ellipse 32"
                            transform="translate(85 244.424)"
                            fill="#888"
                            stroke="#707070"
                            strokeWidth={1}
                            >
                            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                            <circle cx="7.5" cy="7.5" r={7} fill="none" />
                            </g>
                            <g
                            id="Ellipse_33"
                            data-name="Ellipse 33"
                            transform="translate(85 662.424)"
                            fill="#888"
                            stroke="#707070"
                            strokeWidth={1}
                            >
                            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                            <circle cx="7.5" cy="7.5" r={7} fill="none" />
                            </g>
                            <text
                            id="_71_of_sales_reps_blamed_their_inability_to_close_deals_on_their_lack_of_knowledge_"
                            data-name="71% of sales reps blamed their inability to close deals on their lack of knowledge*"
                            transform="translate(117 610.424)"
                            fill="#fff"
                            fontSize={100}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={105}>
                                71% of sales reps blamed their{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                inability to close deals on their{" "}
                            </tspan>
                            <tspan x={0} y={325}>
                                lack of knowledge*
                            </tspan>
                            </text>
                            <text
                            id="_1_in_2_sales_professionals_fail_to_achieve_their_sales_target_or_quota_"
                            data-name="1 in 2 sales professionals fail to achieve their sales target or quota*"
                            transform="translate(117 197.424)"
                            fill="#fff"
                            fontSize={100}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={105}>
                                1 in 2 sales professionals fail to{" "}
                            </tspan>
                            <tspan x={0} y={215}>
                                achieve their sales target or{" "}
                            </tspan>
                            <tspan x={0} y={325}>
                                quota*
                            </tspan>
                            </text>
                            <text
                            id="Sales_Target"
                            data-name="Sales Target"
                            transform="translate(81 141.424)"
                            fill="#fff"
                            fontSize={60}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            opacity="0.49"
                            >
                            <tspan x={0} y={0}>
                                Sales Target
                            </tspan>
                            </text>
                        </g>
                        </g>
                        <text
                        id="_Studies_by_The_Institute_of_Sales_Management_The_Bridge_Group_Objective_Management_Group_Inc_and_SiriusDecisions_"
                        data-name="*Studies by The Institute of Sales Management, The Bridge Group, Objective Management Group Inc and SiriusDecisions
                    "
                        transform="translate(251 3597)"
                        fill="#989898"
                        fontSize={34}
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight={600}
                        >
                        <tspan x={0} y={36}>
                            *Studies by The Institute of Sales Management, The Bridge Group,
                            Objective Management{" "}
                        </tspan>
                        <tspan x={0} y={72}>
                            Group Inc and SiriusDecisions
                        </tspan>
                        <tspan x={0} y={108} />
                        </text>
                    </g>
                    </svg>

            </div>

            <div className="ourCourseSec notSelected">
                <svg xmlns="http://www.w3.org/2000/svg" width="85%" className="ourCourseWatermark" viewBox="0 0 1348 269">
                    <text id="About_Course" data-name="Our Programme" transform="translate(0 202)" fill="#fff" fontSize={162} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.06"><tspan x={0} y={0}>Our Programme</tspan></text>
                </svg>

                <div className="row container">
                    <div className="column ourCourseSectionWidth">
                        <div className="pageHeading">
                            <span>Transforming your sales performance in 90 days</span>
                            <h1>Let???s ring the sales bell???. *DING DING*</h1>
                            <p>Imagine a proven sales coaching programme that will help you close more enterprise software,SaaS and professional services deals than ever before - accurately and with predictable consistency.</p>
                            <b>Crush your sales targets and become the #1 top-earner. Enjoy celebrity status at the next sales kick-off and rank #1 in the sales team</b>
                            <p>Stop struggling. Leave all the stress and job insecurity behind. When you transform your software and  SaaS sales process with a complete, proven framework, innovative strategies, automation tools + some 'MAGIC' from someone with the gift to inspire you, something awesome happens.</p>
                            <p>......you'll start to <strikethrough style={{textDecoration: "line-through"}}>hit</strikethrough> exceed your sales target and make more money in <strong>commissions, accelerators, kickers</strong> and <strong>bonuses than ever before</strong>.</p>
                            <p>Introducing the <strong>Bell Rings Sales Acceleration Coaching & Mentorship Programme by Mohammad Irfan</strong></p>
                        </div>
                    </div>
                    <div className="column" style={{flex: 1}}>
                        <div className="ourCourseSlider">
                            <div className="btnLeft">
                                <button><i className="fas fa-arrow-left"></i></button>
                            </div>
                            <div className="btnRight">
                                <button><i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stepSec onlyWebSection">
                <div className="container" style={{paddingTop: "0 !important"}}>
                    <svg id="StepsSvg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 1551 2080">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                                <stop offset={0} stopColor="#fff" />
                                <stop offset="0.08" stopColor="#e4e4e4" />
                                <stop offset="0.09" stopColor="#3a3a3a" />
                                <stop offset={1} stopColor="#3a3a3a" />
                            </linearGradient>
                        </defs>
                        <text id="Process" transform="translate(647 202)" fill="#fff" fontSize={192} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.02"><tspan x={0} y={0}>Process</tspan></text>
                        <text id="Steps_to_Success_With_Us" data-name="Steps to Success With Us" transform="translate(0 109)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={63}>Steps to sales</tspan><tspan x={0} y={153}>excellence</tspan></text>
                        <text id="How_it_works" data-name="How it works" transform="translate(0 81)" fill="#fff" fontSize={20} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={21}>HOW IT WORKS</tspan></text>
                        <text id="Invest_in_yourself._You_ll_become_an_expert_with_a_proven_complete_and_repeatable_sales_process_used_by_the_top_sales_professionals_in_software_and_tech_companies_all_over_the_world_to_close_any_complex_enterprise_software_or_SaaS_sale_intelligently._We_" data-name="Invest in yourself. You???ll become an expert with a proven, complete and repeatable sales process used by the top sales professionals in software and tech companies all over the world  to close any complex enterprise software or SaaS sale intelligently. We " transform="translate(0 321)" fill="#fff" fontSize={20} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={30}>Invest in yourself. You???ll become an expert with a proven, </tspan><tspan x={0} y={55}>complete and repeatable sales process used by the top sales </tspan><tspan x={0} y={80}>professionals in software and tech companies all over the </tspan><tspan x={0} y={105} xmlSpace="preserve">world to close any complex enterprise software or SaaS sale </tspan><tspan x={0} y={130}>intelligently. We will work on your current sales opportunity </tspan><tspan x={0} y={155}>pipeline and you will learn the latest tried and tested </tspan><tspan x={0} y={180}>strategies to reduce deal risk and convert more deals to </tspan><tspan x={0} y={205}>CLOSED-WON. You will apply what you learn and we???ll </tspan><tspan x={0} y={230}>overcome any hurdles you come across. Join the #1 software </tspan><tspan x={0} y={255}>sales acceleration programme today.</tspan></text>
                        <g id="Group_8" data-name="Group 8" transform="translate(-259 -10909)">
                            <rect id="Rectangle_25" data-name="circlePrg" width={6} height={1140} transform="translate(1032 11314)" fill="url(#linear-gradient)" />
                            <g id="Group_4" data-name="circlePrg">
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx={75} cy={75} r={75} transform="translate(960 11179)" fill="#3a3a3a" />
                            <text id="_1" data-name={1} transform="translate(1028 11270)" fontSize={45} fontFamily="Poppins-Regular, Poppins" fill="#fff" opacity="0.6"><tspan x={0} y={0}>1</tspan></text>
                            </g>
                            <g id="Group_7" data-name="circlePrg" transform="translate(0 -100)">
                            <circle id="Ellipse_5" data-name="Ellipse 5" cx={75} cy={75} r={75} transform="translate(960 12544)" fill="#3a3a3a" />
                            <text id="_4" data-name={4} transform="translate(1021 12635)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>4</tspan></text>
                            </g>
                            <g id="Group_5" data-name="circlePrg" transform="translate(0 -10)">
                            <circle id="Ellipse_3" data-name="Ellipse 3" cx={75} cy={75} r={75} transform="translate(960 11634)" fill="#3a3a3a" />
                            <text id="_2" data-name={2} transform="translate(1022 11725)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>2</tspan></text>
                            </g>
                            <g id="Group_6" data-name="circlePrg" transform="translate(0 -55)">
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx={75} cy={75} r={75} transform="translate(960 12089)" fill="#3a3a3a" />
                            <text id="_3" data-name={3} transform="translate(1022 12180)" fill="#fff" fontSize={45} fontFamily="Poppins-Regular, Poppins" opacity="0.6"><tspan x={0} y={0}>3</tspan></text>
                            </g>
                        </g>
                        <g id="card_2" data-name="card 2" transform="translate(652 -8570)">
                            <text id="_25_" data-name="25%" transform="translate(563 9423)" fill="#fff" fontSize={75} fontFamily="Poppins-ExtraBold, Poppins" fontWeight={800} letterSpacing="0.03em" opacity="0.36"><tspan x={0} y={0}>25%</tspan></text>
                            <text id="Attitude:_Winning_DNA" data-name="Attitude: Winning DNA" transform="translate(563 9483)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>Attitude: Winning DNA</tspan></text>
                            <path id="Path_2" data-name="Path 2" d="M1040.775,11969.031c9.438-15.646,33.032-32.535,37.751-53.646s-17.385-16.146-18.875-30.8,8.2-13.162,12.915-27.815-6.954-10.184,5.96-30.8,20.863-33.529,45.7-51.661,50.666-20.862,53.646-20.862,35.516-5.217,68.549,0,36.013,5.465,63.582,20.862,29.058,16.393,46.692,40.731,19.373,25.334,23.843,56.628-1.738,39.987-10.928,68.549-25.83,45.7-25.83,45.7-17.137,24.091-13.908,57.62,20.117,53.9,26.823,76.5,0,13.908,0,13.908H1186.813s-1.49-41.725-24.836-48.68-51.412,15.646-68.549,20.862-20.862-20.862-20.862-20.862v-28.811c0-7.2-12.915-12.915-12.915-12.915h0c-4.967-2.98,0-14.9,0-14.9l-9.935-7.947,9.935-21.856S1031.337,11984.678,1040.775,11969.031Z" transform="translate(-778.849 -2507)" fill="none" stroke="#707070" strokeWidth={1} />
                            <path id="Path_3" data-name="Path 3" d="M1248.533,11801.133l-14.4-14.666-21.6,21.066,12.8,14.4-7.467,19.732L1200,11843v26.934l17.867,2.4,7.467,20L1214.4,11906.2l19.733,20,14.4-12,19.2,9.867v17.6H1298.4v-19.2l18.4-8.268,14.933,12,19.466-20-10.933-13.865,7.733-18.4,19.733-1.6V11843l-19.733-1.334-7.733-19.732,10.933-14.4-19.466-18.4-12.534,12-20.8-9.332v-17.867h-30.667v17.867Z" transform="translate(-819 -2487)" fill="none" stroke="#707070" strokeWidth={1} />
                            <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(432 9338)" fill="none" stroke="#707070" strokeWidth={1}>
                            <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                            <circle cx="32.5" cy="32.5" r={32} fill="none" />
                            </g>
                            <path id="Path_4" data-name="Path 4" d="M1224.358,11787.533l-7.227-7.333-10.841,10.533,6.424,7.2-3.747,9.866-8.967.667v13.467l8.967,1.2,3.747,10-5.487,6.933,9.9,10,7.227-6,9.636,4.934v8.8h15.391v-9.6l9.235-4.134,7.495,6,9.77-10-5.487-6.933,3.881-9.2,9.9-.8v-14.667l-9.9-.667-3.881-9.866,5.487-7.2-9.77-9.2-6.29,6-10.439-4.666v-8.934h-15.391v8.934Z" transform="translate(-861.091 -2332.8)" fill="none" stroke="#707070" strokeWidth={1} />
                            <g id="Ellipse_11" data-name="Ellipse 11" transform="translate(362.923 9464.99)" fill="none" stroke="#707070" strokeWidth={1}>
                            <circle cx="18.077" cy="18.077" r="18.077" stroke="none" />
                            <circle cx="18.077" cy="18.077" r="17.577" fill="none" />
                            </g>
                        </g>
                        <g id="cloud" data-name="cloud" transform="translate(-124 -11028)">
                            <rect id="Rectangle_26" data-name="Rectangle 26" width={602} height={450} rx={20} transform="translate(1063 11183)" fill="#373737" />
                            <path id="Polygon_1" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11375) rotate(-90)" fill="#fff" />
                            <text id="_4_Intensive_and_engaging_1-2-1_ZOOM_sessions_" data-name="4, Intensive and engaging 1-2-1 ZOOM sessions
                        " transform="translate(1129 11254)" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700}><tspan x={0} y={32}>Transformational 1 to 1 Software</tspan><tspan x={0} y={67}>/SaaS sales coaching</tspan></text>
                            <text id="Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit._Praesent_accumsan_bibendum_imperdiet._Morbi_sollicitudin_orci_a_purus_auctor_laoreet._Duis_congue_ac_tellus_sit_amet_mollis._Donec_in_sollicitudin_mauris._Phasellus_nisl_tortor_consequa_" data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan bibendum imperdiet. Morbi sollicitudin orci a purus auctor laoreet.
                        Duis congue ac tellus sit amet mollis. Donec in sollicitudin mauris. Phasellus nisl tortor, consequa
                        " transform="translate(1129 11351)" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>Training is an event that happens. You hardly </tspan><tspan x={0} y={41}>retain 10%. The Bell Rings Sales Acceleration </tspan><tspan x={0} y={63}>programme is unrivalled 1-2-1 coaching that </tspan><tspan x={0} y={85}>happens with you. You???ll be applying practical, </tspan><tspan x={0} y={107}>proven knowledge and strategies from the get go </tspan><tspan x={0} y={129}>on the sales opportunities you???re working on right </tspan><tspan x={0} y={151}>now. See the payback on all your sales activities.</tspan><tspan x={0} y={173}>You will be personally mentored via a total of 4, </tspan><tspan x={0} y={195}>weekly, 90-minute ZOOM sessions by your</tspan><tspan x={0} y={217}>inspirational sales coach.</tspan></text>
                        
                        </g>
                        <g id="card_2-2" data-name="card 2" transform="translate(-240.387 -8158.634)">
                            <text id="_42_" data-name="42%" transform="translate(260 9423)" fill="#fff" fontSize={75} fontFamily="Poppins-ExtraBold, Poppins" fontWeight={800} letterSpacing="0.03em" opacity="0.36"><tspan x={0} y={0}>42%</tspan></text>
                            <text id="Software_Sales_Skills" data-name="Software Sales Skills" transform="translate(260 9483)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>Software Sales Skills</tspan></text>
                            <g id="superhero" transform="translate(497.817 9256.332)">
                            <path id="Path_5" data-name="Path 5" d="M345.683,66.167c-12.439-20.213-12.439-31.1,0-51.309,3.11-6.219,9.329-15.548,18.658-12.439,9.329,1.555,10.884,12.439,7.774,20.213-3.11,13.993-13.993,34.206-26.432,43.535M286.6,41.29c41.98-10.884,59.083,57.529,15.548,66.858-45.09,10.884-60.638-57.529-15.548-66.858m-62.193,62.193c7.774-3.11,23.322-1.555,18.658,10.884-6.219,18.658-27.987,37.316-40.426,51.309-29.542,35.761-57.529,73.077-87.07,108.838-10.884,12.439-20.213,23.322-31.1,35.761-3.11,4.664-7.774,10.884-13.993,12.439-7.774,0-13.993-9.329-18.658-13.993A598.224,598.224,0,0,1,9.84,262.075c-4.664-6.219-10.884-13.993-6.219-21.768,10.884-17.1,40.426-29.542,57.529-40.426,35.761-23.322,71.522-46.645,108.838-68.412,17.1-9.329,35.761-24.877,54.419-27.987M70.478,325.823l6.219,9.329-1.555,1.555c-17.1,1.555-38.871,18.658-41.98,35.761-3.11,9.329,7.774,24.877,18.658,20.213,12.439-6.219,26.432-21.768,35.761-31.1,23.322-23.322,45.09-45.09,63.748-71.522,6.219-7.774,21.768-41.98,34.206-40.426,10.884,3.11,10.884,23.322,12.439,32.651s6.219,20.213,1.555,29.542c-7.774,20.213-35.761,27.987-46.645,46.645-6.219,9.329-3.11,26.432,10.884,26.432,7.774,0,15.548-7.774,21.768-10.884,15.548-12.439,51.309-32.651,54.419-52.864,1.555-15.548-7.774-32.651-6.219-49.754,0-9.329,12.439-20.213,9.329-29.542-1.555-6.219-9.329-4.664-13.993-7.774-7.774-3.11-12.439-10.884-13.993-18.658-1.555-10.884,6.219-15.548,9.329-24.877,6.219-12.439,4.664-26.432,10.884-38.871,4.664-9.329,18.658-27.987,27.987-31.1,21.768-7.774,35.761,17.1,32.651,34.206-3.11,18.658-20.213,26.432-31.1,38.871h-1.555l-1.555-1.555,4.664-17.1,3.11,1.555,1.555,1.555,1.555,1.555,1.555,1.555m-6.219-13.993L266.387,175M76.7,335.152c15.548-4.664,27.987-23.322,37.316-35.761,24.877-27.987,48.2-57.529,71.522-87.07C196.419,198.327,207.3,179.669,225.961,175m-15.548,7.774L221.3,193.663m4.664-1.555c6.219,9.329,1.555,23.322,12.439,29.542,15.548,7.774,40.426,3.11,57.529,3.11,6.219,0,13.993,0,20.213-3.11,21.768-15.548-15.548-24.877-24.877-26.432-7.774,0-15.548-1.555-23.322-1.555" transform="translate(0 0)" fill="none" stroke="#707070" strokeWidth={1} />
                            </g>
                        </g>
                        <g id="cloud-2" data-name="cloud" transform="translate(0 637)">
                            <rect id="Rectangle_26-2" data-name="Rectangle 26" width={602} height={386} rx={20} fill="#373737" />
                            <path id="Polygon_1-2" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(631 107.26) rotate(90)" fill="#373737" />
                            <text id="Anatomy_DNA_of_a_successful_software_SaaS_Sales_Professional" data-name="Anatomy & DNA of a successful software/SaaS Sales Professional" transform="translate(54 56.643)" fill="#fff" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.5"><tspan x={0} y={32}>Sales DNA of a Winner</tspan></text>
                            <text id="We_will_examine_personal_positioning_discipline_and_sales_accountability._You_will_learn_to_stand_out_as_a_subject_matter_expert._The_key_is_genuine_value_creation._You_will_learn_how_to_create_emotional_and_logical_value_that_will_compel_your_prospects" data-name="We will examine ???personal positioning???, discipline and sales accountability. You will learn to stand out as a subject matter expert. The key is genuine value creation. You will learn how to create emotional and logical value that will compel your prospects" transform="translate(54 115)" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>We will examine ???personal positioning???, discipline </tspan><tspan x={0} y={41}>and sales accountability. You will learn to stand out </tspan><tspan x={0} y={63}>as a subject matter expert. The key is genuine value </tspan><tspan x={0} y={85}>creation. You will learn how to create emotional </tspan><tspan x={0} y={107}>and logical value that will compel your prospects to </tspan><tspan x={0} y={129}>buy. You will also embrace the four best pieces of </tspan><tspan x={0} y={151}>software sales advice ever that will see your </tspan><tspan x={0} y={173}>conversion rates skyrocket as you become used to </tspan><tspan x={0} y={195}>earning more commissions consistently.</tspan></text>
                        </g>
                        <g id="card_2-3" data-name="card 2" transform="translate(652 -7700)">
                            <text id="_33_" data-name="33%" transform="translate(563 9423)" fill="#fff" fontSize={75} fontFamily="Poppins-ExtraBold, Poppins" fontWeight={800} letterSpacing="0.03em" opacity="0.36"><tspan x={0} y={0}>33%</tspan></text>
                            <text id="Professional_Sales_Process" data-name="Professional Sales Process" transform="translate(563 9483)" fill="#fff" fontSize={28} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>Professional Sales Process</tspan></text>
                            <g id="settings" data-name="settings" transform="translate(298.4 9287.196)">
                            <path id="Path_6" data-name="Path 6" d="M206.612,85.567,189.488,83.39A86.077,86.077,0,0,0,184.3,70.875L194.88,57.257a13.539,13.539,0,0,0-1.111-18.026L179.423,24.885a13.577,13.577,0,0,0-18.081-1.157L147.743,34.3a85.769,85.769,0,0,0-12.524-5.183l-2.177-17.1A13.642,13.642,0,0,0,119.506,0H99.1A13.641,13.641,0,0,0,85.567,12L83.39,29.12A84.774,84.774,0,0,0,70.865,34.3L57.257,23.728a13.551,13.551,0,0,0-18.026,1.111L24.885,39.176a13.58,13.58,0,0,0-1.157,18.09L34.3,70.875A85.075,85.075,0,0,0,29.12,83.39l-17.1,2.177A13.642,13.642,0,0,0,0,99.1v20.4a13.641,13.641,0,0,0,12,13.535l17.124,2.177A86.077,86.077,0,0,0,34.3,147.733L23.728,161.351a13.539,13.539,0,0,0,1.111,18.026l14.346,14.346a13.587,13.587,0,0,0,18.081,1.148L70.875,184.3a84.091,84.091,0,0,0,12.515,5.183l2.177,17.088A13.643,13.643,0,0,0,99.1,218.608h20.4a13.641,13.641,0,0,0,13.535-12l2.177-17.124a86.077,86.077,0,0,0,12.515-5.183l13.617,10.575a13.539,13.539,0,0,0,18.026-1.111l14.346-14.346a13.568,13.568,0,0,0,1.157-18.081L184.3,147.733a84.093,84.093,0,0,0,5.183-12.515l17.088-2.177A13.642,13.642,0,0,0,218.6,119.506V99.1a13.626,13.626,0,0,0-11.987-13.535ZM109.3,154.847A45.543,45.543,0,1,1,154.847,109.3,45.6,45.6,0,0,1,109.3,154.847Z" transform="translate(0 0)" fill="none" stroke="#707070" strokeWidth={1} />
                            </g>
                            <g id="settings-2" data-name="settings" transform="translate(493 9466.996)">
                            <path id="Path_6-2" data-name="Path 6" d="M132.324,54.8l-10.967-1.394a55.128,55.128,0,0,0-3.319-8.015l6.773-8.721a8.671,8.671,0,0,0-.712-11.545l-9.188-9.188a8.7,8.7,0,0,0-11.58-.741l-8.71,6.773A54.93,54.93,0,0,0,86.6,18.65L85.206,7.7A8.737,8.737,0,0,0,76.537,0H63.47A8.736,8.736,0,0,0,54.8,7.683L53.407,18.65a54.293,54.293,0,0,0-8.021,3.319L36.67,15.2a8.678,8.678,0,0,0-11.545.712L15.937,25.09A8.7,8.7,0,0,0,15.2,36.676l6.773,8.715a54.486,54.486,0,0,0-3.319,8.015L7.7,54.8A8.737,8.737,0,0,0,0,63.47V76.537a8.736,8.736,0,0,0,7.683,8.669L18.65,86.6a55.128,55.128,0,0,0,3.319,8.015L15.2,103.337a8.671,8.671,0,0,0,.712,11.545l9.188,9.188a8.7,8.7,0,0,0,11.58.735l8.715-6.773a53.856,53.856,0,0,0,8.015,3.319L54.8,132.295a8.738,8.738,0,0,0,8.669,7.712H76.537a8.736,8.736,0,0,0,8.669-7.683L86.6,121.357a55.128,55.128,0,0,0,8.015-3.319l8.721,6.773a8.671,8.671,0,0,0,11.545-.712l9.188-9.188a8.689,8.689,0,0,0,.741-11.58l-6.773-8.715a53.857,53.857,0,0,0,3.319-8.015L132.3,85.206a8.737,8.737,0,0,0,7.7-8.669V63.47a8.726,8.726,0,0,0-7.677-8.669ZM70,99.171A29.168,29.168,0,1,1,99.171,70,29.2,29.2,0,0,1,70,99.171Z" transform="translate(0 0)" fill="none" stroke="#707070" strokeWidth={1} />
                            </g>
                            <g id="settings-3" data-name="settings" transform="translate(372.698 9537)">
                            <path id="Path_6-3" data-name="Path 6" d="M90.738,37.579l-7.521-.956a37.8,37.8,0,0,0-2.276-5.5l4.644-5.98a5.946,5.946,0,0,0-.488-7.917l-6.3-6.3a5.963,5.963,0,0,0-7.941-.508l-5.972,4.644a37.667,37.667,0,0,0-5.5-2.276L58.428,5.28A5.991,5.991,0,0,0,52.484,0H43.523a5.991,5.991,0,0,0-5.944,5.268l-.956,7.521a37.231,37.231,0,0,0-5.5,2.276l-5.976-4.644a5.951,5.951,0,0,0-7.917.488l-6.3,6.3a5.964,5.964,0,0,0-.508,7.945l4.644,5.976a37.363,37.363,0,0,0-2.276,5.5l-7.509.956A5.991,5.991,0,0,0,0,43.523v8.961a5.991,5.991,0,0,0,5.268,5.944l7.521.956a37.8,37.8,0,0,0,2.276,5.5l-4.644,5.98a5.946,5.946,0,0,0,.488,7.917l6.3,6.3a5.967,5.967,0,0,0,7.941.5l5.976-4.644a36.93,36.93,0,0,0,5.5,2.276l.956,7.5a5.992,5.992,0,0,0,5.944,5.288h8.961a5.991,5.991,0,0,0,5.944-5.268l.956-7.521a37.8,37.8,0,0,0,5.5-2.276l5.98,4.644a5.946,5.946,0,0,0,7.917-.488l6.3-6.3a5.959,5.959,0,0,0,.508-7.941l-4.644-5.976a36.932,36.932,0,0,0,2.276-5.5l7.5-.956A5.991,5.991,0,0,0,96,52.484V43.523a5.984,5.984,0,0,0-5.264-5.944ZM48,68A20,20,0,1,1,68,48,20.024,20.024,0,0,1,48,68Z" transform="translate(0 0)" fill="none" stroke="#707070" strokeWidth={1} />
                            </g>
                        </g>
                        <g id="cloud-3" data-name="cloud" transform="translate(-124 -10143)">
                            <rect id="Rectangle_26-3" data-name="Rectangle 26" width={602} height={450} rx={20} transform="translate(1063 11183)" fill="#3a3a3a" />
                            <path id="Polygon_1-3" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(1034 11352.261) rotate(-90)" fill="#3a3a3a" />
                            <text id="The_Bell_Rings_sales_opportunity_framework_pipeline_management_" data-name="The Bell Rings sales opportunity framework & pipeline management
                        " transform="translate(1136.88 11239.644)" fill="#fff" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.5"><tspan x={0} y={32}>The bell rings sales </tspan><tspan x={0} y={67}>opportunity framework &amp; </tspan><tspan x={0} y={102}> & pipeline management</tspan></text>
                            <text id="You_ll_know_what_to_do_next_in_each_deal_and_how_to_do_it._It_s_like_a_GPS_system_for_B2B_software_SaaS_sellers._You_will_never_feel_lost_in_a_deal_ever_again._You_will_focus_on_the_right_deals_and_be_able_to_close_them_efficiently_and_with_predictable_a" data-name="You???ll know what to do next in each deal and how to do it. It???s like a GPS system for B2B software & SaaS sellers. You will never feel lost in a deal ever again. You will focus on the right deals and be able to close them efficiently and with predictable a" transform="translate(1136.88 11380.161)" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>You???ll know what to do next in each deal and how to </tspan><tspan x={0} y={41}>do it. It???s like a GPS system for B2B software &amp; SaaS </tspan><tspan x={0} y={63}>sellers. You will never feel lost in a deal ever again. </tspan><tspan x={0} y={85}>You will focus on the right deals and be able to </tspan><tspan x={0} y={107}>close them efficiently and with predictable </tspan><tspan x={0} y={129}>accuracy. You will develop a highly qualified, 4x </tspan><tspan x={0} y={151}>sales pipeline and tangible metrics will be used to </tspan><tspan x={0} y={173}>produce accurate sales forecasts.</tspan></text>
                        </g>
                        <g id="cloud-4" data-name="cloud" transform="translate(0 1456)">
                            <rect id="Rectangle_26-4" data-name="Rectangle 26" width={602} height={440} rx={20} fill="#3a3a3a" />
                            <path id="Polygon_1-4" data-name="Polygon 1" d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z" transform="translate(631 107.26) rotate(90)" fill="#3a3a3a" />
                            <text id="Sales_funnel_optimization_automation_" data-name="Sales funnel optimization & automation
                        " transform="translate(54 54.394)" fill="#fff" fontSize={30} fontFamily="Poppins-Bold, Poppins" fontWeight={700} opacity="0.5"><tspan x={0} y={32}>Software / SaaS sales funnel</tspan><tspan x={0} y={67}>&amp;  optimisation</tspan></text>
                            <text transform="translate(54 156.645)" id="You_will_excel_in_each_stage_of_the_sales_funnel_-_from_prospecting_through_to_CLOSED-WON._You_will_experience_the_latest_sales_tools_and_resources_to_automate_aspects_of_the_Bell_Rings_Sales_Acceleration_Blueprint._Templates_guides_and_strategies_that_se" data-name="You will excel in each stage of the sales funnel - from prospecting through to CLOSED-WON. You will experience the latest sales tools and resources to automate aspects of the Bell Rings Sales Acceleration Blueprint. Templates, guides and strategies that se" fontSize={18} fontFamily="Poppins-Medium, Poppins" fontWeight={500}><tspan x={0} y={19}>You will excel in each stage of the sales funnel - </tspan><tspan x={0} y={41}>from prospecting through to CLOSED-WON. You will </tspan><tspan x={0} y={63}>experience the latest sales tools and resources to </tspan><tspan x={0} y={85}>automate aspects of the Bell Rings Sales </tspan><tspan x={0} y={107}>Acceleration Blueprint. Templates, guides and </tspan><tspan x={0} y={129}>strategies that separate the #1 software sales folk </tspan><tspan x={0} y={151}>from the rest. You will embrace social selling like a </tspan><tspan x={0} y={173}>champion and win in competitive sales situations. </tspan><tspan x={0} y={195}>Your prospecting efforts will continue even as you </tspan><tspan x={0} y={217}>sleep.</tspan></text>
                        </g>
                    </svg>

                </div>
            </div>

            <div className="stepSec onlyMobSection">
                <div className="container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        viewBox="0 0 1552 3523"
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
                        <text
                            id="Steps_to_sales_excellence_"
                            data-name="Steps to sales excellence 
                        "
                            transform="translate(117 84)"
                            fill="#fff"
                            fontSize={100}
                            fontFamily="Poppins-SemiBold, Poppins"
                            fontWeight={600}
                        >
                            <tspan x={0} y={105}>
                            Steps to sales excellence{" "}
                            </tspan>
                        </text>
                        <text
                            id="How_it_works"
                            data-name="How it works"
                            transform="translate(511)"
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
                            id="Invest_in_your_sales_team._Empower_them_with_a_proven_complete_and_repeatable_sales_process_used_by_the_top_sales_professionals_in_software_and_technology_startups_scaleups_and_magic_quadrant_companies_all_over_the_world_to_close_any_big-ticket_or_comp"
                            data-name="Invest in your sales team. Empower them with a proven, complete and repeatable sales process used by the top sales professionals in software and technology startups, scaleups and ???magic quadrant??? companies all over the world to close any big-ticket or comp"
                            transform="translate(0 242)"
                            fill="#fff"
                            fontSize={40}
                            fontFamily="Poppins-Regular, Poppins"
                        >
                            <tspan x={0} y={42}>
                            Invest in your sales team. Empower them with a proven, complete and{" "}
                            </tspan>
                            <tspan x={0} y={102}>
                            repeatable sales process used by the top sales professionals in software
                            and{" "}
                            </tspan>
                            <tspan x={0} y={162}>
                            technology startups, scaleups and ???magic quadrant??? companies all over the{" "}
                            </tspan>
                            <tspan x={0} y={222}>
                            world to close any big-ticket or complex enterprise software/SaaS sale{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                            intelligently. We will work on your sales team???s existing opportunity
                            pipeline{" "}
                            </tspan>
                            <tspan x={0} y={342}>
                            and they will learn the latest tried and tested strategies to reduce deal
                            risk{" "}
                            </tspan>
                            <tspan x={0} y={402}>
                            and convert more deals to CLOSED-WON. Your sales team members will{" "}
                            </tspan>
                            <tspan x={0} y={462}>
                            apply what they learn and we???ll overcome any hurdles they come across.{" "}
                            </tspan>
                            <tspan x={0} y={522}>
                            Your sales team will start to make you look very good. Get your team on
                            the{" "}
                            </tspan>
                            <tspan x={0} y={582}>
                            Join the #1 software and SaaS sales acceleration programme today.{" "}
                            </tspan>
                        </text>
                        <g id="Group_8" data-name="Group 8" transform="translate(-960 -10124)">
                            <rect
                            id="Rectangle_25"
                            data-name="Rectangle 25"
                            width={7}
                            height={2041}
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
                            <g id="Group_7" data-name="circlePrg" transform="translate(960 13094.151)">
                            <circle
                                id="Ellipse_5"
                                data-name="Ellipse 5"
                                cx="94.5"
                                cy="94.5"
                                r="94.5"
                                transform="translate(0 -0.151)"
                                fill="#3a3a3a"
                            />
                            <text
                                id="_4"
                                data-name={4}
                                transform="translate(77 112.849)"
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
                            <g id="Group_5" data-name="circlePrg" transform="translate(960 11806.583)">
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
                            <g id="Group_6" data-name="circlePrg" transform="translate(960 12429.737)">
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
                        </g>
                        <g id="cloud" transform="translate(-817 -10241)">
                            <rect
                            id="Rectangle_26"
                            data-name="Rectangle 26"
                            width={1306}
                            height={662}
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
                            id="Transformational_1-2-1_Software_SaaS_Sales_Coaching"
                            data-name="Transformational 1-2-1 Software/SaaS Sales Coaching"
                            transform="translate(1127 11266)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={63}>
                                Transformational 1-2-1 Software/
                            </tspan>
                            <tspan x={0} y={123}>
                                SaaS Sales Coaching
                            </tspan>
                            </text>
                            <text
                            id="Training_is_an_event_that_happens._You_hardly_retain_10_._The_Bell_Rings_Sales_Acceleration_programme_is_unrivalled_1-2-1_coaching_that_happens_with_you._You_ll_be_applying_practical_proven_knowledge_and_strategies_from_the_get_go_on_the_sales_opportuniti"
                            data-name="Training is an event that happens. You hardly retain 10%. The Bell Rings Sales Acceleration programme is unrivalled 1-2-1 coaching that happens with you. You???ll be applying practical, proven knowledge and strategies from the get go on the sales opportuniti"
                            transform="translate(1127 11413)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={37}>
                                Training is an event that happens. You hardly retain 10%. The Bell{" "}
                            </tspan>
                            <tspan x={0} y={75}>
                                Rings Sales Acceleration programme is unrivalled 1-2-1 coaching{" "}
                            </tspan>
                            <tspan x={0} y={113}>
                                that happens with you. You???ll be applying practical, proven{" "}
                            </tspan>
                            <tspan x={0} y={151}>
                                knowledge and strategies from the get go on the sales{" "}
                            </tspan>
                            <tspan x={0} y={189}>
                                opportunities you???re working on right now. See the payback on all{" "}
                            </tspan>
                            <tspan x={0} y={227}>
                                your sales activities. You will be personally mentored via a total of{" "}
                            </tspan>
                            <tspan x={0} y={265}>
                                4, weekly,{" "}
                            </tspan>
                            <tspan x={0} y={303}>
                                90-minute ZOOM sessions by your inspirational sales coach.{" "}
                            </tspan>
                            </text>
                        </g>
                        <g id="cloud-2" data-name="cloud" transform="translate(-817 -9527)">
                            <rect
                            id="Rectangle_26-2"
                            data-name="Rectangle 26"
                            width={1306}
                            height={571}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                            />
                            <path
                            id="Polygon_1-2"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11337) rotate(-90)"
                            fill="#fff"
                            />
                            <text
                            id="Sales_DNA_of_a_Winner"
                            data-name="Sales DNA of a Winner"
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={63}>
                                Sales DNA of a Winner
                            </tspan>
                            </text>
                            <text
                            id="We_will_examine_personal_positioning_discipline_and_sales_accountability._You_will_learn_to_stand_out_as_a_subject_matter_expert._The_key_is_genuine_value_creation._You_will_learn_how_to_create_emotional_and_logical_value_that_will_compel_your_prospects"
                            data-name="We will examine ???personal positioning???, discipline and sales accountability. You will learn to stand out as a subject matter expert. The key is genuine value creation. You will learn how to create emotional and logical value that will compel your prospects"
                            transform="translate(1129 11344)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={37}>
                                We will examine ???personal positioning???, discipline and sales{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                                accountability. You will learn to stand out as a subject matter{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                                expert. The key is genuine value creation. You will learn how to{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                                create emotional and logical value that will compel your{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                                prospects to buy. You will also embrace the four best pieces of{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                                software sales advice ever that will see your conversion rates{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                                skyrocket as you become used to earning more commissions{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                                consistently.{" "}
                            </tspan>
                            <tspan x={0} y={317} />
                            </text>
                        </g>
                        <g id="cloud-3" data-name="cloud" transform="translate(-817 -8258)">
                            <rect
                            id="Rectangle_26-3"
                            data-name="Rectangle 26"
                            width={1306}
                            height={598}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                            />
                            <path
                            id="Polygon_1-3"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11357) rotate(-90)"
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
                            id="You_will_excel_in_each_stage_of_the_sales_funnel_-_from_prospecting_through_to_CLOSED-WON._You_will_experience_the_latest_sales_tools_and_resources_to_automate_aspects_of_the_Bell_Rings_Sales_Acceleration_Blueprint._Templates_guides_and_strategies_that_se"
                            data-name="You will excel in each stage of the sales funnel - from prospecting through to CLOSED-WON. You will experience the latest sales tools and resources to automate aspects of the Bell Rings Sales Acceleration Blueprint. Templates, guides and strategies that se"
                            transform="translate(1129 11342)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={37}>
                                You will excel in each stage of the sales funnel - from prospecting{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                                through to CLOSED-WON. You will experience the latest sales{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                                tools and resources to automate aspects of the Bell Rings Sales{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                                Acceleration Blueprint. Templates, guides and strategies that{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                                separate the #1 software sales folk from the rest. You will{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                                embrace social selling like a champion and win in competitive{" "}
                            </tspan>
                            <tspan x={0} y={247}>
                                sales{" "}
                            </tspan>
                            <tspan x={0} y={282}>
                                situations. Your prospecting efforts will continue even as you{" "}
                            </tspan>
                            <tspan x={0} y={317}>
                                sleep.
                            </tspan>
                            </text>
                        </g>
                        <g id="cloud-4" data-name="cloud" transform="translate(-817 -8904)">
                            <rect
                            id="Rectangle_26-4"
                            data-name="Rectangle 26"
                            width={1306}
                            height={594}
                            rx={20}
                            transform="translate(1063 11183)"
                            fill="#fff"
                            />
                            <path
                            id="Polygon_1-4"
                            data-name="Polygon 1"
                            d="M28.375,4.741a3,3,0,0,1,5.249,0l25.91,46.806A3,3,0,0,1,56.91,56H5.09a3,3,0,0,1-2.625-4.453Z"
                            transform="translate(1034 11337) rotate(-90)"
                            fill="#fff"
                            />
                            <text
                            id="The_Bell_Rings_Sales_Opportunity_Framework_Pipeline_Management_"
                            data-name="The Bell Rings Sales Opportunity Framework & Pipeline Management "
                            transform="translate(1129 11254)"
                            fontSize={60}
                            fontFamily="Poppins-Bold, Poppins"
                            fontWeight={700}
                            >
                            <tspan x={0} y={63}>
                                The Bell Rings Sales Opportunity{" "}
                            </tspan>
                            <tspan x={0} y={123}>
                                Framework &amp; Pipeline Management{" "}
                            </tspan>
                            </text>
                            <text
                            id="You_ll_know_what_to_do_next_in_each_deal_and_how_to_do_it._It_s_like_a_GPS_system_for_B2B_software_SaaS_sellers._You_will_never_feel_lost_in_a_deal_ever_again._You_will_focus_on_the_right_deals_and_be_able_to_close_them_efficiently_and_with_predictable_a"
                            data-name="You???ll know what to do next in each deal and how to do it. It???s like a GPS system for B2B software & SaaS sellers. You will never feel lost in a deal ever again. You will focus on the right deals and be able to close them efficiently and with predictable a"
                            transform="translate(1129 11400)"
                            fontSize={35}
                            fontFamily="Poppins-Medium, Poppins"
                            fontWeight={500}
                            >
                            <tspan x={0} y={37}>
                                You???ll know what to do next in each deal and how to do it. It???s like{" "}
                            </tspan>
                            <tspan x={0} y={72}>
                                a GPS system for B2B software &amp; SaaS sellers. You will never feel{" "}
                            </tspan>
                            <tspan x={0} y={107}>
                                lost in a deal ever again. You will focus on the right deals and be{" "}
                            </tspan>
                            <tspan x={0} y={142}>
                                able to close them efficiently and with predictable accuracy. You{" "}
                            </tspan>
                            <tspan x={0} y={177}>
                                will develop a highly qualified, 4x sales pipeline and tangible{" "}
                            </tspan>
                            <tspan x={0} y={212}>
                                metrics will be used to produce accurate sales forecasts.{" "}
                            </tspan>
                            </text>
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
                    <span>Get Instant Access To The</span>
                    <h1>FREE Deal Sheet</h1>
                    <p>Why do some software & SaaS sales professionals enjoy 'celebrity like' status at work and at home? Get the single, most powerful tool for B2B software and SaaS sellers ever! This is the closest you will get to someone emailing you GOLD.Imagine a tried and tested framework to close any software sales deal. You can track and measure your progress towards CLOSED-WON.</p>
                    <p style={{width: "100%", fontWeight: 700}}>Focus on the right deals <span style={{color: "#aadc83"}}>???</span> Prioritize your sales activities <span style={{color: "#aadc83"}}>???</span> Reduce deal risk <span style={{color: "#aadc83"}}>???</span> Generate more revenue</p>
                    <custom style={{color: "rgba(255,255,255,0.7)", fontSize: '12px', float: "right", marginRight: "60px", fontWeight: 600}}>*By submitting this form, you agree to our Privacy Policy & Terms of Service</custom>
                </div>
                <form className="inlineForm">
                    <input placeholder="Enter Your Name Here..." required/>
                    <input placeholder="Enter Preferred Email Here..." required/>
                    <button type="submit">Count me in</button>
                </form>
            </div>

            <div className="ourServicesSec">
                <div className="ourServicesBanner">
                    <div className="serContent onlyWebSection">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1382 300">
                            <text id="Results" transform="translate(0 27)" fill="#fff" fontSize={22} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600} letterSpacing="0.1em" opacity="0.54"><tspan x={0} y={0}>RESULTS</tspan></text>
                            <text id="What_will_your_sales_transformation_look_like_" data-name="What will your sales transformation look like?" transform="translate(0 45)" fill="#fff" fontSize={60} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={64}>What will your sales </tspan><tspan x={0} y={134}>transformation look like?</tspan></text>
                            <text id="You_re_going_to_be_thinking_differently_and_operating_differently_from_the_very_first_session_itself._When_you_re_working_on_your_software_SaaS_sales_opportunities_differently_the_results_will_be_nothing_like_the_status_quo." data-name="You???re going to be thinking differently and operating differently from the very first session itself. When you???re working on your software/SaaS sales opportunities differently, the results will be nothing like the status quo." transform="translate(0 256)" fill="#fff" fontSize={20} fontFamily="Poppins-SemiBold, Poppins" fontWeight={600}><tspan x={0} y={0}>You???re going to be thinking differently and operating differently from the very first session itself. When you???re </tspan><tspan x={0} y={30}>working on your software/SaaS sales opportunities differently, the results will be nothing like the status quo.</tspan></text>
                        </svg>

                    </div>
                    <div className="serContent onlyMobSection">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 1417 565"
                            >
                            <text
                                id="Results"
                                transform="translate(0 38)"
                                fill="#fff"
                                fontSize={36}
                                fontFamily="Poppins-SemiBold, Poppins"
                                fontWeight={600}
                                letterSpacing="0.1em"
                                opacity="0.54"
                            >
                                <tspan x={0} y={0}>
                                RESULTS
                                </tspan>
                            </text>
                            <text
                                id="What_will_your_sales_transformation_look_like_"
                                data-name="What will your sales transformation look like?"
                                transform="translate(0 56)"
                                fill="#fff"
                                fontSize={100}
                                fontFamily="Poppins-SemiBold, Poppins"
                                fontWeight={600}
                            >
                                <tspan x={0} y={105}>
                                What Will Your Sales{" "}
                                </tspan>
                                <tspan x={0} y={215}>
                                Transformation Look Like?
                                </tspan>
                            </text>
                            <text
                                id="You_re_going_to_be_thinking_differently_and_operating_differently_from_the_very_first_session_itself._When_you_re_working_on_your_software_SaaS_sales_opportunities_differently_the_results_will_be_nothing_like_the_status_quo."
                                data-name="You???re going to be thinking differently and operating differently from the very first session itself. When you???re working on your software/SaaS sales opportunities differently, the results will be nothing like the status quo."
                                transform="translate(0 324)"
                                fill="#fff"
                                fontSize={40}
                                fontFamily="Poppins-SemiBold, Poppins"
                                fontWeight={600}
                            >
                                <tspan x={0} y={42}>
                                You???re going to be thinking differently and operating differently from{" "}
                                </tspan>
                                <tspan x={0} y={102}>
                                the very first session itself. When you???re working on your software/
                                </tspan>
                                <tspan x={0} y={162}>
                                SaaS sales opportunities differently, the results will be nothing like the{" "}
                                </tspan>
                                <tspan x={0} y={222}>
                                status quo.
                                </tspan>
                            </text>
                        </svg>
                    </div>
                </div>
                <div className="mt-5"></div>
                <div className="serviceCardRow">
                    <div className="column" style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .targetCls-1 {\n        fill: #131212;\n      }\n\n      .targetCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .targetCls-3 {\n        fill: url(#targets) !important;\n      }\n\n      .targetCls-4, .targetCls-5 {\n        fill: #fff;\n      }\n\n      .targetCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .targetCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="targets" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/darts.png" />
                                </pattern>
                            </defs>
                            <g id="cardTarget" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="targetCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="targetCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="targetCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Your_targets_quota" data-name="Your targets/quota" className="targetCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Your targets/quota</tspan></text>
                                <text id="Sales_targets_become_a_nonissue_as_you_crush_them_consistently_and_RING_THE_BELL_" data-name="Sales targets become a nonissue as you crush them consistently and RING THE BELL!" className="targetCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Sales targets become a nonissue </tspan><tspan x={0} y={53}>as you crush them consistently </tspan><tspan x={0} y={83}>and RING THE BELL!</tspan></text>
                            </g>
                        </svg>
                    </div>
                    <div className="column"  style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .demandCls-1 {\n        fill: #131212;\n      }\n\n      .demandCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .demandCls-3 {\n        fill: url(#demandPattern);\n      }\n\n      .demandCls-4, .demandCls-5 {\n        fill: #fff;\n      }\n\n      .demandCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .demandCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="demandPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/calendar.png" />
                                </pattern>
                            </defs>
                            <g id="cardDemand" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="demandCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="demandCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="demandCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Be_in_demand_" data-name="Be in demand
                            " className="demandCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Be in demand</tspan></text>
                                <text id="Your_calendar_is_jammed_with_meetings_with_prospects_who_are_keener_than_ever." data-name="Your calendar is jammed with meetings with prospects who are keener than ever." className="demandCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Your calendar is jammed with </tspan><tspan x={0} y={53}>meetings with prospects who are </tspan><tspan x={0} y={83}>keener than ever.</tspan></text>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="serviceCardRow">
                    <div className="column" style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .pipelineCls-1 {\n        fill: #131212;\n      }\n\n      .pipelineCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .pipelineCls-3 {\n        fill: url(#demandPattern);\n      }\n\n      .pipelineCls-4, .pipelineCls-5 {\n        fill: #fff;\n      }\n\n      .pipelineCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .pipelineCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="demandPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/sales-funnel.png" />
                                </pattern>
                            </defs>
                            <g id="demandCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="pipelineCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="pipelineCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="pipelineCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Pipeline_magic_" data-name="Pipeline magic
                            " className="pipelineCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Pipeline magic</tspan></text>
                                <text id="Your_sales_pipeline_will_be_on_steroids._Always_full_easily_4-6x_your_sales_quota_target." data-name="Your sales pipeline will be on steroids. Always full ??? easily 4-6x your sales quota/target." className="pipelineCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Your sales pipeline will be on </tspan><tspan x={0} y={53}>steroids. Always full ??? easily 4-6x </tspan><tspan x={0} y={83}>your sales quota/target.</tspan></text>
                            </g>
                        </svg>
                    </div>
                    <div className="column"  style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .compellingCls-1 {\n        fill: #131212;\n      }\n\n      .compellingCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .compellingCls-3 {\n        fill: url(#compelPattern);\n      }\n\n      .compellingCls-4, .compellingCls-5 {\n        fill: #fff;\n      }\n\n      .compellingCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .compellingCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="compelPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/web-design.png" />
                                </pattern>
                            </defs>
                            <g id="compellingCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="compellingCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="compellingCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="compellingCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Compelling_demos_" data-name="Compelling demos
                            " className="compellingCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Compelling demos</tspan></text>
                                <text id="Demo_to_WIN._Your_demos_will_razor-sharp_in_focus_and_will_keep_your_prospects_hooked." data-name="Demo to WIN. Your demos will razor-sharp in focus and will keep your prospects hooked." className="compellingCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Demo to WIN. Your demos will </tspan><tspan x={0} y={53}>razor-sharp in focus and will keep </tspan><tspan x={0} y={83}>your prospects hooked.</tspan></text>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="serviceCardRow">
                    <div className="column" style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .winningCls-1 {\n        fill: #131212;\n      }\n\n      .winningCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .winningCls-3 {\n        fill: url(#winPattern);\n      }\n\n      .winningCls-4, .winningCls-5 {\n        fill: #fff;\n      }\n\n      .winningCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .winningCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="winPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/success.png" />
                                </pattern>
                            </defs>
                            <g id="winningCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="winningCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="winningCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="winningCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Winning_proposals_" data-name="Winning proposals

                            " className="winningCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Winning proposals</tspan></text>
                                <text id="Send_out_more_proposals_to_prospects_have_been_chasing_you_ready_to_engage_and_buy" data-name="Send out more proposals to prospects have been chasing you ??? ready to engage and buy" className="winningCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Send out more proposals to </tspan><tspan x={0} y={53}>prospects have been chasing you </tspan><tspan x={0} y={83}>??? ready to engage and buy</tspan></text>
                            </g>
                        </svg>
                    </div>
                    <div className="column"  style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .dealsCls-1 {\n        fill: #131212;\n      }\n\n      .dealsCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .dealsCls-3 {\n        fill: url(#dealsPattern);\n      }\n\n      .dealsCls-4, .dealsCls-5 {\n        fill: #fff;\n      }\n\n      .dealsCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .dealsCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="dealsPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/handshake.png" />
                                </pattern>
                            </defs>
                            <g id="dealsCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="dealsCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="dealsCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="dealsCls-3" width={100} height={100} transform="translate(567 9343)" />
                                </g>
                                <text id="Larger_deal_values_" data-name="Larger deal values
                            " className="dealsCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Larger deal values</tspan></text>
                                <text id="Your_average_software_and_SaaS_deal_value_climbs._No_more_reliance_insane_discounting." data-name="Your average software and SaaS deal value climbs. No more reliance insane discounting." className="dealsCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Your average software and SaaS </tspan><tspan x={0} y={53}>deal value climbs. No more </tspan><tspan x={0} y={83}>reliance insane discounting.</tspan></text>
                            </g>
                        </svg>

                    </div>
                </div>
                <div className="serviceCardRow">
                    <div className="column" style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .cyclesCls-1 {\n        fill: #131212;\n      }\n\n      .cyclesCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .cyclesCls-3 {\n        fill: url(#cycPattern);\n      }\n\n      .cyclesCls-4, .cyclesCls-5 {\n        fill: #fff;\n      }\n\n      .cyclesCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .cyclesCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="cycPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/looping-arrows.png" />
                                </pattern>
                            </defs>
                            <g id="cyclesCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="cyclesCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="cyclesCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="cyclesCls-3" width={100} height={100} transform="translate(567 9343.001)" />
                                </g>
                                <text id="Shorter_sales_cycles_" data-name="Shorter sales cycles
                            " className="cyclesCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Shorter sales cycles</tspan></text>
                                <text id="Slash_your_typical_sales_cycle._Your_repeatable_process_will_help_you_close_complex_deals_quicker." data-name="Slash your typical sales cycle. Your repeatable process will help you close complex deals quicker." className="cyclesCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Slash your typical sales cycle. Your </tspan><tspan x={0} y={53}>repeatable process will help you </tspan><tspan x={0} y={83}>close complex deals quicker.</tspan></text>
                            </g>
                        </svg>
                    </div>
                    <div className="column"  style={{flex: 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 746 219">
                            <defs>
                                <style dangerouslySetInnerHTML={{__html: "\n      .funnelCls-1 {\n        fill: #131212;\n      }\n\n      .funnelCls-2 {\n        fill: #1c1c1c;\n      }\n\n      .funnelCls-3 {\n        fill: url(#funnelPattern);\n      }\n\n      .funnelCls-4, .funnelCls-5 {\n        fill: #fff;\n      }\n\n      .funnelCls-4 {\n        font-size: 30px;\n        font-family: Poppins-Bold, Poppins;\n        font-weight: 700;\n      }\n\n      .funnelCls-5 {\n        font-size: 22px;\n        font-family: Poppins-Regular, Poppins;\n      }\n    " }} />
                                <pattern id="funnelPattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 128 128">
                                <image width={128} height={128} xlinkHref="/assets/icons/automation.png" />
                                </pattern>
                            </defs>
                            <g id="funnelCard" data-name="card 2" transform="translate(-391 -9265)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" className="funnelCls-1" width={746} height={219} rx={15} transform="translate(391 9265)" />
                                <g id="image" transform="translate(-112 -18)">
                                <rect id="Rectangle_34" data-name="Rectangle 34" className="funnelCls-2" width={192} height={192} rx={15} transform="translate(521 9297)" />
                                <rect id="browser" className="funnelCls-3" width={100} height={100} transform="translate(567 9343.001)" />
                                </g>
                                <text id="Sales_Funnel_Automation_" data-name="Sales Funnel Automation
                            " className="funnelCls-4" transform="translate(632 9302)"><tspan x={0} y={32}>Sales Funnel Automation</tspan></text>
                                <text id="Make_traditionally_time-intensive_activities_easier_than_ever_with_intelligent_automation_tools._" data-name="Make traditionally time-intensive activities easier than ever with intelligent automation tools.
                            " className="funnelCls-5" transform="translate(632 9356)"><tspan x={0} y={23}>Make traditionally time-intensive </tspan><tspan x={0} y={53}>activities easier than ever with </tspan><tspan x={0} y={83}>intelligent automation tools.</tspan></text>
                            </g>
                        </svg>
                    </div>
                </div>
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

export default Audience1;