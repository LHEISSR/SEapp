// pages/index4/favor.js

var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;

var startX, startY;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNav: ['一句', '背词', '字典'],
    TabCur: 0,
    touch: {
      x: undefined,
      y: undefined,
    },
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
    var that = this.data;
    var res = wx.getSystemInfoSync();
    this.setData({
      'screenHeight': res.screenHeight,
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
    flag_hd = true;    //重新进入页面之后，可以再次执行滑动切换页面代码
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  // 触摸开始事件
  // touchStart: function (e) {
  //   touchDot = e.touches[0].pageX; // 获取触摸时的原点
  //   // 使用js计时器记录时间    
  //   interval = setInterval(function () {
  //     time++;
  //   }, 100);
  // },

  touchStart(e) {
    // console.log(e)
    this.setData({
      "touch.x": e.changedTouches[0].clientX,
      "touch.y": e.changedTouches[0].clientY
    });
    // startX = e.changedTouches[0].clientX;
    // startY = e.changedTouches[0].clientY;
  },

  // 触摸结束事件
  touchEnd(e) {
    const pageStartIndex = 0;
    const pageEndIndex = 2;

    console.log(this.TabCur);
    startX = this.data.touch.x;
    startY = this.data.touch.y;
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;

    if (Math.abs(endY - startY) < 50) {
      if (endX - startX > 50) {      //左滑
        console.log('left');
        if (this.data.TabCur > pageStartIndex) {
          // this.data.TabCur = this.data.TabCur - 1;
          this.setData({
            'TabCur': this.data.TabCur - 1,
          });
        }
      } else if (endX - startX < -50) {   //右滑
        console.log('right');
        if (this.data.TabCur < pageEndIndex) {
          this.setData({
            'TabCur': this.data.TabCur + 1,
          })
        }
      }
    }
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