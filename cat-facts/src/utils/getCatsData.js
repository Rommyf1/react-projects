export default function getFilteredData({ endpointURL, property }) {
  return fetch(endpointURL)
    .then((response) => {
      if (!response.ok) throw new Error("Error al realizar la petición");
      return response.json();
    })
    .then((data) => {
      const value = data[property];
      return value;
    });
}
