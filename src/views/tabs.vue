<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="card" editable @tab-click="tabClick" @edit="handleTabsEdit">
            <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
                <!-- {{item.content}} -->
            </el-tab-pane>
        </el-tabs>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import about from '../components/about'
export default {
    data() {
        return {
            editableTabsValue: "2",
            editableTabs: [
                {
                    title: "Tab 1",
                    name: "1",
                    content: ""
                },
                {
                    title: "Tab 2",
                    name: "2",
                    content: "Tab 2 content"
                }
            ],
            tabIndex: 2
        };
    },components:{about},
    methods: {
        handleTabsEdit(targetName, action) {
            if (action === "add") {
                let newTabName = ++this.tabIndex + "";
                this.editableTabs.push({
                    title: "New Tab",
                    name: newTabName,
                    // content: "New Tab content",
                    component: ""
                });
                this.editableTabsValue = newTabName;
                //this.$router.push({ path: "/tabs/aboutPage" });
            }
            if (action === "remove") {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
        },
        tabClick() {
            let path = this.editableTabsValue;
           // this.$router.push({ path });
        }
    }
};
</script>