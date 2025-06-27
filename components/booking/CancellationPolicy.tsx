// components/booking/CancellationPolicy.tsx

import React from 'react';
import { PolicyDetailsProps } from '@/interfaces'; // Adjust the path based on your setup

interface CancellationPolicyProps {
  policy: PolicyDetailsProps;
}

const CancellationPolicy: React.FC<CancellationPolicyProps> = ({ policy }) => {
  const { freeCancellationDate, partialRefundDate, groundRules } = policy;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Cancellation policy</h2>
      <p className="mt-2 text-gray-600">
        Free cancellation before {freeCancellationDate}. Cancel before check-in on {partialRefundDate} for a partial refund.
      </p>

      <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
      <ul className="mt-2 text-gray-600 list-disc list-inside">
        {groundRules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default CancellationPolicy;
