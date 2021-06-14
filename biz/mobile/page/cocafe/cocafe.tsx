require("./cocafe.less");
import * as React from 'react'
import { render } from 'react-dom'

import App from './index';

render(
    <App />,
    document.getElementById("app")
);

if (module['hot']) {
    module['hot'].accept();
}
