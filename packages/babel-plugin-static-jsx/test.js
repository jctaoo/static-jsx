const babel = require('@babel/core');
const plugin = require('.');

const example = `
  const a = <h1 style={{color: 'red'}}>Hello World</h1>
`;
const { code } = babel.transform(example, { plugins: [plugin], presets: ["@babel/preset-react"] });

console.log(code)