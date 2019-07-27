import index from '@import/index';
//计划
import fit from '@import/plan/fit';
import study from '@import/plan/study';
//目标
import targetYear from '@import/target/targetYear';
//日记
import diary from '@import/diary/diary';
//游戏
import snake from '@import/game/snake';

export const routes = [
  {
    path: '/', name: 'index', title: 'index页面', component: index,
  },
  {
    path: '/plan', name: 'plan', index: 1, title: '计划', component: index,
    children: [
      {path: 'fit', name: 'fit', title: '健身计划', component: fit,},
      {path: 'study', name: 'study', title: '学习计划', component: study,},
    ]
  },
  {
    path: '/target', name: 'target', index: 1, title: '目标', component: index,
    children: [
      {path: 'targetYear', name: 'targetYear', title: '今年目标', component: targetYear,},
    ]
  },
  {
    path: '/diary', name: 'dialy', index: 2, title: '日记', component: index,
    children: [
      {path: 'diary', name: 'diary', title: '今日随笔', component: diary,},
    ]
  },
  {
    path: '/game', name: 'game', index: 3, title: '游戏', component: index,
    children: [
      {path: 'snake', name: 'snake', title: '贪吃蛇', component: snake,},
    ]
  }
];
