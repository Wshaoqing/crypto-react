import React, {useState} from 'react';
import {Card, DataTable, Spinner, InlineStack, Thumbnail} from '@shopify/polaris';
import {formatCurrency, formatMarketCap} from '../api/utils';


interface CryptoTableProps {
    data: any[];
    loading: boolean;
}

const CryptoTable: React.FC<CryptoTableProps> = ({data, loading}) => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const sortedData = [...data].sort((a, b) =>
        sortDirection === 'asc' ? a.current_price - b.current_price : b.current_price - a.current_price
    );

    const rows = sortedData.map((crypto) => [
        <InlineStack align="start">
            <Thumbnail source={crypto.image} alt={crypto.name} size="small"/>
            <span>{crypto.name}</span>
        </InlineStack>,
        crypto.symbol.toUpperCase(),
        <span style={{color: crypto.price_change_percentage_24h >= 0 ? 'green' : 'red'}}>
      {crypto.price_change_percentage_24h.toFixed(2)}%
    </span>,
        formatCurrency(crypto.current_price),
        formatMarketCap(crypto.market_cap),
        crypto.circulating_supply.toLocaleString(),
    ]);

    return (
        <Card>
            {loading ? (
                <Spinner accessibilityLabel="Loading cryptocurrencies" size="large"/>
            ) : (
                <DataTable
                    columnContentTypes={['text', 'text', 'numeric', 'numeric', 'numeric', 'numeric']}
                    headings={['Name', 'Symbol', '24h Change', 'Price', 'Market Cap', 'Circulating Supply']}
                    rows={rows}
                    sortable={[false, false, true, true, false, false]}
                    onSort={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                    defaultSortDirection={"descending"}
                />
            )}
        </Card>
    );
};

export default CryptoTable;
