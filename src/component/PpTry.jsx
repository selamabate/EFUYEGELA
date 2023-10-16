import React, { useState } from "react";
import axios from "axios";

function PpTry() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [num, setNum] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name,
        id,
        num,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      posttry
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="form-input my-5 py-2 rounded-full w-full bg-teal-400 hover:rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PpTry;
