import React from 'react'
import Button from '@material/react-button';
import {IMeElem, IWithIcon} from "../Common/common";

import '@material/react-button/dist/button.css';
import MaterialIcon from "@material/react-material-icon";

/**
 * @link https://github.com/material-components/material-components-web-react/tree/master/packages/button
 */
export interface IButton extends IMeElem, IWithIcon {
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
      style={props.style}
      onClick={onClick}
      icon={props.icon ? <MaterialIcon icon={props.icon}></MaterialIcon> : null}
    >
      Click Me!
    </Button>
  )
};

