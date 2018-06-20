<template>
<div>
    <div>404</div>
    <div>{{ test }}</div>
</div>
</template>
<script>


export default {
    name: "404Page",
    data() {
        return {
            test: "错误"
        };
    },
    components: {
        
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
