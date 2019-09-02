import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

//state functional components props are refer by just props NOT this.props that is for class components
const Table = ({ columns, sortColumn, onSort, data }) => {
	return (
		<table className='table'>
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody columns={columns} data={data} />
			{/* <tbody>
        {films.map((filmObject) => {
            return (
                <tr key={filmObject._id}>
                    <td>{filmObject.title}</td>
                    <td>{filmObject.genre.name}</td>
                    <td>{filmObject.numberInStock}</td>
                    <td>{filmObject.dailyRentalRate}</td>
                    <td />

                    <td />
                </tr>
            );
        })}
    </tbody> */}
		</table>
	);
};

export default Table;
