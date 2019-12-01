Page({
  data: {
   
  },
  // 跳转服务单详情
  click_repairDetail: function () {
    wx.navigateTo({
      url: '../repairDetail/repairDetail',
    })
  },
  // 跳转服务评价
  click_evaluate: function () {
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
  },
  onLoad: function(options) {

  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  }
})
