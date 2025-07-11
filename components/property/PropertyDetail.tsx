import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <Image
        src={property.image}
        alt={property.title}
        width={1200}
        height={400}
        className="w-full h-64 object-cover rounded-md"
        priority
      />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-800">
        <div>
          <strong>Price:</strong> ${property.price}
        </div>
        <div>
          <strong>Location:</strong> {property.location}
        </div>
        <div>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </div>
        <div>
          <strong>Bathrooms:</strong> {property.bathrooms}
        </div>
        <div>
          <strong>Size:</strong> {property.size} sqft
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;