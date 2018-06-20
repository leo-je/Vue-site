<template>

    <div>
        <el-alert title="">about page</el-alert>
        <el-alert title=""> {{parentValue/*test/getMessage*/}}</el-alert>
    </div>
</template>
<script>
export default {
    name: "about",
    props: {
        parentValue: {
            default: "组件默认值"
        }
    },
    data() {
        return {
            test: this.parentValue
        };
    },
    computed: {
        getMessage() {
            // console.log(this)
            return this.test;
        }
    }
};
</script>
