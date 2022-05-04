import { Link } from "gatsby";
import React from "react";
import footerLogo from "../images/logoblanc.webp";
import emarketingPlace from "../images/emarketing_place.webp";
import { NewBlogsFooter } from "../pages/notre-blog";
import "./footer.css";

const FooterComponent = () => {
    return (
        <footer className="seocode-footer">
            <div className="container pb-5">
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Contactez Nous</h5>
                        <p className="mb-2 text-start">Adresse : Centre Le Forum 4ème étage,Avenue Hedi Nouira Ennasr2 - 2037 Tunisie</p>
                        <p className="mb-2 text-start"><strong>Tél  :</strong> <a href="tel:+216 98 72 77 14" className="phone-number">+216 98 72 77 14</a></p>
                        <p className="mb-2 text-start"><strong>Fax  :</strong> +216 71 31 73 75 </p>
                        <p className="mb-2 text-start"><strong>Email  :</strong> <a href="email:contact@emarketing.tn" className="phone-number">contact@emarketing.tn</a> </p>
                        <p>
                            <img loading={"lazy"} className="img-fluid" src={footerLogo} alt="emarketing.tn" style={{ height: "150px", width: "40px" }} />
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Notre Blog</h5>

                        <ul className="footer_ul_amrc">
                            <NewBlogsFooter />
                        </ul>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Suivez Nous</h5>

                        <ul className="footer_ul_amrc w-25">
                            <li>
                                <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                    style={{ border: "none", overflow: "hidden", width: "380%" }} scrolling="no" frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                                </iframe>
                            </li>

                        </ul>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Google Map</h5>


                        <ul className="footer_ul2_amrc">
                            <li>
                                <a href="https://www.google.com/maps/search/emarketing/@36.8563289,10.1544778,19.75z" target="_blank">
                                    <img loading={"lazy"} src={emarketingPlace} style={{ border: "0", width: "98%", height: "133px" }} class="img-fluid googleMapsIframe" alt="emarketing"></img>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="container-fluid coppy-right pt-3 pb-3">
                <div className="d-flex justify-content-center text-center">
                    <span>Copyright 2017 <Link style={{ color: "#ffffff", textDecoration: "none" }} to="/">EMARKETING.TN</Link> Powered by <a style={{ color: "#ffffff", textDecoration: "none" }} href="http://www.imsc.tn/">IMSC</a></span>
                </div>
            </div>
        </footer>
    )
}
export default FooterComponent;