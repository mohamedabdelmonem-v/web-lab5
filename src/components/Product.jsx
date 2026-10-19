import React from 'react';
import Card from './Card';

// Reusable Presentational Component for displaying single product information
const Product = ({ title, price }) => {
    return (
 <Card>
     <h3>{title}</h3>
         <p>Price: ${price}</p>
    </Card>

         );
};