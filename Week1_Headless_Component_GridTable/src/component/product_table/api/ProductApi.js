const DEFAULT_ENDPOINT = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/+$/, '') + '/products';

async function loadProductData(options = {}) {
    const endpoint = options.endpoint || DEFAULT_ENDPOINT || '/api/products';

    try {
        const response = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return Array.isArray(data) ? data : (data.products || []);
    } catch (err) {
        console.error('ProductApi.loadProductData error:', err);
        throw err;
    }
}

export default loadProductData;