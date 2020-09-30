import React from 'react';
const Pagination = (props) => {
    console.log(props.currentPage)
    const {itemCount, pageSize, currentPage } = props;
    const pagesCount = Math.ceil(itemCount / pageSize)
    const pages = []
    for(let i=1; i<=pagesCount; i++) pages.push(i)
    if(pagesCount === 1) return null
    
    return ( 
    <nav>
  <ul className="pagination">
   {
   pages.map( page=>(
       <li  key = {page} className={page === currentPage ? "page-item active":"page-item"}>
        <a  style = {{cursor:'pointer'}}className="page-link" onClick = { ()=>{
             props.onPageChange(page)
        }}> {page}</a></li>
   ))}
    
  </ul>
</nav>
     );
}
 
export default Pagination;