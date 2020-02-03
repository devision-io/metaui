import React from 'react'
// import '@material/react-material-icon/index.scss';
import MaterialIcon from "@material/react-material-icon";
import {IMeElem, IWithIcon} from "../Common/common";

export interface IIcon extends IMeElem, IWithIcon {
}

export default (props: IIcon) => {

  return (
    <MaterialIcon
      icon={props.icon}
      style={props.style}
    />
  );
};
