<template>
  <div>
    <Menu mode="horizontal" theme="primary" :active-name="activeName" @on-select="topMenuSelect" accordion>
      <MenuItem :key="item.index" :name="item.index" v-for="item in topRouterList"
                :class="{active:activeName==item.index}">
        {{item.menuTitle}}
      </MenuItem>
    </Menu>
    <div class="box" style="position: relative;">
      <div class="left">
        <Menu theme="light" @on-select="sideMenuSelect">
          <Submenu :name="item.name" :key="item.index" v-for="item in sideRouterList">
            <template slot="title">
              <Icon type="ios-paper"/>
              {{item.title}}
            </template>
            <MenuItem :name="it.name" :key="it.name" v-for="it in item.children">{{it.title}}</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {routes} from "@/router/router.js";

  export default {
    name: "index",
    data() {
      return {
        activeName: "index",
        topRouterList: [],
        router: [],
        sideRouterList: [],
      }
    },
    methods: {
      topMenuSelect(val) {
        this.activeName = val;
        let route = routes.filter(e => {
          return e.index == val;
        });
        if (route) {
          this.sideRouterList = route;
        } else {
          this.sideRouterList = [];
        }
        // //没有实际作用，但是切换top的标签时，路由需要改变
        this.$router.push({name: route[0].name});
      },
      sideMenuSelect(val) {
        this.$router.push({name: val});
      }
    },
    created() {
      this.topRouterList = this.$store.state;
    }
  }


</script>

<style scoped lang="less">
  .active {
    color: #fff;
    background-color: #32a0f2;
  }

  .box {
    display: flex;

    .left {
      flex-basis: 240px;
      margin-right: 20px;
    }

    .right {
      flex: 1;
    }
  }
</style>
