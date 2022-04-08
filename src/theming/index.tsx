
import { ReactChildren, Suspense, useEffect } from 'react';
import { LazyStyle, Theme } from './types';
import LoadingIndicator from './LoadingIndicator';
import DarkTheme from '../themes/DarkTheme';


export function useApplyStyles(styles: any): void {
  useEffect(() => {
  const style=(styles as LazyStyle )
    console.log('in useEffect');
    console.log(style);
    styles?.use();
  
   return () => style.unuse()
      
  });
}

interface DynamicThemeProps {
  themes: Theme[],
  value: string,
}

export default function DynamicTheme({ themes, value }: DynamicThemeProps) {
  let Component = themes.find(theme => theme.id === value)?.component;
 
  return (
    // null
    <Suspense fallback={<LoadingIndicator tip="loading" />}>
    <Component/>
    </Suspense>
  );
}