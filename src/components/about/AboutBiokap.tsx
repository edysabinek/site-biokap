import React from 'react';
import Image from 'next/image';
import { Leaf, MapPin, Star } from 'lucide-react';

// Remplacer 🌿 par <Leaf size={32} />
import '../../../public/assets/scss/elements/_about_biokap.scss';

const AboutSection: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="about-badge">Qui sommes-nous ?</span>
                        <h2 className="about-title">
                            Biokap Group - Excellence en Produits Naturels
                        </h2>
                        <p className="about-description">
                            Biokap Group est une entreprise basée à l'est du Cameroun, en plein centre-ville de la ville de Bertoua.
                            <br/>
                            Spécialisée dans la transformation et la commercialisation de produits naturels de haute qualité , nous sommes soucieux de vous apporter à la fois
                            saveur et bien être.
                            Nos produits sont transformés et conditionnés pour être conservables plus longtemps.
                            <br/>
                            Étant issus de l'agriculture locale et biologiques, ils offrent donc de nombreux bénéfices pour la santé.
                        </p>
                    </div>

                    <div className="about-image">
                        <div className="image-wrapper">
                            <Image
                                src="assets/images/about/01.jpg"
                                alt="Biokap Group - Produits naturels"
                                width={600}
                                height={700}
                                className="main-image"
                                priority
                            />
                            <div className="image-decoration"></div>
                        </div>

                        <div className="stats-card">
                            <div className="stat">
                                <h4>+5</h4>
                                <p>Années d'expérience</p>
                            </div>
                            <div className="stat">
                                <h4>+10</h4>
                                <p>Produits différents</p>
                            </div>
                            <div className="stat">
                                <h4>100%</h4>
                                <p>Satisfaction client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;