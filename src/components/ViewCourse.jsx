import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    axios
      .get("http://192.168.33.245:5001/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12">

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">
                  <tr>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Fee</th>
                    <th>Mode</th>
                    <th>Trainer</th>
                    <th>Created At</th>
                  </tr>
                </thead>

                <tbody>
                  {courses.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.course_name}</td>
                        <td>{value.duration}</td>
                        <td>{value.fee}</td>
                        <td>{value.mode}</td>
                        <td>{value.trainer}</td>
                        <td>{value.created_at}</td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;