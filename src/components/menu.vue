<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router :collapse="collapsed">
        <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
            <template v-if="!hasChildrent(item.children)">
                <el-menu-item :index="item.path">
                    <i :class="item.class?item.class:'el-icon-menu'"></i>
                    <span slot="title">{{item.meta?(item.meta.title?item.meta.title:item.name):item.name}}</span>
                    <!-- <i class="fa" :class="item.class"></i> -->
                </el-menu-item>
            </template>
            <template v-else>
                <el-submenu :index="item.path">
                    <template slot="title">
                        <i :class="item.class?item.class:'el-icon-menu'"></i>
                        <span slot="title">{{item.meta?(item.meta.title?item.meta.title:item.name):item.name}}</span>
                    </template>
                    <template v-for="(item1,index) in item.children" v-if="!item1.hidden">
                        <template v-if="!hasChildrent(item1.children)">
                            <el-menu-item :index="item1.path">
                                <i :class="item1.class?item1.class:'el-icon-menu'"></i>
                                <span slot="title">{{item1.meta?(item1.meta.title?item1.meta.title:item1.name):item1.name}}</span>
                                <!-- <i class="fa" :class="item.class"></i> -->
                            </el-menu-item>
                        </template>
                        <template v-else>
                            <el-submenu :index="item1.path">
                                <template slot="title">
                                    <i :class="item1.class?item1.class:'el-icon-menu'"></i>
                                    <span slot="title">{{item1.meta?(item1.meta.title?item1.meta.title:item1.name):item1.name}}</span>
                                </template>
                                <!-- <span slot="title">{{item.name}}</span> -->
                                <el-menu-item v-for="sonItem in item1.children" :key="sonItem.name" :index="sonItem.path">
                                    <i class="fa" :class="sonItem.class">{{sonItem.meta?(sonItem.meta.title?sonItem.meta.title:sonItem.name):sonItem.name}}</i>
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </template>
                </el-submenu>
            </template>
        </template>
    </el-menu>
</template>
<script>
export default {
    methods:{
        /**检查是否存在有效子菜单*/
        hasChildrent(children){
            if(children == null || children.length <= 0) return false;
            for(let ch of children){
                if(!ch.hidden){
                    return true;
                }
            }
            return false;
        }
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