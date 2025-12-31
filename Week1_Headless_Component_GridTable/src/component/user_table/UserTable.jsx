import GridTable from "../grid_table/GridTable";
import loadUserData from "./api/UserTableService";
import UserCard from "./child_component/UserCard";

export default function UserTable() {
    return (
        <GridTable CardComponent={UserCard} 
                    itemLoadApi={loadUserData}/>
    );
}
