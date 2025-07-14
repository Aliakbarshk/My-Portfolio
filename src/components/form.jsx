import React from "react";

// Add this to your index.html or public/index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

const LoginForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0b0b0f] px-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <form className="w-full max-w-md bg-[#131417] border border-[#1f1f23] p-8 rounded-2xl shadow-[0_0_30px_#00000040]">
        <h2 className="text-white text-2xl font-semibold mb-6 tracking-wide text-center">
          Feedback / Contact Me
        </h2>

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0e0f12] text-white placeholder-gray-500 border border-[#2a2a2f] focus:outline-none focus:ring-2 focus:ring-[#5eead4] transition"
        />

        <textarea
          placeholder="Your Message..."
          rows="4"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0e0f12] text-white placeholder-gray-500 border border-[#2a2a2f] focus:outline-none focus:ring-2 focus:ring-[#5eead4] transition resize-none"
        />

        <div className="flex items-center mb-6">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 rounded-sm accent-[#5eead4] bg-[#0e0f12] border border-gray-600"
          />
          <label htmlFor="remember" className="ml-2 text-gray-400 text-sm">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] text-black font-semibold tracking-wider hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
