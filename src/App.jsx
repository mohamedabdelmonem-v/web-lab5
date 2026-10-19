import { useState } from 'react'
import ProductList from './components/ProductList';

// Root Application Component
function App() {
// State variables management
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  // Handler for text input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

// Handler for toggle button click
  const toggleProducts = () => {
    setShowProducts((prev) => !prev);
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px'
  };

  return (
 <div style={containerStyle}>
      <h1>React Product Dashboard</h1>

{/* Controlled Text Input */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          style={{ padding: '8px', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
        />
      </div>

{/* Dynamic Greeting */}
      <p style={{ fontWeight: 'bold' }}>Hello, {name || 'Guest'}</p>

      {/* Visibility Toggle Button */}
      <button 
        onClick={toggleProducts} 
        style={{ margin: '15px 0', padding: '10px 15px', cursor: 'pointer' }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {/* Conditional Rendering of Product List */}
      {showProducts && <ProductList />}


 </div>
  ); 
}

export default App;