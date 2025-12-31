const UserCard = ({ index, item }) => {
    return (
        <div key={index} 
            className="
                border p-4 m-1 rounded shadow
                hover:border-blue-500
            ">

            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
            
        </div>
    )
}

export default UserCard
