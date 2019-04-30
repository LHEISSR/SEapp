// pages/index3/index3.js
Page({
  data: {
    swiperList:[
      {
        push_id:2019420,
        date:"13",
        weekday:"周六",
        lunar:"三月初六",
        title: "陈澄钧列传",
        dynasty:"宋",
        author:"张云哲",
        article: "一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。",
        content:"张云哲，宋代著名文学家、哲学家、历史学家",
        like_count:187,
        like:false,
      },{
        push_id: 2019419,
        date: "12",
        weekday: "周五",
        lunar: "三月初五",
        title: "陈澄钧列传",
        dynasty: "宋",
        author: "张云哲",
        article: "第二页 一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。",
        content: "张云哲，宋代著名文学家、哲学家、历史学家",
        like_count: 134,
        like: false,
      }, {
        push_id: 2019418,
        date: "11",
        weekday: "周四",
        lunar: "三月初四",
        title: "陈澄钧列传",
        dynasty: "宋",
        author: "张云哲",
        article: "第三页",
        content: "张云哲，宋代著名文学家、哲学家、历史学家",
        like_count: 187,
        like: false,
      },
    ],
    fontFamily: 'chi-font',
    loaded: false,
    cardCur: 0,
  },
  onLoad() {
    this.towerSwiper('swiperList');
    //初始化towerSwiper 传已有的数组名即可
    //const self = this
    //加载字体（失败）
    // wx.loadFontFace({
    //   family: this.data.fontFamily,
    //   source: 'url("https://github.com/zyz9740/SEapp/raw/master/FZQKBYSJW--GB1-0.ttf")',
    //   success(res) {
    //     console.log(res.status)
    //     self.setData({ loaded: true })
    //   },
    //   fail: function (res) {
    //     console.log(res.status)
    //   },
    //   complete: function (res) {
    //     console.log(res.status)
    //   }
    // });
    try {
      wx.clearStorageSync()
      console.log("clear Storage");
    } catch (e) {
      // Do something when catch error
    }
  },


  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

    //读取储存更新
    //向后端请求数据
    var that = this;
    wx.getStorage({
      key: 'swiperList',
      success(res) {    //如果在储存中
        console.log("in storage");
        wx.getStorage({
          key: 'swiperList',
          success(res) {
            that.setData({
              swiperList: res.data,
            })
          }
        })
      },
      fail(res) {      //如果没有在储存中
        console.log("not in storage");
        wx.request({
          url: 'test.php', // 仅为示例，并非真实的接口地址
          method: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            that.setData({
              swiperList: res.data.swiperList,
            })
          }
        })
        //储存数据
        wx.setStorage({
          key: 'swiperList',
          data: that.data.swiperList,
        })
      }
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  //自定义动作
  clickFavor(e){
    var swiperList = this.data.swiperList;
    var cardCur = this.data.cardCur;
    var isLike = !swiperList[cardCur].like;
    swiperList[cardCur].like = isLike;
    this.setData({
      swiperList:swiperList,
    })
    //更新本地缓存
    wx.setStorage({
      key: 'swiperList',
      data: swiperList,
    })
    wx.showToast({
      title: isLike?"已收藏":"已取消",
      icon: 'success',
      duration: 500
    })

  },
  clickRead(e){
    wx.navigateTo({
      url: './article?cardCur='+this.data.cardCur,
    })
  },
  onSearchBarFocus(e) {
    wx.navigateTo({
      url: './search'
    })
  },
})