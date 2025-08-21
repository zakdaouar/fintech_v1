export default {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        success: "#27AE60",
        background: "#F9FAFB",
        card: "#FFFFFF"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.05)" },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
};
