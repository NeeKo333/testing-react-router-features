import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Courses = () => {
  const location = useLocation();
  const queryString = require("query-string");
  const parsed = queryString.parse(location.search);
  const [dataArr, setDataArr] = useState([]);
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
  }
  useEffect(() => {
    getCourses();
  }, []);
  let sortedBy = "";
  function sortingCourses() {
    if (
      Object.keys(parsed).length > 0 &&
      (parsed.sort === "title" ||
        parsed.sort === "about" ||
        parsed.sort === "id")
    ) {
      const sortField = parsed.sort;
      sortedBy = `Courses sorted by ${sortField}`;
      dataArr.sort((a, b) => {
        if (a[sortField] > b[sortField]) return 1;
        if (a[sortField] < b[sortField]) return -1;
        return 0;
      });
    } else if (
      Object.keys(parsed).length > 0 &&
      (parsed.sort !== "title" ||
        parsed.sort !== "about" ||
        parsed.sort !== "id")
    ) {
      navigator("/courses", { relative: "path" });
    }
    return dataArr.map((el) => (
      <Link to={el.about.toLowerCase()} key={el.id}>
        {el.title}
      </Link>
    ));
  }
  sortingCourses();
  return (
    <>
      <h3 className="coursesList">
        {dataArr.length > 0 ? (
          <div className="coursesInfo">
            {sortedBy}
            {sortingCourses()}
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
