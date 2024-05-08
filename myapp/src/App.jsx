import React, { useState } from 'react';
//import View from "./View";
const baseURL = "http://localhost:5173/";
import posts from './assets/posts';

function App(){
  return <h1>{posts[0].title }</h1>;

}
export default App;
 

