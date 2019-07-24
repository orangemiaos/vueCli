import index from '@import/index';
import fit from '@import/plan/fit';
import snake from '@import/game/snake';
import diary from '@import/diary/diary';


export const routes = [
  {
    path: '/', name: 'index', title: 'index页面', component: index,
  },
  {
    path: 'plan', name: 'plan', index: 1, title: '计划', component: index,
    children: [
      {
        path: '/fit', name: 'fit', title: '健身计划', component: fit,
      },
    ]
  },
  {
    path: 'diary', name: 'dialy', index: 2, title: '日记', component: index,
    children: [
      {
        path: '/diary', name: 'diary', title: '今日随笔', component: diary,
      },
    ]
  },
  {
    path: 'game', name: 'game', index: 3, title: '游戏', component: index,
    children: [
      {
        path: '/snake', name: 'snake', title: '贪吃蛇', component: snake,
      },
    ]
  }
];
