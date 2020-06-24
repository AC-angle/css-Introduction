import iCrush from 'icrush';

// 引入基础样式
import '@yelloxing/normalize.css';

// 引入全局样式
import './style.css';

// 引入主页面
import App from './App.iCrush';

// 引入全局指令
import './directives/index';

// 根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 配置启动方法
    render: createElement => createElement(App)

});