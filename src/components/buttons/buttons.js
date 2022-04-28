import { Link } from "gatsby";
import React from "react";
import downloadFile from '../../documents/fiche-inscription-emarketing.pdf'
import './buttons.css';


const ButtonComponent = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col">
                    <div class="bd-example">
                        <Link href="#" class="btn btn-primary btn-lg btn-inscri" tabindex="-1" role="button">Inscription en ligne</Link>
                        <Link target="_blank" href={downloadFile} class="btn btn-primary btn-lg btn-downoad" tabindex="-1" role="button">Télécharger les Programmes</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ButtonComponent;
