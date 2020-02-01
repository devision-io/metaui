import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Button from "./index";
import {action} from '@storybook/addon-actions';

storiesOf("Button", module)
  .addDecorator(withA11y)
  .add("simple", () => (
    <Button onClick={action('clicked')}></Button>
  ))
  .add("with style", () => (
    <Button
            attrs={{icon: "edit"}}
            styles={{backgroundColor: 'red',}}
            onClick={action('clicked')}></Button>
  ))
;
