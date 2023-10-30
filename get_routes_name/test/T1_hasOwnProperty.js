let obj = {
  a:1,
  b:2,
  c:3,
  d:4
}

let array = ["a","b","c"]

function matchKey(obj,array) {
  let keysArray = Object.keys(obj)
  keysArray.forEach(item => {
    !array.includes(item) && delete obj[item]
  });
  console.log(obj);
}

matchKey(obj,array)