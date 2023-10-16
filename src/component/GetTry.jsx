import React, { useEffect, useState } from "react";

import axios from "axios";
function GetTry() {
  const [selam, setSelam] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      setSelam(res.data);
    });
  }, []);
  const arr = selam.map((user, index) => {
    return <div key={user.id}>{user.title}</div>;
  });

  return (
    <div>
      GetTry
      <div>{arr}</div>
    </div>
  );
}

export default GetTry;
