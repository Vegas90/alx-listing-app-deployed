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
   
export interface BookingFormProps {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    PaymentInformation: {
        CardNumber: string;
        ExpiryDate: string;
        CVV: string;
    };
    BillingAddress: {
        Street: string;
        AptSuite: string;
        City: string;
        State: string;
        ZipCode: string;
        Country: string;
    }

};

export interface BookingDetailsProps {
  propertyName: string;
  image: string; // Use string (URL) instead of ImageBitmap (not React-friendly)
  reviewScore: number;

  stayDetails: {
    startDate: Date;
    totalNights: number; 
  };

  breakdownOfFees: {
    bookingFee: number;
    subtotal: number;
    grandTotal: number;
  };
}

export interface PolicyDetailsProps {
  freeCancellationDate: string; // e.g., "Aug 23"
  partialRefundDate: string;    // e.g., "Aug 24"
  groundRules: string[];        // e.g., ["Follow the house rules", "Treat the Host’s home like your own"]
}
