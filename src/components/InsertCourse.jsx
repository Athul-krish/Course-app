import React from "react";

const InsertCourse = () => {
  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto">

            <div className="card p-4 shadow">
              <h3 className="text-center mb-4">Add Course</h3>

              <div className="row g-3">

                <div className="col-12">
                  <label className="form-label">Course Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Duration</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Fee</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Mode</label>
                  <select className="form-select">
                    <option>Select Mode</option>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Trainer</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12 text-center mt-3">
                  <button className="btn btn-primary">
                    Submit
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertCourse;