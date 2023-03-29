import { React, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  /**
   * State
   */
  const [openMenu, setOpenMenu] = useState(false);

  /**
   * Event handlers
   */
  const openModal = () => {
    setOpenMenu(!openMenu);
  };

  const closeModal = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="mx-auto p-5 flex items-center justify-around  shadow-md shadow-lime-200 relative">
        <div className="text-xl">
          <h1>Reports</h1>
        </div>
        {/* Lnks */}
        <ul className="flex gap-2">
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/incidents">Incidents</Link>
          </li>
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/ob">Ob</Link>
          </li>
        </ul>
        {/* Button with modal*/}
        <button
          onClick={openModal}
          className="px-6 py-1 bg-lime-300 text-neutral-800 rounded-xl text-sm hover:bg-lime-400 hover:text-white transition-colors"
        >
          Login
        </button>

        {/**
         * Conditionally render the modal when the button is clicked
         */}

        {openMenu ? (
          <>
            <div className="modal absolute top-40 left-25 right-25 z-10 w-80 h-auto rounded-lg shadow-2xl p-10 bg-neutral-800">
              <div className="container flex flex-col items-center space-y-6">
                <div className="heading text-lime-300">
                  <h2>Login to your account</h2>
                </div>
                <div className="form space-y-2 flex flex-col gap-2 text-white">
                  <label htmlFor="user-name" className="text-center">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="user-name"
                    id="user-name"
                    placeholder="User name"
                    className="rounded-md shadow-md shadow-lime-300  py-2 text-center outline-none text-sm text-neutral-800"
                  />

                  <label htmlFor="password" className="text-center">
                    Password
                  </label>
                  <input
                    type="password"
                    name="passowrd"
                    id="password"
                    placeholder="**********"
                    className="rounded-md shadow-md shadow-lime-300  py-2 text-center outline-none text-sm text-neutral-800"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-1 bg-lime-300 text-neutral-800 rounded-xl text-sm hover:bg-lime-400 hover:text-white transition-colors"
                >
                  Login
                </button>
                {/* Forgot password */}
                <div className="forgot-password text-center">
                  <Link
                    to="/forgot"
                    className="hover:text-lime-400 text-white"
                    onClick={closeModal}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </header>
    </>
  );
};
