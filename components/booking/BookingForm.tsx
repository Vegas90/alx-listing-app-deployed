import React from 'react';
import { useForm } from 'react-hook-form';
import { BookingFormProps } from '@/interfaces'; // Adjust path if needed

const BookingForm = () => {
  const { register, handleSubmit, reset } = useForm<BookingFormProps>();

  const onSubmit = (data: BookingFormProps) => {
    console.log("Form Data Submitted:", data);
    // You can send data to an API or process it as needed
    reset(); // optional: clears the form
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Contact Info */}
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First Name" {...register("FirstName")} className="border p-2 w-full" />
          <input placeholder="Last Name" {...register("LastName")} className="border p-2 w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="Email" type="email" {...register("Email")} className="border p-2 w-full" />
          <input placeholder="Phone Number" {...register("PhoneNumber")} className="border p-2 w-full" />
        </div>

        {/* Payment Info */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Payment Information</h2>
        <input placeholder="Card Number" {...register("PaymentInformation.CardNumber")} className="border p-2 w-full mt-2" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="Expiration Date" {...register("PaymentInformation.ExpiryDate")} className="border p-2 w-full" />
          <input placeholder="CVV" {...register("PaymentInformation.CVV")} className="border p-2 w-full" />
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Billing Address</h2>
        <input placeholder="Street Address" {...register("BillingAddress.Street")} className="border p-2 w-full mt-2" />
        <input placeholder="Apt/Suite (optional)" {...register("BillingAddress.AptSuite")} className="border p-2 w-full mt-2" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="City" {...register("BillingAddress.City")} className="border p-2 w-full" />
          <input placeholder="State" {...register("BillingAddress.State")} className="border p-2 w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="Zip Code" {...register("BillingAddress.ZipCode")} className="border p-2 w-full" />
          <input placeholder="Country" {...register("BillingAddress.Country")} className="border p-2 w-full" />
        </div>

        {/* Submit */}
        <button type="submit" className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
