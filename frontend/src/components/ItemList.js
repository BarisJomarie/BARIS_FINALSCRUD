import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        try {
            const response = await
            axios.get('http://localhost:8000/items/')
            setItems(response.data);
        }catch(error) {
            console.error('Error catching the items!', error)
        }
    };

    return(
        <div>
                <h1>PERSONAL DATA SHEET</h1>
                <table className='item-list'>
                <tr>
                    <td colSpan={'24'} className='title-list'>
			            <b><i>All PERSONAL DATA SHEET LIST</i></b>
		            </td>
                </tr>
                <tr>
                    <td colSpan={'2'} className='list-label' style={{borderLeft: '1px solid black'}}>
                        ID
		            </td>
                    <td colSpan={'5'} className='list-label'>Surname</td>
                    <td colSpan={'5'} className='list-label'>First Name</td>
                    <td colSpan={'5'} className='list-label'>Middle Name</td>
                    <td colSpan={'3'} className='list-label'>Extensions</td>
                    <td colSpan={'4'} className='list-label' style={{borderRight: '1px solid black'}}></td>
                </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td colSpan={'2'} className='item' style={{backgroundColor:'lightgray'}}>{item.id}</td>
                            <td colSpan={'5'} className='item'>{item.surname}</td>
                            <td colSpan={'5'} className='item'>{item.firstname}</td>
                            <td colSpan={'5'} className='item'>{item.middlename}</td>
                            <td colSpan={'3'} className='item'>{item.extension}</td>
                            <td colSpan={'4'} className='item'>
                                <button onClick={() => onEdit(item)} className='list-button-edit' style={{paddingLeft:'13px', paddingRight:'13px', marginLeft: '10px'}}>Edit</button>&emsp;
                                <button onClick={() => onDelete(item.id)} className='list-button-delete'>Delete</button>
                            </td>
                        </tr>
                        
                    ))}
                </table>
        </div>
    );
}

export default ItemList;