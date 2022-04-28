import { Link } from "gatsby";
import React from "react";
import Layout from "../layout/layout";
import './plateforme-emailing.css';
import icon1 from "../images/icon-3.webp";
import icon2 from "../images/icon-4.webp";
import icon3 from "../images/icon-5.webp";
import icon4 from "../images/icon-6.webp";
import icon5 from "../images/icon-7.webp";
import {
    FaGraduationCap, FaChartPie,
    FaEnvelope, FaBriefcase, FaChartLine, FaFileImage
} from 'react-icons/fa';
import element2 from "../images/mobile.webp";
import referenceSEO from "../images/blog-1.webp";
import emailingCompagne from "../images/campagne-emailing-362x421.webp";
import formation from "../images/formation-362x421.webp";
import Helmet from "react-helmet";



const PresentationPage = () => {
    return (
        <>
            <Helmet>
                <title>Plateforme Emailing SMTP - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="Notre Plateforme Emailing et Nos serveurs de messagerie SMTP assurent des fiables relais SMTP, ils sont idéals pour envoyer des e-mails en masse."></meta>
            </Helmet>

            <Layout>
                <div className="container-fluid palt-emailing-container-style mt-5">
                    <div className="container pb-3">
                        <div className="row mt-5 mb-4 pb-5 pt-5">
                            <h2 className="text-center h1-emailing-style">
                                Plateforme Emailing
                            </h2>
                            <div class="text-center">
                                <p className="p-style-form text-start">
                                    L’avantage incontesté de l’emailing est son faible coût : faible coût à la conception, à la réalisation et à l’envoi ! L’emailing est beaucoup plus abordable que d’autres supports tels que le publipostage. Il permet par ailleurs de personnaliser son message.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="card card-sol card-email">
                                        <img src={icon1} class="img-fluid mx-auto d-block" alt="Un ciblage maîtrisé" />
                                        <div class="card-body">
                                            <Link className="text-decoration-none" to="/services/formation-google-for-business/">
                                                <h5 class="card-title-email pb-3 pt-3">
                                                    Un ciblage maîtrisé
                                                </h5>
                                            </Link>

                                            <p class="text-center text-card">
                                                La constitution de notre base de données vous permettra de maîtriser totalement le profil de vos destinataires.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="card card-sol card-email">
                                        <img src={icon2} class="img-fluid mx-auto d-block" alt="Design Graphique" />
                                        <div class="card-body">
                                            <Link className="text-decoration-none" to="/services/formation-google-for-business/">
                                                <h5 class="card-title-email pb-3 pt-3">
                                                    Design Graphique
                                                </h5>
                                            </Link>

                                            <p class="text-center text-card">
                                                Notre équipe vous accompagne dans la réalisation de vos campagnes e-marketing, de la création graphique au routage.                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="card card-sol h-100">
                                        <img src={icon3} class="img-fluid mx-auto d-block" alt="Facilité et Rapidité" />
                                        <div class="card-body">
                                            <h5 class="card-title-email pb-3 pt-3">
                                                Facilité et Rapidité
                                            </h5>
                                            <p class="text-center text-card">
                                                L’e-mailing est très facile et rapide à utiliser, efficace et indispensable à toute opération marketing ou commerciale directe.                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div class="card card-sol card-email">
                                        <Link to="/services/formation-google-for-business/">
                                            <img src={icon4} class="img-fluid mx-auto d-block" alt="Statistiques et Tracking" />
                                        </Link>
                                        <div class="card-body">
                                            <h5 class="card-title-email pb-3 pt-3">
                                                Statistiques et Tracking
                                            </h5>
                                            <p class="text-center text-card">
                                                Vous allez pouvoir connaître le nombre d’e-mails ouverts, le nombre de transferts d’e-mails et le nombre de clics…                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container  pt-5 mb-5 ">
                    <h3 className="h3-style text-center">Nos Solutions Emailing</h3>
                    <div className="d-flex justify-content-center">
                        <div className="row pt-5">
                            <div className=" col-md-12 col-lg-4 text-end">
                                <div className="row emailing-left-style">
                                    <div className="col-10">
                                        <span className="iconbox-title">
                                            Statistiques Live
                                        </span>
                                        <div className="col">
                                            <span className="iconbox-content">
                                                Des formations certifiantes pour valider
                                                vos expertises et faire reconnaître vos compétences.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
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
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
                                    </div>
                                </div>


                                <div className="row mt-5 emailing-left-style">
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
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-12 col-lg-4">
                                <div class="text-center">
                                    <img src={element2} class="img-fluid" alt="Image icon" />
                                </div>
                            </div>
                            <div className=" col-md-12 col-lg-4 text-start">
                                <div className="row emailing-right-style">
                                    <div className="col-2">
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
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
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
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


                                <div className="row mt-5 emailing-right-style">
                                    <div className="col-2">
                                        <img src={icon5} class="img-fluid mx-auto d-block" alt="Icon" />
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
            </Layout>
        </>

    )
}

export default PresentationPage;