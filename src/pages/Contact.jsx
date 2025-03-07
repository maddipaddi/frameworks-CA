import { useState } from "react";

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

    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Enter a valid email address.";

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
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="p-6 sm:p-8 bg-primary text-white max-w-lg w-full rounded-lg border-2 border-accent shadow-lg">
        <h1 className="font-title font-bold text-2xl sm:text-3xl text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          <div>
            <label className="block text-white pb-2">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white p-2 text-gray-600 rounded"
              placeholder="Name goes here..."
              required
            />
          </div>

          <div>
            <label className="block text-white pb-2">Email*</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white p-2 text-gray-600 rounded"
              placeholder="Email goes here..."
              required
            />
          </div>

          <div>
            <label className="block text-white pb-2">Subject*</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white p-2 text-gray-600 rounded"
              placeholder="Add subject here..."
              required
            />
          </div>

          <div>
            <label className="block text-white pb-2">Description*</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-32 p-2 bg-white text-gray-600 rounded resize-none"
              placeholder="Write description here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-bold p-2 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
