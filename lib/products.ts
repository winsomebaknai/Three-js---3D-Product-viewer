// Products that will be displayed

export interface Product {   //interface
    id: string;
    name: string;
    description: string;
    modelPath: string;
    scale: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}


//type annotation
export const products: Product[] =[    //variable that will hold the data
 

    {
        id: 'car',
        name: 'Sports Car',
        description: 'A sleek red sports car model.',
        modelPath: '/models/car.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },

    {
        id: 'vintage car',
        name: 'Vintage racing Car',
        description: 'A vintage racing car model.',
        modelPath: '/models/vintage_racing_car.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },

    {
        id: 'cartoon car',
        name: 'Vintage wagon cartoon Car',
        description: 'A vintage cartoon car model.',
        modelPath: '/models/vintage_wagon_cartoon_car.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },
];

export const getModelPaths = (): string[] => {
    return products.map(p => p.modelPath);
}