import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	let count = 0
	function agregar (){
		console.log('agregar')
	}

	return (
	<div className="text-center">

		<h1 className = "text-center mt-5">Bienvenidos a React ;) 123</h1>
		<h1> {count}</h1>
		<button onClick={agregar}>Agregar</button>

	</div>
	);
};

export default Home;
