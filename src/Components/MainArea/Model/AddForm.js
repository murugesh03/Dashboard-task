import React, { useState } from "react";

const AddForm = ({ addContact, modalControl }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    company: "",
    position: "",
    phone: "",
    uuid: "sdfasdf",
  });

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Add Contact</h3>
      <div className="column">
        <div className="columns ">
          <div className="column">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={data.firstName}
                  onChange={changeData}
                />
              </div>
            </div>
          </div>
          <div className="column ">
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  class="input"
                  value={data.lastName}
                  onChange={changeData}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column ">
            <div class="field">
              <label class="label">Email </label>
              <div class="control">
                <input
                  class="input"
                  value={data.email}
                  onChange={changeData}
                  name="email"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column ">
            <div class="field">
              <label class="label">Country Code</label>
              <div class="control">
                <input
                  class="input"
                  value={data.countryCode}
                  onChange={changeData}
                  name="countryCode"
                  type="number"
                  placeholder="Country Code"
                />
              </div>
            </div>
          </div>

          <div className="column ">
            <div class="field">
              <label class="label">Phone Number</label>
              <div class="control">
                <input
                  class="input"
                  value={data.phone}
                  onChange={changeData}
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column ">
            <div class="field">
              <label class="label">Company</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  value={data.company}
                  onChange={changeData}
                  name="company"
                  placeholder="Company"
                />
              </div>
            </div>
          </div>
          <div className="column ">
            <div class="field">
              <label class="label">Position</label>
              <div class="control">
                <input
                  class="input"
                  value={data.position}
                  onChange={changeData}
                  name="position"
                  type="text"
                  placeholder="Position"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="control">
          <button
            class="button is-primary"
            style={{
              background: "linear-gradient(to bottom, #ff5f6d, #ffc371)",
            }}
            onClick={() => {
              addContact(data);
              modalControl(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddForm;
