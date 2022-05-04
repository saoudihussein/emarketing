import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './nos-formations.css';
import presImage from "../images/element-9.webp";
import digitalMarketing from "../images/digital-marketing-tunis-featured-362x259.webp";
import formForGoogleBusiness from "../images/service-5-362x259.webp";
import communityManager from "../images/community-manager-362x259.webp";
import formationUIUX from "../images/service-3-362x259.webp";
import formationWebEcomerce from "../images/service-2-362x259.webp";
import formationMediaBuying from "../images/service-1-362x259.webp";
import referenceSEO from "../images/blog-1-362x421.webp";
import emailingCompagne from "../images/campagne-emailing-362x421.webp";
import formation from "../images/formation-362x421.webp";
import Helmet from "react-helmet";
import { NewBlogs } from "./notre-blog";



const PresentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Nos Formations - Emarketing Tunisie - IMSC</title>
            </Helmet>

            <Layout>
                <div className="container-fluid form-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Découvrez nos formations Certifiantes !
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Nos Formations
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container our-service pt-5 ">
                    <p className="p-style-form text-center">
                        Un package complet des formations et des solutions techniques basé sur La transformation digitale des entreprises et des technologies de développement.
                    </p>

                    <p className="p-style-form text-center">
                        IMSC renforce vos performances en apportant des solutions digitales innovantes et en bâtissant des produits technologiques adaptés au cœur de votre secteur d’activité .
                    </p>
                </div>

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                            <div className="card h-100">
                                <Link to="/services/formation-digital-marketing/">
                                    <img loading={"lazy"} src={digitalMarketing} className="img-fluid mx-auto d-block" alt="Formation Digital Marketing" />
                                </Link>

                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-digital-marketing/">
                                        <h5 className="card-title">
                                            Formation Digital Marketing
                                        </h5>
                                    </Link>
                                    <p className="card-text">
                                        Découvrez nos formations en « Digital marketing » pour vous perfectionner sur les outils, les techniques, les usages du marketing et de la communication à l’heure du digital : Stratégie digitale 360, Webanalytics, Social media, AdSense, E-réputation, Le marketing relationnel (e-CRM) , Le déploiement multicanal et la cohérence de Digital brand content…
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-digital-marketing/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                            <div className="card h-100">
                                <Link to="/services/formation-google-for-business/">
                                    <img loading={"lazy"} src={formForGoogleBusiness} className="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-google-for-business/">
                                        <h5 className="card-title">
                                            Formation Google for Business
                                        </h5>
                                    </Link>

                                    <p className="card-text">
                                        Dans cette formation Google Business Suite, vous apprenez à mettre en avant toutes les informations relatives à votre entreprise dans les résultats de recherche Google. Vos clients peuvent ainsi vous trouver plus facilement, À l’issue de cette formation , vous connaissez les pratiques pour donner un max de visibilité sur Internet à votre entreprise via Google Business.
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-google-for-business/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-md-5 mt-sm-5 mt-lg-1">
                            <div className="card h-100">
                                <Link to="/services/formation-community-manager/">
                                    <img loading={"lazy"} src={communityManager} className="img-fluid mx-auto d-block" alt="Formation Community Manager" />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-community-manager/">
                                        <h5 className="card-title">
                                            Formation Community Manager
                                        </h5>
                                    </Link>
                                    <p className="card-text">
                                        Avec cette formation vous allez découvrir le métier de Community Manager, ou comment gérer une présence et une e-réputation sur les réseaux sociaux à l’aide de méthodes concrètes et efficaces. Vous allez explorer des outils pour être à l’écoute sur les réseaux sociaux, et vous verrez comment créer et animer une communauté digitale.
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-community-manager/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card h-100">
                                <Link to="/services/formation-web-design/">
                                    <img loading={"lazy"} src={formationUIUX} className="img-fluid mx-auto d-block" alt="Formation Web Design UI/UX" />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-web-design/">
                                        <h5 className="card-title">Formation Web Design UI/UX</h5>
                                    </Link>
                                    <p className="card-text">
                                        Avec nos formations du Web Design, vous êtes donc à même de comprendre le métier de Webdesigner ainsi que ses nombreuses applications. Depuis le prototypage jusqu'à l'intégration de vos éléments graphiques en passant la programmation ou encore l'expérience utilisateur (UX/UI), ne ratez plus aucune étape de la création de vos sites Web !
                                    </p>
                                    <Link className="card-link text-decoration-none" aria-current="page" to="/services/formation-web-design/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card h-100">
                                <Link to="/services/formation-web-ecommerce/">
                                    <img loading={"lazy"} src={formationWebEcomerce} className="img-fluid mx-auto d-block" alt="Formation Web & Ecommerce" />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-web-ecommerce/">
                                        <h5 className="card-title">Formation Web & Ecommerce</h5>
                                    </Link>
                                    <p className="card-text">

                                        Formez-vous et formez vos équipes Webmarketing en developpement web et à l’utilisation des CMS. Que vous travaillez sur HTML , Framework PHP ,WordPress, Prestashop, ou Magento, nos formateurs vous accompagnent dans la prise en main et l’optimisation de votre site WEB. gagner en efficacité, en investissement et en qualité.
                                    </p>
                                    <Link className="card-link text-decoration-none" aria-current="page" to="/services/formation-web-ecommerce/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div className="card h-100">
                                <Link to="/services/formation-media-buying/">
                                    <img loading={"lazy"} src={formationMediaBuying} className="img-fluid mx-auto d-block" alt="Formation Media Buying" />
                                </Link>
                                <div className="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-media-buying/">
                                        <h5 className="card-title">Formation Media Buying</h5>
                                    </Link>
                                    <p className="card-text">
                                        Dans cette formation, nous enseignons un modèle inspiré de
                                        Data-driven marketing dans la gestion et l’optimisation des achats médias. Nous appliquons une approche systématique d'exploitation des Consumer behavior Datas pour favoriser une prise de décision précise en temps réel, afin d'optimiser L'ROI de vos campagnes ADS
                                    </p>
                                    <Link className="card-link text-decoration-none" aria-current="page" to="/services/formation-media-buying/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid supp-info-form mb-5 pb-2">
                    <div className="pb-5">
                        <h3 className=" h3-supp-info text-center pt-5">Pour toute information supplémentaire </h3>
                        <div className="text-center pt-3">
                            <Link className="btn btn-inscri text-center" to="#" role="button">Contactez nous</Link>
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

export default PresentationPage;