import React from "react";
import { Form, Item } from "devextreme-react/form";

const items = ["Address", "City", "Region", "PostalCode", "Country", "Phone"]; //Address en los items, fijarse obligatorios y opcionales
const renderFormItem = (item) => <span>{item.editorOptions.value}</span>; /* valores dentro de los address */
const AddressTab = (props) => (
  <div>
    <Form formData={props.data} colCount={2} className="address-form form-container">
      {" "}
      {/* este form hace que sean disable */}
      {items.map((item, index /* los items por defecto son inputs, el index funciona como numero */) => (
        <Item dataField={item} key={index} render={renderFormItem} /> /* dataField es para el llenado */
      ))}
    </Form>
  </div>
);
export default AddressTab;
