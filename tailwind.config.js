/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          'blue-light': '#3b82f6',
          purple: '#7c3aed',
          'purple-light': '#8b5cf6',
          indigo: '#4f46e5',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(79, 70, 229, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.25)',
      }
    },
  },
  plugins: [],
}
