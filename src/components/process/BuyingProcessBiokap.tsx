'use client'; // optional, for client-side code

import {Award, Leaf, PackageCheck, Phone} from "lucide-react";
import React from "react";

const features = [
    {
        icon: <Leaf className="w-8 h-8" />,
        title: "100% Naturel",
        description: "Sans conservateurs ni additifs chimiques.",
        color: "from-green-500 to-green-600"
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Qualité Garantie",
        description: "Nutriments et saveurs préservés.",
        color: "from-yellow-500 to-yellow-600"
    },
    {
        icon: <Phone className="w-8 h-8" />,
        title: "Commande facile",
        description: "Par téléphone ou WhatsApp.",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: <PackageCheck className="w-8 h-8" />,
        title: "Livraison à Bertoua",
        description: "Retrait possible sur place.",
        color: "from-orange-500 to-orange-600"
    }
];

const MyComponent = () => (
  <div>
    <>
  {/* buying easy way tips */}
  <div className="buying-easyway-process">
    <div className="container-2">
      <div className="col-lg-12">
        {/* wasy-way buying area */}
        <div className="easyway-buying-area-wrapper">
          {features.map((feature, index) => (
          <div key={index} className="single-easy-way-buying-area">
            <div className="icon">
                {feature.icon}
            </div>
            <div className="inforemation">
              <h4 className="title">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
          ))}
        </div>
        {/* wasy-way buying area end */}
      </div>
    </div>
  </div>
  {/* buying easy way tips end */}
</>

  </div>
);

export default MyComponent;