/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               transitionProperty: {
                    "teste": "translate(-50%, -50%)"
               },

               translate: {
                    "centralize": "translate(-50%, -50%)"
               },
          },
     },
     plugins: [require("tailwind-gradient-mask-image")],
}