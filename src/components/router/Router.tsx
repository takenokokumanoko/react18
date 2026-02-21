import { ErrorBoundary } from "react-error-boundary";
import { AutoBatchEventHandler } from "../AutoBatchEventHandler";
import { AutoBatchOther } from "../AutoBatchOther";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQuery } from "../pages/ReactQuery";
import { AccountPage } from "../pages/AccountPage";
import { Top } from "../pages/Top";
import { TermsOfUse } from "../pages/TermsOfUse";
import { Page404 } from "../pages/Page404";
import { Transition } from "../pages/Transition";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <AutoBatchEventHandler />
                <AutoBatchOther />
                </>
                } />
                <Route path="/top" element={<Top />} />
                <Route path="/account-page" element={<AccountPage />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/transition" element={<Transition />} />
                <Route path="/react-query" element={
                    <ErrorBoundary fallback={<p>Error</p>}>
                        <Suspense fallback={<p>Loading</p>}>
                            <ReactQuery />
                        </Suspense>
                    </ErrorBoundary>                
                } />
                <Route path="*" element={<Page404 />} />
        </Routes>
    );
}