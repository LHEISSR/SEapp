// pages/words_index/words_index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    precent: 0,
    winWidth: 0,
    winHeigth: 0,
    word_learning: 0,
    word_learned: 0,
    word_unlearn: 0,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   
    /*
      请求背词状态也信息
    */

    wx.request({
      url: 'http://zhiduoshao.xyz:8888/api/jindu',//请求地址
      data: {//发送给后台的数据
        userID: app.globalData.userID
      },
      method: "POST",//get为默认方法/POST
      success: function (res) {
        console.log("res")
        console.log(res)

        that.setData({
          word_learning: res.data.data.word_learning,
          word_learned: res.data.data.word_learned,
          word_unlearn: res.data.data.word_unlearn
        })
      },
      complete: function () {
        let data = that.data;
        let precent = data.word_learned / (data.word_learning + data.word_learned + data.word_unlearn) * 100
        that.setData({
          precent: precent
        })
      }
    })

  
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
      url: './words_module/words_study',
    })
  },
})