<template>
  <div class="box">
    
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
  created:function(){
    console.log('store',this.$store);
  }
};
</script>

<style scoped lang='less'>
</style>
