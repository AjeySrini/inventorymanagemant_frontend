import React ,{useEffect,useState} from "react";
import { getAllProduct } from "../profile";

import './ProductList.css';

const ProductList = () => {
    const [products, setproduct] = useState([{
    product_id: "",
    product_name: "",
    description: "",
    price: 0,
    quantity: 0,
    supplier: "",
    category_name: "",
    overallreview: 0,
  }]);

  const loadprofile = async () => {
    const response = await getAllProduct();
    setproduct(response);
  };
  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="product-list-container">
    <span className="headname">Product List</span>
    <table className="product-table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Supplier</th>
          <th>Category Name</th>
          <th>Overall Review</th>
        </tr>
      </thead>
      <tbody>
        { products.length > 0 ?
        (products.map((product) => (
          <tr key={product.product_id}>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.supplier}</td>
            <td>{product.category_name}</td>
            <td>{product.overallreview}</td>
          </tr>
        ))):""}
      </tbody>
    </table>
  </div>
  );
};

export default ProductList;
