import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './service-seo-et-digital-marketing.css';
import icon1 from "../images/icon-25.webp";
import icon2 from "../images/icon-26-e1488014343563.webp";
import icon3 from "../images/icon-27.webp";
import Helmet from "react-helmet";
import { NewBlogs } from "./notre-blog";



const SeoDigitalMarketingPage = () => {
    return (
        <>
            <Helmet>
                <title>Accompagnement en Digital Marketing - Emarketing.tn</title>
                <meta name="description" content="Accompagnement en Digital Marketing EMARKETING.TN accompagne ces clients à initier leur mutation, avec les dernières innovations en seo et digitalmarketing"></meta>
            </Helmet>

            <Layout>
                <div className="container-fluid form-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                SEO & Digital Marketing
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        SEO & Digital Marketing
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5 ">
                    <div className="row">
                        <div className="col">
                            <h1 className="digit-h3-style">
                                Accompagnement en Digital Marketing
                            </h1>
                            <p className="p-style-seo pt-2">
                                Depuis sa création, IMSC – EMARKETING.TN accompagne des clients prêts à initier leur mutation, en capitalisant sur les dernières innovations digitales. Avec la mise en place d’approches innovantes comme l’inbound marketing pour le compte de PME ou de grands groupes, nous n’avons pu que constater que le nouvel écosystème digital était en train de révolutionner le fonctionnement des entreprises au sens large. C’est dans ce contexte que nous avons travaillé au développement de programmes d’accompagnement pour adresser les entreprises de toutes tailles dans la transformation digitale de leur stratégie marketing & ventes, en axant nos réflexions sur 2 axes majeurs :
                            </p>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col">
                            <h6 className="seo-h6-style pt-3">
                                L’EXCELLENCE MARKETING ET COMMERCIALE DANS UN MONDE QUI CHANGE
                            </h6>
                            <p className="p-style-seo pt-3">
                                Le marketing, qui a parfois été traité avec légèreté au profit des activités commerciales, doit revenir sur le devant de la scène, se renforcer sur le plan stratégique, se synchroniser avec les ventes et se digitaliser. C’est le cœur de métier d’ IMSC : délivrer des stratégies et des campagnes agiles, smart et efficaces dans un écosystème numérique.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h6 className="seo-h6-style pt-3">
                                L’ACCOMPAGNEMENT DES ÉQUIPES MARKETING ET VENTES
                            </h6>
                            <p className="p-style-seo pt-3">
                                Nouveaux outils, nouveaux canaux, et nouveaux référentiels font appel à de nouvelles compétences qui devront progressivement être présentes dans votre entreprise. Nous pouvons réaliser des audits, des plans de formations et mettre en place un plan de conduite du changement pour accompagner vos équipes vers le succès.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <Link className="btn btn-devis-seo" role="button" to="/inscription-en-ligne/" state={{ type: "Service SEO & Digital Marketing" }}>Demandez un devis</Link>
                        </div>
                    </div>
                </div>


                <div className="container-fluid sol-info mt-4 mb-5 pb-2">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col">
                                    <div className="card card-sol">
                                        <img src={icon1} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
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
                                        <img src={icon2} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
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
                                        <img src={icon3} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
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

export default SeoDigitalMarketingPage;