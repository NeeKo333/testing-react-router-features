import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Courses = () => {
  const location = useLocation();
  const queryString = require("query-string");
  const parsed = queryString.parse(location.search).sort;
  const [dataArr, setDataArr] = useState([]);
  const [sortedArr, setSortedArr] = useState("");
  const navigator = useNavigate();
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
    return data.record.courses;
  }
  useEffect(() => {
    getCourses().then((data) => setSortedArr(sortingCourses(data, parsed)));
  }, []);
  function sortingCourses(dataArr, key) {
    const keys = ["title", "about", "id"];
    if (!keys.includes(key)) {
      navigator("/courses", { relative: "route" });
      return dataArr;
    }
    const newArr = !key
      ? [...dataArr].sort((a, b) => (a[key] > b[key] ? 1 : -1))
      : [...dataArr];

    return newArr;
  }

  return (
    <>
      <h3 className="coursesList">
        {dataArr.length > 0 ? (
          <div className="coursesInfo">
            <p>{parsed ? `Sorted by ${parsed}` : ""}</p>
            {sortedArr.map((el) => (
              <Link to={el.about.toLowerCase()} key={el.id}>
                {el.title}
              </Link>
            ))}
          </div>
        ) : (
          "Courses are loading..."
        )}
      </h3>
      <Outlet></Outlet>
    </>
  );
};

export default Courses;
