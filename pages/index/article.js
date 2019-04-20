// pages/index/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleInfo: {},
    fontFamily: 'chi-font',
    loaded: false,
    cardCur: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调取数据
    var cardCur = options.cardCur;
    var that = this;
    wx.getStorage({
      key: 'swiperList',
      success(res) {
        var articleInfo = res.data[cardCur]
        that.setData({
          articleInfo: articleInfo,
        }) 
      }
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
    
  },

  /*
  * 自定义函数
  */
  clickFavor(e){
    var articleInfo = this.data.articleInfo;
    var cardCur = this.data.cardCur;
    articleInfo.like = !articleInfo.like;
    this.setData({
      articleInfo:articleInfo,
    })
    //更新本地缓存
    var swiperList = [];
    wx.getStorage({
      key: 'swiperList',
      success(res) {
        swiperList = res.data;
      }
    })
    console.log(swiperList);
    swiperList[cardCur] = articleInfo;
    wx.setStorage({
      key: 'swiperList',
      data: swiperList,
    })
  },
})