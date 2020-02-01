import {CSSProperties} from "react";

export interface IMeElem {
  id?: string;
  name?: string;

  label?: string;
  help?: string;
  defaultValue?: any;
  value?: any;

  styles?: CSSProperties;
  attrs: IMeElemAttrs;
}


export interface IMeElemAttrs {

}
