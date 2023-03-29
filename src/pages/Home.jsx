import React from "react";
import Incidents from "../assets/incidents.jpg";
import Ob from "../assets/book.jpg";

export const Home = () => {
  return (
    <>
      <div className="parent-container mx-auto">
        <div className="heading text-center m-20 space-y-5">
          <h1 className="text-4xl">Welcome to Reports</h1>
          <p className="text-1xl">
            The last solution any security company will ever need for incident
            reports and Ob entries
          </p>
        </div>

        {/* What we offer */}
        <div className="services space-y-5">
          {/* Incidens */}
          <div className="title text-center text-xl">
            <h1>Incident Reporting System</h1>
          </div>
          <div className="incidents space-y-6">
            <div className="content space-y-6 mx-20 p-5 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:space-y-0">
              <div className="image mt-5">
                <img
                  src={Incidents}
                  alt="image"
                  className="w-full h-auto rounded-lg md:w-96"
                />
              </div>
              <div className="text-content space-y-2">
                <p>
                  Our Incident reporting system provides your company with a few
                  key features, The ability to create a incident report of
                  multiple types of incidents that could occur at your clients.
                </p>
                <p>
                  Upon completing the incident report it can be sent to relevant
                  managers via email so posting on whatsapp groups are a thing
                  of the past.
                </p>
                <p>
                  Viewing the history of sent report can easily be done with the
                  click of a button
                </p>
              </div>
            </div>
          </div>
          {/* Ob entries */}
          <div className="title text-center text-xl">
            <h1>Ob Reporting System</h1>
          </div>
          <div className="incidents space-y-6">
            <div className="content space-y-6 p-5 mx-20 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:space-y-0">
              <div className="image mt-5 order-1 mx-auto lg:order-2">
                <img
                  src={Ob}
                  alt="image"
                  className="w-auto h-60 rounded-lg md:w-96 object-cover object-center"
                />
              </div>
              <div className="text-content order-1">
                <p>
                  Our Ob entry system provides your company with the ability to
                  take ob entries whether you use the system for the control
                  room or for guarding purposes. The system is designed to cater
                  for both sides - With the ability to access the history of
                  saved ob entries at a moments notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bg-neutral-800 w-full h-10 flex items-center justify-center p-8">
        <h2 className="text-neutral-100 text-xl">Reports</h2>
      </div>
    </>
  );
};
