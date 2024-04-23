const { get } = require('lodash');
const Product = require('../model/ProductSchema');

exports.CreateProduct = async (req, res) => {
  const name = get(req, 'body.name');
  const price = get(req, 'body.price');

  await Product.create({ name, price })
    .then((response) => {
      console.log(`ProductController : Added ${name} to Database`);
      res.status(201).json({
        status: 'S',
        message: `Added ${name} to Database`,
        id: response._id
      });
    })
    .catch(() => {
      console.error('ProductController : Failed to add to DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Add to Database'
      });
    });
};

exports.DeleteProduct = async (req, res) => {
  const id = get(req, 'params.id');

  await Product.findByIdAndDelete(id)
    .then(() => {
      console.log('ProductController : Deleted from database');
      res.status(200).json({ status: 'S', message: `Deleted from database` });
    })
    .catch(() => {
      console.error('ProductController : Failed to delet from DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Delete from Database'
      });
    });
};

exports.GetProduct = async (req, res) => {
  const id = get(req, 'params.id');

  await Product.findById(id)
    .then((data) => {
      console.log('ProductController : Fetch successfully from Database');
      res
        .status(200)
        .json({ status: 'S', message: 'Fetch successfully', data });
    })
    .catch(() => {
      console.error('ProductController : Failed to fetch from  DB');
      res.status(400).json({
        status: 'E',
        message: 'Failed to Fetch from Database'
      });
    });
};
