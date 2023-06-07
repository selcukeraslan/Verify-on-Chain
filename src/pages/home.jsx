/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <body className="u-body u-xl-mode" data-lang="tr">
      <Header />
      <section className="u-clearfix u-section-1" id="carousel_1ff4">
        <div className="u-clearfix u-sheet u-sheet-1">
          <img
            className="u-image u-image-1"
            src="images/vangogh.png"
            data-image-width="1024"
            data-image-height="1024"
          />
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h1 className="u-custom-font u-font-playfair-display u-text u-text-default u-text-1">
                      Even Van Gogh is a fan
                    </h1>
                    <p className="u-text u-text-2">
                      A self-portrait of Van Gogh designed by AI, with a theme
                      based on blockchain.
                    </p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <p className="u-text u-text-default u-text-3">
                      Verify your certificates with NFTs. NFT (Non-Fungible
                      Token) technology allows for secure, unique digital
                      verification of certificates and other valuable assets.
                    </p>
                    <p>
                      With NFTs, you can easily prove the authenticity of your
                      certificates and protect against fraud and counterfeiting.
                      Trust in the power of NFTs to verify and validate your
                      important certificates and documents.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />

      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/web3@1.0.0/dist/web3.min.js."></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"></script>
      <script src="index.js"></script>
    </body>
  );
};

export default Home;
