# initialize project
```bash
npx create-next-app --typescript --use-yarn
```
![nextjs setup](/DOCS/images/nextjs_setup.png)

cd .. >alife
```bash
npm run dev

npm run lint (too check errors)
```
stop at 4:09
install tailwindcss v3.x  (latest is v4.1/vite projects only)

# install tailwindcss
```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

# add these to tailwind.config.js
```bash
"./app/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```
# add these to global.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;   

html,
body,
:root {
 height: 100%;   
}
```

# react-icons
```bash
npm install react-icons
```

# zustand
```bash
npm install zustand
```
# axios
```bash
npm install axios
```
# react-hook-form
```bash
npm install react-hook-form
```
# react-hot-toast
```bash
npm install react-hot-toast
```
stop at 1:30:00