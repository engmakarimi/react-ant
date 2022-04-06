
import { ReactChildren, Suspense, useEffect } from 'react';
import { LazyStyle, Theme } from './types';
import LoadingIndicator from './LoadingIndicator';


export function useApplyStyles(styles: any): void {
  useEffect(() => {
   
      console.log(styles)
      console.log('styles?.use()');
      styles?.use();
  
     return () =>{ 
       console.log(styles)
       console.log('styles?.unuse()');
      styles?.unuse()
    }
  });
}

interface DynamicThemeProps {
  themes: Theme[],
  value: string,
}

export default function DynamicTheme({ themes, value }: DynamicThemeProps) {
  let Component = themes.find(theme => theme.id === value)?.component;
  console.log(themes.find(theme => theme.id === value))
  console.log(value);
   console.log(Component);
  return (
    // null
    <Suspense fallback={<LoadingIndicator tip="loading" />}>
      <Component />
    </Suspense>
  );
}