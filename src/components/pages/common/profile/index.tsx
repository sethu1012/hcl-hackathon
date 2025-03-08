import { useEffect, useState } from "react";

const ProfilePageComponent = () => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    console.log("Profile Page");
    (() => {
      async function getData() {
        const max = 10,
          min = 1;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/" +
            Math.floor(Math.random() * (max - min + 1) + min)
        );
        const data = await response.json();
        setUser(data);
      }
      getData();
    })();
  }, []);

  return (
    <>
      <h1>Profile Page</h1>

      {user && (
        <>
          <h2>User</h2>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.phone}</p>
          <p>{user.website}</p>
        </>
      )}
    </>
  );
};

export default ProfilePageComponent;
