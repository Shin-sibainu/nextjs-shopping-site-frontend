import Head from "next/head";

import products from "../../products.json";
import { fromImageToUrl } from "../../utils/urls";
const product = products.data[0];

const Product = () => {
  return (
    <div>
      <Head>
        {product.attributes.meta_title && (
          <title>{product.attributes.meta_title}</title>
        )}
        {product.attributes.meta_desc && (
          <meta
            name="description"
            content={product.attributes.meta_desc}
          ></meta>
        )}
      </Head>
      <h3>{product.attributes.name}</h3>
      <img
        src={fromImageToUrl(
          product.attributes.image.data.attributes.formats.thumbnail
        )}
        alt=""
      />
      <h3>{product.attributes.name}</h3>
      <p>{product.attributes.price}円</p>

      <p>{product.attributes.content}</p>
    </div>
  );
};

export default Product;
