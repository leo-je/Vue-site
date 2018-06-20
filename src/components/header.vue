<template>
    <el-col :span="24" class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
            {{collapsed?'':'sysName'}}
        </el-col>
        <el-col :span="10">
            <div class="tools" @click.prevent="collapse">
                <i class="fa fa-align-justify"></i>
            </div>
        </el-col>
        <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner">{{user?user.name:""}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-col>
</template>
<script>
const ERR_OK = "000";
export default {
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {
        //折叠导航栏
        collapse: function() {
            this.collapsed = !this.collapsed;
        }
    },
    mounted() {
        var _this = this;
        this.$http.get("/api/user").then(response => {
            response = response.data;
            if (response.code === ERR_OK) {
                this.user = response.datas;
            }
        });
    },
    computed: {
        collapsed: {
            get() {
                return this.$store.state.collapsed;
            },
            set(val) {
                this.$store.state.collapsed = val;
            }
        },
        user: {
            get() {
                return this.$store.state.user;
            },
            set(val) {
                this.$store.state.user = val;
            }
        }
    }
};
</script>
<style>
header {
    background-color: rgb(32, 160, 255);
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
}
.header-logo {
    display: inline-block;
    vertical-align: middle;
}
.header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
}
.header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
}
.header-operations li:first-child {
    cursor: default;
}
.header-opacity {
    opacity: 0.7;
}
.header-operations:after,
header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
</style>
