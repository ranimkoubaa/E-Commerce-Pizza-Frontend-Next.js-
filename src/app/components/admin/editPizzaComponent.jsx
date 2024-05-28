
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { Button, TextField } from '@material-ui/core';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const UpdatePizza = ({ pizzaId }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // Fetch pizza data using pizzaId and populate form fields
    const fetchPizzaData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/pizzas/${pizzaId}`);
        if (response.ok) {
          const pizza = await response.json();
          setName(pizza.name);
          setDescription(pizza.description);
          setPriceSm(pizza.priceSm);
          setPriceMd(pizza.priceMd);
          setPriceLg(pizza.priceLg);
          setImage(pizza.image);
        } else {
          console.error('Failed to fetch pizza data');
        }
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchPizzaData();
  }, [pizzaId]);

  const handleUpdatePizza = async () => {
    try {
      // Prepare updated pizza object
      const updatedPizza = {
        name,
        description,
        priceSm,
        priceMd,
        priceLg,
        image,
      };

      // Call the API endpoint to update the pizza
      const response = await fetch(`http://localhost:3001/api/pizzas/${pizzaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPizza),
      });

      // Check if the update was successful
      if (response.ok) {
        alert('Pizza updated successfully!');
       // NotificationManager.success('Success message', 'Title here');
        // Redirect to the desired page
        router.push('/admin/products');
      } else {
        console.error('Failed to update pizza');
        alert('Failed to update pizza');
      }
    } catch (error) {
      console.error('Error updating pizza:', error);
      alert(`Failed to update pizza: ${error.message}`);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Edit Pizza</h1>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        className="w-full mb-4"
      />
      <TextField
        label="Price (Small)"
        value={priceSm}
        onChange={(e) => setPriceSm(e.target.value)}
        className="w-full mb-4"
      />
      <TextField
        label="Price (Medium)"
        value={priceMd}
        onChange={(e) => setPriceMd(e.target.value)}
        className="w-full mb-4"
      />
      <TextField
        label="Price (Large)"
        value={priceLg}
        onChange={(e) => setPriceLg(e.target.value)}
        className="w-full mb-4"
      />
     {/* <TextField
        label="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-4"
  />*/}
      <div className="w-full mb-4">
        <FilePond
          allowMultiple={false}
          server={{
            process: (fieldName, file, metadata, load, error, progress, abort) => {
              const data = new FormData();
              data.append('file', file);
              data.append('upload_preset', 'ranim123');
              data.append('cloud_name', 'dzi3uyrph');
              data.append('public_id', file.name);
              axios
                .post('https://api.cloudinary.com/v1_1/dzi3uyrph/image/upload', data)
                .then((response) => response.data)
                .then((data) => {
                  setImage(data.url);
                  load(data);
                })
                .catch((error) => {
                  console.error('Error uploading file:', error);
                  error('Upload failed');
                  abort();
                });
            },
          }}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleUpdatePizza} className="mb-4">
        Update Pizza
      </Button>
    </div>
  );
};

export default UpdatePizza;



