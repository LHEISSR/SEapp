// pages/index/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro:[],
    explaination:[],
    examples:[],
    TabCur:0,
    TabName:["释义","例句","链接"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受上个页面点击的单词
    console.log(options.word);
    //================ 加载 intro 信息 =======================
    //获取数据
    let word = "爱".split("");
    let word_pronunciation = ["ai",];
    console.log(word);
    //位置初始值
    let init_position = 40;
    let width = 120;
    let matts_interval = 20
    //计算intro
    let intro = word.map(function(item,index){
      let real_position = init_position + index * (2*matts_interval + width);
      return {
        character: item,
        matts_pos: "left:"+real_position+"rpx",
        pronu:  word_pronunciation[index],
    }})
    // ============ 加载 词义 信息 =======================
    //获取信息
    let getExplain = [{
      tag: 0,
      sense: "去、往",
    }, {
      tag: 1,
      sense: "的"
    }];
    let explaination = getExplain.map(function(item){
      let tag,tagStyle;
      switch(item.tag){
        case 0: tag="实词";tagStyle="bg-red";break;
        case 1: tag = "虚词"; tagStyle = "bg-yellow"; break;
        default: tag="其他";tagStyle="bg-grey";break;
      }
      return {tag:tag,tagStyle:tagStyle,sense:item.sense};
    })

    //================= 加载 例句 信息 ===============
    let getExamples = [{
      sent:"爱其子，择师而教之",
      sent_ex:"喜爱自己的儿子，就为他选择好老师",
      sense_in_sent:"爱：喜爱",
    },{
      sent: "人恒爱之",
      sent_ex: "人们都爱戴他",
      sense_in_sent: "爱：爱戴",
    }]

    this.setData({
      intro: intro,
      explaination:explaination,
      examples:getExamples,
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
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  }
})