'use strict';

function staticJSXPlugin({ types: t }) {

  
  return {
    visitor: {
      JSXElement(path) {
        console.log(path.node)
      }
    }
  };
}

module.exports = staticJSXPlugin;