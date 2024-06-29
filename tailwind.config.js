/** @type {import('tailwindcss').Config} */
//xác định các tệp tin JavaScript và TypeScript mà Tailwind CSS sẽ sử dụng để tạo ra CSS trong thư mục src và các thư mục con của src.
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

