import React, { useCallback, useEffect, useState } from "react";
import { SelectBox } from "devextreme-react/select-box";
import { createStore } from "devextreme-aspnet-data-nojquery";

const url = "https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView"; /* endpoint */
const productLabel = { "aria-label": "Product" };
const ProductSelectBox = (props) => {
  const [productsData, setProductsData] = useState(null); /* estado de info, data */
  const valueChanged = useCallback( /* cada que cambien los productos, props de parte de la api */
    (e) => {
      props.onProductChanged(e.value);
    },
    [props]
  );
  useEffect(() => {
    const setDefaultValue = (items) => {
      const firstItem = items[0];
      if (firstItem && props.productId === null) {
        props.onProductChanged(firstItem.ProductID);
      }
    };
    const newProductsData = createStore({ /* createStore para añadir data en el onLoaded*/
      key: "ProductID",
      loadParams: { SupplierID: props.supplierId },
      loadUrl: `${url}/GetProductsBySupplier`,
      onLoaded: setDefaultValue,
    });
    setProductsData(newProductsData);
  }, [props]); 
  /* el return es para llenar de info los componentes hijos */
  return (
    <div>
      <SelectBox
        value={props.productId}
        deferRendering={false}
        inputAttr={productLabel}
        dataSource={productsData}
        valueExpr="ProductID"
        displayExpr="ProductName"
        onValueChanged={valueChanged}
      />
    </div>
  );
};
export default ProductSelectBox;
