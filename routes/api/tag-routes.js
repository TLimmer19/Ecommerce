const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// // The `/api/tags` endpoint

// router.get('/', async(req, res) => {
//             try {
//                 const TagData = await Tag.findall({

//                         include: [{
//                             model: Product,
//                             attributes: ["id", "product_name", "price", "stock", "category_id"]
//                         }],
//                         if (productData) res.status(200).json(productData);
//                     }
//                     catch
//                     // find all tags
//                     // be sure to include its associated Product data
//                 });

//             router.get('/:id', (req, res) => {
//                 // find a single tag by its `id`
//                 // be sure to include its associated Product data
//             });

//             router.post('/', (req, res) => {
//                 // create a new tag
//             });

//             router.put('/:id', (req, res) => {
//                 // update a tag's name by its `id` value
//             });

//             router.delete('/:id', (req, res) => {
//                 // delete on tag by its `id` value
//             });

module.exports = router;