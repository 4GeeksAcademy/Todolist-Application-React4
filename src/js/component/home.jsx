import React, { useState } from "react";


//create your first component
const Home = () => {
	//Se identifica 2 estados 
	const[inputValue,setInputValue]=useState("");
	const[todos,setTodos]=useState([]);

	return (
		<div className="container text-center w-50 fw-light">
			<h1 className="text-center mt-5  fw-light " >Todos</h1>
			<ul class="list-group rounded-0 shadow-lg  mb-5 bg-body-tertiary fw-light fs-3">
				<li className="list-group-item ">
					<input type="text" className="form-control  border-0 fw-light fs-3" placeholder="What needs to be done?"
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
					<li className="list-group-item text-center  fw-light fs-3 ">No hay tareas, añadir tareas</li>
				) : (
					todos.map((item, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between align-items-center fs-2">
							{item}
							<i className="fas fa-trash-alt icon" style={{color:"red"}} onClick={()=>setTodos(todos.filter((t,currentIndex)=> index!=currentIndex))}></i>
						</li>
					))
				)}
				<li className="text-start list-group-item" >{todos.length} Tasks</li>
			</ul>
			
		</div>
	);
};

export default Home;
