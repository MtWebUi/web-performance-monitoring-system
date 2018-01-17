//前端路由
import KoaRouter from 'koa-router'
import controllers from '../controllers'
import {
    SYSTEM
} from '../config'
const router = new KoaRouter()

// 请求接口校验中间件
const checkfn       = controllers.common.checkRequestUrl;
const loginCheckfn  = controllers.common.checkIsLogin;

router.post('/api/test',checkfn, controllers.login.test)

// 注册用户信息
router.post('/api/user/userRegister',checkfn, controllers.login.userRegister)
// 用户登录
router.post('/api/user/userLogin',checkfn, controllers.login.userLogin)
// 退出登录
router.post('/api/user/loginOut',checkfn, controllers.login.loginOut)

// 新增应用
router.post('/api/system/addSystem',loginCheckfn, controllers.system.addSystem)
// 请求某个应用详情
router.post('/api/system/getItemSystem',loginCheckfn, controllers.system.getItemSystem)

//获得系统列表
router.post('/api/system/getSystemList',loginCheckfn, controllers.system.getSystemList)

//获得ajax页面列表
router.post('/api/ajax/getajaxlist',loginCheckfn, controllers.ajax.getajaxlist)





// page页面统计上报接口
router.get('/reportPage',controllers.dataReport.getPagePerformDatas);
// 用户系统上报
router.get('/reportSystem',controllers.dataReport.getSystemPerformDatas);

module.exports = router






