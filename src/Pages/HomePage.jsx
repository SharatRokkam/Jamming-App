import React, { useState } from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const HomePage = () => {
  const [users, setUsers] = useState(4);
  return (
    <>
      <NavBar setUsers={setUsers} />
      <Content users={users} />
      <Footer />
    </>
  );
};

export default HomePage;
