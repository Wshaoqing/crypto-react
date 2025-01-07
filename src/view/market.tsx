import React, {useEffect, useState} from 'react';
import {Page, TextField, Button, InlineStack} from '@shopify/polaris';
import {fetchCryptocurrencies} from '../api/cryptoService';
import CryptoTable from '../components/CryptoTable';
import Pagination from '../components/Pagination';

const App: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState(''); // 输入框的值
    const [searchQuery, setSearchQuery] = useState(''); // 用于 API 的搜索条件
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const itemsPerPage = 10;

    // 加载数据
    const loadCryptos = async () => {
        setLoading(true);
        const fetchedData = await fetchCryptocurrencies(currentPage, itemsPerPage, searchQuery);
        setData(fetchedData);
        setLoading(false);
    };

    useEffect(() => {
        loadCryptos();
    }, [currentPage, searchQuery]);

    // 处理搜索按钮点击事件
    const handleSearch = () => {
        setSearchQuery(searchInput); // 更新用于 API 请求的搜索条件
        setCurrentPage(1); // 重置到第一页
    };

    return (
        <Page title="Cryptocurrency Live Quotes">
            <InlineStack wrap={false} >
                <TextField autoComplete="off"
                           label="Search Cryptocurrencies"
                           value={searchInput}
                           onChange={setSearchInput}
                           placeholder="Search by name or symbol"
                />
                <Button onClick={handleSearch} >
                    Search
                </Button>
            </InlineStack>
            <CryptoTable data={data} loading={loading}/>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </Page>
    );
};

export default App;
