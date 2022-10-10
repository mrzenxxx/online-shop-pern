const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController')

router.post('/', BrandController.create );
router.get('/', BrandController.getAll );

module.exports = router;
