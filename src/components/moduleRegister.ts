import {registerComponent} from "./Common/componentStore";

import Button from "./Button/index";
import Icon from "./Icon/index";
import TextField from "./TextField/index";

export default function () {
  registerComponent('Button', Button);
  registerComponent('Icon', Icon);
  registerComponent('TextField', TextField);
}
