// pages/words_index/words_index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    precent: 50
  },


    
  add() {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  clickStudy() {
    wx.navigateTo({
      url: './words_study/words_study',
    })
  },
})