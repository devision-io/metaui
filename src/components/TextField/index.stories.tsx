import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import TextInput from "./index";
import {action} from '@storybook/addon-actions';

storiesOf("TextInput", module)
  .addDecorator(withA11y)
  .add("simple text input", () => (
    <TextInput onChange={action('changed')}/>
  ))
  // .add("with style", () => (
  //   <TextInput
  //     attrs={{icon: "edit"}}
  //     styles={{backgroundColor: 'red',}}
  //     onClick={action('clicked')}/>
  // ))
;
