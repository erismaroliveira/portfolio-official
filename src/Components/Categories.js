import React from 'react';

function Categories({filter,categories}) {
  return (
    <div className="buttons">
      {
        categories.map((cat, index) => {
          return <button 
            type="button" 
            className="btn-port" 
            onClick={()=> filter(cat)} 
            key={index}
          >
            {cat}
          </button>
        })
      }
    </div>
  )
}

export default Categories;
