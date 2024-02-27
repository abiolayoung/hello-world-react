import React from 'react'

// creating list items and listing them...

const items = [
    "Media Departments",
    "Planning Departments",
    "Product Designing Dept",
    "Developer Department",
  ];
  
  const ListItems = items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  export default ListItems;