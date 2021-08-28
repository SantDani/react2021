export default async function apiCall({
    url,
    method = "get",
    body,
    headers,
}){
    /**
     * parameter method optional
     * parameter body optional
     * parameter header optional
    
     */
    try {
        const response = await fetch(url, {
            method,
            body,
            headers
        });
        // TODO response.json() or 
        // TODO response.json 
        // console.log('log - response in provider', response);
        return response.json();
    } catch (error) {
        // console.error(error);
        // show error 
        Promise.reject(error);
    }
}