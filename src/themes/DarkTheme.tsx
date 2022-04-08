import { useApplyStyles } from '../theming';



import styles from './dark.theme.module.less';

export default function DarkTheme() {
  useApplyStyles(styles);
  return null;
}