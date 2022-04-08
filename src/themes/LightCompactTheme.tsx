import { useApplyStyles } from '../theming';

//const styles = require('./light-compact.theme.less');
import styles from './light-compact.theme.module.less';

export default function LightCompactTheme()  {
  useApplyStyles(styles);
  return (
    <div >LightCompactTheme</div>
  );
}