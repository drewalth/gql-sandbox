import React, {useEffect, useState} from 'react';
import './App.css';
import {
    useQuery,
    gql
} from "@apollo/client"
import {ProductOne} from "./graphql";

const PRODUCT_ONE_ALL = gql(`
query {
  productOneAll {
    id
    title
    items {
      id
    }
  }
}
`)

type ProductOneAllData = {
    productOneAll: ProductOne[]
}

const ItemsList = () => {
    const {data, loading, error} = useQuery<ProductOneAllData>(PRODUCT_ONE_ALL)

    useEffect(() => {
        console.log('mounted')
        return () => {
            console.log('unmounted')
        }
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>whoops!</div>
    }

    return (
        <ul className="list-group">
            {data?.productOneAll.map((el) => (
                <li key={el.id} className="list-group-item">{el.title}</li>
            ))}
        </ul>
    )
}

function App() {

    const [itemsVisible, setItemsVisible] = useState(false)


    return (
        <div className="App">
            <h1>Hello</h1>
            <p>Click the button and watch the network tab. Auto-caching! Neat...</p>
            <button onClick={() => setItemsVisible(!itemsVisible)}>Toggle Items</button>
            <hr/>
            {itemsVisible && <ItemsList/>}
        </div>
    );
}

export default App;
