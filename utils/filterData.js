export default function search_btn_click(searchText,allResList){
    if(searchText===undefined)
    return allResList;

    const ar= allResList.filter((res)=>{
        return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
    });
    // console.log(ar)
    return ar
       // Restaurant_list=Restaurant_list.includes(searchText);
}

