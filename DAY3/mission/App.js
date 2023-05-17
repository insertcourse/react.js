import React from "react";
import List from "./List";

const App = () => {
	return (
		<div>
			{fruits.map((fruit) => {
				return <h1>{fruit}</h1>
			})}
		</div>
	)
}
export default App