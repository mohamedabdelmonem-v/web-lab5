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



}