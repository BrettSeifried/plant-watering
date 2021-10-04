// waht DOM elements do I need?
//    image
//    results paragraph
//     buttons
const plantImage = document.getElementById('plant-image');
const result = document.getElementById('result');
const button = document.getElementById('button');
console.log(plantImage, result, button);
// what state do I need?
//  waterLevel -- intiliazed to 0
let waterLevel = 0;
//what events am I lisetning for?
//    buttonClick
//      incrtement the waterLevel by 1
//      dervie the plantHealth from the waterLevel
//        if waterLevel < 3 set to 'thirsty
//        if waterLevel between 4 and 10 set to 'healthy'
//        if waterLevel > 10 set to 'overwatered'
//      update the iamge, and the results paragrpah
button.addEventListener('click', () =>{
  waterLevel++;
  // or water- waterLevel +1;
  console.log(waterLevel);

  let plantHealth;
  if(waterLevel <= 3){
      //if condition is met, then this code will run
      plantHealth = 'thirsty';
      } else if (waterLevel <= 10){
        plantHealth = 'healthy';
      } else {
        plantHealth = 'overwatered';
      }
      console.log(plantHealth);
});