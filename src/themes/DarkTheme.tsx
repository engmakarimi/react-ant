import { useApplyStyles } from '../theming';



import styles from './dark.theme.less';

export default function DarkTheme() {
  useApplyStyles(styles);
  return null;
}