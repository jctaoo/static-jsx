const babel = require('@babel/core');
const plugin = require('.');

const example = `
  foo === bar;
`;

it('words', () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});