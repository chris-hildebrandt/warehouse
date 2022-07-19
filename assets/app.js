// #region SECTION lecture notes
// function test(){
//   console.warn("linked up and ready to go")
// }

// let breakfast = {
//   bacon: 3,
//   egg: 3,
//   hashBrown: 2,
//   toast: 2,
//   pancake: 3,
//   frenchToast: 2, 
//   coffee: {
//     size: 8oz,
//     decaf: false,
//     cream: true,
//   }
//   condiments: ['butter', 'syrup', 'ketchup', 'tobasco', 
//   ],
//   calories: 4500,
// }

// console.log(`This morning Chris had ${breakfast.egg} eggs, ${breakfast.bacon} strips of bacon, ${breakfast.pancake} flapjacks and ${breakfast.hashBrown} servings of hash-browns
// and ${} of ${breakfast.coffee.decaf ? 'false' : 'real'} coffee ${} condiments: ${breakfast.condiments.join(', ')}`)

// for( let i =0; i < breakfast.condiments.length; i++){
//   console.log(breakfast.condiments[i])
// let alias = breakfast.condiments[i]
// console.log(alias)
// }

// array.forEach(element => {
  
// });

// let you = { 
//   name:"You", 
//   hair: true, 
//   friends: ['bob', 'sue', 'bill'] 
// }
// let them = { 
//   name:"Them", 
//   hair: false, 
//   friends: ['gary', 'dude'] 
// }

// console.log(you.friends);
// console.log(them.friends);

// them.friends.forEach(friend => {
//   you.friends.push(friend)
// });

// // you.friends.push(them.friends.forEach())
// console.log(you.friends);

// let object = {
//   thing: 1,
//   this: 2,
// }

// alias.thing =
// alias[variable]

// #endregion 

const packages = [{
  heavy: true,
  priority: false,
  fragile: false,
  to: 'Harrington',
  trackingNumber: '1324kjs'
},
{
  heavy: false,
  priority: true,
  fragile: true,
  to: 'Mark',
  trackingNumber: '1325sdk'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Mick',
  trackingNumber: 'jffd147'
},
{
  heavy: false,
  priority: false,
  fragile: false,
  to: 'Jake',
  trackingNumber: 'acdc145'
},
{
  heavy: true,
  priority: true,
  fragile: true,
  to: 'Brittany',
  trackingNumber: 'il8008s'
},
{
  heavy: false,
  priority: true,
  fragile: false,
  to: 'Zach',
  trackingNumber: '8081baz'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Jeremy',
  trackingNumber: 'suz2367'
}
]

function packageLost(){
  let randomPackage = packages[Math.floor(Math.random()* packages.length)]
  randomPackage.lost = true
}
packageLost()

let currentPackages = packages

function drawPackages(){
  let template = ""
  currentPackages.forEach(box => template += `<h2 class="col-5 ">TO: ${box.to}</h2><h2 class="col-5">ID: ${box.trackingNumber}</h2><button class="col-1 btn btn-secondary" onclick="checkPackage('${box.trackingNumber}')">check</button>`)
  let packageElm = document.getElementById("packages")
  packageElm.innerHTML = template
}

drawPackages()

function checkPackage(trackingNumber){
  let box = currentPackages.find(box => box.trackingNumber == trackingNumber)
  if(box.lost == true){
    window.alert("Congratulations!")
  } else {
    window.alert("these are not the packages your looking for... move along.")
  }
}

// function filterHeavy(){
//   currentPackages = currentPackages.filter(box => box.heavy)
//   // console.log(heavyP)
//   console.log(currentPackages)
//   drawPackages()
// }

// function filterPriority(){
//   currentPackages = currentPackages.filter(box => box.priority)
//   drawPackages()
// }

// function filterFragile(){
//   currentPackages = currentPackages.filter(box => box.fragile)
//   drawPackages()
// }

function superFilter(attribute){
  let lostPackage = currentPackages.find(box => box.lost == true)
  currentPackages = currentPackages.filter(box => box[attribute] == lostPackage[attribute])

  drawPackages()
}