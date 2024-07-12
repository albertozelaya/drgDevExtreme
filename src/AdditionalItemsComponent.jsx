import React from "react";
import MasterDetailView from "./MasterDetailView";

export const AdditionalItemsComponent = (props) => {
  const additionalItems = [
    {
      title: "Nuevo Item 1",
      render: () => <div>Contenido del Nuevo Item 1</div>,
    },
    {
      title: "Nuevo Item 2",
      render: () => <div>Contenido del Nuevo Item 2</div>,
    },
  ];

  return <MasterDetailView data={props.data} additionalItems={additionalItems} />;
};


