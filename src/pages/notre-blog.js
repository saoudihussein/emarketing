import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import "./notre-blog.css";
import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";
import referenceSEO from "../images/blog-1.webp";
import emailingCompagne from "../images/campagne-emailing-362x421.webp";
import formation from "../images/formation-362x421.webp";


const BlogPage = () => {

    return (
        <>
            <Helmet>
                <title>Notre Blog - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="La place du référencement dans la stratégie marketing online La grande majorité du trafic Internet provient des principaux moteurs de recherche : Google, Bing, Yahoo ! C’est d’autant plus vrai si vous n’avez pas ou très peu de budget à investir dans Google Adwords par exemple. La contribution des moteurs de recherche via le SEO est d’autant plus importante..." />
            </Helmet>

            <Layout>
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                        <div class="card h-100">
                            <img src={referenceSEO} class="img-fluid" alt="Image service" />
                            <div class="card-body">

                                <div className="row">
                                    <div className="col-3 vr">
                                        <p className="jj-blog">08</p>
                                        <span className="mm-blog">JANV </span>
                                        <span className="yy-blog">2021</span>
                                    </div>


                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col">
                                                <Link class="blog-link" aria-current="page" to="#">Marketing</Link><span class="blog-link">,</span>
                                                <Link class="blog-link" aria-current="page" to="#">SEO</Link><span class="blog-link">,</span>
                                                <Link class="blog-link" aria-current="page" to="#">Tool</Link>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <Link className="blog-title" aria-current="page" to="#">Le digital marketing et ses 5 mondes</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text mt-4">
                                    La place du référencement dans la stratégie marketing online La grande majorité du trafic Internet provient des principaux moteurs...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                        <div class="card h-100">
                            <img src={emailingCompagne} class="img-fluid" alt="Image service" />
                            <div class="card-body">

                                <div className="row">
                                    <div className="col-3 vr">
                                        <p className="jj-blog">08</p>
                                        <span className="mm-blog">JANV </span>
                                        <span className="yy-blog">2021</span>
                                    </div>


                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col">
                                                <Link class="blog-link" aria-current="page" to="#">SEO</Link><span class="blog-link">,</span>
                                                <Link class="blog-link" aria-current="page" to="#">Tool</Link>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <Link className="blog-title" aria-current="page" to="#">
                                                    L’emailing pour votre Business
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text mt-4">
                                    Depuis plusieurs années déjà nous observons l’émergence de nombreuses start-ups dans tous les domaines possibles. En effet, ce phénomène va s’accélérer...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                        <div class="card h-100">
                            <img src={formation} class="img-fluid" alt="Image service" />
                            <div class="card-body">

                                <div className="row">
                                    <div className="col-3 vr">
                                        <p className="jj-blog">07</p>
                                        <span className="mm-blog">JANV </span>
                                        <span className="yy-blog">2021</span>
                                    </div>


                                    <div className="col-9">
                                        <div className="row">
                                            <div className="col">
                                                <Link class="blog-link" aria-current="page" to="#">Marketing</Link><span class="blog-link">,</span>
                                                <Link class="blog-link" aria-current="page" to="#">SEO</Link><span class="blog-link">,</span>
                                                <Link class="blog-link" aria-current="page" to="#">Tool</Link>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <Link className="blog-title" aria-current="page" to="#">Le digital marketing et ses 5 mondes</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text mt-4">
                                    Pour les non-initiés, le marketing digital est un véritable méli-mélo: de nombreux acteurs et intermédiaires, des technologies et des...
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="container mt-5 pb-5">

                    <img src={referenceSEO} class="card-img-top" alt="..." />

                    {/* <div className="col-lg-5 col-sm-12 mt-5 pl-5">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                style={{ border: "none", overflow: "hidden", width: "380%" }} scrolling="no" frameBorder="0" allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div> */}
                </div>

            </Layout>

        </>
    )

}
export default BlogPage;