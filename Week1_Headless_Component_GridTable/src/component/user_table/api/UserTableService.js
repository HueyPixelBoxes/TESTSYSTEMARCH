

const DEFAULT_ENDPOINT = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/+$/, '') + '/users';

async function loadUserData(options = {}) {
    const endpoint = options.endpoint || DEFAULT_ENDPOINT || '/api/users';

    try {
        const response = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return Array.isArray(data) ? data : (data.users || []);
    } catch (err) {
        console.error('UserTableService.loadUserData error:', err);
        throw err;
    }
}

export default loadUserData;