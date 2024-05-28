/*'use client'
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const AddPizzaPage = () => {
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaDescription, setPizzaDescription] = useState('');
  const [pizzaImage, setPizzaImage] = useState('');
  const [pizzaPriceSm, setPizzaPriceSm] = useState('');
  const [pizzaPriceMd, setPizzaPriceMd] = useState('');
  const [pizzaPriceLg, setPizzaPriceLg] = useState('');

  const handleAddPizza = () => {
    // Implement functionality to add pizza
    console.log('Adding pizza:', {
      pizzaName,
      pizzaDescription,
      pizzaImage,
      pizzaPriceSm,
      pizzaPriceMd,
      pizzaPriceLg,
    });
    // Reset input fields after adding pizza
    setPizzaName('');
    setPizzaDescription('');
    setPizzaImage('');
    setPizzaPriceSm('');
    setPizzaPriceMd('');
    setPizzaPriceLg('');
  };

  return (
    <div>
      <h1>Add Pizza</h1>
      <TextField
        label="Pizza Name"
        value={pizzaName}
        onChange={(e) => setPizzaName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={pizzaDescription}
        onChange={(e) => setPizzaDescription(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        value={pizzaImage}
        onChange={(e) => setPizzaImage(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price (Small)"
        value={pizzaPriceSm}
        onChange={(e) => setPizzaPriceSm(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price (Medium)"
        value={pizzaPriceMd}
        onChange={(e) => setPizzaPriceMd(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price (Large)"
        value={pizzaPriceLg}
        onChange={(e) => setPizzaPriceLg(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddPizza}>
        Add Pizza
      </Button>
    </div>
  );
};

export default AddPizzaPage;
*/

/*
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        setName('');
        setDescription('');
        setImage('');
        setPriceSm('');
        setPriceMd('');
        setPriceLg('');
        setValidated(false);
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    }
    setValidated(true);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product image URL.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceSm">
          <Form.Label>Price (Small)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Small)"
            value={priceSm}
            onChange={(e) => setPriceSm(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for small size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceMd">
          <Form.Label>Price (Medium)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Medium)"
            value={priceMd}
            onChange={(e) => setPriceMd(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for medium size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceLg">
          <Form.Label>Price (Large)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Large)"
            value={priceLg}
            onChange={(e) => setPriceLg(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for large size.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;
*/
/*
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        setName('');
        setDescription('');
        setImage('');
        setPriceSm('');
        setPriceMd('');
        setPriceLg('');
        setValidated(false);
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    }
    setValidated(true);
  };

  const handleReset = () => {
    // Reset form fields
    setName('');
    setDescription('');
    setImage('');
    setPriceSm('');
    setPriceMd('');
    setPriceLg('');
    setValidated(false);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <div style={{ width: '80%', margin: 'auto', padding: '1%' }}>
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
        </Form.Group>
        <Button type="submit">Save</Button>
        <Button type="button" className="btn btn-warning" onClick={handleReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;*/
/************************************************************ */
/*import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        form.reset(); // Reset the form
        setValidated(false); // Reset the validation state
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    } else {
      // If the form is not valid, set validated to true to display validation errors
      setValidated(true);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <div style={{ width: '80%', margin: 'auto', padding: '1%' }}>
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
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;
*/

/******************************************************* */
/*
'use client'
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        form.reset(); // Reset the form
        setValidated(false); // Reset the validation state
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    } else {
      // If the form is not valid, set validated to true to display validation errors
      setValidated(true);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
        <Form.Control.Feedback type="invalid">
            Please enter product name.
          </Form.Control.Feedback>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceSm">
          <Form.Label>Price (Small)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Small)"
            value={priceSm}
            onChange={(e) => setPriceSm(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for small size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceMd">
          <Form.Label>Price (Medium)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Medium)"
            value={priceMd}
            onChange={(e) => setPriceMd(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for medium size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceLg">
          <Form.Label>Price (Large)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Large)"
            value={priceLg}
            onChange={(e) => setPriceLg(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for large size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <div style={{ width: '80%', margin: 'auto', padding: '1%' }}>
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
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;*/

