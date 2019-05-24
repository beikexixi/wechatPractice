//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // logs: []
    
  },
  onLoad: function () {
    
  },
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  }
})
