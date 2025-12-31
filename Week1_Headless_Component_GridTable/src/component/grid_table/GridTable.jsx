import UserCard from '../user_table/child_component/UserCard';
import loadUserData from '../user_table/api/UserTableService';

const GridTable = ({CardComponent, itemLoadApi}) => {

    const items = itemLoadApi();
    
    return (
        <div className="
            grid
            sm:grid-cols-1 md:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4
            mx-auto p-4
            gap-4 
        ">
            
            {items.map((item, index) => (
                <CardComponent item={item} key={index} />
            ))}

        </div>
    );
};

export default GridTable;
