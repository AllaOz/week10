function sayHello() {
    console.log("Я учу JavaScript!");
  } 
  sayHello();

  function get1pic(){
  let prevPic = document.getElementById('cat1');
  prevPic.src ='./images/cat1.jpg'; alt="grey kitten in the forest";}
  function get2pic(){
  let nextPic = document.getElementById('cat1')
  nextPic.src ='./images/cat2.jpg'; alt="white kitten lying on a carpet";}
  
  function ifLeapYear(year){
    if (year % 4 === 0) {
     if (year % 100 === 0){
     if (year % 400 === 0){
       return true; 
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
    let year = 2024;
    if (ifLeapYear(year)) {
      console.log(year + " год - Високосный год");
    } else {
      console.log(year + " год - Невисокосный год");
    }