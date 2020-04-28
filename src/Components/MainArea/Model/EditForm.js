import React, { useState } from "react";

const EditForm = ({ contactData, modalControl, updateContact }) => {
  const [data, setData] = useState({
    firstName: contactData.firstName,
    lastName: contactData.lastName,
    email: contactData.email,
    countryCode: contactData.countryCode,
    phone: contactData.phone,
    company: contactData.company,
    position: contactData.position,
    id: contactData.id,
  });

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Edit Contact</h3>
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
                  type="number"
                  name="phone"
                  onChange={changeData}
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
                  value={data.company}
                  name="company"
                  onChange={changeData}
                  type="text"
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
                  name="position"
                  value={data.position}
                  onChange={changeData}
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
              updateContact(data);
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

export default EditForm;
