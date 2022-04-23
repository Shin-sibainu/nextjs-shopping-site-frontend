import Head from "next/head";

import products from "../../products.json";
import { APIURL, fromImageToUrl } from "../../utils/urls";
import styles from "../../styles/Product.module.css";

const product = products.data[0];

export async function getStaticProps({ params: { slug } }) {
  const productResponse = await fetch(
    `${APIURL}/api/products?populate=*&filters[slug]=${slug}`
  );
  const singleProduct = await productResponse.json();

  // console.log(singleProduct.data[0]);

  return {
    props: {
      product: singleProduct.data[0],
    },
  };
}

export async function getStaticPaths() {
  const productsResponce = await fetch(`${APIURL}/api/products?populate=*`);
  const products = await productsResponce.json();

  // console.log(productsResponce);

  return {
    paths: products.data.map((product) => ({
      params: { slug: String(product.attributes.slug) },
    })),
    fallback: false,
  };
}

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
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
      <div>
        <h3 className={styles.title}>{product.attributes.name}</h3>
        <img
          src={fromImageToUrl(
            product.attributes.image.data.attributes.formats.thumbnail
          )}
          alt=""
          className={styles.productImg}
        />
        <h3 className={styles.secondTitle}>{product.attributes.name}</h3>
        <p className={styles.price}>{product.attributes.price}円</p>

        <p>{product.attributes.content}</p>
      </div>
    </div>
  );
};

export default Product;
