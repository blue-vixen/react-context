import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'
function Users() {
    const [users, setUsers] = useContext(ApiContext)
    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <div>
            <h2 className="mb-4">
                React Handle REST API Global State with Context Hook Example
            </h2>
            {users.map((res, idx) => {
                return (
                    <div className="card mb-2" key={idx}>
                        <div className="card-body">
                            <h5 className="card-title">{res.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{res.username}</h6>
                            <p className="card-text">{res.company.catchPhrase}</p>
                            <a href="#" className="card-link">
                                {res.website}
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users