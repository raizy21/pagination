import { useState } from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    // console.log(i);
  }

  const [activePage, setActivePage] = useState(1);

  function handlePageClick(number) {
    setActivePage(number);
    paginate(number);
  }

  return (
    <nav className="flex flex-row absolute top-full left-[45%]">
      <ul className="flex ">
        {pageNumbers.map((number) => (
          <li key={number} className="ml-5">
            <a onClick={() => handlePageClick(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
