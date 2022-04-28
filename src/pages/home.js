import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import element006 from "../images/element-600.webp";
import digitalMarketing from "../images/digital-marketing-tunis-featured-362x259.webp";
import formForGoogleBusiness from "../images/service-5-362x259.webp";
import communityManager from "../images/community-manager-362x259.webp";
import formationUIUX from "../images/service-3-362x259.webp";
import formationWebEcomerce from "../images/service-2-362x259.webp";
import formationMediaBuying from "../images/service-1-362x259.webp";
import referenceSEO from "../images/blog-1.webp";
import emailingCompagne from "../images/campagne-emailing-362x421.webp";
import formation from "../images/formation-362x421.webp";
import element2 from "../images/element-2.webp";
import HeaderComponent from "../components/header";
import { Link } from "gatsby";
import {
    FaGraduationCap, FaChartPie,
    FaEnvelope, FaBriefcase, FaChartLine, FaFileImage
} from 'react-icons/fa';
import Helmet from "react-helmet";


const HomePage = () => {



    const [showState, setShowState] = useState(true);
    const [showStateRocket, setShowRocketState] = useState(true);

    const controllNavBar = () => {
        if (window.scrollY < 300) {
            setShowState(false);
        } else {
            setShowState(true);
        }
    }

    useEffect(() => {
        window.removeEventListener('scroll', controllNavBar);
        window.addEventListener('scroll', controllNavBar, { passive: true });
        return () => window.removeEventListener('scroll', controllNavBar);
    }, []);

    return (
        <Layout >

            <>
                <HeaderComponent />
                <Helmet htmlAttributes={{
                    lang: 'fr-FR',
                }}>
                    <title>Formation Digital Marketing Tunisie - Emarketing.tn</title>
                    <meta name="description" content="IMSC renforce vos performances en apportant des solutions digitales et bâtissant des produits technologiques comme la suite Google For Business et Facebook"></meta>
                </Helmet>
                <div className="container-fluid cont-princ mt-5 ">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 pt-5">
                                <h4 className="text-1 fw-bold">Découvrez nos formations Certifiantes</h4>
                                <h1 className="text-2 fw-bold w-50 mt-4">EN DIGITAL MARKETING</h1>
                                <h5 className="text-3 mt-4">Les objectifs de la formation :</h5>
                                <p>
                                    <span className="span-1">• Acquérir une vision synthétique de l’évolution du marketing digital.</span><br />
                                    <span className="span-1">• Gagner en responsabilité dans le domaine de la stratégie numérique.</span><br />
                                    <span className="span-1">• Accéder aux postes les plus recherchés du marché professionnel.</span><br />
                                    <span className="span-1">• Comprendre comment et pourquoi le marketing évolue à l’ère du digital.</span><br />
                                    <span className="span-1">• Faire le point sur l’évolution des grandes étapes du marketing digital.</span><br />
                                    <span className="span-1">• Comprendre le Big data et la personnalisation en marketing digital.</span><br />
                                </p>
                                <div class="text-end pt-4">
                                    <Link class="btn btn-inscri" to="#" role="button">Inscrivez-vous</Link>
                                </div>

                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img src={element006} class="img-fluid" alt="emarketing.tn" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid our-service pt-5 mb-5 ">
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
                                <div class="text-center">
                                    <img src={element2} class="img-fluid" alt="emarketing.tn" />
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
                        En conclusion <strong>IMSC</strong> renforce vos performances en apportant des solutions digitales innovantes et en bâtissant des produits technologiques  adaptés au cœur de votre secteur d’activité comme la suite Google For Business et Facebook Business spécialement Facebook ADS..
                    </p>
                </div>


                <div className="container mt-5">

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                            <div class="card h-100">
                                <Link to="/services/formation-digital-marketing/">
                                    <img src={digitalMarketing} class="img-fluid mx-auto d-block" alt="Formation Digital Marketing" />
                                </Link>

                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-digital-marketing/">
                                        <h5 class="card-title">
                                            Formation Digital Marketing
                                        </h5>
                                    </Link>
                                    <p class="card-text">
                                        Découvrez nos formations en « Digital marketing » pour vous perfectionner sur les outils, les techniques, les usages du marketing et de la communication à l’heure du digital : Stratégie digitale 360, Webanalytics, Social media, AdSense, E-réputation, Le marketing relationnel (e-CRM) , Le déploiement multicanal et la cohérence de Digital brand content…
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-digital-marketing/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-1">
                            <div class="card h-100">
                                <Link to="/services/formation-google-for-business/">
                                    <img src={formForGoogleBusiness} class="img-fluid mx-auto d-block" alt="Formation Google for Business" />
                                </Link>
                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-google-for-business/">
                                        <h5 class="card-title">
                                            Formation Google for Business
                                        </h5>
                                    </Link>

                                    <p class="card-text">
                                        Dans cette formation Google Business Suite, vous apprenez à mettre en avant toutes les informations relatives à votre entreprise dans les résultats de recherche Google. Vos clients peuvent ainsi vous trouver plus facilement, À l’issue de cette formation , vous connaissez les pratiques pour donner un max de visibilité sur Internet à votre entreprise via Google Business.
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-google-for-business/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-md-5 mt-sm-5 mt-lg-1">
                            <div class="card h-100">
                                <Link to="/services/formation-community-manager/">
                                    <img src={communityManager} class="img-fluid mx-auto d-block" alt="Formation Community Manager" />
                                </Link>
                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-community-manager/">
                                        <h5 class="card-title">
                                            Formation Community Manager
                                        </h5>
                                    </Link>
                                    <p class="card-text">
                                        Avec cette formation vous allez découvrir le métier de Community Manager, ou comment gérer une présence et une e-réputation sur les réseaux sociaux à l’aide de méthodes concrètes et efficaces. Vous allez explorer des outils pour être à l’écoute sur les réseaux sociaux, et vous verrez comment créer et animer une communauté digitale.
                                    </p>
                                    <Link className="card-link text-decoration-none" to="/services/formation-community-manager/">
                                        Lire la suite
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div class="card h-100">
                                <Link to="/services/formation-web-design/">
                                    <img src={formationUIUX} class="img-fluid mx-auto d-block" alt="Formation Web Design UI/UX" />
                                </Link>
                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-web-design/">
                                        <h5 class="card-title">Formation Web Design UI/UX</h5>
                                    </Link>
                                    <p class="card-text">
                                        Avec nos formations du Web Design, vous êtes donc à même de comprendre le métier de Webdesigner ainsi que ses nombreuses applications. Depuis le prototypage jusqu'à l'intégration de vos éléments graphiques en passant la programmation ou encore l'expérience utilisateur (UX/UI), ne ratez plus aucune étape de la création de vos sites Web !
                                    </p>
                                    <Link class="card-link text-decoration-none" aria-current="page" to="/services/formation-web-design/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div class="card h-100">
                                <Link to="/services/formation-web-ecommerce/">
                                    <img src={formationWebEcomerce} class="img-fluid mx-auto d-block" alt="Formation Web & Ecommerce" />
                                </Link>
                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-web-ecommerce/">
                                        <h5 class="card-title">Formation Web & Ecommerce</h5>
                                    </Link>
                                    <p class="card-text">

                                        Formez-vous et formez vos équipes Webmarketing en developpement web et à l’utilisation des CMS. Que vous travaillez sur HTML , Framework PHP ,WordPress, Prestashop, ou Magento, nos formateurs vous accompagnent dans la prise en main et l’optimisation de votre site WEB. gagner en efficacité, en investissement et en qualité.
                                    </p>
                                    <Link class="card-link text-decoration-none" aria-current="page" to="/services/formation-web-ecommerce/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <div class="card h-100">
                                <Link to="/services/formation-media-buying/">
                                    <img src={formationMediaBuying} class="img-fluid mx-auto d-block" alt="Formation Media Buying" />
                                </Link>
                                <div class="card-body">
                                    <Link className="text-decoration-none" to="/services/formation-media-buying/">
                                        <h5 class="card-title">Formation Media Buying</h5>
                                    </Link>
                                    <p class="card-text">
                                        Dans cette formation, nous enseignons un modèle inspiré de
                                        Data-driven marketing dans la gestion et l’optimisation des achats médias. Nous appliquons une approche systématique d'exploitation des Consumer behavior Datas pour favoriser une prise de décision précise en temps réel, afin d'optimiser L'ROI de vos campagnes ADS
                                    </p>
                                    <Link class="card-link text-decoration-none" aria-current="page" to="/services/formation-media-buying/">Lire la suite</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid supp-info mb-5 pb-2">
                    <div className="pb-5">
                        <h3 className=" h3-supp-info text-center pt-5">Pour toute information supplémentaire </h3>
                        <div className="text-center pt-3">
                            <Link class="btn btn-inscri text-center" to="#" role="button">Contactez nous</Link>
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
            </>

        </Layout>
    )


}

export default HomePage;