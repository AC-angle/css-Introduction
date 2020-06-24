
// 页面懒加载

const pages = {
    "align-left-inline": () => import("./pages/align-left-inline.iCrush"),
    "float-height": () => import("./pages/float-height.iCrush"),
    "line-height": () => import("./pages/line-height.iCrush"),
    "margin-auto": () => import("./pages/margin-auto.iCrush"),
    "overflow-hidden": () => import("./pages/overflow-hidden.iCrush"),
};

// 跳转方法

export default function (pagename, doback) {

    window.location.hash = pagename;

    pages[pagename]().then(data => {
        doback(data.default);
    });

};
