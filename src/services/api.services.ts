export const userListServices = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      return [
        {
          name: "John",
          role: "patient",
          id: "1",
        },
        {
          name: "Ram",
          role: "doctor",
          id: "2",
        },
        {
          name: "Aravind",
          role: "doctor",
          id: "3",
        },
        {
          name: "Surya",
          role: "patient",
          id: "4",
        },
      ];
    })
    .catch((error) => console.warn(error));
};
