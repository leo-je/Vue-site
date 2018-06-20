<template>
    <div class="template-tabs">
        <el-tabs v-model="activeIndex" type="border-card" @tab-click="tabClick" v-if="options.length" @tab-remove="tabRemove" >
            <el-tab-pane :closable="index==0?false:true" :key="item.name" v-for="(item, index) in options" :label="item.meta?(item.meta.title?item.meta.title:item.name):item.name" :name="item.path">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        tabClick(tab) {
            let path = this.activeIndex;
            this.$router.push(path);
        },
        tabRemove(targetName) {
            // 首页不可删除
            if (targetName == "/" || targetName == "/index") {
                return;
            }
            this.$store.commit("del_tabs", targetName);
            if (this.activeIndex === targetName) {
                // 设置当前激活的路由
                if (this.options && this.options.length >= 1) {
                    this.$store.commit(
                        "set_act_tab",
                        this.options[this.options.length - 1].path
                    );
                    this.$router.push({ path: this.activeIndex });
                } else {
                    this.$router.push({ path: "/" });
                }
            }
        }
    },
    mounted() {
        let route = this.$route;
        if (route.path != "/" && route.path != "/index") {
            this.$store.commit("add_tabs", route);
        } else {
        }
    },
    computed: {
        cachedViews() {
            return this.$store.state.cachedViews;
        },
        options() {
            return this.$store.state.options;
        },
        activeIndex: {
            get() {
                return this.$store.state.activeIndex;
            },
            set(val) {
                this.$store.commit("set_act_tab", val);
            }
        }
    },
    watch: {
        $route(to) {
            // console.log(this.cachedViews);
            // console.log(to)
            this.$store.commit("add_tabs", to);
        }
    }
};
</script>