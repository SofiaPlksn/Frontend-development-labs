function GroceryStore(currentStock, orderedStock) {
    const products = {};

    function processStock(stock) {
        for (let i = 0; i < stock.length; i += 2) {
            const product = stock[i];
            const quantity = Number(stock[i + 1]);

            if (!products.hasOwnProperty(product)) {
                products[product] = quantity;
            } else {
                products[product] += quantity;
            }
        }
    }

    processStock(currentStock);
    processStock(orderedStock);

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}

GroceryStore(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
