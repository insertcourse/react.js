import React from 'react'
import './App.css'

const App = () => {
	const fruits = [
    {name:'사과', price:200000},
    {name:'오렌지', price:3000},
    {name:'바나나', price:50000}
]
	return (
		<div>
			{fruits.map((fruit) => {
				return <h1>{fruit}</h1>
			})}
		</div>
	)
}

export default App



{/* fruit.map 함수는 해당 배열에 있는 요소들을 하나씩 전부 순회하며
    리턴해주는 함수이다*/}