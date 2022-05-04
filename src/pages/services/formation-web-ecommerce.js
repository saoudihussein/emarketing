import { Link } from "gatsby";
import React from "react";
import Layout from "../../layout/layout";
import './formation-web-ecommerce.css';
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
                <title>Formation Web & Ecommerce - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="Formation Web & Ecommerce : Nos formateurs vous accompagnent dans la prise en main et l’optimisation de votre site WEB ecommerce."></meta>
            </Helmet>

            <Layout>
                <div className="container-fluid web-ecommerce-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Formation Web & Ecommerce
                            </h1>
                            <div className="text-center">

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
                                        Formation Web & Ecommerce
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5 ">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <h3 className="digit-h3-style">
                                Objectifs de la formation
                            </h3>
                            <p className="p-style-form">
                                Formez-vous et formez vos équipes Webmarketing en développement web et à l’utilisation des CMS. Que vous travaillez sur HTML , Framework PHP ,WordPress, Prestashop, ou Magento, nos formateurs vous accompagnent dans la prise en main et l’optimisation de <a className="text-decoration-none" href="../../site-web-e-commerce/index.html">votre site WEB</a>. Ces formations vous feront gagner en efficacité, en investissement et en qualité.<br />
                                Acquérir des connaissances à l’installation, la création, l’animation et la gestion professionnelle d’une boutique E-commerce ou d’un site vitrine à l’aide des CMS « Prestashop » et « WordPress »
                            </p>

                            <p className="p-style-form">
                                Grâce à Formation Web & Ecommerce , vous saurez :
                            </p>

                            <ul>
                                <li className="p-style-form">
                                    Création de pages web en HTML 5 et CSS3.
                                </li>
                                <li className="p-style-form">
                                    Procéder à la mise en place et la validation de la structure HTML 5 des pages web.
                                </li>
                                <li className="p-style-form">
                                    Utilisation des CMS Majeurs : WordPress, Joomla, Drupal, admin LTE , Prestashop & magento (ecommerce) …  etc
                                </li>
                                <li className="p-style-form">
                                    Intégrer les animations et les contenus multimédia dans les CMS
                                </li>
                                <li className="p-style-form">
                                    Mise en ligne<br />
                                    – Effectuer une sauvegarde du site en local<br />
                                    – Mettre en ligne un blog<br />
                                    – Outils de vérification de la fonctionnalité du blog<br />
                                    Apprendre à gérer son site<br />
                                    (faire les mises à jour régulières).<br />
                                </li>
                                <li className="p-style-form">
                                    Les fonctions importantes du programme.<br />
                                    Présentation de l’interface d’administration<br />
                                    Présentation de la console administrateur et des onglets de gestion.
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 mt-3 col-sm-12">
                            <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                style={{ border: "none", overflow: "hidden", width: "auto%" }} scrolling="no" frameBorder="0"
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
                                M 1 : Introduction
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Votre rôle de développeur web PHP
                                </li>
                                <li className="p-style-form">
                                    Fonctionnement d’un site écrit en PHP
                                </li>
                                <li className="p-style-form">
                                    Préparer son environnement de travail
                                </li>
                                <li className="p-style-form">
                                    Écrire son premier script
                                </li>
                                <li className="p-style-form">
                                    Configurer PHP pour visualiser les erreurs
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mt-lg-5">
                                M 2 : Les bases de PHP et Mysql
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Stocker des informations dans une base de données
                                </li>
                                <li className="p-style-form">
                                    Présentation des bases de données
                                </li>
                                <li className="p-style-form">
                                    phpMyAdmin
                                </li>
                                <li className="p-style-form">
                                    Lire des données
                                </li>
                                <li className="p-style-form">
                                    Écrire des données
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">

                            <h6 className="mt-lg-5">
                                M 3: Démarrez et configurez les CMS
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Qu’est-ce qu’un CMS?
                                </li>
                                <li className="p-style-form">
                                    Commencez votre site avec un CMS
                                </li>
                                <li className="p-style-form">
                                    Configurez les paramètres de votre CMS
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mt-lg-5">
                                M 4 : Adaptez votre site avec un CMS
                            </h6>

                            <ul>
                                <li className="p-style-form">
                                    Maquettez la structure de votre site
                                </li>
                                <li className="p-style-form">
                                    Installez un thème ou Template
                                </li>
                                <li className="p-style-form">
                                    Ajustez votre thème
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



                <ButtonComponent type="Formation Web & Ecommerce" />

                <div className="container-fluid supp-info-form mb-5 pb-2">
                    <div className="pb-5">
                        <h3 className=" h3-supp-info text-center pt-5">Pour toute information supplémentaire </h3>
                        <div className="text-center pt-3">
                            <Link className="btn btn-inscri text-center" to="#" role="button">Contactez nous</Link>
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

            </Layout>
        </>

    )
}

export default PresentationPage;