async function getMesas() {
    try {
        const response = await fetch('http://localhost:8080/tables');
        if (!response.ok) {
            throw new Error('Failed to fetch mesas');
        }
        const mesas = await response.json();
        return mesas;
    } catch (error) {
        console.error(error);
        // Handle error here
    }
}

export { getMesas };