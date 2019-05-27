//app.js
const Promise = require('bluebird.core.min.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    
    // 获取用户信息
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              that.globalData.userInfo = res.userInfo;
            }
          })
        }
      }
    })
  },
  login:function(){
    let that = this;
    // 登录
    return new Promise(
      function(resolve,reject){
        wx.login({
        success(res) {
          if (res.code) {
            // 发起网络请求
            wx.request({
              url: 'http://zhiduoshao.xyz:8888/api/login',
              method: "POST",
              data: {
                code: res.code
              },
              success(response) {
                // console.log(response.data)
                resolve(response.data)
                that.globalData.userID = response.data.userid;
              }
            })
            // console.log(res.code)
          } else {
            // console.log('登录失败！' + res.errMsg)
            reject(response.errMsg)
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    userID: 0,
    word_book: 234,

    /*
    这些东西需要
    */
    me: {
      setting: {
        index: 3,
        indexOld: 2,
        picker: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
      }
    }
  }
})