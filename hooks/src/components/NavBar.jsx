import React, { useContext } from "react";
import { Link } from "react-router";
import { themeContext } from "../store/useContex";

function NavBar() {
  const { HandleOnClick, themeMode, dualVal } = useContext(themeContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={themeMode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Hooks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/useState/StateHome">
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useEffect/EffectHome">
                  useEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useRef/RefHome">
                  useRef
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useMemo/MemoHome">
                  useMemo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/useCallBack/CallBackHome">
                  useCallBack
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/useReducer/ReducerHome">
                  useReducer
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={`btn btn-${dualVal ? "dark" : "light"} text-end`}
            onClick={HandleOnClick}>
            {dualVal ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
