import React from "react";
import GitHubProvider from "./provides/github-provider";
import { ResetCss } from './global/resetCSS';
import App from "./App";

const Providers = () => {
    return (
        <main>
            <GitHubProvider>
                <ResetCss/>
                <App />
            </GitHubProvider>
        </main>
    );
};

export default Providers;