/*************************************** */
/*
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [toppings, setToppings] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
        toppings,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        form.reset(); // Reset the form
        setName('');
        setDescription('');
        setImage('');
        setPriceSm('');
        setPriceMd('');
        setPriceLg('');
        setToppings([]);
        setValidated(false); // Reset the validation state
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    } else {
      // If the form is not valid, set validated to true to display validation errors
      setValidated(true);
    }
  };

  const handleToppingChange = (index, field, value) => {
    const updatedToppings = [...toppings];
    updatedToppings[index][field] = value;
    setToppings(updatedToppings);
  };

  const addTopping = () => {
    setToppings([...toppings, { image: '', name: '', price: '' }]);
  };

  const removeTopping = (index) => {
    const updatedToppings = [...toppings];
    updatedToppings.splice(index, 1);
    setToppings(updatedToppings);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {toppings.map((topping, index) => (
          <div key={index}>
            <Form.Group controlId={`topping-${index}-image`}>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={topping.image}
                onChange={(e) => handleToppingChange(index, 'image', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-name`}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topping Name"
                value={topping.name}
                onChange={(e) => handleToppingChange(index, 'name', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-price`}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Topping Price"
                value={topping.price}
                onChange={(e) => handleToppingChange(index, 'price', e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" onClick={() => removeTopping(index)}>Remove</Button>
          </div>
        ))}
        <Button variant="primary" onClick={addTopping}>Add Topping</Button>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;

*/
/*************************************************************************************** */
/*
'use client'
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [toppings, setToppings] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        id,
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
        toppings,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        form.reset(); // Reset the form
        setValidated(false); // Reset the validation state
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    } else {
      // If the form is not valid, set validated to true to display validation errors
      setValidated(true);
    }
  };
  const handleToppingChange = (index, field, value) => {
    const updatedToppings = [...toppings];
    updatedToppings[index][field] = value;
    setToppings(updatedToppings);
  };

  const addTopping = () => {
    setToppings([...toppings, { image: '', name: '', price: '' }]);
  };

  const removeTopping = (index) => {
    const updatedToppings = [...toppings];
    updatedToppings.splice(index, 1);
    setToppings(updatedToppings);
  };
  return (
    <div>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="id">
        <Form.Control.Feedback type="invalid">
            Please enter product Id.
          </Form.Control.Feedback>
          <Form.Label>Id</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Id product"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="name">
        <Form.Control.Feedback type="invalid">
            Please enter product name.
          </Form.Control.Feedback>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter product description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceSm">
          <Form.Label>Price (Small)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Small)"
            value={priceSm}
            onChange={(e) => setPriceSm(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for small size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceMd">
          <Form.Label>Price (Medium)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Medium)"
            value={priceMd}
            onChange={(e) => setPriceMd(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for medium size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="priceLg">
          <Form.Label>Price (Large)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Large)"
            value={priceLg}
            onChange={(e) => setPriceLg(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter price for large size.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <div style={{ width: '80%', margin: 'auto', padding: '1%' }}>
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
        </Form.Group>
        {toppings.map((topping, index) => (
          <div key={index}>
            <Form.Group controlId={`topping-${index}-image`}>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={topping.image}
                onChange={(e) => handleToppingChange(index, 'image', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-name`}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topping Name"
                value={topping.name}
                onChange={(e) => handleToppingChange(index, 'name', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-price`}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Topping Price"
                value={topping.price}
                onChange={(e) => handleToppingChange(index, 'price', e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" onClick={() => removeTopping(index)}>Remove</Button>
          </div>
        ))}
        <Button variant="primary" onClick={addTopping}>Add Topping</Button>
        <br/>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;*/
'use client'
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [priceSm, setPriceSm] = useState('');
  const [priceMd, setPriceMd] = useState('');
  const [priceLg, setPriceLg] = useState('');
  const [toppings, setToppings] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        id,
        name,
        description,
        image,
        priceSm,
        priceMd,
        priceLg,
        toppings,
      };
      try {
        // Simulating an HTTP POST request to add the product
        await axios.post('http://localhost:3001/api/pizzas', newProduct);
        alert('Product added successfully!');
        // Reset form fields after successful submission
        form.reset(); // Reset the form
        setValidated(false); // Reset the validation state
      } catch (error) {
        console.error('Error adding product:', error);
        alert('Error! Product insertion failed.');
      }
    } else {
      // If the form is not valid, set validated to true to display validation errors
      setValidated(true);
    }
  };
  const handleToppingChange = (index, field, value) => {
    const updatedToppings = [...toppings];
    updatedToppings[index][field] = value;
    setToppings(updatedToppings);
  };

  const addTopping = () => {
    setToppings([...toppings, { image: '', name: '', price: '' }]);
  };

  const removeTopping = (index) => {
    const updatedToppings = [...toppings];
    updatedToppings.splice(index, 1);
    setToppings(updatedToppings);
  };
  return (
    <div className="mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="id">
          <Form.Label>Id</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Id product"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="priceSm">
          <Form.Label>Price (Small)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Small)"
            value={priceSm}
            onChange={(e) => setPriceSm(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="priceMd">
          <Form.Label>Price (Medium)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Medium)"
            value={priceMd}
            onChange={(e) => setPriceMd(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="priceLg">
          <Form.Label>Price (Large)</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Price (Large)"
            value={priceLg}
            onChange={(e) => setPriceLg(e.target.value)}
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <div style={{ width: '80%', margin: 'auto', padding: '1%' }}>
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
        </Form.Group>
        {toppings.map((topping, index) => (
          <div key={index}>
            <Form.Group controlId={`topping-${index}-image`}>
              <Form.Label>Topping Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topping Image URL"
                value={topping.image}
                onChange={(e) => handleToppingChange(index, 'image', e.target.value)}
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-name`}>
              <Form.Label>Topping Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Topping Name"
                value={topping.name}
                onChange={(e) => handleToppingChange(index, 'name', e.target.value)}
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              />
            </Form.Group>
            <Form.Group controlId={`topping-${index}-price`}>
              <Form.Label>Topping Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Topping Price"
                value={topping.price}
                onChange={(e) => handleToppingChange(index, 'price', e.target.value)}
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 mb-4"
              />
            </Form.Group>
            <Button variant="danger" onClick={() => removeTopping(index)} className="mb-4">Remove Topping</Button>
          </div>
        ))}
        <Button variant="primary" onClick={addTopping} className="mb-4">Add Topping</Button>
        <br/>
        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</Button>
      </Form>
    </div>
  );
};

export default NewProduct;
