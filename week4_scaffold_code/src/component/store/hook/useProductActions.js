import { useEffect, useState } from 'react';
import getProductFromServer from '../api/getProducts';

const useProductActions = () => {

    const [products, setProducts] = useState([]);

    const getProductList = async () => {
        const result = await getProductFromServer();
        if (result != []) {
            setProducts(result);
        }
    }

    useEffect(() => {
        getProductList();
    }, []);

    return { products };

}

export default useProductActions