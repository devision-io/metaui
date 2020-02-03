import {addDecorator, configure} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import moduleRegister from "../src/components/moduleRegister";

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(checkA11y);

moduleRegister();
