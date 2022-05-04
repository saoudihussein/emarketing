import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout/layout";
import "./inscription-en-ligne.css";
import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";


const InscriptionPage = ({ location }) => {

    return (
        <>
            <Helmet>
                <title>Inscription en ligne - Emarketing Tunisie - IMSC</title>
            </Helmet>

            <Layout>
                <div className="container-fluid inscri-container-style mt-5">

                    <div className="container pt-5 pb-5">
                        <div className="row mt-5 mb-5 pb-5 pt-5">
                            <h1 className="text-center h1-prese-style">
                                Inscription en ligne
                            </h1>
                            <div className="text-center">

                                <Link className="link-prese-style" aria-current="page" to="#">
                                    Page d’accueil
                                </Link>

                                <span className="text-prese-style" aria-current="page" to="#">
                                    {">>"}
                                    <span className="name-prese-style" aria-current="page" to="#">
                                        Inscription en ligne
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">

                            <form className="g-3">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Nom" name="nom" />
                                    </div>
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Prénom" name="prenom" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Entreprise" name="entreprise" />
                                    </div>
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Poste" name="poste" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="email" required className="form-control form-style" placeholder="Email" name="email" />
                                    </div>
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Addresse" name="adresse" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="text" required className="form-control form-style" placeholder="Tél" name="tel" />
                                    </div>
                                    <div className="col">
                                        <select type="text" required className="form-control form-style" >
                                            {(() => {
                                                if (typeof location.state !== `undefined`) {
                                                    switch (location.state.type) {
                                                        case 'Formation En Digital Marketing':
                                                            return (
                                                                <>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )

                                                        case 'Formation Google for Business':
                                                            return (
                                                                <>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )
                                                        case 'Formation Web Design UI/UX':

                                                            return (
                                                                <>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )
                                                        case 'Formation Web & Ecommerce':
                                                            return (
                                                                <>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )

                                                        case 'Formation Community Manager':
                                                            return (
                                                                <>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )
                                                        case 'Formation Media Buying':
                                                            return (
                                                                <>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )
                                                        case 'Plateforme Emailing & SMTP':
                                                            return (
                                                                <>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )
                                                        case 'Service SEO & Digital Marketing':
                                                            return (
                                                                <>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                </>
                                                            )

                                                        case 'Création Web & E-Commerce':
                                                            return (
                                                                <>
                                                                    <option value="Création Web & E-Commerce">Création Web & E-Commerce</option>
                                                                    <option value="Formation Google for Business">Formation Google for Business</option>
                                                                    <option value="Formation En Digital Marketing">Formation En Digital Marketing</option>
                                                                    <option value="Formation Community Manager">Formation Community Manager</option>
                                                                    <option value="Formation Web Design UI/UX">Formation Web Design UI/UX</option>
                                                                    <option value="Formation Web & Ecommerce">Formation Web & Ecommerce</option>
                                                                    <option value="Formation Media Buying">Formation Media Buying</option>
                                                                    <option value="Plateforme Emailing & SMTP">Plateforme Emailing & SMTP</option>
                                                                    <option value="Service SEO & Digital Marketing">Service SEO & Digital Marketing</option>
                                                                </>
                                                            )
                                                        default:
                                                            return null
                                                    }
                                                }

                                            })()}
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <textarea className="form-control form-style" placeholder="Votre demande" name="demande" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <button type="submit" className="btn btn-contact">Envoyer</button>
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
                                    <a href="tel:+216 98 72 77 14" className="phone-number-contact">+216 98 72 77 14</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1">
                                    <HiOutlineMail className="contact-icon" />
                                </div>
                                <div className="col-9">
                                    <a href="mailto:contact@emarketing.tn" className="phone-number-contact">contact@emarketing.tn</a>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-1">
                                    <HiOutlineClock className="contact-icon" />
                                </div>
                                <div className="col-9">
                                    <span className="phone-number-contact">Lun – Sam. 08:00h – 19:00h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )

}
export default InscriptionPage;