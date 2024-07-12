import React, { useEffect, useState } from "react";
import { Column, DataGrid, Paging, Summary, TotalItem, ValueFormat } from "devextreme-react/data-grid";
import { createStore } from "devextreme-aspnet-data-nojquery";

const url = "https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView"; /* endpoint solo para tabla Order History */
const OrderHistory = ({ productId }) => {
  const [orderHistoryStore, setOrderHistoryStore] = useState(null); /* estado para que luego se llene con el array */
  useEffect(() => {
    if (productId) { /* si la info que se recibe como param*/
      const newOrderHistoryStore = createStore({ /* Al parecer este createStore ocupa 3 propiedades */
        key: "OrderID", 
        loadParams: { ProductID: productId },
        loadUrl: `${url}/GetOrdersByProduct`,
      });
      setOrderHistoryStore(newOrderHistoryStore); //para llenar este estado de info, siendo una constante que se le asigna un objeto
    }
  }, [productId]); /* se carga cada que el productId cambia */
  return (
    <div>
      <DataGrid dataSource={orderHistoryStore} showBorders={true}>
        {/* Es un container que pone margen y arregla las tablas */}
        <Paging defaultPageSize={5} /> {/* por defeco lo pone tipo tabla */}
        <Column dataField="OrderID" /> {/* dataField no solo es el nombre, sino la prop que trae la info del array */}
        <Column dataField="OrderDate" dataType="date" />
        {/* columnas x, prop dataType que es para los formatos, date, datetime string TT */}
        <Column dataField="ShipCountry" />
        <Column dataField="ShipCity" />
        <Column dataField="UnitPrice" format="currency" />{/* formato numerico */}
        <Column dataField="Quantity" />
        <Column dataField="Discount" format="percent" />
        <Summary>{/* summaryType el tipo de operacion, stored procedure */}
          <TotalItem column="UnitPrice" summaryType="sum"> {/* encapsula la sum limitandola a 1 decimal */}
            <ValueFormat precision={2} />
          </TotalItem>
          <TotalItem column="Quantity" summaryType="count" /> {/* de que columna se va a tomar el total, column */}
        </Summary>
      </DataGrid>
    </div>
  );
};
export default OrderHistory;
