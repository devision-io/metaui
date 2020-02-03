import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import Lego from "./index";
import {IButton} from "../Button";

storiesOf("Lego", module)
  .addDecorator(withA11y)
  .add("simple lego", () => (
    <Lego elems={[
      {
        id: "x",
        name: "Button",
        icon: "edit",
        span: 6,
      } as IButton,
      {
        id: "x2",
        name: "Button",
        icon: "alarm",
        span: 6,
      } as IButton,
      {
        id: "x3",
        name: "Button",
        icon: "alarm",
        span: 3,
      } as IButton,
      {
        id: "x4",
        name: "Button",
        icon: "alarm",
        span: 3,
      } as IButton,
      {
        id: "tf1",
        name: "TextField",
        icon: "alarm",
        label: "My text field",
        span: 12,
      } as IButton,
      {
        id: "x5",
        name: "Button",
        icon: "alarm",
        span: 3,
      } as IButton,
      {
        id: "x6",
        name: "Button",
        icon: "alarm",
        span: 3,
      } as IButton,
    ]}/>
  ))
// .add("with style", () => (
// ))
;
