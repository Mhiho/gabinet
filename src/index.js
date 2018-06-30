import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import rootReducer from './store/rootReducer';
import {createStore} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
