import React from 'react';
import ReactDOM from 'react-dom';
import {AppRoutes} from './router';
import * as serviceWorker from './serviceWorker';
import './assets/css/common.css';

/*不同于vue，react是直接将路由当做顶级组件进行使用 */
ReactDOM.render(<AppRoutes />, document.getElementById('root'));

serviceWorker.unregister();
