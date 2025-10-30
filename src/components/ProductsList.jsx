const ProductsList = () => {
  const products = [
    { id: 1, name: "iPhone 13", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1999 },
    { id: 3, name: "iPad Air", price: 599 },
  ];

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>Nombre: {product.name}</span>
            <span>Precio: {product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
