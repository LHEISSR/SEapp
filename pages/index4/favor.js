// pages/index4/favor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNav: ['一句', '背词', '字典'],
    TabCur: 0,
    yiju: [
      {
        id: 1,
        name: "陈澄钧列传",
      }
    ],
    learn: [
      {
        id: 1,
        name: "逻辑层",
        from_which: "陈澄钧列传",
        link: "跳转到对应的页面",
      }
    ],
    vocab: [
      {
      id: 1,
      name: "逻辑",
      link: "跳转到原始页面"
      }
    ],
    
    yijuList:[
      {
        push_id: 2019420,
        date: "13",
        weekday: "周六",
        lunar: "三月初六",
        title: "陈澄钧列传",
        dynasty: "宋",
        author: "张云哲",
        article: "一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。",
        content: "张云哲，宋代著名文学家、哲学家、历史学家",
        like_count: 187,
        like: false,
      },
    ]
    
  },

  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
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

})