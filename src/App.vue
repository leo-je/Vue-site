<template>
    <el-row class="container" style="height: 100%">
        <v-header></v-header>
        <el-col :span="24" class="main">
            <v-menu></v-menu>
            <section class="content-container">
                <navtabs></navtabs>
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade" mode="out-in">
                            <keep-alive :include='cachedViews'>
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>
<script>
import header from "./components/header";
import menu from "./components/menu";
import navtabs from "./components/navTabs";
export default {
    data() {
        return {};
    },
    created() {},
    beforeCreate() {
        if (this.$route.path === "/") {
            this.$router.push({ path: "/index" });
        }
    },
    methods: {},
    components: {
        "v-header": header,
        navtabs,
        "v-menu": menu
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
        cachedViews() {
            return this.$store.state.cachedViews;
        }
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

.el-menu-vertical-demo {
    overflow: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
}

.container {
    left: 0px;
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

        .content-container {
            // background: #f1f2f7;
            flex: 1;
            // position: absolute;
            // right: 0px;
            // top: 0px;
            // bottom: 0px;
            // left: 230px;
            overflow-y: scroll;
            //padding: 20px;
            .el-tabs__content {
                padding: 0;
            }
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

