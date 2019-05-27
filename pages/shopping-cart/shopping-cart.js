Page({
  data: {
    imageURL2: '/assets/images/11.png',
    itemsCard: [{
      tag: '限时秒杀',
      price: '2.00',
      originPrice: '3.00',
      desc: '金针菇',
      title: '袋装金针菇120-150g',
      thumb: '/assets/images/11.png', // 根路径
      goodsNum: 0
    }, {
      tag: '限时秒杀',
      price: '2.00',
      originPrice: '3.00',
      desc: '为你注入大力水手同款能量',
      title: '平价菠菜400g',
      thumb: '/assets/images/11.png',
      goodsNum: 2
    }]
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../goods-detail/goods-detail'
    })
  },
})