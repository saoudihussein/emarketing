import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import "./contact.css";
import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";


const ContactPage = () => {

    return (
        <>
            <Helmet>
                <title>Contact - Emarketing Tunisie - IMSC</title>
                <meta name="description" content="Création ou refonte d’un site Web E-Commerce, nous avons mis en place un processus optimisé pour le développement de votre projet." />
            </Helmet>

            <Layout>
                <div className="container-fluid contact-container-style mt-5">
                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Contactez nous !
                            </h1>
                            <div class="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Contact
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">

                            <form class="g-3">
                                <div className="row">
                                    <div class="col">
                                        <input type="text" required class="form-control form-style" placeholder="Nom" name="nom" />
                                    </div>
                                    <div className="col">
                                        <input type="text" required class="form-control form-style" placeholder="Prénom" name="prenom" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div class="col">
                                        <input type="email" required class="form-control form-style" placeholder="Email" name="nom" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div class="col">
                                        <input type="text" required class="form-control form-style" placeholder="Sujet" name="nom" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div class="col">
                                        <textarea class="form-control form-style" placeholder="Message" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div class="col">
                                        <button type="submit" class="btn btn-contact">Envoyer</button>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div className="col-lg-5 col-sm-12 mt-5 pl-5">
                            <div className="row">
                                <div className="col-1">
                                    <HiOutlinePhone className="contact-icon" />
                                </div>
                                <div className="col-9">
                                    <a href="tel:+216 98 72 77 14" class="phone-number-contact">+216 98 72 77 14</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1">
                                    <HiOutlineMail className="contact-icon" />
                                </div>
                                <div className="col-9">
                                    <a href="mailto:contact@emarketing.tn" class="phone-number-contact">contact@emarketing.tn</a>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-1">
                                    <HiOutlineClock className="contact-icon" />
                                </div>
                                <div className="col-9">
                                    <span class="phone-number-contact">Lun – Sam. 08:00h – 19:00h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )

}
export default ContactPage;