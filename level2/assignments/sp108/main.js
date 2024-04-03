//array map exercises
//1. double the numbers
const arr = [2, 4, 6, 8, 10]
const number = arr.map(num => num * 2)

console.log(number)
//2. array of numbers to stings 
const array = [1, 3, 5, 7, 9]
const stringItUp = arr.map(function(stringItUp){
    return stringItUp.map
})
//3 capitalize the first letter of each name
function capitalizeNames(arr){
    return arr.map((
        str => {
            return str.toLowerCase().split("").map((word).charAt(0).toUpperCase() + word.slice(1))
        }
    ))
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

//4. string of names
function namesOnly(arr){
        const namesOnly = arr.map(str => str.name)
        return namesOnly
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

//5 
function makeStrings(arr){
        return arr.map((key) =>
          key.age >= 18
            ? `${key.name} can go to the Matrix`
            : `${key.name} is not old enough!`
        );
      }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  

//6
function readyToPutInTheDOM(arr){
    // your code here
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]