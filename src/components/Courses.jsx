import { useState } from "react";
import { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import SingleCourse from "./SingleCourse";
const Courses = () => {
  const [dataArr, setDataArr] = useState([]);
  async function getCourses() {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/63854fbd7966e84526ceba8c",
      {
        method: "GET",
        headers: {
          "X-MASTER-KEY":
            "$2b$10$Tz6GO99EGxvlLju25FojYeQIFgETK7Q9hXK.A6BqKQoZcEx69VcS.",
        },
      }
    );
    return response.json();
  }

  useEffect(() => {
    getCourses().then((data) => {
      setDataArr(data.record.courses);
    });
  }, []);
  return (
    <div>
      {dataArr.length > 0
        ? dataArr.map((el) => (
            <Link to={el.about.toLowerCase()}>{el.title}</Link>
          ))
        : "Courses are loading..."}
    </div>
  );
};

export default Courses;
