<template>
    <el-row class="container" style="height: 100%">
        <!-- <v-header class="header" :user="user"></v-header> -->
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
                    <span class="el-dropdown-link userinfo-inner">{{user.name}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>

        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo"  router :collapse="collapsed">
                    <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
                        <template v-if="!item.children">
                            <el-menu-item :index="item.path">
                                <i :class="item.class?item.class:'el-icon-menu'"></i>
                                <span slot="title">{{item.name}}</span>
                                <!-- <i class="fa" :class="item.class"></i> -->
                            </el-menu-item>
                        </template>
                        <template v-else>
                            <el-submenu :index="item.path">
                                <template slot="title">
                                    <i :class="item.class?item.class:'el-icon-menu'"></i>
                                    <span slot="title">{{item.name}}</span>
                                </template>
                                <!-- <span slot="title">{{item.name}}</span> -->
                                <el-menu-item v-for="sonItem in item.children" :key="sonItem.name" :index="sonItem.path">
                                    <i class="fa" :class="sonItem.class">{{sonItem.name}}</i>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </template>
                </el-menu>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">{{$route.name}}</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>
<script>
import header from "./components/header.vue";
const ERR_OK = "000";
export default {
    data() {
        return {
            user: {},
            collapsed: false,
            isCollapse: false
        };
    },
    created() {
        this.$http.get("/api/user").then(response => {
            response = response.data;
            if (response.code === ERR_OK) {
                this.user = response.datas;
            }
        });
    },
    beforeCreate() {
        if (this.$route.path === "/") {
            this.$router.push({ path: "/index" });
        }
    },
    methods: {
        //折叠导航栏
        collapse: function() {
            this.collapsed = !this.collapsed;
        }
    },
    components: {
        "v-header": header
    }
};
</script>
<style lang="scss">
$color-primary: #20a0ff;

body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, SimSun, sans-serif;
    background-color: #f2f2f2;
}

.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
        background: $color-primary;
        height: 60px;
        line-height: 60px;
        color: #fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color: #fff;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float: right;
                }
            }
        }
        .logo {
            //width:230px;
            height: 60px;
            font-size: 22px;
            padding-left: 20px;
            padding-right: 20px;
            border-color: rgba(238, 241, 146, 0.3);
            border-right-width: 1px;
            border-right-style: solid;
            img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
            }
            .txt {
                color: #fff;
            }
        }
        .logo-width {
            width: 230px;
        }
        .logo-collapse-width {
            width: 64px;
        }
        .tools {
            padding: 0px 23px;
            width: 14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .main {
        display: flex;
        // background: #324057;
        position: absolute;
        top: 60px;
        bottom: 0px;
        overflow: hidden;
        aside {
            flex: 0 0 230px;
            width: 230px;
            // position: absolute;
            // top: 0px;
            // bottom: 0px;
            .el-menu {
                height: 100%;
            }
            .collapsed {
                width: 60px;
                .item {
                    position: relative;
                }
                .submenu {
                    position: absolute;
                    top: 0px;
                    left: 60px;
                    z-index: 99999;
                    height: auto;
                    display: none;
                }
            }
        }
        .menu-collapsed {
            flex: 0 0 60px;
            width: 60px;
        }
        .menu-expanded {
            flex: 0 0 230px;
            width: 230px;
        }
        .content-container {
            // background: #f1f2f7;
            flex: 1;
            // position: absolute;
            // right: 0px;
            // top: 0px;
            // bottom: 0px;
            // left: 230px;
            overflow-y: scroll;
            padding: 20px;
            .breadcrumb-container {
                //margin-bottom: 15px;
                .title {
                    width: 200px;
                    float: left;
                    color: #475669;
                }
                .breadcrumb-inner {
                    float: right;
                }
            }
            .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
}
</style>

