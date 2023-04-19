import React, { useState } from "react";
import { Fragment } from "react";

import  axios  from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("12222");
  const [checkout, setCheckout] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("password", password);
    console.log("checked", checkout);

    axios
      .post("/user", {
        firstName: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div class="row">
        <div class="col">
          <div class="m-2">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <br />
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Enter Message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
              <br />
              <button class="btn btn-primary" type="submit">Submit</button>
            </form>

          
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
