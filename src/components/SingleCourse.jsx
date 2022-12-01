import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const SingleCourse = () => {
  const urlParams = useParams();
  const navigator = useNavigate();
  const urlSlug = urlParams.slug;
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
    const data = await response.json();
    setDataArr(data.record.courses);
  }
  useEffect(() => {
    getCourses();
  }, []);
  function singleCourseInfo() {
    return dataArr.find((el) => el.about.toLowerCase() === urlSlug)
      ? dataArr.find((el) => el.about.toLowerCase() === urlSlug).title
      : navigator("..", { relative: "path" });
  }
  return (
    <h4>{dataArr.length > 0 ? singleCourseInfo() : "Loading course..."}</h4>
  );
};

export default SingleCourse;
