const ProductModel = require("../model/modelProduct");


getProd = async (req, res) => {
  try {
    const products = await ProductModel.find({})
    res.status(200).json({ data: products, message: "success!" })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
getProdById = async (req, res) => {
  const { id } = req.params
  try {
    const deletedProduct = await ProductModel.findById(id)
    const products = await ProductModel.find({})
    res.status(200).json({ data: products, message: "success!", deletedProduct: deletedProduct })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
deleteById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await ProductModel.findByIdAndDelete(id)
    res.status(200).json({ data: product, message: "success!" })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
postProd = async (req, res) => {
  try {
    const newProd = ProductModel({ ...req.body })
    await newProd.save()
    res.status(200).json({ newProd: newProd, message: "successfully added" })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = { getProd, getProdById, deleteById, postProd }