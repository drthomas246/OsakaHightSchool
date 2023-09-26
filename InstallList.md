# インストール

## ReactとTypeScriptのインストール
```
npm install react react-dom
npm install -D @types/react @types/react-dom
npm install -D typescript
```
## アプリに必要なパッケージのインストール
```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install fuse.js leaflet react-leaflet valtio
npm install -D @types/leaflet
```
## webpack、webpack-dev-serverのインストール
```
npm install -D webpack webpack-cli webpack-dev-server
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
  + "jsx": "react-jsx",             <==追加              /* Specify what JSX code is generated. */


/* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
  - // "types": [],             <==削除                  /* Specify type package names to be included without being referenced in a source file. */
  + // "types": ["node"],       <==追加                  /* Specify type package names to be included without being referenced in a source file. */

```
### webpack.config.tsの作成
### 各種ローダーのインストール
```
npm install -D html-webpack-plugin ts-loader style-loader css-loader file-loader ts-node @types/node
```

## eslintのインストール
```
npm init @eslint/config
npm install -D eslint eslint-webpack-plugin
npm install -D eslint-plugin-react
npm install -D doctrine
```
## eslintの設定
```
npm run eslint --init
```
## prettierのインストール
```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```
### eslintrc.jsonに設定を記入
```
"extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
  + "prettier"  <==追加
],
```
## Playwright componentsのインストール
```
npm init playwright@latest '--' --ct
```
## Playwrightのインストール
```
npm init playwright@latest
```
## storybookのインストール
```
npx storybook@latest init
```
