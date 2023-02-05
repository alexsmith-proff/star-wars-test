import ReactPaginate from 'react-paginate'

import './pagination.css'

const Pagination = () => {
    const onClick = () => {
        console.log('sssdsd');

    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 20,
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
            }}
        >
            <ReactPaginate
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                marginPagesDisplayed={5}
                nextClassName={"item next "}
                nextLabel={'next'}
                onPageChange={() => null}
                pageCount={9}
                pageClassName={'item pagination-page '}
                pageRangeDisplayed={5}
                previousClassName={"item previous"}
                previousLabel={'prev'}
            />
        </div>
    );
}

export default Pagination;
