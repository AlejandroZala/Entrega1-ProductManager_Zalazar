class ProductManager {
    constructor(){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = function({title, description, price, thumbnail, stock, code}){

        //--Verifico el ingreso completo de todos los datos
        if (!title ||!description ||!price ||!thumbnail ||!stock ||!code) {
            console.log("Datos incompletos");
            return null;
        }

        //--Verifico que code no exista previamente
        const foundCode = this.products.find(e => e.code === code);
        if (foundCode) {
            console.info("El code ingreaado ya existe")
            return null;
        }
        
        const product = {
            title,
            description,
            price,
            thumbnail,
            stock,
            code
        }
        if (this.products.length ===0){
            product.id = 1;
        } else{
            const lastProduct = this.products[this.products.length-1];
            product.id = lastProduct.id+1;
        }
        this.products.push(product);
    }

    getProductById = (id) => {
        const buscoProducto = this.products.find(product => product.id === id);
        if (buscoProducto){
            console.log('Id del producto: ', buscoProducto);
        } else{
            console.log('Producto no encontrado');
        }
    }
}

const productManager = new ProductManager()

const producto1 = {
    title: "Crema antiarrugas",
    description: "Crema antiarrugas con aloe vera",
    price:1000,
    thumbnail:"imagen crema antiarrugas",
    stock: 20,
    code: "c1",
}
productManager.addProduct(producto1);   //--Ingreso producto1 valido

const producto2 = {
    title: "Crema humectante",
    description: "Crema humectante con malva",
    price:1500,
    thumbnail:"imagen crema humectante",
    stock: 30,
    code: "c2",
}
productManager.addProduct(producto2);   //--Ingreso producto2 valido

const producto3 = {
    title: "Crema limpiadora",
    description: "Crema limpiadora con arcilla",
    price: 900,
    thumbnail:"imagen crema limpiadora",
    //--falta stock--//
    code: "c3",
}
productManager.addProduct(producto3);   //--Ingreso producto3 inválido

const producto4 = {
    title: "Crema humectante",
    description: "Crema humectante con malva",
    price:1500,
    thumbnail:"imagen crema humectante",
    stock: 30,
    code: "c2",            //--Code repetido
}
productManager.addProduct(producto4);   //--Ingreso producto14 inválido

console.log(productManager.getProducts());

productManager.getProductById(2);       //--Busco producto2 válido
productManager.getProductById(3);       //--Busco producto3 inexistente