Page({
  data: {
    current: 0,
    name: "张三",
    tell: "18900000006",
    list: [
      "任何时间",
      "19:00-18:00",
      "从不接受"
    ],
    type: "white"
  },
  onLoad: function (options) {

  },
  change(e) {
    this.setData({
      current: e.detail.index
    })
  }
})