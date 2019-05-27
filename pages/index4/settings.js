// pages/index4/settings.js

var app = getApp();
const unit = 5;

// 请用 picker[index], picker[indexOld] 来获取用户设置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 3,
    indexOld: 2,
    picker: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
  },

  PickerChange(e) {
    var idx = parseInt(e.detail.value);
    this.setData({
      index: idx
    });
    app.globalData.me.setting.wordsTodo = (1 + idx) * 5;
  },

  PickerChangeOld(e) {
    // console.log(e);
    var idx = parseInt(e.detail.value)
    this.setData({
      indexOld: idx
    });
    app.globalData.me.setting.wordsOld = (1 + idx) * 5;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('Open');
    // console.log(app.globalData.me.setting.wordsTodo);
    // console.log(app.globalData.me.setting.wordsOld);
    this.setData({
      index: app.globalData.me.setting.wordsTodo / unit - 1,
      indexOld: app.globalData.me.setting.wordsOld / unit - 1,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('Close');
    // console.log(app.globalData.me.setting.wordsTodo);
    // console.log(app.globalData.me.setting.wordsOld);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})