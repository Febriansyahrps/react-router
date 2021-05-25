import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Shop() {

    useEffect(() => {
        fetchData()
    }, [])

    const [items, setItems] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json()
        console.log(items)
        setItems(items)
    }

    return (
        <div>
            {items.map(item => (
                <h3 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.title}
                    </Link>
                </h3>
            ))}
        </div>
    )
}

export default Shop
