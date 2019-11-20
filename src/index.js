const req = require.context('./components', true, /^\.\/([^_][\w-]+)\/index\.tsx?$/);

let exports = {};
req.keys().forEach(mod => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    exports[match[1]] = v;
  }
});

console.log('exports', exports);

export default exports;
