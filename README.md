# React Product Dashboard (Assignment 5)

## Overview
A minimal React application built with Vite demonstrating core React principles: component composition, props passing, controlled inputs, conditional rendering, and state management using `useState`.

## File Organization
- `src/App.jsx`: Main root component controlling user input state and list visibility.
- `src/components/ProductList.jsx`: Contains static data and maps over items using unique keys.
- `src/components/Product.jsx`: Reusable presentational component for rendering product properties.
- `src/components/Card.jsx`: Layout wrapper utilizing composition (`children` prop).
- `README.md`: Explains structure, logic, and challenges faced.

## Challenges Faced
1. **Understanding Composition**: Implementing the `Card` component using `children` properly without tight coupling to product details.
2. **Controlled Components**: Ensuring smooth state synchronization between the name input field and dynamic paragraph greeting.
3. **Strict Commit Workflow**: Maintaining a granular commit strategy to comply with the per-file commit requirements.
