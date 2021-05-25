import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {

    useEffect(() => {
        fetchData()
        console.log(match)
    }, [])

    const [item, setItem] = useState({})

    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await data.json()
        console.log(item)
        setItem(item)
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title}/>
        </div>
    )
}

export default ItemDetail
