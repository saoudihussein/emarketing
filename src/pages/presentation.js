import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './presentation.css';
import presImage from "../images/element-9.webp";
import digitalMarketing from "../images/digital-marketing-tunis-featured-362x259.webp";
import formForGoogleBusiness from "../images/service-5-362x259.webp";
import communityManager from "../images/community-manager-362x259.webp";
import formationUIUX from "../images/service-3-362x259.webp";
import formationWebEcomerce from "../images/service-2-362x259.webp";
import formationMediaBuying from "../images/service-1-362x259.webp";
import {
    FaGraduationCap, FaChartPie,
    FaEnvelope, FaBriefcase, FaChartLine, FaFileImage
} from 'react-icons/fa';
import element2 from "../images/element-2.webp";
import Helmet from "react-helmet";
import { NewBlogs } from "./notre-blog";



const PresentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Présentation : Qui sommes nous ? - Emarketing.tn /IMSC</title>
                <meta name="description" content="EMARKETING.TN a pour objectif de former des cadres aux outils et aux stratégies digitale afin de piloter des projets de communication en toute autonomie."></meta>
            </Helmet>
            <Layout>
                <div className="container-fluid prese-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Qui sommes nous ?
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="/">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Présentation
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mt-5">
                            <img loading={"lazy"} src={presImage} className="img-fluid" alt="EMARKETING.TN BY IMSC" />
                        </div>

                        <div className="col-sm-12 col-md-6 mt-5 pl-5">
                            <h4 className="text-center">EMARKETING.TN BY IMSC</h4>
                            <p className="text-pres">
                                A l’ère du digital, la stratégie de communication des entreprises évolue constamment.
                                Notre objectif est de vous amener à devenir un acteur à forte valeur ajoutée dans la
                                conception globale de la stratégie de communication de l’entreprise VIA Le Département
                                <Link className="link-prese-1-style" aria-current="page" to="/">
                                    EMARKETING.TN
                                </Link> <a className="link-prese-1-style" href="https://imsc.tn/">D’IMSC </a>a pour
                                objectif de former des cadres aux outils, aux techniques et aux stratégies de communication
                                globale et digitale afin de piloter des projets de communication en toute autonomie.
                                Nous offrons différents types de formation et des solutions en marketing digital dans
                                le but de développer les compétences de vos équipes dans ce domaine. . Au-delà des
                                technologies et outils mis à disposition, IMSC accompagne également ses clients avec
                                de multiples services : La réalisation technique et
                                <Link className="link-prese-1-style" aria-current="page" to="/">
                                    optimisation
                                </Link><a href="../service-seo-et-digital-marketing/index.html">optimisation </a>
                                de votre site web ,vos campagnes <a href="../plateforme-emailing/index.html">emailing </a>
                                <Link className="link-prese-1-style" aria-current="page" to="/">
                                    emailing
                                </Link>
                                et publicitaire, audit et conseil
                                stratégique en Digital Marketing, accompagnement et bien plus… L’organisation et l’implication de Notre équipe sont orientées
                                vers un objectif : la réussite de vos campagnes E-marketing.<br />
                                IMSC est Fondée en 2011 Par M. Amine JLASSI et enregistrée sous le N° de Registre de
                                commerce : A 241 307 8 2011 et MF : 1208780W A/P/000</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid our-service pt-5 ">
                    <h3 className="h3-style text-center">Nos Services</h3>
                    <p className="p-style-home text-center">Pilotez vos projets de communication en toute autonomie grâce à nos formations et nos solutions entresprises</p>

                    <div className="d-flex justify-content-center">
                        <div className="row pt-5">
                            <div className=" col-md-12 col-lg-4 text-end">
                                <div className="row">
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Formations Certifiantes
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Des formations certifiantes pour valider
                                                vos expertises et faire reconnaître vos compétences.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <FaGraduationCap size={40} className="icon" />
                                    </div>
                                </div>


                                <div className="row mt-5">
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Audit et Consulting
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Une équipe d’auditeurs et consultants afin de réaliser
                                                un audit de votre présence sur le web.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <FaChartPie size={40} className="icon" />
                                    </div>
                                </div>


                                <div className="row mt-5">
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Plateforme Emailing
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Une solution Complète d’e-mailing avec des statistiques en temps réel
                                                d’ouverture, de clic etc…
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <FaEnvelope size={40} className="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-12 col-lg-4">
                                <div className="text-center">
                                    <img loading={"lazy"} src={element2} className="img-fluid" alt="emarketing.tn" />
                                </div>
                            </div>
                            <div className=" col-md-12 col-lg-4 text-start">
                                <div className="row">
                                    <div className="col-2">
                                        <FaBriefcase size={40} className="icon" />
                                    </div>
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Formations Certifiantes
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Des formations certifiantes pour valider
                                                vos expertises et faire reconnaître vos compétences.
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mt-5">
                                    <div className="col-2">
                                        <FaChartLine size={40} className="icon" />
                                    </div>
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Audit et Consulting
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Une équipe d’auditeurs et consultants afin de réaliser
                                                un audit de votre présence sur le web.
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mt-5">
                                    <div className="col-2">
                                        <FaFileImage size={40} className="icon" />
                                    </div>
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Plateforme Emailing
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Une solution Complète d’e-mailing avec des statistiques en temps réel
                                                d’ouverture, de clic etc…
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-5 ">
                    <h3 className="h3-style mt-5 text-center">Nos Formations</h3>
                    <p className="p-style-home text-center">
                        Un package complet des formations et des solutions techniques basé sur La transformation digitale des entreprises et des technologies de développement.
                    </p>
                    <p className="p-style-home text-center">
                        En conclusion <strong>IMSC</strong> renforce vos performances en apportant des solutions digitales innovantes et en bâtissant des produits technologiques  adaptés au cœur de votre secteur d’activité.
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



                <div className="container-fluid">
                    <div className="row">
                        <div className="pt-5 col-md-6 col-sm-12 certif-form pl-5">
                            <div className="container">
                                <h1 className="text-center certif-form-title">Formations Certifiantes</h1>
                                <p className="text-center certif-form-text">
                                    Des formations certifiantes pour valider vos expertises et faire reconnaître vos compétences.
                                </p>
                            </div>

                        </div>

                        <div className="pt-5 col-md-6 col-sm-12 inter-form pl-5">
                            <div className="container">
                                <h1 className="text-center certif-form-title">
                                    Formations Inter-Entreprises
                                </h1>
                                <p className="text-center certif-form-text">
                                    Des formations destinées à tous les collaborateurs et managers des entreprises publiques et privées.
                                </p>
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

export default PresentationPage;