import React, { useEffect, useState } from 'react';
import { loadProductData } from '../../api/productApi';

const GridTable = ({ CardComponent, itemLoadApi }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const result = await loadProductData();
                if (mounted) setItems(result || []);
            } catch (err) {
                if (mounted) setError(err);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        load();

        return () => {
            mounted = false;
        };
    }, [itemLoadApi]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (error) return <div className="p-4 text-red-600">Error loading items</div>;

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

