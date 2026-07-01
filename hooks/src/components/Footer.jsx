import React, { useContext } from "react";
import { Link } from "react-router";
import { themeContext } from "../store/useContex";

function Footer() {
  const { themeMode, dualVal } = useContext(themeContext);

  return (
    <>
      <div
        className="container"
        data-bs-theme={themeMode}
        style={{ maxWidth: "100%" }}>
        <footer
          className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5"
          style={{ backgroundColor: dualVal ? "#F8F9FA" : "#2B3035" }}>
          {/* <div className="col mb-3"></div> */}
          <div className="col mb-3">
            <Link
              to="/useState/StateHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useState
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useState/Counter"
                  className="nav-link p-0 text-body-secondary">
                  Counter
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useState/TextArea"
                  className="nav-link p-0 text-body-secondary">
                  Textarea
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useState/CheckBox"
                  className="nav-link p-0 text-body-secondary">
                  CheckBox
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useState/From"
                  className="nav-link p-0 text-body-secondary">
                  From
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <Link
              to="/useEffect/EffectHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useEffect
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useEffect/ChatRooms"
                  className="nav-link p-0 text-body-secondary">
                  ChatRooms
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useEffect/GlobalEvent"
                  className="nav-link p-0 text-body-secondary">
                  GlobalEvent
                </Link>
              </li>
              {/* <li className="nav-item mb-2">
                <Link
                  to="/useEffect/VisiblityElement"
                  className="nav-link p-0 text-body-secondary">
                  Visiblity Element
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col mb-3">
            <Link
              to="/useRef/RefHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useRef
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useRef/ClickCount"
                  className="nav-link p-0 text-body-secondary">
                  ClickCount
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useRef/RefTextArea"
                  className="nav-link p-0 text-body-secondary">
                  Ref TextArea
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useRef/StopWatch"
                  className="nav-link p-0 text-body-secondary">
                  StopWatch
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <Link
              to="/useMemo/MemoHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useMemo
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useMemo/MemoEnable"
                  className="nav-link p-0 text-body-secondary">
                  Memo Enable
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useMemo/MemoDisable"
                  className="nav-link p-0 text-body-secondary">
                  Memo Disable
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <Link
              to="/useMemo/MemoHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useCallBack
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useCallBack/CallBackEnable"
                  className="nav-link p-0 text-body-secondary">
                  CallBack Enable
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useCallBack/CallBackDisable"
                  className="nav-link p-0 text-body-secondary">
                  CallBack Disable
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <Link
              to="/useReducer/ReducerHome"
              className="nav-link p-0 text-body-primary"
              style={{ color: dualVal ? "#000000" : "#ffffff" }}>
              useReducer
            </Link>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/useReducer/AgeReducer"
                  className="nav-link p-0 text-body-secondary">
                  Age Reducer
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/useReducer/ToDoListReducer"
                  className="nav-link p-0 text-body-secondary">
                  ToDoList Reducer
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
