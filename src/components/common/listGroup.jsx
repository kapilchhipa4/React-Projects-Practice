 import React from 'react';

 const ListGroup = (props) => {

    const {textProperty, valueProperty,onItemSelect, selectedItem} = props
     return  (
        <ul className = "list-group">
        {
            props.items.map( item => (
                <li 
                key = {item[valueProperty]}
                style = {{cursor: 'pointer'}} 
                onClick = { () =>{ onItemSelect(item) }}  
                className = { item === selectedItem ? "list-group-item active" : "list-group-item"}> {item[textProperty]}
                </li>
            ))
        }
        </ul>
     )
}
 ListGroup.defaultProps = {
     valueProperty : "_id",
     textProperty :"name"
 } 
 export default ListGroup;