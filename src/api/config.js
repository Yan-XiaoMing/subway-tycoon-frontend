export const msgLabel = [
  {
    iconSrc: 'subway-icon',
    count: '18'
  },
  {
    iconSrc: 'gold',
    count: '112.5w'
  }
];

export const leftIconsBtn = [
  {
    imgSrc: '\ue70a',
    imgTitle: '地图'
  },
  {
    imgSrc: '\ue63f',
    imgTitle: '分享'
  },
  {
    imgSrc: '\ue61e',
    imgTitle: '好友'
  }
];

export const rightIconsBtn = [
  {
    svgHref: '#icon019',
    imgTitle: '捐赠屋'
  },
  {
    svgHref: '#iconpaihangbang',
    imgTitle: '排行榜'
  },
  {
    imgSrc: '\ue656',
    imgTitle: '任务屋'
  }, {
    svgHref: '#iconqiapai',
    imgTitle: '卡牌屋'
  }
];

export const newCardList = {
  station: '凤起路',
  background: 'card_bg01',
  main: [{
    title: '附近景点',
    children: [{list: '西湖风景区'}]
  },
    {
      title: '附近店铺',
      children: [{list: '新白鹿餐厅'}, {list: 'iPhone专卖店'}]
    }
  ]
};

export const cityCardList = [
  {
    city: '杭州',
    background: 'cityCard_01'
  },
  {
    city: '南京',
    background: 'cityCard_02'
  },
  {
    city: '上海',
    background: 'cityCard_03'
  }
];

export const rankListMock = [
    {
      type:'friend',
      title:"好友",
      list:[
        {
          num:1,
          rankIcon:'#iconguanjun',
          icon:'#iconicon-test4',
          name: "王瑶桦",
          collect:80
        },
        {
          num:2,
          rankIcon:'#iconyajun',
          icon:'#iconicon-test1',
          name: "徐大佬",
          collect:78
        },
        {
          num:3,
          rankIcon:'#iconjijun',
          icon:'#iconicon-test3',
          name: "范老板",
          collect:73
        },
        {
          num:4,
          icon:'#iconicon-test5',
          name: "森蓝",
          collect:68
        },
        {
          num:5,
          icon:'#iconicon-test6',
          name: "小铭",
          collect:65
        },
        {
          num:6,
          icon:'#iconicon-test2',
          name: "可口不可乐",
          collect:60
        },
        {
          num:7,
          icon:'#iconicon-test8',
          name: "奥利gay",
          collect:50
        },
        {
          num:8,
          icon:'#iconicon-test5',
          name: "祖安人",
          collect:42
        },
        {
          num:9,
          icon:'#iconicon-test6',
          name: "慢清尘",
          collect:35
        }
      ]
    },
  {
    type:'city',
    title:"城市",
    list:[
      {
        num:1,
        rankIcon:'#iconguanjun',
        icon:'#iconhangzhouditie',
        name: "杭州",
        collect:8848
      },
      {
        num:2,
        rankIcon:'#iconyajun',
        icon:'#iconnanjingditie',
        name: "南京",
        collect:8667
      },
      {
        num:3,
        rankIcon:'#iconjijun',
        icon:'#iconshanghaiditie',
        name: "上海",
        collect:8452
      },
      {
        num:4,
        icon:'#iconBeijing_Subway_icon',
        name: "北京",
        collect:8005
      },
      {
        num:5,
        icon:'#iconguangzhouditie',
        name: "广州",
        collect:7950
      },
      {
        num:6,
        icon:'#iconShenyang_Metro_Corporation_Logo',
        name: "沈阳",
        collect:7840
      },
      {
        num:7,
        icon:'#iconWuhan_Metro_Logo',
        name: "武汉",
        collect:7560
      },
      {
        num:8,
        icon:'#iconnanchangditie',
        name: "南昌",
        collect:7120
      },
      {
        num: 9,
        icon: '#iconQingdao_Metro_Logo_without_text',
        name: '青岛',
        collect: 6800
      }
    ]
  }
];

export const taskCardList = [
  {
    icon: 'subway',
    title: '坐地铁得金币',
    money: 300,
    color: '#33C1D0',
    state: 0 //0未完成,1已完成,2敬请期待
  },
  {
    icon: 'game',
    title: '玩游戏得金币',
    money: 300,
    color: '#8DC540',
    state: 2 //0未完成,1已完成,2敬请期待
  },
  {
    icon: 'hand-answer',
    title: '答题得金币',
    money: 300,
    color: '#FDD817',
    state: 0 //0未完成,1已完成,2敬请期待
  },
  {
    icon: 'secret',
    title: '特殊任务',
    money: 300,
    color: '#F26347',
    state: 0 //0未完成,1已完成,2敬请期待
  }
];
