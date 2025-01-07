import React, { useState } from 'react';
import { Card, DataTable, Spinner, TextField } from '@shopify/polaris';
import { formatCurrency, formatMarketCap } from '../api/utils';

interface CryptoTableProps {
    data: any[];
    loading: boolean;
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data, loading }) => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const sortedData = [...data].sort((a, b) =>
        sortDirection === 'asc' ? a.current_price - b.current_price : b.current_price - a.current_price
    );

    const rows = sortedData.map((crypto) => [
        crypto.name,
        crypto.symbol.toUpperCase(),
        formatCurrency(crypto.current_price),
        formatMarketCap(crypto.market_cap),
    ]);

    return (
        <Card>
            {loading ? (
                    <Spinner accessibilityLabel="Loading cryptocurrencies" size="large" />
    ) : (
        <DataTable
            columnContentTypes={['text', 'text', 'numeric', 'numeric']}
    headings={['Name', 'Symbol', 'Price', 'Market Cap']}
    rows={rows}
    sortable={[false, false, true, false]}
    onSort={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
    defaultSortDirection="desc"
        />
)}
    </Card>
);
};

export default CryptoTable;
