import {checkA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Button from "./index";

storiesOf("Button", module)
  .addDecorator(checkA11y)
  .add("simple", () => (
    <Button></Button>
  ))
  .add("with style", () => (
    <Button styles={{backgroundColor: 'red',}}></Button>
  ))
;
