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
        modelPath: 'https://ajfotmnrbwtzzhbaltfc.supabase.co/storage/v1/object/public/models/car.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },

    {
        id: 'vintage car',
        name: 'cartoon car',
        description: 'A cartoon car model.',
        modelPath: 'https://ajfotmnrbwtzzhbaltfc.supabase.co/storage/v1/object/public/models/cartoon_car.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },

    {
        id: 'cartoon car',
        name: 'Low poly truck',
        description: 'A vintage cartoon truck wagon model.',
        modelPath: 'https://ajfotmnrbwtzzhbaltfc.supabase.co/storage/v1/object/public/models/low-poly_truck.glb',
        scale: 1.5,
        position: [0, -0.5, 0],
        rotation: [0, Math.PI/4, 0],    
    },
];

export const getModelPaths = (): string[] => {
    return products.map(p => p.modelPath);
}