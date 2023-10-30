// 视图组件
const view = {
  tabs: () => import('@/layouts/tabs'),
  blank: () => import('@/layouts/BlankView'),
  page: () => import('@/layouts/PageView')
}

let x = {
  business: { name: "商家中心", component: view.blank },
  businessList: { name: "商家列表" },
  channelList: { name: "渠道商列表" },
  user: { name: "用户中心", component: view.blank },
  userList: { name: "用户列表" },
  order: { name: "订单中心", component: view.blank },
  orderList: { name: "订单列表" },
  afterSaleList: { name: "售后列表" },
  product: {
    name: "产品中心",
    component: view.blank
  },
  productList: { name: "产品列表" },
  category: { name: "工艺管理列表" },
  goods: {
    name: "商品中心",
    component: view.blank
  },
  goodsList: { name: "商品列表" },
  supplier: { name: "供应商中心", component: view.blank },
  supplierList: { name: "供应商管理" },
  enter: { name: "供应商入职" },
  designTm: { name: "智能设计模版", component: view.blank },
  templateList: { name: "模版管理" },
  materialList: { name: "素材管理" },
  compoundList: { name: "合成管理" },
  tagsList: { name: "标签管理" },
  worksList: { name: "作品管理" },
  invoiceTm: { name: "对账开票模版", component: view.blank },
  rechargeList: { name: "账号充值管理" },
  accountBillList: { name: "对账列表" },
  reviewList: { name: "待提现审核记录" },
  invoiceList: { name: "待开票记录" },
  dataTm: { name: "数据报表中心", component: view.blank },
  dataList: { name: "数据报表" },
  content: { name: "内容管理模块", component: view.blank },
  bannerList: { name: "权限管理" },
  articleList: { name: "平台账号管理" },
  system: {
    name: "系统管理设置",
    component: view.blank
  },
  authorityList: { name: "权限管理" },
  accountList: { name: "平台账号管理" },
  configList: { name: "配置管理" }
}