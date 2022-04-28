import { Link } from "gatsby";
import React from "react";
import footerLogo from "../images/logoblanc.webp";
import "./footer.css";

const FooterComponent = () => {
    return (
        <footer className="seocode-footer">
            <div className="container pb-5">
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Contactez Nous</h5>
                        <p className="mb-2 text-start">Adresse : Centre Le Forum 4ème étage,Avenue Hedi Nouira Ennasr2 - 2037 Tunisie</p>
                        <p className="mb-2 text-start"><strong>Tél  :</strong> <a href="tel:+216 98 72 77 14" class="phone-number">+216 98 72 77 14</a></p>
                        <p className="mb-2 text-start"><strong>Fax  :</strong> +216 71 31 73 75 </p>
                        <p className="mb-2 text-start"><strong>Email  :</strong> <a href="email:contact@emarketing.tn" class="phone-number">contact@emarketing.tn</a> </p>
                        <p>
                            <img className="img-fluid" src={footerLogo} alt="emarketing.tn" width="150" height="auto" />
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Notre Blog</h5>

                        <ul className="footer_ul_amrc">
                            <li>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <img className="img-fluid" width="73" height="73" src="https://www.emarketing.tn/src/uploads/2017/04/blog-1-150x150.jpg" alt="emarketing.tn" />
                                    </div>
                                    <div className="col-9 col-md-9 col-sm-12">
                                        <p>Elaborer une stratégie de référencement (SEO)</p>
                                        <p>8 Janv. 2020</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <img className="img-fluid" width="73" height="73" src="https://www.emarketing.tn/src/uploads/2017/02/campagne-emailing-150x150.jpg" alt="emarketing.tn" />
                                    </div>
                                    <div className="col-9 col-md-9 col-sm-12">
                                        <p>L’emailing pour votre Business</p>
                                        <p>8 Janv. 2020</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <img className="img-fluid" width="73" height="73" src="https://www.emarketing.tn/src/uploads/2017/02/formation-150x150.jpg" alt="emarketing.tn" />
                                    </div>
                                    <div className="col-9 col-md-9 col-sm-12">
                                        <p>Le digital marketing et ses 5 mondes</p>
                                        <p>7 Janv. 2020</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Suivez Nous</h5>

                        <ul className="footer_ul_amrc w-25">
                            <li>
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femarketing.tn&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=439987349361310"
                                    style={{ border: "none", overflow: "hidden", width: "380%" }} scrolling="no" frameBorder="0" allowFullScreen="true"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </li>

                        </ul>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="footer-widget-title pt2">Google Map</h5>


                        <ul className="footer_ul2_amrc">
                            <li>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.1048372449831!2d10.153997929197073!3d36.85638007181981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3387052f5b25%3A0x1f883e9a8ca8d1d8!2sEMARKETING.TN!5e0!3m2!1sfr!2stn!4v1580997243673!5m2!1sfr!2stn"
                                    frameBorder="0" style={{ border: "0", width: "98%" }} allowFullScreen=""
                                    className="googleMapsIframe"
                                ></iframe>
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