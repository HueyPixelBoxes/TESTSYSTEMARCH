import React from 'react';

const GridTableCard = ({ index, user }) => {
    return (
        <div key={index} className="border p-4 m-1 rounded shadow">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default GridTableCard