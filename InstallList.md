# インストール

## ReactとTypeScriptのインストール
```
yarn add react react-dom
yarn add -D @types/react @types/react-dom
yarn add -D typescript
```
## アプリに必要なパッケージのインストール
```
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
yarn add fuse.js leaflet react-leaflet valtio
yarn add -D @types/leaflet
```
## webpack、webpack-dev-serverのインストール
```
yarn add -D webpack webpack-cli webpack-dev-server
```
### tsconfig.jsonの作成
```
npx tsc --init
```
### tsconfig.jsonの編集
```
/* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
  - // "jsx": "preserve",           <==削除              /* Specify what JSX code is generated. */
  + "jsx": "react",           <==追加              /* Specify what JSX code is generated. */


/* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
  - // "types": [],             <==削除                  /* Specify type package names to be included without being referenced in a source file. */
  + // "types": ["node", "jest", "@testing-library/jest-dom"],     <==追加                         /* Specify type package names to be included without being referenced in a source file. */

```
### webpack.config.tsの作成
### 各種ローダーのインストール
```
yarn add -D html-webpack-plugin ts-loader style-loader css-loader file-loader ts-node @types/node
```

## eslintのインストール
```
yarn add -D eslint eslint-webpack-plugin
yarn add -D eslint-plugin-react
yarn add -D doctrine
```
## eslintの設定
```
yarn run eslint --init
```
## prettierのインストール
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```
### eslintrc.jsonに設定を記入
```
"extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
  + "prettier"  <==追加
],
```
## react用jestのインストール
```
yarn add -D jest mocha babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```
### TypeScript対応用インストール
```
yarn add -D ts-jest
yarn add -D @types/jest @types/mocha 
```
### jest設定ファイル作成
```
yarn ts-jest config:init
```
### DOMテスト用インストール
```
yarn add -D @testing-library/react jest-environment-jsdom @testing-library/jest-dom
```
### jest.config.jsの書き換え
```
module.exports = {
  preset: 'ts-jest',
- testEnvironment: 'node',  <==削除
+ testEnvironment: 'jest-environment-jsdom',  <==追加 
};
```
### イベント発生用インストール
```
yarn add -D @testing-library/user-event
```

## storybookのインストール
```
npx storybook@latest init
```
