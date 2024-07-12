import React from "react";
import { Column, DataGrid, MasterDetail, Paging } from "devextreme-react/data-grid";
import { createStore } from "devextreme-aspnet-data-nojquery";
import MasterDetailView from "./MasterDetailView.js";

const url = "https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView";
const suppliersData = createStore({
  key: "SupplierID",
  loadUrl: `${url}/GetSuppliers`,
}); //endpoint PRINCIPAL de donde vendra la info
const App = () => (
  <div>
    <DataGrid dataSource={suppliersData} remoteOperations={true} showBorders={true} id="gridContainer"> {/* para ponerlo en la grilla container*/}
      <MasterDetail enabled={true} component={MasterDetailView} />{/* componente tipo acordeon , lo manda a llamar*/}
      <Paging defaultPageSize={15} /> {/* size por defecto de la paginacion */}
      <Column dataField="ContactName" /> {/* columnas */} {/* en las props de ts esta todas las disponibles y pa que sirven */}
      <Column dataField="ContactTitle" />
      <Column dataField="CompanyName" />
      <Column dataField="City" />
      <Column dataField="Country" />
    </DataGrid>
  </div>
);
export default App;
