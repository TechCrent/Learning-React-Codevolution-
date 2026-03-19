export const Product = ({title, price, inStock, categories}) => {
    return(
        <>
        <h1 className="mt-8">{title}</h1>
        <p>Price: ${price}</p>
        <p>In stock: {inStock ? "Yes" : "No"}</p>
        <p>Categories: {categories.join(", ")}</p>
        </>
    )
}