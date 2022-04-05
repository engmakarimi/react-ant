import { useApplyStyles } from '../theming';

const styles = require('./light.theme.less');


export default function DarkTheme() {
  useApplyStyles(styles);
  return null;
}