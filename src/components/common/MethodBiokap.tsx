import React from 'react'
import { Leaf, Award, Phone, PackageCheck } from 'lucide-react';

function MethodOne() {

    const features = [
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "100% Naturel",
            description: "Produits naturels sans conservateurs ni additifs chimiques, séchés de façon traditionnelle.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Qualité Garantie",
            description: "Processus de déshydratation contrôlé pour préserver tous les nutriments et saveurs.",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Commande par Téléphone",
            description: "Passez vos commandes facilement par téléphone ou WhatsApp. Service client réactif.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <PackageCheck className="w-8 h-8" />,
            title: "Livraison à Bertoua",
            description: "Livraison rapide dans toute la ville de Bertoua. Retrait possible sur place.",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <div>
            {/* rts shorts service area start */}
            <div className="rts-shorts-service-area rts-section-gap bg_primary">
                <div className="container-2">
                    <div className="row g-5">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12">
                                {/* single service area start */}
                                <div className="single-short-service-area-start">
                                    <div className="icon-area">
                                        {feature.icon}
                                    </div>
                                    <div className="information">
                                        <h4 className="title">{feature.title}</h4>
                                        <p className="disc">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                {/* single service area end */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* rts shorts service area end */}
        </div>
    )
}

export default MethodOne