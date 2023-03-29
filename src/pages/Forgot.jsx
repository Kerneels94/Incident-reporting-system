import { React, useState } from "react";

export const Forgot = () => {
  /**
   * state
   */

  const [reset, setReset] = useState(false);

  /**
   * Event handelers
   */

  const openReset = () => {
    setReset(!reset);
  };

  return (
    <>
      <div className="mx-auto flex items-center justify-around">
        <div className="message-container bg-lime-300  w-full h-96 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl">Forgot your password</h1>
          <p className="text-2xl">
            It happens! Fill out the form below to reset your password
          </p>
        </div>
      </div>

      {/* Reset form */}
      <div className="modal w-1/2 h-auto rounded-lg shadow-2xl p-10 mx-auto m-10">
        <div className="container flex flex-col items-center space-y-6">
          <div className="heading text-xl">
            <h2>Reset Password</h2>
          </div>
          <div className="form space-y-2 flex flex-col gap-2">
            <label htmlFor="user-name" className="text-center">
              User Name / E-mail
            </label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Enter your username or e-mail"
              className="rounded-md shadow-md shadow-lime-300 px-5 py-2 text-center outline-none text-sm w-60 "
            />
          </div>

          <button
            onClick={openReset}
            type="reset"
            className="px-4 py-1 bg-lime-300 text-neutral-800 rounded-xl text-sm hover:bg-lime-400 hover:text-white transition-colors"
          >
            Reset
          </button>

          {reset && (
            <>
              <div className="password-reset text-center">
                <div className="message">
                  <h2>Password Reset Successfully</h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
