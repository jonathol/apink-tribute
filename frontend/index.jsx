import React from 'react';
import ReactDOM from 'react-dom';
import Tribute from './tribute';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Tribute/>, root);
});
