import {checkA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(checkA11y)
  .add("simple", () => (
    <Icon attrs={{icon: "edit"}}></Icon>
  ))
  .add("with style", () => (
    <Icon attrs={{icon: "edit"}} styles={{color: 'red',}}></Icon>
  ))
;
