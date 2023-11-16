```
https://vitejs.dev/guide/
npm create vite@latest my-vue-app -- --template react

https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

https://dev.to/pacheco/configure-vitest-with-react-testing-library-5cbb
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
"scripts": {
+  "test": "vitest"
}

happy path
edge case - error handling

https://vitest.dev/guide/mocking
https://vitest.dev/api/vi#vi-fn

https://testing-library.com/docs/example-input-event/
https://testing-library.com/docs/react-testing-library/cheatsheet
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
