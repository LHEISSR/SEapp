// pages/index4/schedule.js

// For the charts
var wxCharts = require('./wxcharts.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    section: [
      {
        name: "七年级上册",
        progress: 70,
      },
      {
        name: "七年级下册",
        progress: 30,
      },
      {
        name: "八年级上册",
        progress: 50
      }
    ],
    // 这里记录了每天学习的词汇数量
    numbers: [
      5, 
      4, 
      6,
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // plot_chart(numbers);
    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      },
      ],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: 320,
      height: 200,
      extra: {
        lineStyle: 'curve'
      }
    });
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

  }
})