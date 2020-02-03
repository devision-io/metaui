let _componentMap = {};

const registerComponent = (name, component) => {
  _componentMap[name] = component;
};

const loadComponent = (name) => {
  return _componentMap[name];
};

export {
  registerComponent,
  loadComponent
};
