// Hook from Next.js to acess the current URL and its parameters
import { useRouter } from 'next/router';
//Axios helps us make HTTP requests
import axios from 'axios';
// React hooks: useState stores data, useEffect runs code when the component loads and updates
import {useState,useEffect} from 'react';
// A component that will display the details property info
import PropertyDetail from "@/components/property/PropertyDetail";

//a react component to show details of one specific propert based on the ID in the URL
export default function PropertyDetailPage() {
    //get the router object from Next.js to access route information
const router  = useRouter();

// extract id of the property from the URL
 const {id} = router.query;

 // Define a type for your property data (adjust fields as needed)
 type Property = {
    id: string;
    title: string;
    description: string;
    price: number;
    name: string;
    address: string;
    rating: number;
    category: string;
    images: string[];
    bedrooms: number;
    bathrooms: number;
    area: number;
    amenities: string[];
    owner: string;
    offers: string[]; // Add offers field
    image: string; // Add image field
    discount: number; // Add discount field
    location: string; // Add location field
    size: number; // Add size field
    // add other fields as needed to match PropertyProps
 };

 //create a state to share the property data once fetched
 const [property, setProperty] = useState<Property | null>(null);

//create a state to show a loading message  wbhile the data is being fetched
    const [loading, setLoading] = useState(true);


//useEffect runs when the component loads
useEffect(() => {

    // async function to fetch property data
    const fetchProperty = async () => {
        // if there is no id, stop
        if (!id) return;
        // try to fetch the property data from the API
        try {
            //call API to fetch the property using the id from the URL
            const response = await axios.get<Property>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`);
            //save the response (property data)
            setProperty(response.data);
        }
        // if there is an error, log it for debugging

        catch (error) {
        // If there is an error, log it for debugging
        console.error("Error fetching property:", error);
        }
        finally {
            //where it succeeds or fails, stop showin the loading message
            setLoading(false);
            }
    };

    //call the function to fetch property data
    fetchProperty();
}, [id]); // run this effect when the id changes

//if the data is still loading, show a loading message
if (loading) {
    return <div>Loading...</div>;
    }

//if the property data is not available, show an error message
if (!property) {
    return <div>Error: Property not found</div>;
    }
    //return the PropertyDetail component with the fetched property data
   // return <PropertyDetail property={property} />;
}

