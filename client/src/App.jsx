import React, { useState, useEffect } from 'react';
import { getMeta, getProduct, getStyles } from './axiosCalls.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import Modal from './helper/Modals/Modal.jsx';

import { MetaContext } from './context.js';


function App() {
  // Junsu: added this style globally
  const container = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px',
  };

  // Junsu: moved certain states to App
  // Junsu: productID and product information
  const [productID, setProductID] = useState(40346);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(productID, setProduct);
  }, [productID]);

  const [style, setStyle] = useState({photos: [], skus: {0: {quantity: 0, size: ''}}});
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    console.log(productID);
    getStyles(productID, setStyle, setStyles);
  }, [productID]);

  // Junsu: product metadata is provided via MetaContext.Provider
  const [meta, setMeta] = useState(0);
  useEffect(() => {
    getMeta(productID, setMeta);
  }, [productID]);

  const [modal, setModal] = useState('');


  return (
    <div style={container}>
      <MetaContext.Provider value={meta}>
        <ProductOverview
          product={product}
          style={style}
          styles={styles}
          setStyle={setStyle}
        />
        <RatingsAndReviews
          meta={meta}
        />
        <QuestionsAndAnswers
          productID={productID}
          setModal={setModal}
        />
        <RelatedItems
          productID={productID}
          setProductID={setProductID}
          product={product}
          style={style}
        />
      </MetaContext.Provider>
      <Modal productID={productID} productName={product.name} modal={modal} />
    </div>
  );
}
export default App;
