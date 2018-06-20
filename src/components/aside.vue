<template>
  <div>
    <ul>
      <li v-for="(item, index) in dataList" @click="liClickCalk(item.name)" :key="item.name">
        {{index +"."+item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Aside",
    props: {
      //共父组件传值
      dataList: null,
      liClickCalk: null
    },
    data() {
      return {};
    },
    components: {},
    methods: {}
  };
</script>