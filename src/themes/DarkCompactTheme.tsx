import * as React from 'react';
// import styles from './dark-compact.theme.less';
import { useApplyStyles } from '../theming';

// const styles = require('./dark-compact.theme.less');
import styles from './dark-compact.theme.module.less';


export default function DarkCompactTheme() {
  useApplyStyles(styles);
  return null;
}