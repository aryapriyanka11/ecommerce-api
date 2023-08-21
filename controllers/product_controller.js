const Product = require('../models/products');

// Function to view all the products available in the inventory
module.exports.showProducts =  async function(req,res){
    try{
        let product = await Product.find({});
        
        // Formatting the data to clear understanding
        const formattedProducts = product.map((product) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));
        
        // return the formattted data on success
        return res.status(200).json({  
            data : {
                Products : formattedProducts,
            },
            message: "These are the Products in Inventory"
        });
        
    } catch (err){
        return res.status(500).json({
            message : "Error in fetching products"
        });
    }
};

module.exports.create = async function(req,res){
    try{
        
        // Creating a new Product
        let newProduct = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        console.log("New Product",newProduct)
        //Saving the created product
       // await newProduct.save();
        
        // on success shows the created product 
        return res.status(200).json({
            data : {
                Product : {
                    name : newProduct.name,
                    quantity : newProduct.quantity
                }
            },
            message : "Product Added!!"
        });
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Error in adding product to inventory"
        });
    }
};

// For delete
module.exports.delete = async function(req,res){
    try{
        const id = req.params.id;

        let product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        // Deleting the particular product
        let deleteProduct = await product.deleteOne();
        
        return res.status(200).json({
            data : {
                product : {
                    id : deleteProduct.id,
                    name: deleteProduct.name,
                    quantity: deleteProduct.quantity
                }
            },
            message : "Product deleted successfully"
        });
    }catch(err){
        return res.status(500).json({
            message : "Error in deleting product"
        });
    }
};

// for update the product quantity
module.exports.updateQuantity = async function(req,res){
    try{
        let update_quantity = req.query.number;
        const id = req.params.id;
        
        // Fetching the product by id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        update_quantity = parseInt(update_quantity,10);

        // checking if the update quantity is number
        if(!isNaN(update_quantity)){
            
            // Updating the quantity of the selected product
            product.quantity += update_quantity;
            
            // storing the updated product
            let updatedProduct = await product.save();

            return res.status(200).json({
                data : {
                    product : {
                        id : updatedProduct.id,
                        name: updatedProduct.name,
                        quantity: updatedProduct.quantity
                    }
                },
                message : "Product updated successfully"
            });
        }
        else{
            return res.status(400).json({
                message : "Please enter a Number to update quantity"
            });
        }
    }catch(err){
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
};