Component({
  data: {
    selected: 0,
    "color": "#2F3030",
    "selectedColor": "#1580AD",
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/static/images/tabbar/icon_nav_home.png",
        "selectedIconPath": "/static/images/tabbar/icon_nav_home_pre.png"
      }, {
        "pagePath": "",
        "text": "扫码",
        "iconPath": "/static/images/tabbar/icon_nav_scan.png",
        "selectedIconPath": "/static/images/tabbar/icon_nav_scan.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "个人中心",
        "iconPath": "/static/images/tabbar/icon_nav_user.png",
        "selectedIconPath": "/static/images/tabbar/icon_nav_user_pre.png"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      if (data.index == 1) {
        wx.scanCode({
          success(res) {
            console.log(res)
            wx.navigateTo({
              url: '/pages/feedback/feedback'
            })
          }
        })

      } else {
        const url = data.path
        wx.switchTab({
          url
        })
      }
    }
  }
})