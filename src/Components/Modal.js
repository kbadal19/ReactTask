import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";
import { UserContext } from "../Context/UserContext";

export default function Modal({ visible, onClose }) {
  const [name, setName] = useState("Eg. John Doe");
  const [email, setEmail] = useState("Eg. John@xyz.com");
  const [phone, setPhone] = useState("Eg. 9123456789");
  const [insta, setinsta] = useState("Eg. instagram.com/username");
  const [youtube, setyoutube] = useState("Eg. youtube.com/username");

  const [toggle, setToggle] = useState(1);
  const { isLocal, setIsLocal } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("name1")) {
      setIsLocal(true);
    } else setIsLocal(false);
  }, [localStorage.getItem("name1")]);

  if (!visible) return null;
  const handleOnClose = () => {
    onClose();
  };
  function updateToggle(id) {
    setToggle(id);
  }
  const handleDoneClick = () => {
    localStorage.setItem("name1", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("insta", insta);
    localStorage.setItem("youtube", youtube);

    onClose();
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalhead">
          <div className="head">Add New Profile</div>
          <div className="cross" onClick={handleOnClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5.25 5.75L12 12.5M12 12.5L5.25 19.25M12 12.5L18.75 19.25M12 12.5L18.75 5.75"
                stroke="#999CA0"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="ruler"></div>
        <div className="modal1">
          <div className="title">
            <ul className="listtop">
              <li onClick={() => updateToggle(1)}>
                <div
                  className={`listtoggle-container ${
                    toggle === 1 ? "active" : ""
                  }`}
                >
                  Basic
                </div>
              </li>
              <li onClick={() => updateToggle(2)}>
                <div
                  className={`listtoggle-container ${
                    toggle === 2 ? "active" : ""
                  }`}
                >
                  Social
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="entername">Enter Name*</div>
          <input
            type="text"
            id="inp1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onClick={() => setName("")}
            style={{
              width: "85%",
              boxSizing: "border-box",
              height: "3vw",
              margin: "-2vw",
            }}
          />

          <div className="enteremail">Enter Email*</div>
          <input
            type="email"
            id="inp2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={() => setEmail("")}
            style={{
              width: "85%",
              boxSizing: "border-box",
              height: "3vw",
              margin: "-2vw",
            }}
          />

          <div className="enterphn">Enter Phone*</div>
          <input
            type="number"
            id="inp3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onClick={() => setPhone("")}
            style={{
              width: "85%",
              boxSizing: "border-box",
              height: "3vw",
              margin: "-2vw",
            }}
          />
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="enterinsta">Instagram Link (optional)</div>
          <input
            type="url"
            id="inp4"
            value={insta}
            onChange={(e) => setinsta(e.target.value)}
            onClick={() => setinsta("")}
            style={{
              width: "85%",
              boxSizing: "border-box",
              height: "3vw",
              margin: "-2vw",
            }}
          />

          <div className="enteryoutube">Youtube Link (optional)</div>
          <input
            type="url"
            id="inp5"
            value={youtube}
            onChange={(e) => setyoutube(e.target.value)}
            onClick={() => setyoutube("")}
            style={{
              width: "85%",
              boxSizing: "border-box",
              height: "3vw",
              margin: "-2vw",
            }}
          />
        </div>
        <button className="donebtn" onClick={handleDoneClick}>
          Done
        </button>
      </div>
    </div>
  );
}
