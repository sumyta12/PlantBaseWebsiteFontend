import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const [usersinfo, setinfo] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  function handler(e) {
    e.preventDefault();
    const datauser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(datauser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("ore bhau succeeded");
          const remainigUser = [...usersinfo, datauser];
          setinfo(remainigUser);
          nameRef.current.value = "";
          emailRef.current.value = "";
        }
      });
  }

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setinfo(data));
  }, []);
  function handlerdelete(id) {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("Deleted");
          const userreamiani = usersinfo.filter((user) => user._id !== id);

          setinfo(userreamiani);
        }
      });
  }
  const navigation = useNavigate();
  function handlerUpdate(id) {
    navigation("/practice/update/" + id);
  }
  return (
    <div className="practicecss">
      {usersinfo.map((user, index) => (
        <>
          <p key={index}>{user.name}</p>
          <button
            onClick={() => handlerUpdate(user._id)}
            className="bg-primary">
            update
          </button>
          <button className="bg-danger" onClick={() => handlerdelete(user._id)}>
            x
          </button>
        </>
      ))}

      <input ref={emailRef} name="email" />
      <input ref={nameRef} name="username" />
      <button onClick={(e) => handler(e)}>clcik</button>
    </div>
  );
};

export default Practice;
