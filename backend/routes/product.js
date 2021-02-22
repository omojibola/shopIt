const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth');

router.route('/products').get(isAuthenticated, getProducts);
router.route('/product/:id').get(getSingleProduct);

router
  .route('/admin/product/new')
  .post(isAuthenticated, authorizeRoles('admin'), newProduct);
router
  .route('/admin/product/:id')
  .put(isAuthenticated, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticated, authorizeRoles('admin'), deleteProduct);

module.exports = router;
