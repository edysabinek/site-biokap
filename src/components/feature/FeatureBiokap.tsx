"use client"
import React from 'react'

function FeatureTwo() {
  return (
    <div>
      <div className="rts-section-gapBottom pt--20 feature-product-area">
        <div className="container-2">
          <div className="row g-5">
            <div className="col-lg-6">
              {/* single feature product area */}
              <div className="feature-product-area-single bg_image">
                <div className="inner-image">
                  <img src="assets/images/feature/package.png" alt="feature" />
                </div>
                <div className="inner-content">
                  <h2 className="title">
                    Fruits séchés <br />
                    Sans <span>conservateurs</span>
                  </h2>
                  <div className="price-area">
                    <span>Dès</span>
                    <h3 className="price">1000Fcfa</h3>
                  </div>
                </div>
              </div>
              {/* single feature product area end */}
            </div>
            <div className="col-lg-6">
              {/* single feature product area */}
              <div className="feature-product-area-single two bg_image">
                <div className="inner-image">
                  <img src="assets/images/feature/package.png" alt="feature" />
                </div>
                <div className="inner-content">
                  <h2 className="title">
                      Épices et thé <br />
                      100% <span>Naturels</span>
                  </h2>

                  <div className="price-area">
                    <span>Dès</span>
                    <h3 className="price">500Fcfa</h3>
                  </div>
                </div>
              </div>
              {/* single feature product area end */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeatureTwo