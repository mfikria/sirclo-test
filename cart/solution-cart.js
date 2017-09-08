class Cart {
	constructor() {
		this.products = new Map();
	}
	
	addProduct(productCode, quantity) {
		this.products.has(productCode) ? this.products.set(productCode, quantity + 1) : this.products.set(productCode, quantity);
	}

	removeProduct(productCode) {
		if(this.products.has(productCode)) {
			this.products.delete(productCode)
		} else {
			//throw error
			// console.log("product not found");
		}
	}

	showCart() {
		this.products.forEach(function(quantity, productCode) {
			console.log(productCode + " (" + quantity + ")");
		});
	}
}

// Initialize cart
var cart = new Cart();

// Test case 1
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Bukuku", 3);
cart.removeProduct("Bukuku");
cart.addProduct("Singlet Hijau", 1);
cart.removeProduct("ProdukBohongan");
cart.showCart();