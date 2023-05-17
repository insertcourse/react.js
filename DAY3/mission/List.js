import React from 'react'
import './App.css'

const List = () => {
	const fruits = [
        {name:'사과', price:200000},
        {name:'오렌지', price:3000},
        {name:'바나나', price:50000}
    ]
	return (
		<div>
			{fruits.map((fruit) => {
				return <h1>{fruit.name} 가격 : {fruit.price}</h1>
			})}
		</div>
	)
}

export default List