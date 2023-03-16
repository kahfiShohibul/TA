import React, { useState } from 'react';

function Database() {
  const [data, setData] = useState([
    { id: 1, name: 'Product A', description: 'Description for Product A', price: 100 },
    { id: 2, name: 'Product B', description: 'Description for Product B', price: 200 },
    { id: 3, name: 'Product C', description: 'Description for Product C', price: 300 },
  ]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleAdd = (event) => {
    event.preventDefault();

    const id = data.length + 1;
    const newData = { id, name, description, price };
    setData([...data, newData]);

    setName('');
    setDescription('');
    setPrice('');
  }

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  return (
    <div>
      <h1>Database</h1>
      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={handlePriceChange} />
        </div>
        <button type="submit">Add</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description} - {item.price}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Database;
