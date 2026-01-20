export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    available ?: boolean;
    weight ?: number;

};

export const products: Product[] = [
    {
        id: 1,
        name: 'Banane séchée',
        description: 'Lutte contre la constipation, Soulage les brûlûres d\'estomac, Aide à la digestion',
        price: 1000,
        image: '/assets/images/products/ananas_1.png',
        category: 'Fruits déshydratés',
        available: true,
        weight: 100
    },
    {
        id: 2,
        name: 'Ananas séché',
        description: 'Élimine l\'oedème, Aide à la digestion, Augmente l\'appétit.',
        price: 1000,
        image: '/assets/images/products/ananas_1.png',
        category: 'Fruits déshydratés',
        available: true,
        weight: 100
    },
    {
        id: 3,
        name: 'Papaye séchée',
        description: 'Lutte contre le stress oxydant, Les troubles occulaires et cutanés, Aide à la digestion. ',
        price: 1000,
        image: '/assets/images/products/papayes_1.png',
        category: 'Fruits déshydratés',
        available: false,
        weight: 100
    },
    {
        id: 4,
        name: 'Pomme séchée',
        description : 'Lutte contre le stress oxydant, Les problèmes cardio vasculaires, Élimine les graisses',
        price: 1000,
        image: '/assets/images/products/pommes_1.png',
        category: 'Fruits déshydratés',
        available: true,
        weight: 100
    },
    {
        id: 5,
        name: 'Mangue séchée',
        description : 'Lutte contre le stress oxydant, Les problèmes cardio vasculaires, Élimine les graisses',
        price: 1000,
        image: '/assets/images/products/mangues_1.png',
        category: 'Fruits déshydratés',
        available: false,
        weight: 100
    },
    {
        id: 10,
        name: 'Noix de coco séchée',
        description : 'Noix de coco',
        price: 1000,
        image: '/assets/images/products/noix_de_coco_1.png',
        category: 'Fruits déshydratés',
        available: false,
        weight: 100
    },
    {
        id: 9,
        name: 'Safou séché',
        description : 'Prune Africaine. Favorise la digestion, Lutte contre le cancer, Lutte contre les maladies cardiovasculaires',
        price: 1000,
        image: '/assets/images/products/prunes_1.png',
        category: 'Fruits déshydratés',
        available: true,
        weight: 100
    },
    {
        id: 6,
        name: 'Poudre de gingembre',
        description : 'Rehausse et apporte du piquant à vos préparations, Anti-inflammatoire et anti-oxydant naturel, Améliore le travail et réduit les mouvements de l\'estomac \
        Combat les nausées, améliore la digestion',
        price: 1000,
        image: '/assets/images/products/ginger_1.png',
        category: 'Épices',
        available: true,
        weight: 100,
    },
    {
        id: 7,
        name: 'Poudre de foléré (oseil séché)',
        description : '',
        price: 1000,
        image: '/assets/images/products/folere_1.png',
        category: 'Épices',
        available: true,
        weight: 100
    },
    {
        id: 8,
        name: 'Artemisia Annua',
        description : 'Artemisia annua pour la lutte contre le paludisme et plus encore.',
        price: 1000,
        image: '/assets/images/products/artemisia_1.png',
        category: 'Thé',
        available: true,
        weight: 100
    }
];