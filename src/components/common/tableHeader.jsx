import React, { Component } from 'react';

//columns : array
//sortColumn : object
//onSort: function
class TableHeader extends Component {

  renderSortIcon = column =>{
    const {sortColumn } = this.props
  if(column.path !== sortColumn.path ) return null
  if(sortColumn.order === 'asc') return <i className ="fa fa-sort-asc"/>
  return <i className = "fa fa-sort-desc"/>

  }

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn}
        if(sortColumn.path === path)
          sortColumn.order = sortColumn.order === 'asc'? 'desc': 'asc'
        else{
          sortColumn.path = path
          sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
      }
    render() { 
        return ( 
            <thead>
          <tr >
              { 
              this.props.columns.map( column => (
              <th //style = {{cursor:"pointer"}} 
              className = "clickable"
              key = {column.path || column.key} 
              onClick = { ()=>{this.raiseSort(column.path) }}> 
              {column.lable } 
              { this.renderSortIcon(column) } 
              </th>) )
              }  
          </tr>
        </thead>
         );
    }
}
 
export default TableHeader;