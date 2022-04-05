import { useApplyStyles } from '../theming';

const styles = require('./light-compact.theme.less');

export default function LightCompactTheme()  {
  useApplyStyles(styles);
  return null;
}