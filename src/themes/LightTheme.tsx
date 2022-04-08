import { useEffect } from "react";
import { useApplyStyles } from "../theming";
import { LazyStyle } from "../theming/types";

 import styles from "./light.theme.module.less";

export default function LightTheme() {
   useApplyStyles(styles);

  return null;
   
 
}
