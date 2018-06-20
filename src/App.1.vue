<!--App.vue是项目入口文件。-->
<template>
	<div id="app">
		<el-container>
			<!-- header-->
			<el-header>
				{{
					headerMessage
				}}
			</el-header>
			<el-main>
				<Aside  :liClickCalk="liClickCalk" :dataList="dataList"></Aside>
				<div class="nav-box">
					<p class="nav-list">
						<router-link class="nav-item" to="/">首页</router-link>
						<router-link class="nav-item" to="/about">关于</router-link>
					</p>
				</div>
				<div>
					<router-view></router-view>
				</div>
				
			</el-main>
		</el-container>
	</div>
</template>

<script>
import HeaderTab from "./components/header.vue";
import Aside from "./components/aside.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dataList: [],
      liClickCalk: () => {
        console.log("init");
      },
      headerMessage: ""
    };
  },
  components: {
    HeaderTab,
    Aside
  },
  methods: {
    log: function(obj) {
      console.log(obj);
      console.log(this.$refs);
    }
  },
  created: () => {
    console.log("created");
    // this.log(23333);
  },
  computed: {
    // 计算属性的 getter  setter
  },
  watch: {
    //监听
  },
  mounted() {
    this.log("mounted");
    this.dataList = [
      {
        name: "链接1",
        path: "/"
      },
      {
        name: "链接2",
        path: "/"
      }
    ];
    this.liClickCalk = o => {
      console.log(o);
      this.headerMessage = o;
    };
  }
};
</script>

<style lang="scss">
/*这里sass编译正常*/

$redColor: #f00;
h2 {
  color: $redColor;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  text-align: left;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#app,
#app .el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>