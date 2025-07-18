# initialize project
```bash
npx create-next-app --typescript --use-yarn
```
![nextjs setup](/DOCS/images/nextjs_setup.png)

cd .. >alife
```bash
npm run dev
```
stop at 4:09
install tailwindcss v3.x  (latest is v4.1/vite projects only)

# install tailwindcss
```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

# add these to tailwind.config.js
"./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
# add these to global.css
 @tailwind base;
@tailwind components;
@taildwind utilities;   

stop at 8:40