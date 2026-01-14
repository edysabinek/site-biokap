export type NavLink = {
    label: string;
    href?: string;
    children?: {
        label: string;
        href: string;
    }[];
    classname: string;
};

export const navLinks: NavLink[] = [
    { label: "Accueil",
       href: "/",
       classname: "",
    },

    {
        label: " Produits",
        children: [
            { label: "Fruits déshydratés", href: "/produits/fruits-deshydrates" },
            { label: "Épices & poudres", href: "/produits/epices" },
            { label: "Coffrets", href: "/produits/coffrets" },
        ],
        classname: "has-dropdown ",
    },

    {
        label: "Notre engagement",
        children: [
            { label: "Qualité & naturel", href: "/engagement/qualite" },
            { label: "Origine Cameroun", href: "/engagement/origine" },
            { label: "Processus de séchage", href: "/engagement/processus" },
        ],
        classname: "has-dropdown ",
    },
    {
        label: "Commander",
        children: [
            { label: "Comment ça marche?", href: "/commander/description" },
            { label: "Commander", href: "/engagement/origine" },
        ],
        classname: "has-dropdown ",
    },

    {
        label: "À propos",
        children: [
            { label: "Qui sommes-nous ?", href: "/a-propos" },
            { label: "Notre vision", href: "/a-propos/vision" },
        ],
        classname: "has-dropdown ",
    },

    { label: "Contact", href: "/contact", classname: "", },
];
