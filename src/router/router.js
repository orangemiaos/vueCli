import index from '@import/index';
import fit from '@import/plan/fit';
import snake from '@import/game/snake';
// import daily from '@import/plan/daily';


export const routes = [
  {
    path: '/', name: 'index', title: 'index页面', component: index,
  },
  {
    path: 'plan', name: 'plan', index: 1, title: '计划', component: index,
    children: [
      {
        path: 'fit', name: 'fit', title: '健身计划', component: fit,
      },
      // {
      //   path: 'snake', name: 'snake', title: '贪吃蛇', component: snake,
      // },
      // {
      //   path: 'daily', name: 'daily', title: '计划表', component: daily,
      // },
    ]
  },
];
