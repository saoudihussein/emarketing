import { Link } from "gatsby";
import React from "react";
import Layout from "../../layout/layout";
import './formation-web-design.css';
import Helmet from "react-helmet";
import ButtonComponent from "../../components/buttons/buttons";
import digitalMarketing from "../../images/digital-marketing-tunis-featured-362x259.webp";
import formForGoogleBusiness from "../../images/service-5-362x259.webp";
import communityManager from "../../images/community-manager-362x259.webp";
import formationUIUX from "../../images/service-3-362x259.webp";
import formationWebEcomerce from "../../images/service-2-362x259.webp";
import formationMediaBuying from "../../images/service-1-362x259.webp";




const PresentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Formation Web Design UI/UX - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="Avec la formation Web Design, vous êtes donc à même de comprendre les applications de Design. Depuis le prototypage jusqu’à l’intégration"></meta>
            </Helmet>

            <Layout>
                <div className="container-fluid web-design-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Formation Web Design UI/UX
                            </h1>
                            <div class="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        <Link className="link-prese-style" aria-current="page" to="/nos-formations/">
                                            Formation
                                        </Link>
                                    </span>
                                </span>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Formation Web Design UI/UX
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container our-service mt-5 pt-5 ">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <h3 className="digit-h3-style">
                                Objectifs de la formation
                            </h3>
                            <p className="p-style-form">
                                Web Design, vous êtes donc à même de comprendre le métier de Webdesigner ainsi que ses nombreuses applications. Depuis le prototypage jusqu’à l’intégration de vos éléments graphiques en passant la programmation ou encore l’expérience utilisateur (UX/UI), ne ratez plus aucune étape de <a className="text-decoration-none" href="../../site-web-e-commerce/index.html">la création de vos sites Web</a> !
                            </p>
                        </div>

                        <div className="col-lg-4 mt-3 col-sm-12">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                style={{ border: "none", overflow: "hidden", width: "auto%" }} scrolling="no" frameBorder="0" allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="digit-h3-style">
                                Programme de la formation
                            </h3>
                            <h6 className="mt-lg-3">
                                M 1 : Créer et Découper une maquette
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Découvrir le concept de maquette
                                </li>
                                <li className="p-style-form">
                                    Créer une maquette avec PS
                                </li>
                                <li className="p-style-form">
                                    Trouver une maquette et comprendre son fonctionnement
                                </li>
                                <li className="p-style-form">
                                    Traduire les éléments visuels en HTML
                                </li>
                                <li className="p-style-form">
                                    Dimensions et proportions
                                </li>
                                <li className="p-style-form">
                                    Les éléments traduisibles en CSS
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mt-lg-5">
                                M 2 : Web Design et l'UX
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Apprenez à reconnaître et définir l’UX
                                </li>
                                <li className="p-style-form">
                                    Faites la différence entre UX et UI
                                </li>
                                <li className="p-style-form">
                                    La notion d’usefull
                                </li>
                                <li className="p-style-form">
                                    Accrochez vos utilisateurs avec le “Hook Canvas”
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">

                            <h6 className="mt-lg-5">
                                M 3: web design et UI
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Apprenez à vous centrer sur l’utilisateur
                                </li>
                                <li className="p-style-form">
                                    Concevez un produit simple
                                </li>
                                <li className="p-style-form">
                                    Créez pour l’utilisateur mobile
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mt-lg-5">
                                M 4 : TP de l’UX /UI design
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Intégrez l’approche « Design Thinking »
                                </li>
                                <li className="p-style-form">
                                    Commencez par la recherche utilisateur
                                </li>
                                <li className="p-style-form">
                                    Appliquez les bonnes pratiques de prototypage
                                </li>
                                <li className="p-style-form">
                                    Testez vos prototypes
                                </li>
                                <li className="p-style-form">
                                    Test UI
                                </li>
                                <li className="p-style-form">
                                    <strong>
                                        Test d’évaluation
                                    </strong>
                                </li>
                                <li className="p-style-form">
                                    <strong>
                                        Certification
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>



                <ButtonComponent />

                <div className="container-fluid supp-info-form mb-5 pb-2">
                    <div className="pb-5">
                        <h3 className=" h3-supp-info text-center pt-5">Pour toute information supplémentaire </h3>
                        <div className="text-center pt-3">
                            <Link class="btn btn-inscri text-center" to="#" role="button">Contactez nous</Link>
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

            </Layout>
        </>

    )
}

export default PresentationPage;