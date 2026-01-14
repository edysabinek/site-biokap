"use client"
import {whatsappLink} from "../utils/CommandWhatsapp";
import React from 'react'

function BannerTwo() {
  return (
    <div>
  {/* banner area two start */}
  <div className="rts-banner-area-two mt--60">
    <div className="container-2">
      <div className="row">
        <div className="col-lg-12">
          {/* banner area start */}
          <div className="banner-area-two-start">
            <div className="banner-bg-iamge-area bg_banner-2 bg_image">
              <div className="content">
                <span className="pre-title">
                  Bénéficiez d'une réduction dès 10.000 Fcfa d'achat.
                </span>
                <h1 className="title">
                  Produits naturels du <br />
                  Cameroun
                </h1>
                <p className="disc">
                  Sains, sans conservateurs et issus de l'agriculture locale. <br /> Découvrez de belles saveur...
                </p>
                <div className="rts-btn-banner-area">
                  <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="rts-btn btn-primary radious-sm with-icon"
                  >
                    <div className="btn-text">Commandez maintenant</div>
                    <div className="arrow-icon">
                      <i className="fa-light fa-arrow-right" />
                    </div>
                    <div className="arrow-icon">
                      <i className="fa-light fa-arrow-right" />
                    </div>
                  </a>
                  {/*<div className="price-area">*/}
                  {/*  <span>à partir de</span>*/}
                  {/*  <h3 className="title">1000 Fcfa</h3>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
          {/* banner area end */}
        </div>
      </div>
    </div>
  </div>
  {/* banner area two end */}

    </div>
  )
}

export default BannerTwo