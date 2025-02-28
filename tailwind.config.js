// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',    // e.g., blue-800
          secondary: '#F59E0B',  // e.g., amber-500
          accent: '#10B981',     // e.g., emerald-500
          background: '#F3F4F6', // e.g., gray-100
          text: '#111827',       // e.g., gray-900
          hover: '#3B82F6',      // e.g., blue-500
        },
      },
    },
    plugins: [],
  }
  