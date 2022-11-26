import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import OurService from "./OurService";

const DaoProducts = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "Prendas");

  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection);
    // console.log("dataProducts", dataProducts);
    console.log("dataProducts.docs", dataProducts.docs);
    setProducts(
      dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  console.log("products", products);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <OurService products={products} />;
};

export default DaoProducts;
