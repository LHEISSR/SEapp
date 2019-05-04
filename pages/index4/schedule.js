// pages/index4/schedule.js

// For the charts
var wxCharts = require('./wxcharts.js');
var util4 = require('./util4.js')
var app = getApp();
var lineChart = null;

const numdays = 7;

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
      2,
      5, 
      6,
      7,
    ],
    canvasWidth: 320,
    canvasHeight: 200,
  },

  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + '    ' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 10; i++) {
      categories.push('2016-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },

  /**
  updateData: function () {
    var simulationData = this.createSimulationData();
    var series = [{
      name: '成交量1',
      data: simulationData.data,
      format: function (val, name) {
        return val.toFixed(2) + '万';
      }
    }];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },
  */

  getData: function() {
    var categories = util4.last_days(numdays);
    // 怎样从后端获取数据是一个很大的问题
    var data = [4, 5, 7, 1, 2, 5, 7];
    return {
      categories: categories,
      data: data
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // Control the canvas size (Coz canvas can only be manipulated correctly by `px`)
    let cvsWidth = 0;
    let cvsHeight = 0;
    try {
      let res = wx.getSystemInfoSync();
      cvsWidth = res.windowWidth;
      cvsHeight = res.screenHeight / 2;
    } catch (e) {
      // do something when get system info failed
      cvsWidth = 320;
      cvsHeight = 200;
    } finally {
      // 
    }

    this.setData({
      canvasWidth: cvsWidth,
      canvasHeight: cvsHeight,
    })

    var data = this.getData();
    lineChart =  new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',

      categories: data.categories,
      series: [{
        name: ' ',
        // 这里传数据的方式无解啊
        data: data.data,
        format: function (val) {
          return val.toFixed(2);
        }
      },
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '学习量',
        format: function (val) {
          return val.toFixed(0);
        },
        min: 0
      },
      width: cvsWidth,
      height: cvsHeight,
      extra: {
        lineStyle: 'curve'
      },
      // Set the background color
      background: '#e8e8e8',
    });


    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
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

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  }
})