import React, { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext'
import axios from 'axios'

export default function Store({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <ApiContext.Provider value={[data, setData]}>
            {children}
        </ApiContext.Provider>

    )
}
