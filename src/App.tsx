import React, { useCallback, useState } from 'react';
import { Button, Select } from 'antd';
import './App.css';

import DynamicTheme from './theming';
import { themes } from './themes';
import DemoTable from './DemoTable';
import search from './helper/search';

const defaultTheme = themes[0];

const options = themes.map((theme) => ({
  label: theme.displayName,
  value: theme.id
}));

 function App() {
  const [themeId, setThemeId] = useState(defaultTheme.id);
  const selectThemeId = useCallback(
    (option) => setThemeId(option as string),
    []
  );
 function  searchHandler(){
   let list=[
     {key:'12',name:'mari',lastName:'karimi',city:'tehran'},
     {key:'12',name:'zahra',lastName:'karimi',city:'tehran'},
     {key:'12',name:'leila',lastName:'kalhor',city:'tehran'},
     {key:'12',name:'fateme',lastName:'bagheri',city:'tehran'},
    ];
    const filters=search('ka',list)
    console.log(filters);
 }
    
  return (
    <>
      <DynamicTheme themes={themes} value={themeId} />
      <Select
        value={themeId}
        style={{ minWidth: 200 }}
        options={options}
        onSelect={selectThemeId}
      />
      <DemoTable />
      <Button type="primary" onClick={searchHandler} >test</Button>

    </>
  );
}
export default App;