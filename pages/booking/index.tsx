import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
    } = formData;

    // Basic client-side validations
    if (!firstName || !lastName || !email || !phoneNumber || !cardNumber || !expirationDate || !cvv || !billingAddress) {
      return "All fields are required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid email format.";
    }

    if (cardNumber.length < 12 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
      return "Card number must be 12–19 digits.";
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      return "CVV must be exactly 3 digits.";
    }

    // Could add more validations (e.g., expiration format)

    return null; // No validation errors
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      }); // Reset form after success
    } catch (error) {
      console.error("Booking submission error:", error);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
      <input type="text" name="expirationDate" placeholder="Expiration Date (MM/YY)" value={formData.expirationDate} onChange={handleChange} required />
      <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
      <input type="text" name="billingAddress" placeholder="Billing Address" value={formData.billingAddress} onChange={handleChange} required />

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
