import React from 'react'
import Button from '@material/react-button';
import {IMeElem, IMeElemAttrs} from "../Common/common";

import '@material/react-button/dist/button.css';
import MaterialIcon from "@material/react-material-icon";

export interface IButton extends IMeElem {
  attrs?: IButtonAttrs
}

export interface IButtonAttrs extends IMeElemAttrs {
  icon: string
}

export default (props: IButton) => {

  const nativeAttrs: any = {};
  nativeAttrs.outlined = true;

  const onClick = (e) => {
    if (!props.onClick) {
      return;
    }
    props.onClick(e);
  };
  return (
    <Button
      {...nativeAttrs}
      style={props.styles}
      onClick={onClick}
      icon={props.attrs && props.attrs.icon ? <MaterialIcon icon={props.attrs.icon}></MaterialIcon> : null}
    >
      Click Me!
    </Button>
  )
};
