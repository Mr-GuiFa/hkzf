
export function getLocal (key) {
  // console.log(key)
  let data = localStorage.getItem(key)
  // 检测是否时对像形式 不是直接打印 然后在返回原来的数据
  try {
    data = JSON.parse(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  // console.log(data)
  return data
}
export function setLocal (key, value) {
  // console.log(key)
  // 检测是否时字符串形式  是直接存储不是源数据返回
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value
  )
  console.log(key, value)
}
