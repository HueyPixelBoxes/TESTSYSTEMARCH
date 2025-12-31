import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ProductPage from '../page/product/ProductPage';

const Store = lazy(() => import('../component/store/ProductTable'));

const Promotion = lazy(() => import('../page/promotion/PromotionPage'));

const RouteConfig = () => {

    return (
        <Suspense fallback={<CircularProgress className="w-8 h-8" />}>
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/promotion" element={<Promotion />} />
            </Routes>
        </Suspense>
    )
}

export default RouteConfig;