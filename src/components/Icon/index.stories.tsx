import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(withA11y)
  .add("simple", () => (
    <Icon icon={"edit"}/>
  ))
  .add("with style", () => (
    <Icon icon={"edit"} style={{color: 'red',}}/>
  ))
;
