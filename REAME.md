## 重新npm install下

### 升级内容
- react v16.9.0
- ant-d v4.0.0 
- 升级包文件@ant-design/icons

### 注意事项
- Form表单
    - 不再需要通过Form.create创建上下文，所以也不需要getFieldDecorator,直接写Form.Item
    - Form自带表单控制实体，如需调用form方法，可以通过Form.useForm() 创建Form实体进行操作 但是这个只适用于func中
    - 在class component 中 用ref来对form表单进行操作
    - Form.Item中有多个元素的使用，可以内嵌Form.Item完成
    - 初始化调整，原先定义在<Form.Item>{getFieldDecorator('useName',{initialValue: 'qiuqiu'})}</Form.Item>中，现在定义在<Form initialValues= {{useName: 'qiuqiu'}}>中
    - 等等 其余参考antd

- 栅格布局Grid
    - <Row type="flex"..... -> type属性移除
    - <Col -> 新添 flex属性（就是flex子容器一样的用法）

- Date、select
    - 新添无边框样式 bordered={false}
    - css 选择器变更
        - .ant-select-selection -> .ant-select-selector

- icon
    - icon 改为按需加载
    - 从<i> 标签变成了 <span>标签，css时注意
    - import { 你需要的icon } from '@ant-design/icons' (eg.  import { InfoCircleOutlined } from '@ant-design/icons';)

- 不支持 IE9/10

### 可共通文件
- static -> global -> commonStyled.ts
- <WrappedTableCmp>: 主要是对<table>组件中常用字体颜色样式等
- <WrappedHorizontalFormCmp>、<WrappedVerticalFormCmp>: 主要是<Form>的一些水平、垂直的共通内容样式，<input>无边框；<input>、<date>、<select>下划线;<btn>的样式
- 引用方式: import { WrappedHorizontalFormCmp, WrappedVerticalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';


### 面包屑的配置
- 在constants中的额路由配置中添加 breadcrumName标志，例如： breadcrumName: 'security.device'
- 并在自己需要面包屑的组建中加入@renderBreadcrumbs声明
- 针对于多语言的版本，所以在配置constants中的breadcrumName标志时 参考试例，并在en-US 和 zh-CN 文件的breadcrumbs中配置和breadcrumName中配置的 value一样的结构
- 目前不支持动态名称的面包屑
- 参考组件security/device

###### 引用
>　https://ant.design/docs/react/migration-v4-cn