import React, { useState } from "react";


//create your first component
const Home = () => {
	//Se identifica 2 estados 
	const[inputValue,setInputValue]=useState("");
	const[todos,setTodos]=useState([]);

	return (
		<div className="container text-center w-50 text">
			<h1 className="text-center mt-5">todo</h1>
			<ul class="list-group">
				<li className="list-group-item">
					<input type="text" className="form-control  border-0" placeholder="What needs to be done?"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					//evento para las tareas se agregen cuando el usuario presiona enter en el teclado
					onKeyDown={(e)=>{
						// si La tecla Enter fue presionada  y si después de eliminar los espacios en blanco, el texto no esta vacío ->ejecutar lo sgte
						if (e.key==="Enter"&& inputValue.trim() !== ""){
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						};
					}}/>
				</li>
				{todos.length === 0 ? (
					<li className="list-group-item text-center">No hay tareas, añadir tareas</li>
				) : (
					todos.map((item, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
							{item}
							<i className="fas fa-trash-alt icon" onClick={()=>setTodos(todos.filter((t,currentIndex)=> index!=currentIndex))}></i>
						</li>
					))
				)}
			</ul>
			<div className="text-start">{todos.length} items</div>
		</div>
	);
};

export default Home;
