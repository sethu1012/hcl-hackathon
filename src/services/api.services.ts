const BASE_URL = "https://hcl-hackathonbackend.onrender.com/api/";

export const postUserSignup = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "user/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return { status: true, message: data };
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    return { status: false, message: error };
  }
};

export const postUserSignin = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return { status: true, message: data };
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    return { status: false, message: error };
  }
};

export const getUserApi = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return { status: true, message: data };
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    return { status: false, message: error };
  }
};

export const putUserApi = async (data: any) => {
  try {
    const response = await fetch(BASE_URL + "user", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return { status: true, message: data };
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    return { status: false, message: error };
  }
};

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
