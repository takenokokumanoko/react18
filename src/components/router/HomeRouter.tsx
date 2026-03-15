import { ErrorBoundary } from "react-error-boundary";
import { AccountPage } from "../pages/AccountPage";
import { TermsOfUse } from "../pages/TermsOfUse";
import { Top } from "../pages/Top";
import { Transition } from "../pages/Transition";
import { Suspense } from "react";
import { ReactQuery } from "../pages/ReactQuery";
import { Page404 } from "../pages/Page404";

export const homeRouter = [
    {
        path: "/top",
        element: <Top />
    },
    {
        path: "/account-page",
        element: <AccountPage />
    },
    {
        path: "/terms-of-use",
        element: <TermsOfUse />
    },
    {
        path: "/transition",
        element: <Transition />
    },
    {
        path: "/react-query",
        element: 
        <ErrorBoundary fallback={<p>Error</p>}>
            <Suspense fallback={<p>Loading</p>}>
                <ReactQuery />
            </Suspense>
        </ErrorBoundary>
    },
    {
        path: "*",
        element: <Page404 />
    },
]