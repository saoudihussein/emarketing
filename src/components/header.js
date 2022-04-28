import logo from "../images/logo.webp";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import "./header.css";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Helmet from "react-helmet";
import favicon from '../images/favicon.webp'
import { GiHamburgerMenu } from "react-icons/gi";
import rocket from "../images/scroll-to-top.webp";


const HeaderComponent = () => {
    const [solutionState, setSolutionState] = useState(true);
    const [formState, setFormStateState] = useState(true);
    const [showState, setShowState] = useState(true);
    const [showStateRocket, setShowRocketState] = useState(false);

    const controllNavBar = () => {
        if (window.scrollY > 84 && window.scrollY < 300) {
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


    const controllRocket = () => {
        if (window.scrollY < 300) {
            setShowRocketState(false);
        } else {
            setShowRocketState(true);
        }
    }

    useEffect(() => {
        window.removeEventListener('scroll', controllRocket);
        window.addEventListener('scroll', controllRocket, { passive: true });
        return () => window.removeEventListener('scroll', controllRocket);
    }, []);


    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const solution = () => {
        setSolutionState(!solutionState);
    }

    const ourForm = () => {
        setFormStateState(!formState);
    }
    return (
        <>
            <Helmet>
                <link rel="icon" sizes="32x32" href={favicon} />
                <link rel="icon" sizes="192x192" href={favicon} />
                <link rel="apple-touch-icon-precomposed" href={favicon} />
                <link rel="icon" type="image/x-icon" href={favicon} />
                <link rel="stylesheet" id="font-awesome-css" href="src/plugins/visual-composer/assets/lib/bower/font-awesome/css/font-awesome.min.css" type="text/css" media="all" />
                <link rel="stylesheet" id="js_composer_front-css" href="src/uploads/js_composer/js_composer_front_custom.css" type="text/css" media="all" />
                <link rel="stylesheet" id="seocode-theme-style-css" href="src/themes/seocode/seocode/style.css" type="text/css" media="all" />
                <link rel="stylesheet" id="kirki_google_fonts-css" href="https://fonts.googleapis.com/css?family=Open+Sans%3Aregular%7CMontserrat%3Aregular%7CDosis%3A700&amp;subset=latin-ext" type="text/css" media="all" />
                <link rel="stylesheet" id="kirki-styles-seocode-css" href="src/plugins/kirki/assets/css/kirki-styles.css" type="text/css" media="all"></link>
            </Helmet>

            {showState && <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
                <div className="container">
                    <Link className="nav-link" id="navbarDropdown" to="/">
                        <img src={logo} alt="Logo image" className="img-fluid" width="161" height="43" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="burger"><GiHamburgerMenu /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" activeClassName="current" aria-current="page" to="/">ACCUEIL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" activeClassName="current" to="/presentation/">PRÉSENTATION</Link>
                            </li>

                            <li class="nav-item dropdown d-block d-lg-none">
                                <Link onClick={ourForm} className="nav-link" aria-current="page" to="">
                                    <span className="d-inline">NOS FORMATIONS</span>
                                    {formState ?
                                        <span className="d-inline float-end">
                                            <FaAngleRight className="linkIcon" />
                                        </span> : <span className="d-inline float-end">
                                            <FaAngleDown className="linkIcon" />
                                        </span>}
                                </Link>

                                <ul className={formState ? "dropdown-menu" : "dropdown-menu show"} aria-labelledby="navbarDropdown">

                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-digital-marketing/">Formation Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-google-for-business/">Formation Google for Business</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-community-manager/">Formation Community Manager</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/">Formation Web Design UI/UX</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/">Formation Web & Ecommerce</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/">Formation Media Buying</Link>
                                    </li>
                                </ul>
                            </li>



                            <li className="nav-item dropdown d-none d-lg-block">
                                <Link className="nav-link fw-bold" activeClassName="current" aria-current="page" to="/nos-formations/">NOS FORMATIONS</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-digital-marketing/">Formation Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-google-for-business/">Formation Google for Business</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-community-manager/">Formation Community Manager</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-web-design/">Formation Web Design UI/UX</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/services/formation-web-ecommerce/">Formation Web & Ecommerce</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/services/formation-media-buying/">Formation Media Buying</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown d-block d-lg-none">
                                <Link onClick={solution} activeClassName="current" className="nav-link" aria-current="page" to="">
                                    <span className="d-inline">SOLUTIONS ENTREPRISES</span>
                                    {solutionState ?
                                        <span className="d-inline float-end">
                                            <FaAngleRight className="linkIcon" />
                                        </span> : <span className="d-inline float-end">
                                            <FaAngleDown className="linkIcon" />
                                        </span>}
                                </Link>

                                <ul className={solutionState ? "dropdown-menu" : "dropdown-menu show"} aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/plateforme-emailing/">Emailing & Serveur SMTP</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/service-seo-et-digital-marketing/">SEO & Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/site-web-e-commerce/">Site Web & E-Commerce</Link>
                                    </li>
                                </ul>
                            </li>




                            <li className="nav-item dropdown d-none d-lg-block">
                                <Link className="nav-link fw-bold" activeClassName="current" aria-current="page" to="/solutions-entreprise/">SOLUTIONS ENTREPRISES</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/plateforme-emailing/">Emailing & Serveur SMTP</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item mb-2" aria-current="page" to="/service-seo-et-digital-marketing/">SEO & Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" aria-current="page" to="/site-web-e-commerce/">Site Web & E-Commerce</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="current" className="nav-link fw-bold" to="/notre-blog/" >
                                    BLOG
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="current" className="nav-link fw-bold" to="/contact/">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
                <br />
            </nav >}

            {showStateRocket && <div className="fixed-bottom ">
                <img src={rocket} onClick={scrollToTop} className="float-end btn scroll-to-top" alt="Scroll to top" />
            </div>}

        </>



    )
}
export default HeaderComponent;