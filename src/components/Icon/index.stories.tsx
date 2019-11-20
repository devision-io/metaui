// import React from 'react';
// import Icon from './index';
//
// export default {title: 'Icon'};
//
// export const small = () => <Icon size='small'>Small</Icon>;
//
// export const medium = () => <Icon size='medium'>Medium</Icon>;
//
// export const large = () => <Icon size='large'>Large</Icon>;


// import {storiesOf} from '@storybook/react';
// import * as React from 'react';
// import Icon from "./index";
//
//
// storiesOf("Button", module)
//   .add("with text", () => (
//     <Icon>Hello Button</Icon>
//   ))
//   .add("with some emoji", () => (
//     <Icon>😀 😎 👍 💯</Icon>
//   ));


import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Icon from "./index";
storiesOf("Button", module)
  .addDecorator(checkA11y)
  .add("with text", () => (
    <Icon>Hello Button</Icon>
  ))
  .add("with some emoji", () => (
    <Icon styles={{ backgroundColor: 'red', color: 'darkRed', }}>😀 😎 👍 💯</Icon>
  ));
