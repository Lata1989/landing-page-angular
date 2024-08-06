export const productList: Product[] = [
    { id: 1, name: 'Lavandina', price: 300, description: 'Lavandina de uso general para limpieza y desinfección.' },
    { id: 2, name: 'Detergente líquido', price: 500, description: 'Detergente líquido para lavar platos y utensilios de cocina.' },
    { id: 3, name: 'Desinfectante', price: 450, description: 'Desinfectante multiuso para superficies.' },
    { id: 4, name: 'Limpiavidrios', price: 350, description: 'Limpiavidrios con fórmula anti-rayas.' },
    { id: 5, name: 'Jabón en polvo', price: 700, description: 'Jabón en polvo para lavar ropa de alta eficiencia.' },
    { id: 6, name: 'Desengrasante', price: 400, description: 'Desengrasante potente para cocinas y superficies grasosas.' },
    { id: 7, name: 'Suavizante', price: 600, description: 'Suavizante de ropa con fragancia duradera.' },
    { id: 8, name: 'Limpiador de pisos', price: 550, description: 'Limpiador de pisos para todo tipo de superficies.' },
    { id: 9, name: 'Esponjas', price: 200, description: 'Esponjas multiuso para limpieza diaria.' },
    { id: 10, name: 'Paños de microfibra', price: 300, description: 'Paños de microfibra ultra absorbentes para limpieza.' },
    { id: 11, name: 'Limpiador multiuso', price: 380, description: 'Limpiador multiuso para todas las superficies.' },
    { id: 12, name: 'Quitasarro', price: 450, description: 'Quitasarro efectivo para baños y cocinas.' },
    { id: 13, name: 'Limpiador de baños', price: 500, description: 'Limpiador de baños con acción desinfectante.' },
    { id: 14, name: 'Limpiador de cocina', price: 450, description: 'Limpiador de cocina para superficies y electrodomésticos.' },
    { id: 15, name: 'Limpiador de alfombras', price: 600, description: 'Limpiador especializado para alfombras y tapizados.' },
    { id: 16, name: 'Ambientador', price: 250, description: 'Ambientador en aerosol con varias fragancias disponibles.' },
    { id: 17, name: 'Limpiador de acero inoxidable', price: 550, description: 'Limpiador para superficies de acero inoxidable.' },
    { id: 18, name: 'Toallitas desinfectantes', price: 350, description: 'Toallitas desinfectantes para limpieza rápida.' },
    { id: 19, name: 'Limpiahornos', price: 500, description: 'Limpiahornos efectivo para eliminar grasa y residuos.' },
    { id: 20, name: 'Bolsas de basura', price: 150, description: 'Bolsas de basura resistentes y de gran capacidad.' },
];



export interface Product {
    id: number | string,
    name: string,
    price: number,
    description: string
};
