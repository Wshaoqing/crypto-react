import React, {useEffect, useState} from 'react';
import {Page, Layout, TextField, Button, InlineStack} from '@shopify/polaris';
import {fetchCryptocurrencies} from '../api/cryptoService';
import CryptoTable from '../components/CryptoTable';
import Pagination from '../components/Pagination';

const App: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages ] = useState(10);
    const itemsPerPage = 10;

    const loadCryptos = async () => {
        setLoading(true);
        const fetchedData = await fetchCryptocurrencies(currentPage, itemsPerPage, searchQuery);
        setData(fetchedData);
        setLoading(false);
    };

    useEffect(() => {
        loadCryptos();
    }, [currentPage, searchQuery]);

    const handleSearch = () => {
        setSearchQuery(searchInput);
        setCurrentPage(1);
    };

    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    {/*<InlineStack align="center" distribution="equalSpacing" spacing="tight">*/}
                    <InlineStack align="center">
                        <TextField autoComplete="off"
                                   label="Search Cryptocurrencies"
                                   value={searchInput}
                                   onChange={setSearchInput}
                                   placeholder="Search by name or symbol"
                        />
                        <Button onClick={handleSearch}>
                            Search
                        </Button>
                    </InlineStack>
                </Layout.Section>
                <Layout.Section>
                    <CryptoTable data={data} loading={loading}/>
                </Layout.Section>
                <Layout.Section>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </Layout.Section>
            </Layout>
        </Page>
    );
};

export default App;
