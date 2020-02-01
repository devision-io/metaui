import React from 'react'
// import '@material/react-material-icon/index.scss';
import MaterialIcon from "@material/react-material-icon";
import {IMeElemAttrs, IMeElem} from "../Common/common";

// export interface IIconProps {
//   children?: React.ReactNode,
//   onClick?: (e:any) => void,
//   styles?: {}
// }

export interface IIcon extends IMeElem {
  attrs: IIconAttrs
}

export interface IIconAttrs extends IMeElemAttrs {
  icon: string
}

export default (props: IIcon) => {

  return (
    <MaterialIcon
      {...props.attrs}
      style={props.styles}
    />
  );
};
