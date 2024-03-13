import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');  // Corregir aquí

const root = ReactDom.createRoot(appDomElement);
const button = React.createElement('button', { "data-id": 123 }, 'Me gusta');  // Corregir aquí
root.render(button);
