import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(async () => await import('../pages/Home.page'));
const LoginUserPage = React.lazy(async () => await import('../pages/LoginUser.page'));

function RoutingComponent() {
    return (
        <React.Suspense>
            <Routes>
                <Route path="/">
                    <Route
                        path=""
                        element={
                            <React.Suspense>
                                <HomePage />
                            </React.Suspense>
                        }>
                    </Route>
                    <Route
                        path='/loginUser'
                        element={
                            <React.Suspense>
                                <LoginUserPage />
                            </React.Suspense>
                        }
                    />
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default RoutingComponent;
