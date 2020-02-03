import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Button from "./index";
import {action} from '@storybook/addon-actions';

storiesOf("Button", module)
  .addDecorator(withA11y)
  .add("simple", () => (
    <Button onClick={action('clicked')}/>
  ))
  .add("with style", () => (
    <Button
      icon={"edit"}
      style={{backgroundColor: 'red',}}
      onClick={action('clicked')}/>
  ))
;
