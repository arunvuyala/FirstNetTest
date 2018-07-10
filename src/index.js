import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

var tree = {
  title: "HAM Burgers",
  childNodes: [
    {title: "Ingredients Selection", childNodes: [
      {title: "Bread", childNodes: [
        {title: "Kaiser Roll"},
        {title: "Pretzel Roll"},
        {title: "Onion Roll"}
      ]},
      {title: "Cheese",childNodes: [
      	 {title: "American"},
         {title: "Cheddar Cheese"},
         {title: "Swiss"}
      ]},
      {title: "Vegetables", childNodes: [
         {title: "Tamatos"},
         {title: "Pickle Slices"},
         {title: "Onions"}
      ]},
      {title: "Dressings", childNodes: [
        {title: "Mustard"},
        {title: "Ranch"}
      ]}
    ]}
  ]
};
ReactDOM.render(
	<App  node={tree} />, 
document.getElementById('root'));
//registerServiceWorker();
