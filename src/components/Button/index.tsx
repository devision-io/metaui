import React from 'react'
import Button from '@material/react-button';
import {IMeElem, IMeElemAttrs} from "../Common/common";

import '@material/react-button/dist/button.css';

export interface IButton extends IMeElem {
  attrs?: IButtonAttrs
}

export interface IButtonAttrs extends IMeElemAttrs {
  icon: string
}

export default (props: IButton) => {

  const nativeAttrs: any = {};
  nativeAttrs.outlined = true;

  return (
    <Button
      {...nativeAttrs}
      style={props.styles}
    >
      Click Me!
    </Button>
  )
};
