/*'use client'
import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductsPage = () => {
  const [pizzas, setPizzas] = useState([]);

  // Fetch pizzas data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeletePizza = (id) => {
    // Implement delete functionality
    console.log('Deleting pizza with ID:', id);
  };


  
  return (
    <div>
      <h1>Pizzas List</h1>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} href="/admin/products/newProduct">
        Add Pizza
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {pizzas.map(pizza => (
    <TableRow key={pizza.id}>
      <TableCell>{pizza.id}</TableCell>
      <TableCell>
        <img src={pizza.image} alt={pizza.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      </TableCell>
      <TableCell>{pizza.name}</TableCell>
      <TableCell>{pizza.priceSm}</TableCell>
      
      <TableCell>
        <Button variant="contained" color="primary" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => handleDeletePizza(pizza.id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </div>
  );
};

export default ProductsPage;
*/

import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';

const ProductsPage = () => {
  const [pizzas, setPizzas] = useState([]);

  // Fetch pizzas data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeletePizza = async (_id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/pizzas/${_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPizzas(pizzas.filter(pizza => pizza._id !== _id)); // Updated to use _id
        alert('Pizza deleted successfully!');
      } else {
        console.error('Failed to delete pizza');
      }
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };

  return (
    <div>
      <h1>Pizzas List</h1>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} href="/admin/products/newProduct">
        Add Pizza
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.id}</TableCell>
              <TableCell>
                <img src={pizza.image} alt={pizza.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </TableCell>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.priceSm}</TableCell>
              <TableCell>
              <Link href={`/admin/products/updateProduct/${pizza._id}`} passHref>
                      <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                                     Edit
                                </Button>
                    </Link>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => handleDeletePizza(pizza._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsPage;


/*
"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductsPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const router = useRouter();

  // Fetch pizzas data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeletePizza = async (_id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/pizzas/${_id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPizzas(pizzas.filter(pizza => pizza._id !== _id)); // Updated to use _id
        alert('Pizza deleted successfully!');
      } else {
        console.error('Failed to delete pizza');
      }
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };

  const handleEditPizza = (_id) => {
    router.push(`/admin/products/updateProduct/${_id}`);
  };

  return (
    <div>
      <h1>Pizzas List</h1>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} href="/admin/products/newProduct">
        Add Pizza
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map(pizza => (
            <TableRow key={pizza._id}>
              <TableCell>{pizza.id}</TableCell>
              <TableCell>
                <img src={pizza.image} alt={pizza.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </TableCell>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.priceSm}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => handleEditPizza(pizza._id)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => handleDeletePizza(pizza._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsPage;*/