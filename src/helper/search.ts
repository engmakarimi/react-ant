export default function search(searchKey:string, list:any[])  {
 return list.filter((p:any) => searchFn(searchKey, p));
};

function searchFn (searchKey:string, obj:any) {
    debugger;
  const SearchKey = searchKey.toLowerCase();
  let filterResult =false;
  Object.keys(obj).forEach((key) => {
     filterResult = filterResult || obj[key].includes(SearchKey);
     if(filterResult) return;
  });
  return filterResult;
};
