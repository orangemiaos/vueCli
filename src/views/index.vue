<template>
  <div>
    <Menu mode="horizontal" theme="primary" :active-name="activeName" @on-select="topMenuSelect" accordion>
      <MenuItem :key="item.index" :name="item.index" v-for="item in topRouterList"
                :class="{active:activeName==item.index}">
        {{item.menuTitle}}
      </MenuItem>
    </Menu>
    <div class="box" v-drag style="position: relative;">
      <iframe src="https://sugar.baidubce.com/report/r_1013e-1kzjhwj5-1jq37k/d1c49df8eadf0b96d295408309e5b822"
              style="border:none;" width="1000" id="sugar-report" ></iframe>
      <!--<div class="left">-->
        <!--<Menu theme="light" @on-select="sideMenuSelect">-->
          <!--<Submenu :name="item.title" :key="item.path" v-for="item in sideRouterList">-->
            <!--<template slot="title">-->
              <!--<Icon type="ios-paper"/>-->
              <!--{{item.title}}-->
            <!--</template>-->
            <!--<MenuItem :name="it.name" :key="it.name" v-for="it in item.children">{{it.title}}</MenuItem>-->
          <!--</Submenu>-->
        <!--</Menu>-->
      <!--</div>-->
      <!--<div class="right">-->
        <!--<router-view></router-view>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import {router} from "@/router/index";

  export default {
    name: "index",
    data() {
      return {
        activeName: "index",
        topRouterList: [],
        sideRouterList: [],
      }
    },
    methods: {
      topMenuSelect(val) {
        this.activeName = val;
        // let route = this.topRouterList.find(e => {
        //   return e.name == val;
        // });
        // if (route) {
        //   this.sideRouterList = route.children;
        // } else {
        //   this.sideRouterList = [];
        // }
        // //没有实际作用，但是切换top的标签时，路由需要改变
        // this.$router.push({name: val});
      },
      sideMenuSelect(val) {
        this.$router.push({name: val});
      }
    },
    created() {
      this.topRouterList = this.$store.state;
      // this.topRouterList = router.options.routes[0].children;

      window.addEventListener('message', function(e){
        var height = e.data.height;
        document.getElementById('sugar-report').style.height = height + 'px';
      })
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
