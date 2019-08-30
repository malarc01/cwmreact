import React from 'react';

const Genre = (props) => {
	const { genres, textProperty, valueProperty } = props;

	return (
		<ul className="list-group">
			{genres.map((g) => (
				<li key={g[valueProperty]} className="list-group-item list-group-item-action ">
					{g[textProperty]}
				</li>
			))}
		</ul>
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
