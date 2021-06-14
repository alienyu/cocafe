import * as React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { loadGlobalVar } from 'mobileCocafeGlobalConf';

loadGlobalVar();

type AppProps = {
    history?: any
}

export default class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <Router basename={window.deployConf.ver ? "/cocafe" : "/mobile/cocafe"}>
                {mobileCocafeRenderRoutes(mobileCocafeConstants.routes)}
            </Router>
        );
    }
}