import { useApplyStyles } from '../theming';


const styles = require('./dark.theme.less');
export default function DarkTheme() {
  useApplyStyles(styles);
  return null;
}