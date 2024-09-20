const express=require('express')
const router=express.Router()
const controllerItem=require('../Controller/controller')

router.get('/',controllerItem.getAllItems)
router.get('/:id',controllerItem.getItem)
router.post('/',controllerItem.addItem)
router.put('/:id',controllerItem.modifyItem)
router.delete('/:id',controllerItem.deleteItem)

module.exports=router
