import { pythonURI, fetchOptions } from './config.js';

// Logout from sheriff backend
export async function handleLogout() {
    try {
        await fetch(pythonURI + '/api/sheriff/authenticate', {
            ...fetchOptions,
            method: 'DELETE'
        });
    } catch (e) {
        console.error('Sheriff logout failed:', e);
    }
}
