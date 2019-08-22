import router from './router'

router.beforeEach(function (to, from, next) {
  // 如果是以home为起始 就认为 进入了需要检查token的区域
  if (to.path.startsWith('/home')) {
    // 获取前端的token
    let result = window.localStorage.getItem('user-info')
    if (result) {
      let userInfo = JSON.parse(result) // 将存储的字符串转化对象
      if (userInfo && userInfo.token) {
        // 满足token存在的情形
        next()
      } else {
        next('/login') // 跳转到login
      }
    } else {
      next('/login') // 跳转到login
    }
  } else {
    next() // 直接放行
  }
})
