/* jshint esversion: 6 */

export default {
    dataTable: {
        getDefConfig: function () {
            return {
                isSelection: true, //是否多选
                showIndex: false, //是否显示序号
                isOperation: false,
                operation: {
                    edit: true,
                    del: true
                }
            }
        }
    }


}