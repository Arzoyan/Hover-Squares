export const GET_Data = async () => {
    let result = fetch('http://demo1030918.mockable.io/')
        .then(response => response.json())
        .then(data => data);

    return result
}