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
    clickMe: function () {},
  },
  created: function () {
    console.log("再次测试下gitee");
  },
};
</script>

<style scoped lang='less'>
</style>
