<template>
    <el-table ref="singleTable" highlight-current-row @current-change="handleCurrentChange" :data="tableData" max-height="600" border style="width: 100%">
        <!-- 是否显示多选或者单选 -->
        <el-table-column v-if="tableConfigs.isSelection" type="selection" width="55"></el-table-column>
        <!-- 是否显示序号 -->
        <el-table-column v-if="tableConfigs.showIndex" type="index" width="55" label="序号"> </el-table-column>
        <!-- 数据列 -->
        <!-- 一级表头 -->
        <el-table-column v-for=" header in tableHeader" :key="header.prop" :prop="header.prop" :label="header.label" :width="header.width">
            <template v-if="header.sonHeader">
                <!-- 二级表头 -->
                <el-table-column v-for="sonHeader in header.sonHeader" :key="sonHeader.prop" :prop="sonHeader.prop" :label="sonHeader.label" :width="sonHeader.width">
                    <template v-if="sonHeader.sonHeader">
                        <!-- 三级表头 -->
                        <el-table-column v-for="sonHeader3 in sonHeader.sonHeader" :key="sonHeader3.prop" :prop="sonHeader3.prop" :label="sonHeader3.label" :width="sonHeader3.width">
                            <template v-if="sonHeader3.sonHeader">
                                <!-- 四级表头 -->
                                <el-table-column v-for="sonHeader4 in sonHeader3.sonHeader" :key="sonHeader4.prop" :prop="sonHeader4.prop" :label="sonHeader4.label" :width="sonHeader4.width">
                                </el-table-column>
                            </template>
                        </el-table-column>
                    </template>
                </el-table-column>
            </template>
        </el-table-column>
        <!-- 是否显示操作列 -->
        <el-table-column v-if="tableConfigs.isOperation" label="操作" width="150">
            <template slot-scope="scope">
                <el-button v-if="tableConfigs.operation.edit" size="small" @click="handleEdit(scope.$index, scope.row,tableData)">编辑</el-button>
                <el-button v-if="tableConfigs.operation.del" type="danger" size="small" @click="handleDel(scope.$index, scope.row,tableData)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import utils from "../common/js/utils";

export default {
    props: {
        tableData: null,
        tableConfig: {
            default: {}
        },
        tableHeader: {
            default: [
                {
                    prop: "name",
                    label: "表头1"
                },
                {
                    prop: "name",
                    label: "表头2"
                },
                {
                    prop: "name",
                    label: "表头3"
                }
            ]
        },
        handleEdit: {
            default() {
                return (index, row, tableData) => {
                    console.warn("default handleEdit ,please set a function");
                };
            }
        },
        handleDel: {
            default() {
                return (index, row) => {
                    console.warn("default handleDel ,please set a function");
                    console.log(row);
                };
            }
        }
    },
    data() {
        return {
            currentRow: null,
            tableConfigs: Object.assign(
                utils.dataTable.getDefConfig(),
                this.tableConfig
            )
        };
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.singleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.singleTable.clearSelection();
            }
        },
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        getRowData: () => {},
        handleCurrentChange: val => {
            this.currentRow = val;
        }
    }
};
</script>