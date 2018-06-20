<template>
  <about :parentValue="test"></about>
</template>
<script>
import about from "../components/about";

export default {
    name: "aboutPage",
    data() {
        return {
            test: "来着父组件的值"
        };
    },
    components: {
        about
    },
    created: function() {
        console.log(this); //当前组件的实例
        this.log(this);
    },
    methods: {
        log: function(o) {
            console.log(o);
        },
        log:async function(){
          
        }
    }
};
</script>
