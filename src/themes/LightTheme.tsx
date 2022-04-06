import { useEffect } from 'react';
import { useApplyStyles } from '../theming';
import { LazyStyle } from '../theming/types';

//const styles = require('./light.theme.less');
import styles from './light.theme.less';


export default function LightTheme() {
  useEffect(() =>{
    console.log('in light.tsx');
    console.log(styles)
  })
  useApplyStyles(styles);
  return null;
}