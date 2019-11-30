const form = require("../../components/utils/formValidation.js")
Page({
  data: {
    deviceName: 'Dentrix 50',
    deviceNum: '112100112',
    area: ""
  },
  onLoad: function(options) {
    this.toast = this.selectComponent("#dl-tips-ctx")
  },
  bindRegionChange: function(e) {
    this.setData({
      area: e.detail.value.join("")
    })
  },
  formCheck: function(e) {
    let rules = [{
      name: "deviceName",
      rule: ["required"],
      msg: ["产品名称不能为空"]
    }, {
      name: "deviceNum",
      rule: ["required"],
      msg: ["序列号不能为空"]
    }, {
      name: "customName",
      rule: ["required"],
      msg: ["请输入客户名称"]
    }, {
      name: "contacts",
      rule: ["required"],
      msg: ["请输入联系人"]
    }, {
      name: "phone",
      rule: ["required", "isMobile"],
      msg: ["请输入手机号", "请输入正确的手机号"]
    }, {
      name: "area",
      rule: ["required"],
      msg: ["请进行地址选择"]
    }, {
      name: "addressDetail",
      rule: ["required"],
      msg: ["请输入详细地址"]
    }, {
      name: "errDescribe",
      rule: ["required"],
      msg: ["请详细描述故障"]
    }]
    let formData = e.detail.value
    formData.deviceName = this.data.deviceName
    formData.deviceNumthis = this.data.deviceNum
    formData.area = formData.area.join("")

    let checkRes = form.validation(formData, rules);
    if (!checkRes) {
      this.toast.show({
        title: "校验成功",
        imgUrl: "/static/images/common/icon_prompt_success.png",
        icon: true
      })
      console.log(formData)
    } else {
      wx.showToast({
        title: checkRes,
        icon: 'none'
      })
    }
  },
  checkFull: function() {

  }
})