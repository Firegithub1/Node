/*
 * @Author: YiY
 * @Date: 2023-12-29 11:33:48
 * @LastEditTime: 2023-12-29 14:57:39
 */
const router = require('koa-router')()
const StudentController = require('../controllers/article')

router.prefix('/student')

router.post('/create',StudentController.create)

router.get('/:id',StudentController.detail)

module.exports = router