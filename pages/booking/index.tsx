// pages/booking/index.tsx

import React from 'react';
import BookingForm from '@/components/booking/BookingForm';
import OrderSummary from '@/components/booking/OrderSummary';
import CancellationPolicy from '@/components/booking/CancellationPolicy';

import { BookingDetailsProps, PolicyDetailsProps } from '@/interfaces';

//one need to intilize to ensure type safety and code completion
// Initialize booking details and policy info with sample data
// This is just sample data; replace with actual data as needed
const bookingDetails: BookingDetailsProps = {
  propertyName: 'Oceanfront Paradise Villa',
  image: 'https://example.com/property.jpg',
  reviewScore: 4.85,
  stayDetails: {
    startDate: new Date('2025-08-20'),
    totalNights: 5,
  },
  breakdownOfFees: {
    bookingFee: 60,
    subtotal: 720,
    grandTotal: 780,
  },
};

const policyInfo: PolicyDetailsProps = {
  freeCancellationDate: 'Aug 18',
  partialRefundDate: 'Aug 20',
  groundRules: [
    'Follow the house rules',
    'Treat your Host’s home like your own',
    'No parties or events',
    'Keep noise to a minimum after 10 PM',
  ],
};

const BookingPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Left column – Form */}
      <div>
        <BookingForm />
        <CancellationPolicy policy={policyInfo} />
      </div>

      {/* Right column – Order Summary */}
      <div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
};

export default BookingPage;
