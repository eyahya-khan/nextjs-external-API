##On live

nextjs-external-api.eyahya-khan.vercel.app





//Install Next.js
npx create-next-app

//Add Typescript
touch tsconfig.json
// with npm
npm install --dev typescript @types/react @types/node
npm run dev
// with yarn
yarn add --dev typescript @types/react @types/node
yarn dev
Add Jest / React Testing Library
// with npm
npm install --dev @testing-library/jest-dom @testing-library/react babel-jest jest react-test-renderer identity-obj-proxy @types/jest
// with yarn
yarn add --dev @testing-library/jest-dom @testing-library/react babel-jest jest react-test-renderer identity-obj-proxy @types/jest
Add Files:

.babelrc
jest.config.js
setupTests.ts
config/jest/cssTransform.js
Update tsconfig.json:

Add "types": ["jest", "node"] to compilerOptions (see tsconfig.json)
Add tests:

Examples: tests/index.test.tsx, components/Title.test.tsx
Add npm scripts:

Add "test" and "test:ci" scripts (see package.json)
Run tests with npm test or yarn test

ESLint, Prettier and EditorConfig
Add ESLint and Prettier:

yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
Add Files:

.editorconfig
.eslintignore
.eslintrc.json
.prettierignore
.prettierrc
Format your files by running npm run format or yarn format.

Lint your files by running npm run lint or yarn lint.
