import React from 'react';


const App = () => {
	const fruits = [
        {name:'딸기', price:12000},
        {name:'사과', price:5000},
        {name:'수박', price:50000}
    ]
    return (
        <div>
            {fruits.map(() => {
            return <h1 style={{
                color: 'pink',
                fontSize: '30px',
                fontWeight: 700,
            }}>{fruits.name} 가격 : {fruits.price}입니다.</h1>
})}
        </div>
)}

export default App;