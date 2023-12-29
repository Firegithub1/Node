const StudentModel = require("../modules/student")

function returnBody(ctx,code,msg,data={}){
  ctx.response.status  = code
  ctx.body = { code, msg, data }
}

class studentController{
  static async create(ctx){
    let req = ctx.request.body
    let {name,age,gender,grade} = req
    if(name && age  && gender && grade){
      try {
        console.log("creat",name,age,gender,grade);
        const res = await StudentModel.createStudent(req)
        const data = await StudentModel.getStudentDetail(res.id)
        returnBody(ctx, 200,"创建学生信息成功",data)
      } catch (error) {
        returnBody(ctx, 412, "创建学生信息失败", error)
      }
    } else {
      returnBody(ctx, 422, "参数不齐全")
    }
  }

  static async delete(ctx){
    let {name,age,gender,grade,id} = ctx.request.body
    try {
      const res = await StudentModel.deleteStudentByID(id)
      console.log("delete",res);
      returnBody(ctx,200,"删除信息成功",res)
    } catch (error) {
      returnBody(ctx,500,"删除信息失败",error)
    }
  }

  static async detail(ctx){
    let id = ctx.params.id
    if(id){
      try {
        let data = await StudentModel.getStudentDetail(id)
        returnBody(ctx,200,"查询成功",data)
      } catch (error) {
        returnBody(ctx, 412, "查询失败", error)
      }
    } else {
      returnBody(ctx, 422, "请传入学生ID")
    }
  }

}

module.exports = studentController