import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './solutions-entreprise.css';
import digitalMarketing from "../images/digital-marketing-tunis-featured-362x259.webp";
import icon1 from "../images/icon-25.webp";
import icon2 from "../images/icon-26-e1488014343563.webp";
import icon3 from "../images/icon-27.webp";
import communityManager from "../images/community-manager-362x259.webp";
import formationUIUX from "../images/service-3-362x259.webp";
import formationWebEcomerce from "../images/service-2-362x259.webp";
import formationMediaBuying from "../images/service-1-362x259.webp";
import solutionsEntreprises from "../images/element-112.webp";
import element2 from "../images/element-2.webp";
import referenceSEO from "../images/blog-1.webp";
import emailingCompagne from "../images/campagne-emailing-362x421.webp";
import formation from "../images/formation-362x421.webp";
import Helmet from "react-helmet";



const PresentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Nos Solutions Entreprises - Emarketing Tunisie - IMSC</title>
            </Helmet>

            <Layout>
                <div className="container-fluid pres-container-style mt-5">
                    <div className="container pt-5 pb-3">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Présentez vous sur Internet !
                            </h1>
                            <div class="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Nos Solutions Entreprises
                                    </span>
                                </span>
                                <p className="header-text pt-2">Grâce à nos Solutions Entreprises</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5 ">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12">
                            <h3 className="digit-h3-style">
                                Solutions Entreprises
                            </h3>
                            <p className="p-style-form">
                                Nous vous accompagnons dans l’étude de vos projets allant de la conception et le développement à la réalisation et l’hébergement et on vous suit pour l’optimisation et le référencement de vos sites internet suite à un cahier des charges bien précis. nous vous proposons des outils de gestion de contenu (CMS) faciles à utiliser sans aucune nécessité de connaissance en programmation pour actualiser, ajouter, modifier vos informations en ligne via une interface Admin.
                            </p>
                            <a class="btn mt-5 btn-devis" href="#" role="button">Demandez un devis</a>
                        </div>

                        <div className="col-lg-3 mt-3 col-sm-12">
                            <img src={solutionsEntreprises} class="img-fluid" alt="Solutions Entreprises" />
                        </div>
                    </div>
                </div>


                <div className="container-fluid sol-info mb-5 pb-2">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col">
                                    <div class="card card-sol">
                                        <img src={icon1} class="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        <div class="card-body">
                                            <h5 class="card-title-sol pb-3 pt-3">
                                                Plateforme Emailing
                                            </h5>
                                            <p class="card-text">
                                                Les retours des campagnes d’e-mailing sont particulièrement élevés et rapides. L’avantage incontesté de l’emailing est son faible coût : à la conception, à la réalisation et à l’envoi ! L’emailing est beaucoup plus abordable que d’autres supports tels que le publipostage et les supports print classiques.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="card card-sol">
                                        <img src={icon2} class="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        <div class="card-body">
                                            <h5 class="card-title-sol pb-3 pt-3">
                                                Site Web & E-Commerce
                                            </h5>
                                            <p class="card-text">
                                                Qu’il s’agisse de la création ou de la refonte d’un site Web vitrine ou d’un Site E-Commerce, nous avons mis en place un processus optimisé et maîtrisé pour le développement de votre projet. Nous réalisons sur mesure le site internet de votre entreprise. Un site web responsive compatible sur PC, tablette & smartphone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="card card-sol">
                                        <Link to="/services/formation-google-for-business/">
                                            <img src={icon3} class="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                        </Link>
                                        <div class="card-body">
                                            <h5 class="card-title-sol pb-3 pt-3">
                                                Accompagnement Webmarketing
                                            </h5>
                                            <p class="card-text">
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
                </div>
            </Layout>
        </>

    )
}

export default PresentationPage;