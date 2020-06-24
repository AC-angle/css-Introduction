/**
 * <XXX ctrl-active-value:value='flag' />
 * 
 * 说明:flag==value的时候active=yes
 * 
 * @author 心叶(yelloxing)
 * 
 * 2020年6月23日于南京
 */

import image2D from 'image2d';

let doit = function (el, binding) {

    if (binding.value == binding.type) {
        image2D(el).attr('active', 'yes');
    } else {
        image2D(el).attr('active', 'no');
    }

}

export default {

    inserted: doit,
    update: doit

};