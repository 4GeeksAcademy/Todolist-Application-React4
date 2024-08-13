import React, { useState } from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//Se identifica 2 estados 
	const[inputValue,setInputValue]=useState("");
	const[todos,setTodos]=useState(["estudiar", "lavar", "limpiar"]);

	return (
		<div className="text-center w-50">
			<h1 className="text-center mt-5">todo</h1>
			<ul class="list-group">
				<li className="list-group-item">
					<input type="text" className="form-control" placeholder="What needs to be done"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e)=>{
						if (e.key==="Enter"&& inputValue.trim() !== ""){
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						};
					}}/>
				</li>
				{todos.map((t,index)=>(
					<li key={index} className="list-group-item">{t}<i class="fas fa-trash-alt"></i></li>
				))}
			</ul>
			<div>{todos.length}</div>
		</div>
	);
};

export default Home;
