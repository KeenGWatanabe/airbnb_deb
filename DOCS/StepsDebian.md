cmd to start (avoid using wsl or git bash because of C:/Windows permission restriction on Github)

# initialize project
```shell
npx create-next-app --typescript --use-yarn
```
![nextjs setup](/images/nextSetup.png)

cd .. >alife_win
```shell
npm run dev
```
stop at 4:09
clear globals.css
install tailwindcss v3.x  (latest is v4.1/ https://tailwindcss.com/ vite projects only)

https://v3.tailwindcss.com/docs/installation (recommended)

# install tailwindcss
```shell
npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p
```

# add these to tailwind.config.js
"./app/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
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
# create /app/components folder

# react-icons
```shell
npm install react-icons
```
# zustand
```shell
npm install zustand
```
# axios
```shell
npm install axios
```
# react-hook-form
```shell
npm install react-hook-form
```
# react-hot-toast
```shell
npm install react-hot-toast
```

# prisma
```shell
npm install -D prisma

npx prisma init
```
![npx prisma init](/DOCS/images/primaInstall.png)

Change postgresql to mongodb

# install prisma.io extension

db schema: alife_win / swim / nextjs

# prisma db
```bash

npm install @prisma/client (debian)

npx prisma db push
```

# prisma next-auth
src: https://authjs.dev/getting-started/adapters/prisma
```shell

(debian)
npm install @prisma/client @next-auth/prisma-adapter
npm install prisma --save-dev

```
# bcrypt
(window/WSL-js provides its own types defn)
```bash
(linux)
npm install bcrypt
npm install -D @types/bcrypt
```
schema.prisma
stop at 1:50:00



# Deployment to Vercel
```shell
npm run lint

npm run build
# Or for full production simulation:
npx vercel build
```
Push to github main

# goto Vercel
Add new project;
Import Git Repository;
Configure Project;
copy paste .env to Environment Variables;
Click Deploy


