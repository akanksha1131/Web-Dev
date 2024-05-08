import React from 'react'
import ReactDOM , {createRoot} from 'react-dom/client'
import App from "./App.jsx";
import axios from "axios";

const rootElement=document.getElementById("root");
const root=createRoot(document.getElementById("root"));
root.render(<App />,rootElement );



