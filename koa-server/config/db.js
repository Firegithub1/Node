/*
 * @Author: YiY
 * @Date: 2023-12-29 10:10:43
 * @LastEditTime: 2023-12-29 14:46:59
 */
const Sequelize = require('sequelize')
const sequelize = new Sequelize('koa-server','root','123456',{
  // 自定义链接地址，可以是ip或者域名，默认本机：localhost
  host: '127.0.0.1',
  // 数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    charset: 'utf8mb4',
    // collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  timezone: '+08:00'
  // 是否同步
  // sync: { force: true },
})

module.exports = {
  sequelize
}