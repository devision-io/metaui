import {CSSProperties} from "react";

export interface IMeElem {
  id?: string;
  name?: string;

  // отступ слева
  order?: number;
  // ширина
  span?: number;

  label?: string;
  help?: string;
  defaultValue?: any;
  value?: any;

  style?: CSSProperties;

  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
}


export interface IWithIcon {
  icon?: string
}
