/*
 * @Author: YiY
 * @Date: 2023-12-29 11:00:47
 * @LastEditTime: 2023-12-29 15:37:31
 */
const { QueryTypes, DataTypes } = require('sequelize');
const db = require('../config/db')
const Sequelize = db.sequelize;
const student = require('../schema/student')(Sequelize,DataTypes)
student.sync({force: false})

class studentModel {
  static async createStudent(data){
    return await student.create({
      name: data.name,
      age: data.age,
      gender: data.gender,
      grade: data.grade
    })
  }
  static async getStudentDetail(id){
    return await student.findOne({
      where: {
        id
      }
    })
  }
  static async deleteStudentByID(id){
    return await student.destroy(
      {
        where: {
          id: id
        }
      }
    )
  }
}

module.exports = studentModel