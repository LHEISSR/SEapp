// pages/words_index/words_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    precent: 23,
    winWidth: 0,
    winHeigth: 0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeigth: res.windowHeight
        })
      }
    });
  },

  clickStudy: function() {
    wx.navigateTo({
      url: './words_study/words_study',
    })
  },
})