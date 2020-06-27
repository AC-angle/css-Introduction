/**
 * <pre wscode>
 *   code
 * </pre>
 * 
 * @author 心叶(yelloxing)
 * 
 * 2020年6月23日于南京
 */

import WSCode from 'wscode';

export default {

    inserted: (el, binding) => {

        new WSCode({
            el,
            content: el.innerText.replace(/\n{2}/g, '\n'),
            lang: {
                type: binding.type,

                // 配置更细节的着色（可选）
                color: {
                    "annotation": "#6a9955",/*注释颜色*/
                    "border": "#000000",/*边界颜色*/
                    "tag": "#1e50b3",/*结点颜色*/
                    "attr": "#1e83b1",/*属性颜色*/
                    "string": "#ac4c1e",/*字符串颜色*/
                    "key": "#ff0000",/*关键字颜色*/
                }

            }
        });

    }

};