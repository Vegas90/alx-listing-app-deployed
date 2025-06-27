import React, { useState } from 'react';
import { BookingFormProps } from '../../interfaces'; // Adjust path if needed

const initialFormState: BookingFormProps = {
  FirstName: '',
  LastName: '',
  Email: '',
  PhoneNumber: '',
  PaymentInformation: {
    CardNumber: '',
    ExpiryDate: '',
    CVV: '',
  },
  BillingAddress: {
    Street: '',
    AptSuite: '',
    City: '',
    State: '',
    ZipCode: '',
    Country: '',
  },
};

const BookingForm = () => {
  const [form, setForm] = useState<BookingFormProps>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith('PaymentInformation.')) {
      const field = name.replace('PaymentInformation.', '');
      setForm((prev) => ({
        ...prev,
        PaymentInformation: {
          ...prev.PaymentInformation,
          [field]: value,
        },
      }));
    } else if (name.startsWith('BillingAddress.')) {
      const field = name.replace('BillingAddress.', '');
      setForm((prev) => ({
        ...prev,
        BillingAddress: {
          ...prev.BillingAddress,
          [field]: value,
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', form);
    setForm(initialFormState); // Reset form
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        {/* Contact Info */}
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="First Name"
            name="FirstName"
            value={form.FirstName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            placeholder="Last Name"
            name="LastName"
            value={form.LastName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            placeholder="Email"
            type="email"
            name="Email"
            value={form.Email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            placeholder="Phone Number"
            name="PhoneNumber"
            value={form.PhoneNumber}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        {/* Payment Info */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Payment Information</h2>
        <input
          placeholder="Card Number"
          name="PaymentInformation.CardNumber"
          value={form.PaymentInformation.CardNumber}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            placeholder="Expiration Date"
            name="PaymentInformation.ExpiryDate"
            value={form.PaymentInformation.ExpiryDate}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            placeholder="CVV"
            name="PaymentInformation.CVV"
            value={form.PaymentInformation.CVV}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Billing Address</h2>
        <input
          placeholder="Street Address"
          name="BillingAddress.Street"
          value={form.BillingAddress.Street}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <input
          placeholder="Apt/Suite (optional)"
          name="BillingAddress.AptSuite"
          value={form.BillingAddress.AptSuite}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            placeholder="City"
            name="BillingAddress.City"
            value={form.BillingAddress.City}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            placeholder="State"
            name="BillingAddress.State"
            value={form.BillingAddress.State}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            placeholder="Zip Code"
            name="BillingAddress.ZipCode"
            value={form.BillingAddress.ZipCode}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            placeholder="Country"
            name="BillingAddress.Country"
            value={form.BillingAddress.Country}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
