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
     console.log(333);
  },
};
</script>

<style scoped lang='less'>
</style>
