import React, {useState} from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (item) => {
    setCurrentItem(item);
    document.getElementById('header').textContent = "Edit Personal Data Sheet";
    document.getElementById('submit-button').textContent = "Save Edit";
  };

  const handleDelete = async (id) => {
    try {
      await
      axios.delete(`http://localhost:8000/items/${id}/`);
      setRefresh(!refresh);
      alert('Record Deleted!');
    }catch(error) {
      console.error('Error deleting the Item!', error);
    }
  };

  const handleSuccess = () => {
    setCurrentItem(null);
    setRefresh(!refresh);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return(
    <div className='App'>
      <ItemForm item={currentItem} onSuccess={handleSuccess}/>
      <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
