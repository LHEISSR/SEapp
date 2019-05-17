var word_ListStatic = [
  {
    "word_Sentence": "床前明月(光)",
    "word_PartOfSpeech": "名词",
    "word_Sense": "月光",
    "word_SimilarSentence": "山有小口，仿佛若有光 --《桃花源记》",
    "word_RemberedTimes": 0,
    "word_TodayStatus": false,
  },
  {
    "word_Sentence": "武陵人捕鱼(为业)",
    "word_PartOfSpeech": "动词",
    "word_Sense": "把……作为职业，以……为生。为，作为。",
    "word_SimilarSentence": "昔鄱阳郡安乐县有人姓彭，世以捕射为业。--《列异传》",
    "word_RemberedTimes": 0,
    "word_TodayStatus": false,
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    word_list: null,  // 单词表
    word_now: null,    // number 当前背诵的单词是单词表的第几个
    word_todayRemembered: 0, // number 当日已经背诵的几个单词 
    word_pageStatus:0,  // 0 背词， 1 提示， 2 词汇详细信息
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // 前端静态文件模拟获取
    that.setData({
      word_list: word_ListStatic,
      word_now: 0
    })

    console.log(that.data)

    /* 后端单词表获取
    var list = wx.getStorageSync("list")
    if (list)
    {
        that.setData({
          word_list:list
        })
    }
    wx.request({
      url: 'https://test.com/getproductlist',
      success: function (res) {
        if (res.statusCode === 200) {
          list = res.data.list
          that.setData({ // 再次渲染列表
            list: list
          })
          wx.setStorageSync("list", list) // 覆盖缓存数据
        }

      }
    })
    */
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  _Know: function(){
    var list = this.data.word_list;
    var todayRemembered = this.data.word_todayRemembered + 1;

    list[this.data.word_now].word_TodayStatus = true;
    
    this.setData({
        word_pageStatus:2,
        word_todayRemembered: todayRemembered,
        word_list: list
      })

  },
  
  _UnKnow: function(){
    var pageStatus = this.data.word_pageStatus + 1
    this.setData({
      word_pageStatus: pageStatus
    })
  },

  _Next: function(){

  }


})