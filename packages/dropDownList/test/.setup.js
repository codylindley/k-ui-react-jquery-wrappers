require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
global.HTMLElement = global.window.HTMLElement;
global.navigator = {
  userAgent: 'NodeJs JsDom'
};
global.kendo = require('kendo-ui-core/js/kendo.core.js');
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
documentRef = document;
