import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as schedule from './modules/schedule'
import * as dept from './modules/dept'
import * as bsproduct from './modules/bsproduct'
import * as bsarea from './modules/bsarea'

export default {
  common,     // 公共
  user,       // 管理员管理
  role,       // 角色管理
  menu,       // 菜单管理
  log,        // 系统日志
  config,     // 参数管理
  oss,        // 文件服务
  dept,       // 部门
  bsproduct,  // 产品
  schedule,   // 定时任务
  bsarea      // 地区
}
