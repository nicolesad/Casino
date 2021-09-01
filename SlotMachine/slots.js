var hasSpun = false;


function stopScrolling() {
    document.getElementById("figure1").style.display = "none";
    document.getElementById("figure2").style.display = "none";
    document.getElementById("figure3").style.display = "none";

    console.log("hidden")

    if(hasSpun == false){
    randomSlotMachine()
    }
  }

function randomSlotMachine() {

  var slotImage1 = document.getElementById("newImageArea")
  var slotImage2 = document.getElementById("newImageArea2")
  var slotImage3 = document.getElementById("newImageArea3")
  arrayOfSlotThings = ["cherry", "cherry", "cherry", "cherry", "bell", "bell", "bell", "bars", "bars", "seven"]
  var randomSlotReturnBar1 = arrayOfSlotThings[Math.floor(Math.random()* arrayOfSlotThings.length)];
  var randomSlotReturnBar2 = arrayOfSlotThings[Math.floor(Math.random()* arrayOfSlotThings.length)];
  var randomSlotReturnBar3 = arrayOfSlotThings[Math.floor(Math.random()* arrayOfSlotThings.length)];
  console.log(randomSlotReturnBar1 + randomSlotReturnBar2 + randomSlotReturnBar3);
  slotImage1.src = `${randomSlotReturnBar1}.png`
  slotImage2.src = `${randomSlotReturnBar2}.png`
  slotImage3.src = `${randomSlotReturnBar3}.png`

  hasSpun = true;

  betAmount = document.getElementById('betAmount').value;
  console.log(betAmount);

  winOrLose = document.getElementById('winOrLose');

  if(randomSlotReturnBar1 == "cherry" && randomSlotReturnBar2 == "cherry" && randomSlotReturnBar3 == "cherry"){
    winOrLose.innerHTML = `You Won! + ${betAmount * 15}`;
  }
  else if(randomSlotReturnBar1 == "bell" && randomSlotReturnBar2 == "bell" && randomSlotReturnBar3 == "bell"){
    winOrLose.innerHTML = `You Won! + ${betAmount * 35}`;
  }
  else if(randomSlotReturnBar1 == "bars" && randomSlotReturnBar2 == "bars" && randomSlotReturnBar3 == "bars"){
    winOrLose.innerHTML = `You Won! + ${betAmount * 100}`;
  }
  else if(randomSlotReturnBar1 == "seven" && randomSlotReturnBar2 == "seven" && randomSlotReturnBar3 == "seven"){
    winOrLose.innerHTML = `You Won! + ${betAmount * 1000}`;
  }
  
  else{
    winOrLose.innerHTML = 'You Lose!';
  }

}