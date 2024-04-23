const express = require('express');
const router = express.Router();

const {
  CreateProduct,
  DeleteProduct,
  GetProduct
} = require('../controllers/ProductController');

router.post('/entry', CreateProduct);
router.get('/entry/:id', GetProduct);
router.delete('/entry/:id', DeleteProduct);

module.exports = router;
