export const ProductList = () =>{

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 999
        },
        {
            id: 2,
            name: "Phone",
            price: 699
        },
        {
            id: 3,
            name: "Tablet",
            price: 499
        },
        {
            id: 4,
            name: "Watch", 
            price: 299
        },
        {
            id: 5, 
            name: "Headphones", 
            price: 199
        }
    ]

    const productElements = 
        products.filter((product => {
            return product.price > 500
        }))
        .map((prod) =>{
            return(
                <div>
                    <h2>{prod.name}</h2>
                    <p>Price: ${prod.price}</p>
                </div>

            )
        })

    return(
        <>
            <h2>Our Products</h2>
            {productElements}
        </>
    )
}