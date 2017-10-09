function getFirstSelector(selector) {
  // let temp = document.querySelectorAll(selector)[0];
  let temp = document.querySelector(selector);
  return temp
}

function nestedTarget() {
  let temp = document.querySelector('#nested');
  return temp;
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  let temp = document.querySelector("#grand-node")

  return temp.querySelectorAll('div')[3];
}
