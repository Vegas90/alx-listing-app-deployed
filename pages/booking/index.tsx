// create a static page that renders the booking form and order summary components.

import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

  
export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };
  
  
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex-1">
            <BookingForm />
        </div>
        <div className="flex-1">
            <OrderSummary />
        </div>
        </div>
    );
    };



// This page will render the booking form on the left and the order summary on the right.
// The BookingForm component will handle the booking process and the OrderSummary component will display the summary of the booking.
// The page is responsive and will stack the components on smaller screens.