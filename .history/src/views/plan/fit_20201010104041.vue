<template>
  <div class="box">
    <input type="button" @click="clickMe" value="clickMe">
    {{$store.state.count}}
  </div>
</template>

<script>
export default {
  name: "fit",
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
  methods:{
    clickMe:function(){
      this.$store.state.count++;
      console.log(this.$store.state.count);
       this.$store.commit('increment')
    }
  },
  created:function(){
    console.log('store',this.$store.state.count);
  }
};
</script>

<style scoped lang='less'>
</style>
