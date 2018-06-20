<template>
    <data-table :tableData="tableData" :tableConfig="tableConfig" :tableHeader="tableHeader" :handleEdit="handleEdit"></data-table>
</template>
<script>
import dataTable from "../components/dataTable";
import utils from "../common/js/utils";
export default {
    name: "tablepage",
    props: {},
    data() {
        return {
            tableData: null,
            tableHeader: null,
            tableConfig: {
                isOperation: true
            },
            handleEdit: (index, row, tableData) => {
                alert(index);
            }
        };
    },
    components: {
        dataTable
    },
    mounted() {
    },
    created() {
        this.tableHeader = [
            {
                prop: "date",
                label: "日期",
                width: "180"
            },
            {
                prop: "name",
                label: "姓名",
                width: "180"
            },
            {
                prop: "address4",
                label: "地址4"
            }
            // {
            //   label: "地址",
            //   sonHeader: [
            //     {
            //       prop: "address1",
            //       label: "地址1"
            //     },
            //     {
            //       label: "地址2",
            //       sonHeader: [
            //         {
            //           prop: "address3",
            //           label: "地址3"
            //         },
            //         {
            //           prop: "address4",
            //           label: "地址4"
            //         }
            //       ]
            //     }
            //   ]
            // }
        ];
        this.tableData = [
            {
                date: "2016-05-03",
                name: "王小虎",
                address1: "地址1"
            },
            {
                date: "2016-05-02",
                name: "王小虎",
                address2: "地址2 1518 弄"
            },
            {
                date: "2016-05-04",
                name: "王小虎",
                address2: "地址2 1518 弄"
            },
            {
                date: "2016-05-01",
                name: "王小虎",
                address3: "地址3 1518 弄"
            },
            {
                date: "2016-05-08",
                name: "王小虎",
                address4: "地址4 1518 弄"
            },
            {
                date: "2016-05-06",
                name: "王小虎",
                address1: "地址1 1518 弄"
            },
            {
                date: "2016-05-07",
                name: "王小虎",
                address1: "地址1 1518 弄"
            }
        ];
    }
};
</script>