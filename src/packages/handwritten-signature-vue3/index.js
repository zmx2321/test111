import handwrittenSignature from './handwritten-signature-vue3/index.vue'

const components = [
  handwrittenSignature
];

const install = (App) => {
    components.forEach((component) => {
        // 实际代码中使用的组件名
        App.component('handwrittenSignature', component);
    })
}
// 用于后面app.use调用
export default { install }