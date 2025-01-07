import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Market from './view/market.tsx'
import {AppProvider} from '@shopify/polaris';

import '@shopify/polaris/build/esm/styles.css'

const i18n = {
    Polaris: {
        ResourceList: {
            showing: '显示 {itemsCount} 个项目',
            defaultItemSingular: '项目',
            defaultItemPlural: '项目',
        },
        Common: {
            yes: '是',
            no: '否',
        },
        Pagination: {
            next: '下一页',
            previous: '上一页',
        },
        DataTable: {
            sortButton: {
                ascending: '升序',
                descending: '降序',
            },
        },
    },
};
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <AppProvider i18n={i18n}>
            <Market/>
        </AppProvider>

    </StrictMode>,
)
