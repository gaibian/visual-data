// 全局的js静态属性和方法 不挂载在vue的实例上面

class global {
    constructor() {
        this.name = 'xiaojun'
    }
    login(val) {
        return val
    }
}

export default new global()