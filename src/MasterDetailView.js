import React, { useCallback } from "react";
import { TabPanel, Item } from "devextreme-react/tab-panel";
import AddressTab from "./AddressTab.js";
import OrdersTab from "./OrdersTab.js";

const MasterDetailView = (props) => { /* detalles de cada tabla del acordeon */
  const renderOrdersTab = useCallback(() => <OrdersTab supplierId={props.data.key} />, [props.data.key]); /* tabla orders tab */
  const renderAddressTab = useCallback(() => <AddressTab data={props.data.data} />, [props.data.data]); /* tabla address tab */
  return (
    <div>
      <TabPanel> {/* container que muestara info de orders y address */}
        <Item title="Orders" render={renderOrdersTab} /> {/* intems individuales, render es el fieldInfo */}
        <Item title="Address" render={renderAddressTab} />
      </TabPanel>
    </div>
  );
};
export default MasterDetailView;
