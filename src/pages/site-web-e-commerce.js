import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './site-web-e-commerce.css';
import icon1 from "../images/icon-25.webp";
import icon2 from "../images/icon-26-e1488014343563.webp";
import icon3 from "../images/icon-27.webp";
import Helmet from "react-helmet";
import { NewBlogs } from "./notre-blog";



const SiteWebPage = () => {
    return (
        <>
            <Helmet>
                <title>Accompagnement en Digital Marketing - Emarketing.tn</title>
                <meta name="description" content="Création ou refonte d’un site Web E-Commerce, nous avons mis en place un processus optimisé pour le développement de votre projet." />
            </Helmet>

            <Layout>
                <div className="container-fluid site-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Site Web & E-Commerce
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Site Web & E-Commerce
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5 ">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h1 className="digit-h3-style">
                                Création Graphique
                            </h1>
                            <p className="p-style-seo pt-2">
                                le département emarketing.tn d’IMSC assure des prestations de graphisme aussi bien dans les domaines du print que du web. Nous intervenons dans la création des chartes graphiques, création de logo, refonte de site internet, flyers et brochures. Nos spécialistes vous assurent des créations graphiques à fort impact visuel.
                            </p>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h1 className="digit-h3-style">
                                Création Site Web
                            </h1>
                            <p className="p-style-seo pt-2">
                                Qu’il s’agisse de la création ou de la refonte d’un site Web vitrine ou d’un Site E-Commerce, nous avons mis en place un processus optimisé et maîtrisé pour le développement de votre projet. Nous réalisons sur mesure le site internet de votre entreprise. Un site web responsive compatible sur PC, tablette & smartphone.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-5">
                            <Link className="btn btn-devis-seo" role="button" to="/inscription-en-ligne/" state={{ type: "Création Web & E-Commerce" }}>Demandez un devis</Link>
                        </div>
                    </div>
                </div>


                <div className="container-fluid sol-info mt-4 mb-5 pb-2">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col">
                                    <div className="card card-sol">
                                        <img loading={"lazy"} src={icon1} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        <div className="card-body">
                                            <h5 className="card-title-sol pb-3 pt-3">
                                                Plateforme Emailing
                                            </h5>
                                            <p className="card-text card-text-center-style">
                                                Les retours des campagnes d’e-mailing sont particulièrement élevés et rapides. L’avantage incontesté de l’emailing est son faible coût : à la conception, à la réalisation et à l’envoi ! L’emailing est beaucoup plus abordable que d’autres supports tels que le publipostage et les supports print classiques.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card card-sol">
                                        <img loading={"lazy"} src={icon2} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        <div className="card-body">
                                            <h5 className="card-title-sol pb-3 pt-3">
                                                Site Web & E-Commerce
                                            </h5>
                                            <p className="card-text card-text-center-style">
                                                Qu’il s’agisse de la création ou de la refonte d’un site Web vitrine ou d’un Site E-Commerce, nous avons mis en place un processus optimisé et maîtrisé pour le développement de votre projet. Nous réalisons sur mesure le site internet de votre entreprise. Un site web responsive compatible sur PC, tablette & smartphone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card card-sol">
                                        <Link to="/services/formation-google-for-business/">
                                            <img loading={"lazy"} src={icon3} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title-sol pb-3 pt-3">
                                                Accompagnement Webmarketing
                                            </h5>
                                            <p className="card-text card-text-center-style">
                                                L’objectif de notre collaboration est simple : développer votre business. Toutes nos actions, de la stratégie au suivi en passant par l’application sont orientées ROI. Vous souhaitez développez votre visibilité & business sur le web ? Contactez notre service webmarketing et profitez d’un audit gratuit de votre site web.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container mt-5">
                    <p className="text-center blog-text">
                        Blog Du Digital Marketing
                    </p>

                    <div className="row pt-5">
                        <NewBlogs />
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default SiteWebPage;