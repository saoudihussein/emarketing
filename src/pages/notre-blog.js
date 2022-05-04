import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import "./notre-blog.css";
import referenceSEO from "../images/blog-1.webp";
import emailingCompagne from "../images/campagne-emailing.webp";
import formation from "../images/formation.webp";


const blogs = [
    {
        "id": 1,
        "dd": "08",
        "mm": "JANV",
        "yy": 2021,
        "blog-title": "Elaborer une stratégie de référencement (SEO)",
        "blog-description": "La place du référencement dans la stratégie marketing online La grande majorité du trafic Internet provient des principaux moteurs...",
        "pic": referenceSEO
    },
    {
        "id": 2,
        "dd": "08",
        "mm": "JANV",
        "yy": 2021,
        "blog-title": "L’emailing pour votre Business",
        "blog-description": "Depuis plusieurs années déjà nous observons l’émergence de nombreuses start-ups dans tous les domaines possibles. En effet, ce phénomène va s’accélérer...",
        "pic": emailingCompagne
    },
    {
        "id": 3,
        "dd": "07",
        "mm": "JANV",
        "yy": 2021,
        "blog-title": "Le digital marketing et ses 5 mondes",
        "blog-description": "Pour les non-initiés, le marketing digital est un véritable méli-mélo: de nombreux acteurs et intermédiaires, des technologies et des...",
        "pic": formation
    }

]


export const NewBlogs = () => {
    const items = blogs.slice(0, 3)
    return (
        <>
            {items.map((blog) => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                        <div className="card h-100">
                            <img loading={"lazy"} style={{ height: "300px" }} src={blog.pic} className="img-fluid" alt="Image service" />
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-3 vr">
                                        <p className="jj-blog">{blog.dd}</p>
                                        <span className="mm-blog">{blog.mm}</span>
                                        <span className="yy-blog">{blog.yy}</span>
                                    </div>


                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col">
                                                <Link className="blog-link" aria-current="page" to="#">Marketing</Link><span className="blog-link">,</span>
                                                <Link className="blog-link" aria-current="page" to="#">SEO</Link><span className="blog-link">,</span>
                                                <Link className="blog-link" aria-current="page" to="#">Tool</Link>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <Link className="blog-title" aria-current="page" to="#">
                                                    {blog["blog-title"]}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text mt-4">
                                    {blog["blog-description"]}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export const NewBlogsFooter = () => {
    const items = blogs.slice(0, 3)
    return (
        <>
            {items.map((blog) => {
                return (
                    <li>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <img loading={"lazy"} className="img-fluid" width="73" height="73" src={blog.pic} alt="emarketing.tn" />
                            </div>
                            <div className="col-9 col-md-9 col-sm-12">
                                <p>{blog["blog-title"]}</p>
                                <p>{blog.dd}&nbsp; {blog.mm}. {blog.yy}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </>

    )
}


export const BlogPage = () => {

    return (
        <>
            <Helmet>
                <title>Notre Blog - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="La place du référencement dans la stratégie marketing online La grande majorité du trafic Internet provient des principaux moteurs de recherche : Google, Bing, Yahoo ! C’est d’autant plus vrai si vous n’avez pas ou très peu de budget à investir dans Google Adwords par exemple. La contribution des moteurs de recherche via le SEO est d’autant plus importante..." />
            </Helmet>

            <Layout>

                <div className="container-fluid blog-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Blog Du Digital Marketing
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="/">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Blog
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 mt-5">



                            {blogs.map((blog) => {
                                return (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card h-100">
                                                <img loading={"lazy"} src={blog.pic} className="img-fluid" alt="Image service" />
                                                <div className="card-body">

                                                    <div className="row">
                                                        <div className="col-3 vr">
                                                            <p className="jj-blog">{blog.dd}</p>
                                                            <span className="mm-blog">{blog.mm}</span>
                                                            <span className="yy-blog">{blog.yy}</span>
                                                        </div>


                                                        <div className="col-9">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Link className="blog-link" aria-current="page" to="#">Marketing</Link><span className="blog-link">,</span>
                                                                    <Link className="blog-link" aria-current="page" to="#">SEO</Link><span className="blog-link">,</span>
                                                                    <Link className="blog-link" aria-current="page" to="#">Tool</Link>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col">
                                                                    <Link className="blog-title" aria-current="page" to="#">
                                                                        {blog["blog-title"]}
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="card-text mt-4">
                                                        {blog["blog-description"]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }


                        </div>
                        <div className="col-lg-3 col-sm-12 mt-5 pl-5">
                            <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                style={{ border: "none", overflow: "hidden", width: "auto" }} scrolling="no" frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    )

}
export default BlogPage;