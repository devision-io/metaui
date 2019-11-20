import {addDecorator, configure} from '@storybook/react';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

import {checkA11y} from '@storybook/addon-a11y';

addDecorator(checkA11y);
