var directions = ["L5", "R1", "L5", "L1", "R5", "R1", "R1", "L4", "L1", "L3", "R2", "R4", "L4", "L1", "L1", "R2", "R4", "R3", "L1", "R4", "L4", "L5", "L4", "R4", "L5", "R1", "R5", "L2", "R1", "R3", "L2", "L4", "L4", "R1", "L192", "R5", "R1", "R4", "L5", "L4", "R5", "L1", "L1", "R48", "R5", "R5", "L2", "R4", "R4", "R1", "R3", "L1", "L4", "L5", "R1", "L4", "L2", "L5", "R5", "L2", "R74", "R4", "L1", "R188", "R5", "L4", "L2", "R5", "R2", "L4", "R4", "R3", "R3", "R2", "R1", "L3", "L2", "L5", "L5", "L2", "L1", "R1", "R5", "R4", "L3", "R5", "L1", "L3", "R4", "L1", "L3", "L2", "R1", "R3", "R2", "R5", "L3", "L1", "L1", "R5", "L4", "L5", "R5", "R2", "L5", "R2", "L1", "L5", "L3", "L5", "L5", "L1", "R1", "L4", "L3", "L1", "R2", "R5", "L1", "L3", "R4", "R5", "L4", "L1", "R5", "L1", "R5", "R5", "R5", "R2", "R1", "R2", "L5", "L5", "L5", "R4", "L5", "L4", "L4", "R5", "L2", "R1", "R5", "L1", "L5", "R4", "L3", "R4", "L2", "R3", "R3", "R3", "L2", "L2", "L2", "L1", "L4", "R3", "L4", "L2", "R2", "R5", "L1", "R2"]
var x = 0;
var y = 0;
var distance = 0;
var compass = 0;  // 0-North, 1-East, 2-South, 3-West

for (i=0; i<directions.length; i++){
  if (directions[i].charAt(0) == "L"){
    compass -= 1;
  } else {
    compass += 1;
  }
  if (compass >= 4){
    compass -= 4;
  } else if (compass < 0){
    compass += 4;
  }
  distance = parseInt(directions[i].substring(1,directions[i].length));
  switch (compass){
    case 0:
      y += distance;
      break;
    case 1:
      x += distance;
      break;
    case 2:
      y -= distance;
      break;
    case 3:
      x -= distance;
      break;
    default:
      break;
  }
}

x = Math.abs(x);
y = Math.abs(y);
console.log(x);
console.log(y);
console.log(Math.abs(x+y));
