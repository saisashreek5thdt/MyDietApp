import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diX39acHJRRGNdVEw=");
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render( <App /> );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();