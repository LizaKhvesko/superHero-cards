export const getData = (url) => {
 return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error))
}