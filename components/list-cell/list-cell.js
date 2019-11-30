Component({
  properties: {
    //是否有箭头
    arrow: {
      type: Boolean,
      value: false
    },
    //箭头颜色 传值： white，gray,
    arrowColor: {
      type: String,
      value: ""
    },
    //是否有点击效果
    hover: {
      type: Boolean,
      value: true
    },
    //隐藏线条
    unlined: {
      type: Boolean,
      value: false
    },
    //left 30rpx
    lineLeft: {
      type: Boolean,
      value: true
    },
    //right 30rpx
    lineRight: {
      type: Boolean,
      value: false
    },
    //背景颜色
    bgColor: {
      type: String,
      value: "#fff"
    },
    //字体大小
    size: {
      type: Number,
      value: 28
    },
    //字体颜色
    color: {
      type: String,
      value: "#333"
    },
    //是否加圆角
    radius: {
      type: Boolean,
      value: false
    },
    arrowRight: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})