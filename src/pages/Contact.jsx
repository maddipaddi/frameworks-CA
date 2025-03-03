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

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is requiered.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Enter a valid email address.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (formData.description.length < 10)
      newErrors.description =
        "Description must be at least 10 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Forem submitted", formData);
      alert("Message sent succesfully!");
      setFormData({ fullName: "", email: "", subject: "", description: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="contact-form-container p-6 bg-primary text-white w-md rounded-lg justify-items-center  border-2 border-accent">
        <div>
          <h1 className="font-title font-bold">Contact Us</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="contact-form flex flex-col gap-5 mt-5 "
          >
            <div>
              <label className="block text-white pb-2">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="fullName bg-white w-60 pl-2 text-gray-600"
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
                className="email bg-white w-60 pl-2 text-gray-600"
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
                className="subject bg-white w-60 pl-2 text-gray-600"
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
                className="bg-white w-60 h-32 p-2 text-gray-600 resize-none"
                placeholder="Write description here.."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-bold mt-5 p-2 rounded hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
