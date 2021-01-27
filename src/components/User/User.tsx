import React from "react";

interface UserInterface {
  user_id: string;
  name: string;
}

const User = () => {
  const [user, setUser] = React.useState<UserInterface>();

  function handleLogin() {
    setUser({
      user_id: "20193kda",
      name: "User name",
    });
  }

  return (
    <div>
      <h3>Hello user: useState</h3>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

      {
       !user ? 
       <pre>{JSON.stringify({"error": "no users found"})}</pre> :
       <pre>{JSON.stringify(user)}</pre>
      }

    </div>
  );
};

export default User;
