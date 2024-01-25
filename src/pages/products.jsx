import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { list } from "postcss";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: 1000000,
    image: "/images/gambar.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illum repellat eligendi dolorem ducimus, sed consequatur laudantium ratione pariatur, alias nulla praesentium sit soluta voluptatibus ullam aliquid molestiae reiciendis. Voluptatum!`,
  },
  {
    id: 2,
    name: "Sepatu baru 2",
    price: 1000000,
    image: "/images/gambar.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illum repellat eligendi dolorem ducimus, sed consequatur laudantium ratione pariatur, alias nulla praesentium sit soluta voluptatibus ullam aliquid molestiae reiciendis. Voluptatum!`,
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {};
const ProductsPage = () => {
  const [cart, setCart] = useState([{ name: "Sepatu Lama", qty: 1 }]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }

    // setCart([
    //   ...cart,
    //   {
    //     id,
    //     qty: 1,
    //   },
    // ]);
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
          ;
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2"> Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (product) {
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        {" "}
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>{item.qty * product.price}</td>
                    </tr>
                  );
                } else {
                  // Handle the case where product is not found
                  return (
                    <tr key={item.id}>
                      <td colSpan="4">Product not found</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
