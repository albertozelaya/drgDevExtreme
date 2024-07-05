import React, { useCallback, useState } from "react";
import { Form, Item, Label } from "devextreme-react/form";
import ProductSelectBox from "./ProductSelectBox.js";
import OrderHistory from "./OrderHistory.js";

const OrdersTab = (props) => {
  const [chosenProductId, setChosenProductId] = useState(null); /* inicia un estado nulo */
  const renderSelectBox = useCallback( /* hook que es un efecto, almacena y ejecuta una funcion cada que cambia el estado o la props*/
    () => (
      <ProductSelectBox
        supplierId={props.supplierId}
        productId={chosenProductId}
        onProductChanged={setChosenProductId}
      />
    ),
    [chosenProductId, props.supplierId]
  );
  const renderOrderHistory = useCallback(() => <OrderHistory productId={chosenProductId} />, [chosenProductId]);
  return (
    <Form labelLocation="top" className="form-container"> {/* contenedor */}
      <Item render={renderSelectBox}>{/* input de filtrado por product */}
        <Label text="Product" /> 
      </Item>
      {/* tiene que estar dentro del component el texto */}
      <Item render={renderOrderHistory}> 
        <Label text="Order History" />
      </Item>
    </Form>
  );
};
export default OrdersTab;
