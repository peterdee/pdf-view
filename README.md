## Viewing PDF files with React

A demonstration of how the `react-pdf` should work with CRA-generated application.

Stack: React, React-PDF.

### Deploy

```shell script
git clone https://github.com/peterdee/pdf-view
cd ./pdf-view
nvm use 14
npm i -g yarn
yarn
```

### Modules locking

Module versions are locked.

This is necessary only for the `react-pdf` though, as the contents of `worker.js` in the `public` directory was copied from the `pdfjs-dist/build/pdf.worker.min.js` file.

### Launch

```shell script
yarn start
```

### Build

```shell script
yarn build
```

The `public` directory contains a `worker.js` file that should be copied to the `build` folder, otherwise `react-pdf` will not work properly when static files are created.

### LICENSE

[MIT](LICENSE)
