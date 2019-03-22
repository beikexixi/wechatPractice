import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    },

    imageURL1: '/img/213291_223323451124_2.jpg',
    imageURL2: '/img/11.png',

    mainActiveIndex: null,
    activeId: null,
    items: [{
      // 导航名称
      text: '热卖',
      // 该导航下所有的可选项
      children: [
        {
          // 名称
          text: '平价菠菜',
          // id，作为匹配选中状态的标识
          id: 1,
        },
        {
          text: '泰国龙眼',
          id: 2
        }
      ]
    }, {
      // 导航名称
      text: '会员特价',
      // 该导航下所有的可选项
      children: [
        {
          // 名称
          text: '海南西州蜜瓜',
          // id，作为匹配选中状态的标识
          id: 1,
        },
        {
          text: '马来西亚猫山王榴莲',
          id: 2
        }
      ]
    }],
    itemsCard: [{
      tag: '限时秒杀',
      price: '2.00',
      originPrice: '3.00',
      desc: '金针菇',
      title: '袋装金针菇120-150g',
      thumb: '/img/11.png'
    }, {
      tag: '限时秒杀',
      price: '2.00',
      originPrice: '3.00',
      desc: '为你注入大力水手同款能量',
      title: '平价菠菜400g',
      thumb: '/img/11.png'
    }]
  },

  onChange(ev) {
    if (ev.detail === 0) {
      this.setData({
        itemsCard: [{
          tag: '限时秒杀',
          price: '2.00',
          originPrice: '3.00',
          desc: '金针菇',
          title: '袋装金针菇120-150g',
          thumb: '/img/11.png'
        }, {
          tag: '限时秒杀',
          price: '2.00',
          originPrice: '3.00',
          desc: '为你注入大力水手同款能量',
          title: '平价菠菜400g',
          thumb: '/img/11.png'
        }]
      })
    } else if (ev.detail === 1) {
      this.setData({
        itemsCard: [{
          tag: '爆款直降',
          price: '6.00',
          originPrice: '13.00',
          desc: '金针菇',
          title: '袋装金针菇120-150g',
          thumb: '/img/11.png'
        }, {
          tag: '爆款直降',
          price: '12.00',
          originPrice: '13.00',
          desc: '为你注入大力水手同款能量',
          title: '平价菠菜400g',
          thumb: '/img/11.png'
        }]
      })
    }
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    this.setData({
      activeId: detail.id
    });
  },
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },

  changeText() {
    // this.data.text = 'changed data' // 不要直接修改 this.data
    // 应该使用 setData
    this.setData({
      text: 'changed data'
    })
  },
  changeNum() {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray() {
    // 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject() {
    this.setData({
      'object.text': 'changed data'
    })
  },
  addNewField() {
    this.setData({
      'newField.text': 'new data'
    })
  }
})