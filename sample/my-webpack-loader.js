module.exports = function myWebpackLoader (content) {
  console.log("myWebpackLoader가 실행됨")
  return content.replace("console.log(", "alert(")
}