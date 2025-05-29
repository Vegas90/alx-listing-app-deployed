// This is a single-line comment
//define PropertyProps interface from PROPERTYLISTINGSAMPLE IN constants/index.ts
export interface PropertyProps {
  name: string; 
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;      
    discount: string;
}
   