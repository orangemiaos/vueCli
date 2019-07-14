import index from '@import/index';
import common from '@import/common';
import name1 from '@importCom/name1';
import name2 from '@importCom/name2';
import name3 from '@importCom/name3';
import name11 from '@importCom/name11';
import name12 from '@importCom/name12';
import name13 from '@importCom/name13';
import name21 from '@importCom/name21';


export const routes = [
  {
    path: '/', name: 'index', title: 'index页面', component: index,
    children: [
      {
        path: 'name1', name: 'name1', title: '顶层菜单1', component: common,
        children: [
          {
            path: 'name1Title1', title: '顶层1侧边菜单1汇总', component: common,
            children: [
              {path: 'name11', name: 'name11', title: '侧边菜单11', component: name11},
              {path: 'name12', name: 'name12', title: '侧边菜单12', component: name12},
            ]
          },
          {
            path: 'name1Title2', title: '顶层1侧边菜单2汇总', component: common,
            children: [
              {path: 'name13', name: 'name13', title: '侧边菜单13', component: name13},
            ]
          },
        ]
      },
      {
        path: 'name2', name: 'name2', title: '顶层菜单2', component: common,
        children: [
          {
            path: 'name2Title1', title: '顶层2侧边菜单1汇总', component: common,
            children: [
              {path: 'name21', name: 'name21', title: '侧边菜单21', component: name21},
            ]
          },
        ]
      },
      {path: 'name3', name: 'name3', title: '顶层菜单3', component: common},
    ]
  },
];
