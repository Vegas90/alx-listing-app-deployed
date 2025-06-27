// components/booking/OrderSummary.tsx

import React from 'react';
import { BookingDetailsProps } from '@/interfaces'; // adjust path if needed

interface OrderSummaryProps {
  bookingDetails: BookingDetailsProps;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const { propertyName, image, reviewScore, stayDetails, breakdownOfFees } = bookingDetails;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <img
          src={image}
          alt="Property"
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">Rating: {reviewScore.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            {new Date(stayDetails.startDate).toLocaleDateString()} • {stayDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${breakdownOfFees.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${breakdownOfFees.subtotal}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${breakdownOfFees.grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
