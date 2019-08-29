import React from "react";

const Genre = props => {
  const { genres } = props;

  return (
    <div className="list-group">
      {genres.map(g => (
        <a
          key={g._id}
          href="#"
          className="list-group-item list-group-item-action "
        >
          {g.name}
        </a>
      ))}
    </div>
    // <nav>
    //   <ul className="pagination">
    //     {pages.map(page => (
    //       <li
    //         key={page}
    //         className={page === currentPage ? "page-item active" : "page-item"}
    //       >
    //         <a className="page-link" onClick={() => onPageChange(page)}>
    //           {page}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Genre;
