import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const SignInPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Client Portal");
  
  const submit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(role);

    switch (role) {
      case "Client Portal":
        window.location.href = "/client-portal";
        break;
      case "Sales Portal":
        window.location.href = "/sales-portal"; 
        break;
      case "Grounds Crew Portal":
        window.location.href = "/grounds-crew-portal";
        break;
      case "Operations Manager Portal":
        window.location.href = "/operations-manager-portal";
        break;
      default:
        console.log("Invalid role selected.");
    }
  };
  
  return (
    <MainLayout>
      <h1>SIGN IN</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="Username"
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select 
          className="role-dropdown"
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Client Portal">Client Portal</option>
          <option value="Sales Portal">Sales Portal</option>
          <option value="Grounds Crew Portal">Grounds Crew Portal</option>
          <option value="Operations Manager Portal">Operations Manager Portal</option>
        </select>
        <button>Submit</button>
      </form>
    </MainLayout>
  );
};

export default SignInPage;
