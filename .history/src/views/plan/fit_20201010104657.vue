<template>
  <div class="box">
    <input type="button" @click="clickMe" value="clickMe" />
    {{ $store.state.count }}
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
  methods: {
    clickMe: function () {
      // this.$store.state.count++;
     
      //  this.$store.commit('increment')
      let obj = { key: 3, name: "c" };
      this.$store.state.count.push(obj);
       console.log(this.$store.state.count);
    },
  },
  created: function () {
    console.log("store", this.$store.state.count);
  },
};
</script>

<style scoped lang='less'>
</style>
