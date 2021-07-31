/*
 * @Author: FEIZZER
 * @Date: 2021-07-31 11:21:15
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-07-31 15:11:09
 * @Description:
 */
let pageHei = window.innerHeight
let pageWid = window.innerWidth;
window.addEventListener('DOMContentLoaded', onready);
function onready(){
  let aside = document.getElementById('main-aside')
  let header = document.getElementById('main-header')
  let footer = document.getElementById('main-footer')
  let main = document.getElementById('main-main')
  aside.style.height = pageHei + 'px'
  header.style.width = pageWid + 'px'
  footer.style.width = pageWid + 'px'
  console.log(aside.style.width)
  main.style.marginLeft = aside.style.width
}
