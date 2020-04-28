import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact, deleteContact, updateContact } from "../../Action/action";
import { TiContacts } from "react-icons/ti";
import Navbar from "../Navbar/Navbar";
import "./MainArea.scss";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import Modal from "./Model/Model";
import AddForm from "./Model/AddForm";
import EditForm from "./Model/EditForm";

const MainArea = ({
  contacts,
  addContact,
  deleteContact,
  updateContact,
  toggler,
}) => {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [toogle, setToogle] = useState(false);
  const [modal, setModal] = useState(false);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  // var wordOne = activeContact.firstName.charAt(0);
  // var wordTwo = activeContact.lastName.charAt(0);
  // var words = wordOne + wordTwo;
  // var colors = ["red", "blue", "yellow", "blueviolet"];
  // var spans = [];

  // for (var x = 0; x < words.length; x++) {
  //   var color = colors[Math.floor(Math.random() * colors.length)]; // geting random color from array;
  //   var span =
  //     "<p style={{'backgroundColor: " + color + "/;'}}>"`${words}` + "</p";

  //   spans.push(span);
  // }
  // console.log(span);

  return (
    <>
      <Navbar toggler={toggler} />
      <div className="container">
        <div className="columns" style={{ margin: "3rem 0" }}>
          <div
            className="column is-4"
            style={{ margin: "1rem 0", display: "flex" }}
          >
            <TiContacts style={{ fontSize: "2rem" }} />
            <div>
              {" "}
              <h5
                className="title is-5"
                style={{ padding: "0 0.5rem", margin: "0 " }}
              >
                Contacts
              </h5>
              <p style={{ margin: "0 0.5rem " }}>
                Welcome to FlatCRM Contact Page{" "}
              </p>
            </div>
          </div>
          <div className="column is-3">
            <p>Sort by:</p>
            <div className={toogle ? "dropdown is-active" : "dropdown"}>
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="false"
                  aria-controls="dropdown-menu"
                  onClick={() => setToogle(!toogle)}
                >
                  <span>Dropdown button</span>
                  <span className="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" class="dropdown-item">
                    Dropdown item
                  </a>
                  <a class="dropdown-item">Other dropdown item</a>
                  <a href="#" class="dropdown-item is-active">
                    Active dropdown item
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <div className="field">
              <div className="control search-box">
                <input
                  className="input is-rounded input-search"
                  type="text"
                  placeholder="Small input"
                />
                <AiOutlineSearch className="search-icon" />
              </div>
            </div>
          </div>
          <div className="column is-3">
            <button
              className="button"
              onClick={() => setModal(!modal)}
              style={{
                background: "linear-gradient(to bottom, #ff5f6d, #ffc371)",
                color: "white",
                borderStyle: "none",
              }}
            >
              Add Contact
            </button>
          </div>
        </div>

        <div className="columns is-mobile" style={{ marginTop: "20px" }}>
          <div className="column is-full-mobile is-half-desktop">
            <table className="table is-fullwidth">
              <thead>
                <tr style={{ backgroundColor: "#f1f1f1" }}>
                  <th>Actions</th>
                  <th>Basic Info</th>
                  <th>Company</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((v, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="buttons">
                          <button
                            className="button"
                            onClick={() => deleteContact(v.id)}
                          >
                            <span>
                              <AiFillDelete />
                            </span>
                          </button>
                        </div>
                      </td>
                      <td onClick={() => setActiveContact(v)}>
                        {v.firstName} {v.lastName}
                      </td>
                      <td>{v.company}</td>
                      <td>
                        <button
                          class="button"
                          onClick={() => {
                            setEditModalData(v);
                            setEditModalOpen(true);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="column is-full-mobile is-half-desktop"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <div className="columns">
              <div className="column">
                <div>
                  <p className="character-style">
                    {`${activeContact.firstName.charAt(
                      0
                    )}${activeContact.lastName.charAt(0)}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column  is-half-mobile">
                <p
                  className="title is-2 "
                  style={{ textAlign: "center" }}
                >{`${activeContact.firstName} ${activeContact.lastName}`}</p>
                <p
                  class="subtitle is-5"
                  style={{ textAlign: "center" }}
                >{`${activeContact.position} @ ${activeContact.company}`}</p>
              </div>
            </div>

            <div className="container" style={{ margin: "2rem" }}>
              <div className="columns">
                <div className="column is-half-mobile ">Full Name</div>
                <div className="column is-half-mobile">
                  {`${activeContact.firstName} ${activeContact.lastName}`}
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-mobile ">Email</div>
                <div className="column is-half-mobile">
                  {activeContact.email}
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-mobile ">Phone</div>
                <div className="column is-half-mobile">
                  {`+${activeContact.countryCode}-${activeContact.phone}`}
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-mobile ">Company</div>
                <div className="column is-half-mobile">
                  {activeContact.company}
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-mobile ">Position</div>
                <div className="column is-half-mobile">
                  {activeContact.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal closeModal={() => setModal(!modal)} modalState={modal}>
        <AddForm addContact={addContact} modalControl={setModal} />
      </Modal>

      <Modal
        closeModal={() => setEditModalOpen(!editModalOpen)}
        modalState={editModalOpen}
      >
        <EditForm
          updateContact={updateContact}
          modalControl={setEditModalOpen}
          contactData={editModalData}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (p) => dispatch(addContact(p)),
  deleteContact: (i) => dispatch(deleteContact(i)),
  updateContact: (p) => dispatch(updateContact(p)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);
