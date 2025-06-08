import { useState } from "react";
import Card from "../components/styled/Card";
import BaseButton from "../components/styled/BaseButton";

/**
 * ContactForm is a React functional component that renders a contact form with fields for full name, email, subject, and description.
 * It manages form state and validation using React's useState hook.
 *
 * Features:
 * - Validates input fields for minimum length and correct email format.
 * - Displays error messages for invalid inputs.
 * - Resets form upon successful submission and shows a success alert.
 *
 * @component
 * @returns {JSX.Element} The rendered contact form component.
 */

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.fullName.trim().length < 3)
      newErrors.fullName = "Full name is required.";

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email =
        "Error: Enter a valid email address (e.g., name@example.com).";
    }

    if (formData.subject.trim().length < 3)
      newErrors.subject = "Subject is required.";

    if (formData.description.length < 3)
      newErrors.description = "Description must be at least 3 characters long.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");

      setTimeout(() => {
        setFormData({ fullName: "", email: "", subject: "", description: "" });
      }, 100);
      setErrors({});
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <Card className="max-w-lg shadow-lg sm:m-4">
      <h1 className="font-title font-bold text-2xl sm:text-3xl text-center">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mt-5 min-w-full"
      >
        <div>
          <label htmlFor="fullName" className="block text-white pb-2">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-white p-2 text-gray-600 rounded"
            placeholder="Name goes here..."
            required
            minLength={3}
            maxLength={30}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white pb-2">
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white p-2 text-gray-600 rounded"
            placeholder="Email goes here..."
            required
          />
          {errors.email && <p className="text-white text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-white pb-2">
            Subject*
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-white p-2 text-gray-600 rounded"
            placeholder="Add subject here..."
            required
            minLength={3}
            maxLength={30}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-white pb-2">
            Description*
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full h-32 p-2 bg-white text-gray-600 rounded resize-none"
            placeholder="Write description here..."
            required
            minLength={3}
            maxLength={300}
          />
        </div>

        <BaseButton type="submit" className="m-auto">
          Send Message
        </BaseButton>
      </form>
    </Card>
  );
}

export default ContactForm;
