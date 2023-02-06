import { FC } from 'react';
import ReactPaginate from 'react-paginate'

import './pagination.css'

interface PaginationProps {
    pageCount: number
    currentPage: number
    pageOnClick: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ pageCount, currentPage, pageOnClick }) => {
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
                forcePage={currentPage}
                nextClassName={"item next "}
                nextLabel={'next'}
                onPageChange={(page) => pageOnClick(page.selected)}
                pageCount={pageCount}
                pageClassName={'item pagination-page '}
                pageRangeDisplayed={5}
                previousClassName={"item previous"}
                previousLabel={'prev'}
            />
        </div>
    );
}

export default Pagination;
