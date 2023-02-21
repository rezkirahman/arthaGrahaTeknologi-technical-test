import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Skateboard',
    image: 'https://source.unsplash.com/320x200/?skateboard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1800,
  },
  {
    id: 2,
    name: 'Motorcycle',
    image: 'https://source.unsplash.com/320x200/?motorcycle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 2000,
  },
  {
    id: 3,
    name: 'Bycicle',
    image: 'https://source.unsplash.com/320x200/?bycicle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1900,
  },
  {
    id: 3,
    name: 'Car',
    image: 'https://source.unsplash.com/320x200/?car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1700,
  },
]

function App() {

  const [sortBy, setSortBy] = useState('name');

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div width='400px'>
      <label htmlFor="sort-by">Sort By:</label>
      <select id="sort-by" value={sortBy} onChange={handleSort}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <div style={{ marginTop: '12px' }}>
        {sortedProducts.map((product) => (
          <div key={product.id} style={{ width: '320px', border: 'solid 1px', margin: '8px', borderRadius: '12px' }}>
            <img src={product.image} alt={product.name} style={{ borderRadius: '12px 12px 0 0' }} />
            <h3>{product.name}</h3>
            <div align='left' style={{padding:'12px'}}>
              <p>{product.description}</p>
              <p>Price: Rp. {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
