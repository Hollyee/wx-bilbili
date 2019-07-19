Page({
  data:{
    // 被点击的当前菜单的索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videosList:[]
  },
  // 点击首页导航按钮
  activeNav(e){
    console.log(123);
    this.setData({
    //   // 当前被点击的导航按钮,dataset为自定义data-事件源
      currentIndexNav:e.target.dataset.index
    })
  },
  // 获取首页导航数据
  getNavList(){
    let that = this;
    // 利用小程序内置发送请求的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',      
      success: function(res){
        // success
        // console.log(res)
        // res.data是返回的数据渲染出来的样子？
        if(res.data.code===0){
          // setData动态改变数据
          that.setData({
            navList:res.data.data.navList
          })
        }
      },
    })
  },
  // 获取轮播图数据
  getSwiperList(){
    let that = this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success: function(res){
        // console.log(res)
        if(res.data.code===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      },
    })
  },
  // 获取视频列表数据
  getVideosList(){
    let that =this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success:function(res){
        console.log(res.data)
        if(res.data.code===0){
          that.setData({            
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // 获取首页导航的数据
    this.getNavList();
    // 获取轮播图的数据
    this.getSwiperList();
    // 获取视频列表数据
    this.getVideosList();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})