/**
 * combine mechanism
 * @author yiminghe@gmail.com
 */
(function (S, loader) {
    if ("require" in this) {
        return;
    }

    var combines;

    /**
     * compress 'from module' to 'to module'
     * {
     *   core:['dom','ua','event','node','json','ajax','anim','base','cookie']
     * }
     */
    combines = S.configs.combines = function (from, to) {
        var cs;
        if (S.isObject(from)) {
            S.each(from, function (v, k) {
                S.each(v, function (v2) {
                    combines(v2, k);
                });
            });
            return;
        }
        cs = S.Config.combines = S.Config.combines || {};
        if (to) {
            cs[from] = to;
        } else {
            return cs[from] || from;
        }
    };

    S.mix(loader, {
        __getCombinedMod:function (modName) {
            var cs;
            cs = S.Config.combines = S.Config.combines || {};
            return cs[modName] || modName;
        }
    });
})(KISSY, KISSY.__loader);