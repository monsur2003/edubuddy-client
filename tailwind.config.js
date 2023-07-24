/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#eca901",
            secondary: "#1c345a",
         },
         scrollbar: {
            width: "8px",
         },
         scrollbarThumb: {
            backgroundColor: "blue",
            borderRadius: "4px",
         },
         scrollbarTrack: {
            backgroundColor: "#f1f1f1",
            borderRadius: "4px",
         },
      },
   },
   plugins: [],
};
