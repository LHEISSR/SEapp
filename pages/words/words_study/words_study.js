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
    word_todayRemembered: 0, // number 当日已经背诵的几个单词 
    word_pageStatus: 0,  // 0 背词， 1 提示， 2 词汇详细信息
    word_list: null,  // 单词表
    word_head: null,    // 背诵队列头
    word_tail: null,    // 背诵队列尾
    word_que: new Array(), 
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // 前端静态文件模拟获取
    /*
    that.setData({
      word_list: word_ListStatic,
      word_now: 0
    })
    */

    console.log(that.data)

    wx.request({
      url: 'http://zhiduoshao.xyz:8888/api/getwords/',//请求地址
      data: {//发送给后台的数据
        userID: 2
      },
      method: "POST",//get为默认方法/POST
      success: function (res) {
        console.log("-----------")
        console.log(res.data.data.word_List)
        that.setData({
          word_list: res.data.data.word_List,
          word_head: 0
        })

      },
      fail: function (err) {
        console.log(err)
      },//请求失败
      complete: function () {

        var que = new Array()
        var tail = -1
        for (var i = 0; i < that.data.word_list.length; i++)
        if (that.data.word_list[i].word_Show == false || (that.data.word_list[i].word_Show == true && that.data.word_list[i].word_RemberedTimesChange == -1)){
          que[++tail] = i;  
        }
        for (var i = 0, j, c; i <= tail; ++i)
        {
          j = Math.floor(Math.random()*(i+1))
          c = que[j]
          que[j] = que[i]
          que[i] = c
        }

        that.setData({
          word_todayRemembered: that.data.word_list.length - que.length,
          word_tail: tail,
          word_que: que
        })
      }//请求完成后执行的函数
    })
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

  onUnload: function(){
    /*
      规范后端的接口 
    */
    wx.request({
      url: 'http://zhiduoshao.xyz:8888/api/finish',
      data:
      {
        userID: 2,
        data: res.data,
      },
      method: "POST",
      fail: function (err) {
        console.log("save------------")
        console.log(err)
      },
      success: function (ress) {
        //console.log("save -- success")
        //console.log(ress.data)
      }
    })  
  },


  _Know: function(){
    var list = this.data.word_list
    var que = this.data.word_que
    var head = this.data.word_head
    var todayRemembered = this.data.word_todayRemembered
    
    list[que[head % que.length]].word_Show = true
    list[que[head % que.length]].word_RemberedTimesChange++
    todayRemembered++
    
    this.setData({
        word_list: list,
        word_pageStatus:2,
        word_todayRemembered: todayRemembered       
      })

  },
  
  _UnKnow: function(){
    var list = this.data.list
    var pageStatus = this.data.word_pageStatus + 1
    var head = this.data.word_head, tail = this.data.word_tail
    var que = this.data.word_que
    
    if (pageStatus == 1)
    { 
      list[que[head % que.length]].word_RemberedTimesChange = -1
      que[(++tail)%que.length] = que[head] 
    }

    this.setData({
      word_list: list,
      word_pageStatus: pageStatus,
      word_head: head,
      word_tail: tail,
      word_que: que
    })
  },

  _Next: function(){ 
    console.log(this.data)
    var head = this.data.word_head
    head++;
    this.setData({
      word_head: head,
      word_pageStatus: 0
    })
  }


})