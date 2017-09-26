// absolute imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

const MarkdownPreviewer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));
registerServiceWorker();
