import React, { useState } from "react";
import axios from "axios";

const Fform = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Please fill both fields");

    axios
      .post("https://sign-in-login-backend.onrender.com/register", {
        name,
        message,
      })
      .then(() => console.log("Message sent"))
      .catch(() => alert("Failed to send"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-96 p-6 bg-white rounded-xl shadow-md"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Add a message/feedback
        </h3>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="mb-4 w-full px-4 py-2 border rounded resize-none text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send
        </button>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
              alt="Twitter X"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Fform;
