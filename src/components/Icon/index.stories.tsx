import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(withA11y)
  .add("simple", () => (
    <Icon attrs={{icon: "edit"}}/>
  ))
  .add("with style", () => (
    <Icon attrs={{icon: "edit"}} styles={{color: 'red',}}/>
  ))
;
