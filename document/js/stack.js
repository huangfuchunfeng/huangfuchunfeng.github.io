// 栈类
// [1,2,3,4],1:栈底；2：栈顶
class Stack {
  constructor() {
    // 存储数据
    const items = []
    //入栈，压栈
    this.push = item => {
      items.push(item)
    }
    // 出栈
    this.pop = () => items.pop()
    // 栈顶
    this.top = () => items[items.length - 1]
    // 栈长度
    this.langth = () => items.length
    // 是否空栈
    this.isEmpty = () => items.length === 0
    // 清空栈
    this.clear = () => {
      items.langth = 0
    }
  }
}
// 查询括号是否合法
function is_bracket_defined(str) {
  const stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    if (item === '(') {
      stack.push(item)
    } else if (item === ')') {
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}
const button = document.getElementById('button')
const input = document.getElementById('input')
function isDefined() {
  defined.innerText = is_bracket_defined(input.value) ? '合法' : '不合法'
}
input.addEventListener('input', isDefined, { passive: false })
