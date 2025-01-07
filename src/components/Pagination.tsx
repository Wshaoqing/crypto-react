import React from 'react';
import { Pagination as PolarisPagination } from '@shopify/polaris';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <PolarisPagination
            hasPrevious={currentPage > 1}
            onPrevious={() => onPageChange(currentPage - 1)}
            hasNext={currentPage < totalPages}
            onNext={() => onPageChange(currentPage + 1)}
        />
    );
};

export default Pagination;
