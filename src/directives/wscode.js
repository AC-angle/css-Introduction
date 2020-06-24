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
            content: el.innerText.replace(/\n{2}/g,'\n'),
            lang: {
                type: binding.type
            }
        });

    }

};