const app = getApp()

Page({
  data: {
    width: 0
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    this.getSlideWidth()
  },
  // 获取滑块宽度
  getSlideWidth: function() {
    var self = this;
    var nodeSelect = wx.createSelectorQuery();
    nodeSelect.selectAll('.slide-box').boundingClientRect(function (rects) {
        self.setData({
          width: rects[0].width
        })
    }).exec();
  }
})
