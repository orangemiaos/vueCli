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
        <Menu theme="light" ref="sideMenuSelect" :active-name="activeSideName" @on-select="sideMenuSelect"
              @on-open-change="submenuSelect"
              :open-names="openName" accordion>
          <Submenu :name="item.name" :key="index" v-for="(item,index) in sideRouterList">
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
        activeName: '',
        activeSideName: '',
        openName: [],
        topRouterList: [],
        sideRouterList: [],
      }
    },
    methods: {
      topMenuSelect(val) {
        this.activeName = val;
        sessionStorage.setItem('activeName', this.activeName);
        let route = routes.filter(e => {
          return e.index == val;
        });
        if (route) {
          this.sideRouterList = route;
        }
        this.openName = [route[0].name];
        this.activeSideName = route[0].children[0].name;
        sessionStorage.setItem('openName', this.openName);
        sessionStorage.setItem('activeSideName', this.activeSideName);
        //点击顶部菜单时直接跳转到侧边栏的首个框
        this.$router.push({name: route[0].children[0].name});
      },
      sideMenuSelect(val) {
        sessionStorage.setItem('activeSideName', val);
        this.$router.push({name: val});
      },
      submenuSelect(val) {
        if (val.length > 0) {
          sessionStorage.setItem('openName', val[0]);
        }
      }
    },
    created() {
      this.topRouterList = this.$store.state;

      if (sessionStorage.getItem('activeName')) {
        this.activeName = sessionStorage.getItem('activeName');
        let route = routes.filter(e => {
          return e.index == this.activeName;
        });
        if (route) {
          this.sideRouterList = route;
        }
        this.openName = [sessionStorage.getItem('openName')];
        this.activeSideName = sessionStorage.getItem('activeSideName');
        this.$router.push({name: this.activeSideName});
      } else {
        this.activeName = this.$store.state[0].index;
        this.topMenuSelect(this.activeName);
      }
    },
    watch: {
      openName() {
        this.$nextTick(() => {
          this.$refs.sideMenuSelect.updateOpened();
          this.$refs.sideMenuSelect.updateActiveName();
        })
      }
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
